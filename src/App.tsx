import React from 'react'
import GlobalCss from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import MenuBar from './components/Menubar'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <MenuBar />
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
