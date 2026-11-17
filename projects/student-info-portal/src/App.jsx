import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import About from './pages/About'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Students from './pages/Students'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
