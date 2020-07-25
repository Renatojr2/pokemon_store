import React, {useState, useEffect} from 'react';


import { Container, Form} from './styles.js';
import { MdSearch } from 'react-icons/md';

import logo from '../../assets/image/logo.png';

export default function HeaderComponent () {
  return (
    <Container>
      <a to='/'>
        <img src={logo} alt='Logo da empresa' />
      </a>

      <Form>
        <input type='text'  />
        <MdSearch size={30} color='#333' />
      </Form>
    </Container>
  )
}
