import React, { useContext, useReducer } from 'react'

export const CartStateContext = React.createContext({})

const initialState = {
  items: [],
}

export const ActionType = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_AMOUNT: 'REMOVE_AMOUNT',
  REMOVE_ITEM: 'REMOVE_ITEM',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      if (state.items.filter(item => item.id === action.payload.id).length === 0)  {
        return {
          items: [
            ...state.items,
            {
              ...action.payload,
              amount: 1
            }
          ]
        }
      }
      state.items.filter(item => item.id === action.payload.id)[0].amount += 1
      return {
        items: [
          ...state.items,
        ]
      }
    case ActionType.REMOVE_AMOUNT:
      const idx = state.items.indexOf(action.payload)
      state.items.filter(item => item.id === action.payload.id)[0].amount -= 1
      if (state.items.filter(item => item.id === action.payload.id)[0].amount < 1) {
        state.items.splice(idx, 1)
      }
      return {
        items: [
          ...state.items,
        ]
      }
    case ActionType.REMOVE_ITEM:
      const index = state.items.indexOf(action.payload)
      state.items.splice(index, 1)
      return {
        items: [
          ...state.items,
        ]
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