import axios from 'axios'
import { fetchWeatherApi } from 'openmeteo'
const weatherUrl = 'https://api.open-meteo.com/v1/forecast'
const iconUrl = 'https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json'

const getWeather = ([lat, lng]) => {
  return fetchWeatherApi(weatherUrl, {
    latitude: lat,
    longitude: lng,
    current: ['temperature_2m', 'weather_code', 'is_day', 'wind_speed_10m'],
    wind_speed_unit: 'ms',
  }).then(response => {
    const current = response[0].current()
    const r = {
      temperature2m: current.variables(0).value().toFixed(2),
      weatherCode: current.variables(1).value(),
      isDay: current.variables(2).value(),
      windSpeed10m: current.variables(3).value().toFixed(2),
    }
    console.log('weather res', r)
    return r
  })
}

const getIcons = () => {
  return axios
    .get(iconUrl)
    .then(response => response.data)
}

export default { getWeather, getIcons }