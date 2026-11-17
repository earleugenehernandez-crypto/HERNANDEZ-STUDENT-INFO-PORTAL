import Navbar from '../components/Navbar'
import StudentCard from '../components/StudentCard'

const students = [
  { name: 'Alex Santos'},
  { name: 'Bianca Reyes'},
  { name: 'Carlos Dela Cruz'},
  { name: 'Diana Garcia'},
  { name: 'Ethan Mendoza'},
]

function Students() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Students</h1>
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
          />
        ))}
      </main>
    </>
  )
}

export default Students
