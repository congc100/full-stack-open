import Detail from './Detail'
import List from './List'

const Result = ({ keyword, database, icons }) => {
  if (database === null) {
    return null
  }

  const result = database
    .filter((country => new RegExp(keyword, 'i').test(country.name.common)))
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
  
  const n = result.length
  if (n === 1) {
    return <Detail country={result[0]} icons={icons} />
  } else if (1 < n && n <= 10) {
    return <List result={result} icons={icons} />
  } else if (n > 10) {
    return <div>Too many matches, specify another filter</div>
  } else {
    return <div>No result</div>
  }
}

export default Result