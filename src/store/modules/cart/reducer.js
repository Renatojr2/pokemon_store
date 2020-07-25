import { produce } from 'immer'

export default function cart (state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, draft => {
        console.log(state)
        const pokemonIndex = draft.findIndex(p => p.id === action.pokemon.id);
        if (pokemonIndex >= 0) {
          draft[pokemonIndex].amount += 1
        } else {
          draft.push({
            ...action.pokemon,
            amount: 1
          })
        }
      });
    case 'REMOVE_FRON_CART':
      return produce(state, draft => {
        const pokemonIndex = draft.findIndex(p => p.id === action.id);

        if(pokemonIndex >= 0) {
          draft.splice(pokemonIndex, 1);
        }

      }); 

    case 'UPDATE_AMOUNT': {
      if(action.amount <= 0) {
        return state;
      }
      return produce(state, draft => {
        const pokemonIndex = draft.findIndex(p => p.id === action.id);

        if(pokemonIndex >= 0) {
          draft[pokemonIndex].amount = Number(action.amount);
        }
      })
    }
    default:
      return state
  }
}
