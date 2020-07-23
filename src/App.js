import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import GlobalStyled from './styles/GlobalStyled'
import HeaderComponent from './components/Header'

function App () {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <HeaderComponent />

        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
