import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdShoppingBasket
} from 'react-icons/md'

import { Container, ProductCart, Total } from './styles'
import { removeFromCart, updateAmount } from '../../store/modules/cart/actions'
import { format } from '../../util/format'

export default function CartComponent () {
  const dispatch = useDispatch()
  const cart = useSelector(state =>
    state.cart.map(pokemon => ({
      ...pokemon,
      subtotal: format(pokemon.price * pokemon.amount)
    }))
  )
  const total = useSelector(state => {
    format(
      state.cart.reduce((total, pokemon) => {
        return total + pokemon.price * pokemon.amount
      }, 0)
    )
  })

  function increment (pokemon) {
    dispatch(updateAmount(pokemon.id, pokemon.amount + 1))
  }
  function decrement (pokemon) {
    dispatch(updateAmount(pokemon.id, pokemon.amount - 1))
  }
  return (
    <Container>
      <div>
        <h1>Meu Carrinho</h1>
        <div>
          <MdShoppingBasket size={30} />
            <span>{cart.length}</span>
         
        </div>
      </div>
      <ProductCart>
        <thead>
          <th />
          <th>produto</th>
          <th>qtd</th>
          <th>preço</th>
          <th />
        </thead>

        <tbody>
          {cart.map(pokemon => (
            <tr key={pokemon.id}>
              <td>
                <img src={pokemon.image} alt={pokemon.name} />
              </td>
              <td>
                <strong>{pokemon.name}</strong>
                <span>{pokemon.price}</span>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdRemoveCircleOutline
                      size={20}
                      color='#00b341'
                      onClick={() => decrement(pokemon)}
                    />
                  </button>
                  <input type='number' readOnly value={pokemon.amount} />
                  <button type='button'>
                    <MdAddCircleOutline
                      size={20}
                      color='#00b341'
                      onClick={() => increment(pokemon)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{pokemon.subtotal}</strong>
              </td>
              <td>
                <button type='button'>
                  <MdDelete
                    size={20}
                    color='red'
                    onClick={() => dispatch(removeFromCart(pokemon.id))}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductCart>

      <footer>
        <button type='button'>Finalizar compra</button>

        <Total>
          <span>Total</span>
          <strong>1254,00</strong>
        </Total>
      </footer>
    </Container>
  )
}
