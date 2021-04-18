import app, { getItem } from '../firebase/firebase.config'

export const fetchProducts = (orderBy = ['price', 'asc']) => async dispatch => {
  const snapshot = await app.firestore().collection('products').orderBy(orderBy[0], orderBy[1]).get()
  dispatch({ type: 'SET_PRODUCTS', payload: snapshot.docs.map(doc => doc.data()) })
}

export const fetchProduct = (id) => async dispatch => {
  const snapshot = await getItem({ collection: 'products', id })
  dispatch({ type: 'SET_PRODUCT', payload: snapshot.data() })
}
