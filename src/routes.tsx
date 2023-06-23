import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Project from './pages/Project'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/project" element={<Project />} />
  </Routes>
)

export default Rotas
