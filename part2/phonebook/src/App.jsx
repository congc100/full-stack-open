import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    const sameName = persons.filter(p => p.name === newName)
    if (sameName.length !== 0) {
      const current = sameName[0]
      if (!window.confirm(`${current.name} is already added to phonebook, replace the old number with a new one?`)) {
        return
      }
      personService
        .update(current.id, { ...current, number: newNumber })
        .then(response => {
          console.log('update res', response)
          setPersons(persons.map(p => p.id === response.data.id ? response.data : p))
          setNewName('')
          setNewNumber('')
        })
    } else {
      personService
        .create({ name: newName, number: newNumber })
        .then(response => {
          console.log('submit res', response)
          setPersons([...persons, response.data])
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const onDelete = id => {
    personService
      .remove(id)
      .then(response => {
        console.log('remove res', response)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={onSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} onDelete={onDelete} />
    </div>
  )
}

export default App