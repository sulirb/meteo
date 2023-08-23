import { meteoLt as fetchMeteo } from "./api/index.js";
import { codeToIcon } from "./utils/weathericon.js";
import { daySelectorLongTerm } from "./utils/daySelector.js";

async function main() {
  const data = await fetchMeteo();
  const meteoDiv = document.querySelector(".meteo");

  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get("tableau");

  function createTable(data) {
    const table = document.createElement("table"); // DEBUT
    const headerRow = table.insertRow();
    headerRow.classList.add("options");
    const properties = [
      "Heure",
      "Temps",
      "Temperature",
      "Direction du vent",
      "Vitesse",
      "Rafales",
      "Précipitation",
    ];

    properties.forEach((property) => {
      const headerCell = headerRow.insertCell();
      headerCell.textContent = property;
    }); // FIN

    data.time.forEach((time, index) => {
      const row = table.insertRow();

      const dateObject = new Date(time);

      daySelectorLongTerm(page, index, row);

      function degToCompass(num) {
        const val = Math.floor(num / 22.5 + 0.5);

        const arr = [
          "N",
          "NNE",
          "NE",
          "ENE",
          "E",
          "ESE",
          "SE",
          "SSE",
          "S",
          "SSO",
          "SO",
          "OSO",
          "O",
          "ONO",
          "NO",
          "NNO",
        ];
        return arr[val % 16];
      }

      const formattedTime = dateObject.toLocaleString("fr-FR", {
        // DEBUT
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      const roundTemp = Math.round(data.temperature_2m[index]) + "°C";
      const windDir = degToCompass(data.winddirection_10m[index]);
      const weatherCode = data.weathercode[index];
      const values = [
        formattedTime,
        weatherCode,
        roundTemp,
        windDir,
        data.windspeed_10m[index] + " km/h",
        data.windgusts_10m[index] + " km/h",
        data.precipitation[index] + " mm",
      ]; // FIN

      values.forEach((value) => {
        const cell = row.insertCell();
        cell.textContent = value;

        if (weatherCode === value) {
          cell.classList.add("weather__code");
        }
      });
    });

    meteoDiv.appendChild(table);
  }
  createTable(data.hourly);
  codeToIcon();
}
main();
