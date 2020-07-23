import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md'

import { Container, ProductCart, Total } from './styles'

export default function CartPage () {
  return (
    <Container>
      <ProductCart>
        <thead>
          <th />
          <th>produto</th>
          <th>qtd</th>
          <th>preço</th>
          <th />
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
                alt=''
              />
            </td>
            <td>
              <strong>Pokemon treinado</strong>
              <span>R$129,00</span>
            </td>
            <td>
              <div>
                <button type='button'>
                  <MdRemoveCircleOutline size={24} color='#00b341' />
                </button>
                <input type='number' readOnly />
                <button type='button'>
                  <MdAddCircleOutline size={24} color='#00b341' />
                </button>
              </div>
            </td>
            <td>
              <strong>R$129,00</strong>
            </td>
            <td>
              <button type='button'>
                <MdDelete size={20} color='red' />
              </button>
            </td>
          </tr>
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
