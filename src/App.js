import React from 'react';
import GlobalStyled from './styles/GlobalStyled';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store';
import {ToastContainer} from 'react-toastify';

function App () {
  return (
    <>
      <Provider store={store}>
        <GlobalStyled />
        <ToastContainer />
        <Home />
      </Provider>
    </>
  )
}

export default App
