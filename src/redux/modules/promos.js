import { combineReducers } from 'redux'

const promosReducer = (promos = [], action) => {
  switch (action.type) {
    case 'SET_PROMOS':
      return action.payload
    default:
      return promos
  }
}

const promoReducer = (promo = null, action) => {
  switch (action.type) {
    case 'SET_PROMO':
      return action.payload
    default:
      return promo
  }
}


export default combineReducers({
  promos: promosReducer,
  promo: promoReducer,
})