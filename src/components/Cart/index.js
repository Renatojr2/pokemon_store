import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
  MdShoppingBasket
} from 'react-icons/md';

import { Container, ProductCart, Total } from './styles';
import { removeFromCart, updateAmount, BuySuccess } from '../../store/modules/cart/actions';
import { format } from '../../util/format';

export default function CartComponent () {
  const dispatch = useDispatch()
  const cart = useSelector(state =>
    state.cart.map(pokemon => ({
      ...pokemon,
      subtotal: format(pokemon.price * pokemon.amount),
    }))
  )
  const total = useSelector(state =>
    format(state.cart.reduce((total, pokemon) => {
      return total + pokemon.price * pokemon.amount
    
    }, 0)))
   
   

  function increment (pokemon) {
    dispatch(updateAmount(pokemon.id, pokemon.amount + 1))
  }
  function decrement (pokemon) {
    dispatch(updateAmount(pokemon.id, pokemon.amount - 1))
  }

  function handleBuySuccess() {
  toast.success('Compra finalizada! Obrigado! \nvocê ganhou de volta R$ 25,00', {
      position: 'bottom-right',
      autoClose: false,
      bodyStyle: {
        width: 80,
        height: 150,
        padding: 20,
        fontSize: 20,
        lineHeight: 2
      }
    })
    dispatch(BuySuccess())
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
          <tr>
            <th />
            <th>produto</th>
            <th>qtd</th>
            <th>preço</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {cart.map(pokemon => (
            <tr key={pokemon.id}>
              <td>
                <img src={pokemon.image} alt={pokemon.name} />
              </td>
              <td>
                <strong>{pokemon.name}</strong>
                <span>{pokemon.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type='button'>
                    <MdRemoveCircleOutline
                      size={20}
                      color='#4B43A4'
                      onClick={() => decrement(pokemon)}
                    />
                  </button>
                  <input type='number' readOnly value={pokemon.amount} />
                  <button type='button'>
                    <MdAddCircleOutline
                      size={20}
                      color='#4B43A4'
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
                    color='#4B43A4'
                    onClick={() => dispatch(removeFromCart(pokemon.id))}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductCart>

      <footer>
        <button type='button' onClick={()=> handleBuySuccess()}>Finalizar compra</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}
