import React from 'react'
import GlobalStyled from './styles/GlobalStyled'
import HeaderComponent from './components/Header'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <>
      <Provider store={store}>
        <GlobalStyled />
        <HeaderComponent />
        <Home />
      </Provider>
    </>
  )
}

export default App
