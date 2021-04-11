import React, { useContext, useReducer } from 'react'
import app from '../firebase/firebase.config'

export const PromoStateContext = React.createContext({})

const initialState = {
  promo: {},
  promos: [],
  maxDiscount: 0,
}

export const ActionType = {
  SET_PROMO: 'SET_PROMO',
  SET_PROMOS: 'SET_PROMOS',
  GET_MAX_DISCOUNT: 'GET_MAX_DISCOUNT', 
}


const reducer = (state, action) => {
  switch (action.type) {
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
    case ActionType.GET_MAX_DISCOUNT:
      let temp = 0
      state.promos.forEach(promo => {
        if (promo.discount < temp) { temp = promo.discount }
      })
      return {
        ...state,
        maxDiscount: temp * -1
      }
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