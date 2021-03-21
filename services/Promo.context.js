import React, { useContext, useReducer } from 'react'

import app from '../firebase/firebase.config'

export const PromoStateContext = React.createContext({})

const initialState = {
  promo: {},
  promos: [],
}

export const ActionType = {
  CREATE_PROMO: 'CREATE_PROMO',
  GET_PROMO: 'GET_PROMO',
  GET_PROMOS: 'GET_PROMOS',
  SET_PROMO: 'SET_PROMO',
  SET_PROMOS: 'SET_PROMOS',
  DELETE_PROMO: 'DELETE_PROMO',
  UPDATE_PROMO: 'UPDATE_PROMO',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CREATE_PROMO:
      const id = new Date().getTime().toString()
      app.firestore().collection('promos').doc(id).set({ ...action.payload, id })
        .then(() => console.log('promo creada')) // FIX ME Agregar acá un toast que avise que se creó correctamente
        .catch((error) => console.log(error)) // toast que avise que algo salió mal
      return
    case ActionType.SET_PROMO:
      return {
        ...state,
        promo: action.payload
      }
    case ActionType.SET_PROMOS:
      return {
        ...state,
        promos: action.payload || [],
      }
    case ActionType.DELETE_PROMO:
      app.firestore().collection('promos').doc(action.payload.toString()).delete()
        .then(() => console.log('promo borrada')) // FIX ME Agregar acá un toast que avise que se borró
        .catch((error) => console.log(error)) // toast que avise que algo salió mal
      return
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const PromoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PromoStateContext.Provider value={[state, dispatch]}>
      {children}
    </PromoStateContext.Provider>
  )
}

export const usePromo = () => useContext(PromoStateContext)