import React, { useContext, useReducer } from 'react'

export const PromotionStateContext = React.createContext({})

const initialState = {
  promotion: {
    id: 1,
    name: '',
    description: '',
    picture: '/plant-1.jpg',
    price: 0,
  },
  promotions: [
    {
      id: 1,
      name: 'Promo 1',
      description: 'Promo 1',
      picture: '/plant-1.jpg',
      price: 123,
    },
    {
      id: 2,
      name: 'Promo 1',
      description: 'Promo 2',
      picture: '/plant-2.jpg',
      price: 123,
    },
    {
      id: 3,
      name: 'Promo 3',
      description: 'Promo 3',
      picture: '/plant-3.jpg',
      price: 123,
    },
    {
      id: 4,
      name: 'Promo 4',
      description: 'Promo 4',
      picture: '/plant-4.jpg',
      price: 123,
    },
    {
      id: 5,
      name: 'Promo 5',
      description: 'Promo 5',
      picture: '/plant-5.jpg',
      price: 123,
    },
  ]
}

const ActionType = {
  setPromotion: 'SetPromotion',
  setPromotions: 'SetPromotions',
  RemovePromotion: 'RemovePromotion',
  EditPromotion: 'EditPromotion'  
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.setPromotion:
      return {
        ...state,
        promotion: action.payload.promotion
      }
    case ActionType.RemovePromotion:
      return {
        ...state,
        product: initialState.product
      }
    case ActionType.setPromotions:
      return {
        ...state,
        promotions: [...state.promotions, action.payload]
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const PromotionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PromotionStateContext.Provider value={[state, dispatch]}>
      {children}
    </PromotionStateContext.Provider>
  )
}

export const usePromotion = () => useContext(PromotionStateContext)