import { fetchMeteo } from "./api";
import { codeToIcon as currentCodeToIcon } from "./weathericon";
import { codeToComm as currentCodeToComm } from "./weathercomm";

export async function main() {
  const data = await fetchMeteo();

  const currentDate = new Date().getDate();
  const currentHour = new Date().getHours();

  const currentIndex = data.hourly.time.findIndex((time) => {
    const dateObject = new Date(time);
    return (
      dateObject.getHours() === currentHour &&
      dateObject.getDate() === currentDate
    );
  });

  if (currentIndex) {
    let currentWeather = WeatherOptions(data, currentIndex);

    const wcdeDiv = document.querySelector(".weather__code");
    wcdeDiv.textContent = currentWeather.weatherCode;
    const descDiv = document.querySelector(".weather__descr");
    descDiv.textContent = currentWeather.weatherCode;

    const tempDiv = document.querySelector(".weather__temp");
    tempDiv.textContent = currentWeather.roundTemp;

    const wdirDiv = document.querySelector(".weather__flexwind-winddirection");
    wdirDiv.textContent = currentWeather.windDir;
    const wspeDiv = document.querySelector(".weather__flexwind-windspeed");
    wspeDiv.textContent = currentWeather.windspeed;
    const wgusDiv = document.querySelector(".weather__windgusts");
    wgusDiv.textContent = currentWeather.windgusts;
    const rainDiv = document.querySelector(".weather__rain");
    rainDiv.textContent = currentWeather.precipitation;
  }
  currentCodeToIcon();
  currentCodeToComm();
}

function WeatherOptions(data, currentIndex) {
  return {
    roundTemp: Math.round(data.hourly.temperature_2m[currentIndex]) + "°C",
    windDir: degToCompass(data.hourly.winddirection_10m[currentIndex]),
    weatherCode: data.hourly.weathercode[currentIndex],
    windspeed:
      "Vitesse du vent : " +
      Math.round(data.hourly.windspeed_10m[currentIndex]) +
      " km/h",
    windgusts:
      "Rafales : " +
      Math.round(data.hourly.windgusts_10m[currentIndex]) +
      " km/h",
    precipitation:
      "Précipitation: " + data.hourly.precipitation[currentIndex] + " mm",
  };
}

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

main();
