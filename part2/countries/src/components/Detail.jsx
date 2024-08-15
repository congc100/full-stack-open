import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Detail = ({ country, icons }) => {
  const captial = country.capital[0]
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .getWeather(country.capitalInfo.latlng)
      .then(response => setWeather(response))
  }, [country])

  return <div>
    <h1>{country.name.common}</h1>
    <div>capital {captial}</div>
    <div>area {country.area}</div>
    <h3>languages:</h3>
    <ul>{Object.entries(country.languages).map(([k, v]) => <li key={k}>{v}</li>)}</ul>
    <img src={country.flags.png} />
    {weather && <>
      <h2>Weather in {captial}</h2>
      <div>temperature {weather.temperature2m} Celcius</div>
      <img src={icons[weather.weatherCode][weather.isDay === 0 ? 'night' : 'day'].image} />
      <div>wind {weather.windSpeed10m} m/s</div>
    </>}
  </div>
}

export default Detail