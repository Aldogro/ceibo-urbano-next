import app, { getItem } from '../firebase/firebase.config'

export const fetchPromos = (orderBy = ['price', 'asc']) => async dispatch => {
  const snapshot = await app.firestore().collection('promos').orderBy(orderBy[0], orderBy[1]).get()
  dispatch({ type: 'SET_PROMOS', payload: snapshot.docs.map(doc => doc.data()) })
}

export const fetchPromo = (id) => async dispatch => {
  const snapshot = await getItem({ collection: 'promos', id })
  dispatch({ type: 'SET_PROMO', payload: snapshot.data() })
}
