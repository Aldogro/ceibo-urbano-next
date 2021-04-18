import app, { getItem, createSettings } from '../firebase/firebase.config'

export const setSettings = () => async dispatch => {
  const snapshot = await getItem({ collection: 'settings', id: 'settings' })
  const temp = { phone: '' }
  if (!snapshot.data()) {
    createSettings({ temp })
  }
  dispatch({ type: 'SET_SETTINGS', payload: snapshot.data() || temp })
}