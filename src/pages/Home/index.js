import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import {useSelector, useDispatch} from 'react-redux'

import { Container, ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function HomePage () {
  const [pokemonImage, setPokemonImage] = useState([]);
  const [pokeballs, setPokeballs] = useState([]);
  const cartSize = useSelector(state => state.cart.length)

 

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons () {
    for (let i = 1; i < 120; i += 6) {
      let resource = await api.get(`/${i}`);
      setPokeballs(state => {
        return [...state, resource.data];
      })
    }
  }

  const handlePokemonToCart = pokemon => {
    const dispatch = useDispatch()
    dispatch({
      type: 'ADD_TO_CART',
      pokemon,
    })
  }

  return (
    <Container>
      <ProductList>
        {pokeballs.map(pokeball => (
          <li key={pokeball.id}>
            {pokeball.sprites ? (
              <img src={pokeball.sprites.front_default} alt={pokeball.name} />
            ) : null}
            <h2>{pokeball.name}</h2>
            <p>Um pokemon pra quem gosta de mato</p>
            <strong>Muito Bonito</strong>
            <span>R$129,00</span>
            <button type='button' onClick={handlePokemonToCart(pokeball)}>
              <div>
                <MdAddShoppingCart size={16} color='#efefef' />3
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  )
}
