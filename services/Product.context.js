import React, { useContext, useEffect, useReducer } from 'react'

import { db } from '../firebase/firebase.config'

export const ProductStateContext = React.createContext({})

const initialState = {
  product: {},
  products: [],
}

export const ActionType = {
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  GET_PRODUCT: 'GET_PRODUCT',
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCT: 'SET_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CREATE_PRODUCT:
      const id = new Date().getTime().toString()
      db.collection('products').doc(id).set({ ...action.payload, id })
        .then(() => console.log('producto creado')) // FIX ME Agregar acá un toast que avise que se creó correctamente
        .catch((error) => console.log(error)) // toast que avise que algo salió mal
      return
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
    case ActionType.DELETE_PRODUCT:
      db.collection('products').doc(action.payload.toString()).delete()
        .then(() => console.log('elemento borrado')) // FIX ME Agregar acá un toast que avise que se borró
        .catch((error) => console.log(error)) // toast que avise que algo salió mal
      return
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