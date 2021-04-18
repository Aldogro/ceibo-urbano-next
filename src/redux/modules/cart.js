import { combineReducers } from 'redux'

const itemsReducer = (items = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log(action)
      if (items.filter(item => item.id === action.payload.id).length === 0)  {
        return [...items, { ...action.payload, amount: 1 }]
      }
      items.filter(item => item.id === action.payload.id)[0].amount += 1
      return [ ...items ]
    case 'REMOVE_AMOUNT':
      const idx = items.indexOf(action.payload)
      items.filter(item => item.id === action.payload.id)[0].amount -= 1
      if (items.filter(item => item.id === action.payload.id)[0].amount < 1) {
        items.splice(idx, 1)
      }
      return [ ...items ]
    case 'REMOVE_ITEM':
      const index = items.indexOf(action.payload)
      items.splice(index, 1)
      return [ ...items ]
    case 'CLEAR_CART':
      return []
    default:
      return items
  }
}

const paymentMethodReducer = (paymentMethod = '', action) => {
  switch (action.type) {
    case 'SET_PAYMENT_METHOD':
      return action.payload
    case 'CLEAR_CART':
      return ''
    default:
      return paymentMethod
  }
}

export default combineReducers({
  items: itemsReducer,
  paymentMethod: paymentMethodReducer,
})