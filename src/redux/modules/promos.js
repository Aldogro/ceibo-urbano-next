import { combineReducers } from 'redux'

const productsReducer = (products = [], action) => {
  if (action.type === 'FETCH_PRODUCTS') {
    return (action.payload)
  }
  return []
}

export default combineReducers({
  products: () => 10,
})