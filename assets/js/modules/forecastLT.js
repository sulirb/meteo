import { meteoLt } from "../api";
import { codeToIcon as ltftCodeToIcon } from "../utils/weathericon";
import { codeToComm as ltftCodeToComm } from "../utils/weathercomm";

export async function main() {
  const data = await meteoLt();

  const currentDate = new Date().getDate();

  const prevDivs = document.querySelectorAll(".lt-prev-day");
  const tempDivs = document.querySelectorAll(".lt-max-temp");
  const minDivs = document.querySelectorAll(".lt-min-temp");

  let prevIndex = 0;

  for (let dataIndex = 0; dataIndex < data.daily.time.length; dataIndex++) {
    const time = data.daily.time[dataIndex];
    const currentDateTimestamp = Date.now();
    const currentDatePlus3Days = currentDateTimestamp + 3 * 24 * 60 * 60 * 1000;
    const dateObject = new Date(time);
    const dateObjectTimestamp = dateObject.getTime();

    if (dateObjectTimestamp > currentDatePlus3Days) {
      const forecastWeather = forecastOptions(data, dataIndex);
      const codeToTen = forecastWeather.codeToTen;
      const codeToSixteen = forecastWeather.codeToSixteen;

      const mincDivs = document.querySelectorAll(".lt-min-code");
      const mindDivs = document.querySelectorAll(".lt-min-descr");
      mincDivs.forEach((div, innerIndex) => {
        div.textContent = codeToTen[innerIndex];
      });
      mindDivs.forEach((div, innerIndex) => {
        div.textContent = codeToTen[innerIndex];
      });

      const wcdeDivs = document.querySelectorAll(".lt-max-code");
      const descDivs = document.querySelectorAll(".lt-max-descr");
      wcdeDivs.forEach((div, innerIndex) => {
        div.textContent = codeToSixteen[innerIndex];
      });
      descDivs.forEach((div, innerIndex) => {
        div.textContent = codeToSixteen[innerIndex];
      });
      prevDivs[prevIndex].textContent = forecastWeather.formattedTime;
      tempDivs[prevIndex].textContent = forecastWeather.roundTemp;
      minDivs[prevIndex].textContent = forecastWeather.roundTempMin;

      prevIndex++;
    }
  }

  ltftCodeToComm();
  ltftCodeToIcon();
}

function forecastOptions(data, index) {
  const indicesToRetrieve = [
    106, 130, 154, 178, 202, 226, 250, 274, 298, 322, 346, 370,
  ];
  const codeToTen = indicesToRetrieve.map(
    (index) => data.hourly.weathercode[index]
  );
  const indicestoSixteen = [
    112, 136, 160, 184, 208, 232, 256, 280, 304, 328, 352, 376,
  ];
  const codeToSixteen = indicestoSixteen.map(
    (index) => data.hourly.weathercode[index]
  );

  return {
    formattedTime: new Date(data.daily.time[index]).toLocaleDateString(
      "fr-FR",
      {
        weekday: "short",
        day: "numeric",
      }
    ),
    roundTemp: Math.round(data.daily.temperature_2m_max[index]) + "°C",
    roundTempMin: Math.round(data.daily.temperature_2m_min[index]) + "°C",
    codeToSixteen,
    codeToTen,
  };
}

main();
