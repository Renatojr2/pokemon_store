import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, Cart } from './styles.js';
import { MdSearch } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';

import logo from '../../assets/image/logo.png';

export default function HeaderComponent () {
  const [pokemon, setPokemon] = useState()
  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt='Logo da empresa' />
      </Link>

      <Form>
        <input type='text' />
        <MdSearch size={30} color='#333' />
      </Form>

      <Cart to='/cart'>
        <div>
          <strong>Meu cariinho</strong>
          <span>3 itens</span>
        </div>
        <FaShoppingBasket size={38} color='#fff' />
      </Cart>
    </Container>
  )
}
