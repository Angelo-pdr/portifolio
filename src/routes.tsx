import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Project from './pages/Project'
import About from './pages/About'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/project" element={<Project />} />
    <Route path="/about" element={<About />} />
  </Routes>
)

export default Rotas
