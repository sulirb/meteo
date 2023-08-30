import { fetchMeteo } from "./api/index.js";
import { codeToIcon } from "./utils/weathericon.js";
import { daySelector } from "./utils/daySelector.js";

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
    });

    data.time.forEach((time, index) => {
      const row = table.insertRow();

      const dateObject = new Date(time);

      function formatAndDisplayDate(date, dateDiv) {
        const formattedDate = date.toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        });

        dateDiv.textContent = formattedDate;
      }

      const millisecondsInDay = 24 * 60 * 60 * 1000;
      const dateDiv = document.querySelector(".date-tableau");

      const dateInfo = [
        { page: "tableau", daysBefore: 3 },
        { page: "tableau1", daysBefore: 2 },
        { page: "tableau2", daysBefore: 1 },
        { page: "tableau3", daysBefore: 0 },
      ];

      const currentPage = dateInfo.find((info) => info.page === page);

      if (currentPage) {
        const previousDate = new Date(
          dateObject - millisecondsInDay * currentPage.daysBefore
        );
        formatAndDisplayDate(previousDate, dateDiv);
      }

      daySelector(page, index, row);

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
        hour: "2-digit",
        minute: "2-digit",
      });
      const roundTemp = Math.round(data.temperature_2m[index]) + "°C";
      const windDir = degToCompass(data.winddirection_10m[index]);
      const weatherCode = data.weathercode[index];
      const windspeed = data.windspeed_10m[index] + " km/h";
      const windgusts = data.windgusts_10m[index] + " km/h";
      const precipitation = data.precipitation[index] + " mm";
      const values = [
        formattedTime,
        weatherCode,
        roundTemp,
        windDir,
        windspeed,
        windgusts,
        precipitation,
      ]; // FIN

      values.forEach((value) => {
        const cell = row.insertCell();
        cell.textContent = value;

        if (weatherCode === value) {
          cell.classList.add("weather__code");
        }
        if (index % 2 === 1) {
          row.classList.add("odd");
        }
      });
    });

    meteoDiv.appendChild(table);
  }
  createTable(data.hourly);
  codeToIcon();
}
main();
