import { combineReducers } from 'redux'

const settingsReducer = (settings = {}, action) => {
  switch (action.type) {
    case 'SET_SETTINGS':
      return action.payload
    default:
      return settings
  }
}

export default combineReducers({
  settings: settingsReducer,
})