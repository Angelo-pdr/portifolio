import React from 'react'
import GlobalCss from './styles'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import MenuBar from './components/Menubar'
import { useSelector } from 'react-redux'
import { RootState } from './stores'

function App() {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  return (
    <BrowserRouter>
      <GlobalCss mode={buttonDark} />
      <div className="container">
        <MenuBar />
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
