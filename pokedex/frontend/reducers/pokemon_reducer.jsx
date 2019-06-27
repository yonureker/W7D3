import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

//??? why cant use default with 'const'
export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return { action.pokemon };
    default:
      return state;
  }
};

