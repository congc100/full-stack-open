import { useState } from 'react'
import Detail from './Detail'

const Item = ({ country, icons }) => {
  const [show, setShow] = useState(false)
  const name = country.name.common
  return <div key={name}>
    <div>{name}<button onClick={() => setShow(!show)}>show</button></div>
    {show && <Detail country={country} icons={icons} />}
  </div>
}

const List = ({ result, icons }) => {
  return result.map(country => <Item country={country} icons={icons} key={country.name.common} />)
}

export default List