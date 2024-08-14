const Header = (props) => {
  return <h2>{props.course}</h2>
}

const Part = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
  return props.parts.map(p => <Part part={p.name} exercise={p.exercises} key={p.id} />)
}

const Total = (props) => {
  const total = props.parts.reduce((sum, p) => sum + p.exercises, 0)
  return <p><b>total of {total} exercises</b></p>
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course