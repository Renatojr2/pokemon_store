export function addToCart (pokemon) {
  return {
    type: 'ADD_TO_CART',
    pokemon
  }
}
export function removeFromCart (id) {
  return {
    type: 'REMOVE_FRON_CART',
    id,
  }
}
export function updateAmount(id, amount) {
  return {
    type: 'UPDATE_AMOUNT',
    id,
    amount
  }
}
