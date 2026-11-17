import { useNavigate } from 'react-router'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Students', path: '/students' },
  { label: 'Courses', path: '/courses' },
]

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav aria-label="Main navigation">
      {links.map((link) => (
        <button
          key={link.path}
          type="button"
          onClick={() => navigate(link.path)}
        >
          {link.label}
        </button>
      ))}
    </nav>
  )
}

export default Navbar
