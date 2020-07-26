import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';

function App () {
  return (
    <>
      <Provider store={store}>
        <GlobalStyled />
        <Home />
      </Provider>
    </>
  )
}

export default App
