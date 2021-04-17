import { getCollection, getItem } from '../firebase/firebase.config'

export const fetchProducts = () => async dispatch => {
  const snapshot = await getCollection('products')
  dispatch({ type: 'SET_PRODUCTS', payload: snapshot.docs.map(doc => doc.data()) })
}

export const fetchProduct = (id) => async dispatch => {
  const snapshot = await getItem({ collection: 'products', id })
  console.log(snapshot)
  dispatch({ type: 'SET_PRODUCT', payload: snapshot.data() })
}