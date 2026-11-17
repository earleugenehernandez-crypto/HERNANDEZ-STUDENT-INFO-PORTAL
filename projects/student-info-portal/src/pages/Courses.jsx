import CourseCard from '../components/CourseCard'
import Navbar from '../components/Navbar'

const courses = [
  {
    name: 'BS Computer Science',
  },
  {
    name: 'BS Information Technology',
  },
  {
    name: 'BS Information Systems',
  },
]

function Courses() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Courses</h1>
        <div className="card-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.name}
              name={course.name}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default Courses
