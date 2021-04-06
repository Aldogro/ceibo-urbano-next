import React, { useContext, useEffect, useReducer } from 'react'
import { createSettings, getItem } from '../firebase/firebase.config'
import { useSnackbar } from 'notistack'


export const ConfigStateContext = React.createContext({})

const initialState = {
  icon: '',
  phone: ''
}

export const ActionType = {
  SET_SETTINGS: 'SET_SETTINGS',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_SETTINGS:
      return {
        ...action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const ConfigProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    getSettings()
  }, [])

  const getSettings = () => {
    if (localStorage.getItem('ceibo-urbano-settings')) {
      dispatch({
        type: ActionType.SET_SETTINGS,
        payload: JSON.parse(localStorage.getItem('ceibo-urbano-settings'))
      })
      return
    } else {
      getItem({ collection: 'settings', id: 'settings' })
        .then(snapshot => {
          if (!snapshot.data()) {
            createSettings({ settings })
              .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error'}))
          }
          dispatch({
            type: ActionType.SET_SETTINGS,
            payload: snapshot.data()
          })
          localStorage.setItem('ceibo-urbano-settings', JSON.stringify(snapshot.data()))
        })
    }
  }

  return (
    <ConfigStateContext.Provider value={[state, dispatch]}>
      {children}
    </ConfigStateContext.Provider>
  )
}

export const useConfig = () => useContext(ConfigStateContext)