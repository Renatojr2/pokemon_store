import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api';
import { Container, ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import Cart from '../../components/Cart';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../store/modules/cart/actions';
import {format} from '../../util/format';

export default function HomePage () {
  const [ pokemons, setPokemons] = useState([]);
  const dispatch = useDispatch()
 


  useEffect(() => {
    async function getPokemons () {
      const poke = []
      for (let i = 0; i < 54; i += 6) {
        const resource = await api.get(`/${i + 1}`)
        const data = await resource.data
        poke.push(data)
      }
      const pokebola = poke.map(({ id, name, sprites}) => {
        return {
          id,
          name,
          image: sprites.front_default,
          description: `O Pokemon que você precisa sua força é ${name === 'pikachu' ? id * 200: id * 2}`,
          price: name === 'pikachu' ? 300 * (id + 1):100 * (id + 1),
        }
      })
      setPokemons(pokebola)
    }
    getPokemons()
  }, [])

  function handleAddPokemon(pokemon) {
    dispatch(addToCart(pokemon))
  }

 

  return (
    <Container>
      <ProductList>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.image ? (
              <img src={pokemon.image} alt={pokemon.name} />
            ) : null}
            <h2>{pokemon.name}</h2>
            <p>{pokemon.description}</p>
            <strong>Muito Bonito</strong>
            <span>{pokemon.price}</span>
            <button type='button' onClick={()=>{
              handleAddPokemon(pokemon)
            }}>
              <div>
                <MdAddShoppingCart size={16} color='#efefef' />
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
      <Cart />
    </Container>
  )
}
