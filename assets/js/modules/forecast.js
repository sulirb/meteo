import { fetchMeteo } from "../api/index.js";
import { codeToIcon as forecastCodeToIcon } from "../utils/weathericon.js";
import { codeToComm as forecastCodeToComm } from "../utils/weathercomm.js";

export async function main() {
  const data = await fetchMeteo();

  const prevDivs = document.querySelectorAll(".prev_day");
  const tempDivs = document.querySelectorAll(".max__temp");
  const minDivs = document.querySelectorAll(".min__temp");

  let prevIndex = 0;

  for (let dataIndex = 0; dataIndex < data.daily.time.length; dataIndex++) {
    const time = data.daily.time[dataIndex];
    const currentDateTimestamp = Date.now();
    const dateObject = new Date(time);
    const dateObjectTimestamp = dateObject.getTime();

    if (dateObjectTimestamp > currentDateTimestamp) {
      const forecastWeather = forecastOptions(data, dataIndex);
      const codeToTen = forecastWeather.codeToTen;
      const codeToSixteen = forecastWeather.codeToSixteen;

      const mincDivs = document.querySelectorAll(".min__code");
      const mindDivs = document.querySelectorAll(".min__descr");
      mincDivs.forEach((div, innerIndex) => {
        div.textContent = codeToTen[innerIndex];
      });
      mindDivs.forEach((div, innerIndex) => {
        div.textContent = codeToTen[innerIndex];
      });

      const wcdeDivs = document.querySelectorAll(".max__code");
      const descDivs = document.querySelectorAll(".max__descr");
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
  forecastCodeToIcon();
  forecastCodeToComm();
}

function forecastOptions(data, index) {
  const indicesToRetrieve = [34, 58, 82];
  const codeToTen = indicesToRetrieve.map(
    (index) => data.hourly.weathercode[index]
  );
  const indicestoSixteen = [40, 64, 88];
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
