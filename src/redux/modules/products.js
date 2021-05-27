import { combineReducers } from 'redux'

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload
    default:
      return products
  }
}

const productReducer = (product = null, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return action.payload
    default:
      return product
  }
}


export default combineReducers({
  products: productsReducer,
  product: productReducer,
})