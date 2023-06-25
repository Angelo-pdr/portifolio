import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/project" element={<Project />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
)

export default Rotas
