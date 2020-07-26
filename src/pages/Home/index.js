import React, { useEffect, useState} from 'react';
import api from '../../services/api';
import { Container, ProductList, HeaderContainer, Form } from './styles';
import { MdSearch } from 'react-icons/md';
import CartComponent from '../../components/Cart';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/modules/cart/actions';
import {format} from '../../util/format';
import logo from '../../assets/image/logo.png';


export default function HomePage () {
  const [ pokemons, setPokemons] = useState([]);
  const [inputValue, setInputValue] = useState([])
  const dispatch = useDispatch()
  console.log(inputValue)
 
  useEffect(()=> {
    const filterPokemon = pokemons.filter(pokemon => {
      return pokemon.name.includes(inputValue)  
    })
    setPokemons(filterPokemon)
  },[inputValue])

  useEffect(() => {
    async function getPokemons () {
      const poke = []
      for (let i = 11; i < 28; i += 2) {
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
          price: 100 * (id + 1),
          priceFormated: format( 100 * (id + 1)),
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
    <>
      <HeaderContainer>
      <a to='/'>
        <img src={logo} alt='Logo da empresa' />
      </a>

      <Form>
        <input type='text' onChange={event => setInputValue(event.target.value)}  />
        <MdSearch size={30} color='#333' />
      </Form>
    </HeaderContainer>
    <Container>
    <CartComponent />
      <ProductList>
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            {pokemon.image ? (
              <img src={pokemon.image} alt={pokemon.name} />
            ) : null}
            <h2>{pokemon.name}</h2>
            <p>{pokemon.description}</p>
            <strong>Muito Bonito</strong>
            <span>{pokemon.priceFormated}</span>
            <button type='button' onClick={()=>{
              handleAddPokemon(pokemon)
            }}>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
    </>
  )
}
