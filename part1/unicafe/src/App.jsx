import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const FeedBack = ({ chooseGood, chooseNeutral, chooseBad }) => <>
  <h1>give feedback</h1>
  <Button onClick={chooseGood} text='good' />
  <Button onClick={chooseNeutral} text='neutral' />
  <Button onClick={chooseBad} text='bad' />
</>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  return <>
    <h1>statistics</h1>
    {
      all === 0
      ? <div>No feedback given</div>
      : <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={(good - bad) / all} />
            <StatisticLine text='positive' value={good / all * 100 + '%'} />
          </tbody>
        </table>
    }
  </>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const chooseGood = () => setGood(good + 1)
  const chooseNeutral = () => setNeutral(neutral + 1)
  const chooseBad = () => setBad(bad + 1)

  return <>
    <FeedBack
      chooseGood={chooseGood}
      chooseNeutral={chooseNeutral}
      chooseBad={chooseBad}
    />
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
    />
  </>
}

export default App