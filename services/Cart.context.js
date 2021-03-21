import React, { useContext, useReducer } from 'react'

export const CartStateContext = React.createContext({})

const initialState = {
  items: [{
    name: 'nombre de producto demasiado largo',
    price: 123,
    id: 1,
  }],
}

export const ActionType = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return {
        items: [
          ...items,
          action.payload,
        ]
      }
    case ActionType.REMOVE_ITEM:
      return {
        items: items.filter(item => item.id !== action.payload)
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CartStateContext.Provider value={[state, dispatch]}>
      {children}
    </CartStateContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext)