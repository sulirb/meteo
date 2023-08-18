export async function fetchMeteo() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/meteofrance?latitude=50.2788&longitude=3.9727&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,windgusts_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin"
  );
  const data = await response.json();
  return data;
}
export async function meteoLt() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=50.2788&longitude=3.9727&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,winddirection_10m,windgusts_10m,is_day&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&forecast_days=16&models=gfs_global"
  );
  const data = await response.json();
  return data;
}
