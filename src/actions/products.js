import app, { getItem } from '../firebase/firebase.config'

export const fetchProducts = (orderBy = ['price', 'asc']) => async dispatch => {
  const snapshot = await app.firestore().collection('products').orderBy(orderBy[0], orderBy[1]).get()
  dispatch({ type: 'SET_PRODUCTS', payload: snapshot.docs.map(doc => doc.data()) })
}

export const fetchProduct = (id) => async dispatch => {
  const snapshot = await getItem({ collection: 'products', id })
  console.log(snapshot)
  dispatch({ type: 'SET_PRODUCT', payload: snapshot.data() })
}



const getProducts = async () => {
  try {
    const snapshot = await app.firestore().collection('products').orderBy(orderBy[0], orderBy[1]).get()
    productDispatch({
      type: ProductActionType.SET_PRODUCTS,
      payload: snapshot.docs.map(doc => doc.data()),
    })
  }
  catch(error) {enqueueSnackbar('Ocurrió un error al solicitar los productos', { variant: 'error'})}
}