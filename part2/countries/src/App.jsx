import { useState, useEffect } from 'react'
import countries from './services/countries'
import weather from './services/weather'
import Filter from './components/Filter'
import Result from './components/Result'

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [database, setDatabase] = useState(null)
  const [icons, setIcons] = useState(null)

  useEffect(() => {
    countries
      .getAll()
      .then(res => {
        console.log('init', res)
        setDatabase(res)
      })
  }, [])

  useEffect(() => {
    weather
      .getIcons()
      .then(res => {
        console.log('icons', res)
        setIcons(res)
      })
  }, [])

  return <div>
    <Filter keyword={keyword} setKeyword={setKeyword} />
    <Result keyword={keyword} database={database} icons={icons} />
  </div>
}

export default App
