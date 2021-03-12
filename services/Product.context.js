import React, { useContext, useReducer } from 'react'

export const ProductStateContext = React.createContext({})

const initialState = {
  product: {
    name: '',
    price: '',
    description: ''
  },
  products: [
    {
      id: 1,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-1.jpg',
      price: 123,
      cols: 2,
    },
    {
      id: 2,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-2.jpg',
      price: 123,
    },
    {
      id: 3,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-3.jpg',
      price: 123,
    },
    {
      id: 4,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-4.jpg',
      price: 123,
    },
    {
      id: 5,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
    {
      id: 6,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
    {
      id: 7,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
    {
      id: 8,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
    {
      id: 9,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
      cols: 2,
    },
    {
      id: 10,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
    {
      id: 11,
      name: 'Planta 1',
      description: 'planta para interiores muy linda',
      picture: '/plant-5.jpg',
      price: 123,
    },
  ],
}

const ActionType = {
  SetProduct: 'SetProduct',
  SetProducts: 'SetProducts',
  RemoveProduct: 'RemoveProduct',
  EditProduct: 'EditProduct'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SetProduct:
      return {
        ...state,
        product: action.payload.product
      }
    case ActionType.RemoveProduct:
      return {
        ...state,
        product: initialState.product
      }
    case ActionType.SetProducts:
      return {
        ...state,
        products: [...state.products, action.payload]
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