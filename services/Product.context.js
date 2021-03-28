import React, { useContext, useReducer } from 'react'

export const ProductStateContext = React.createContext({})

const initialState = {
  product: {},
  products: [],
}

export const ActionType = {
  SET_PRODUCT: 'SET_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductStateContext.Provider value={[state, dispatch]}>
      {children}
    </ProductStateContext.Provider>
  )
}

export const useProduct = () => useContext(ProductStateContext)