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
      const pageTitle = document.querySelector("title");

      const dateInfo = [
        { page: "tableau4", daysBefore: 11.1 },
        { page: "tableau5", daysBefore: 10.1 },
        { page: "tableau6", daysBefore: 9.1 },
        { page: "tableau7", daysBefore: 8.1 },
        { page: "tableau8", daysBefore: 7.1 },
        { page: "tableau9", daysBefore: 6.1 },
        { page: "tableau10", daysBefore: 5.1 },
        { page: "tableau11", daysBefore: 4.1 },
        { page: "tableau12", daysBefore: 3.1 },
        { page: "tableau13", daysBefore: 2.1 },
        { page: "tableau14", daysBefore: 1.1 },
        { page: "tableau15", daysBefore: 0.1 },
      ];

      const currentPage = dateInfo.find((info) => info.page === page);

      if (currentPage) {
        const previousDate = new Date(
          dateObject - millisecondsInDay * currentPage.daysBefore
        );
        formatAndDisplayDate(previousDate, dateDiv);
      }

      pageTitle.textContent =
        " Météo Maubeuge | " + dateDiv.textContent.toUpperCase();

      daySelectorLongTerm(page, index, row);

      const formattedDate = dateObject.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

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
