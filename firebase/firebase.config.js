import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-storage'

const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,  
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const getItem = ({ collection, id }) => firebase.firestore().collection(collection).doc(id).get()

export const createItem = ({ collection, data }) => {
  const id = new Date().getTime().toString()
  return firebase.firestore().collection(collection).doc(id).set({ ...data, id })
}

export const createSettings = ({ settings }) => firebase.firestore().collection('settings').doc('settings').set(settings)

export const editItem = ({ collection, id, data }) => firebase.firestore().collection(collection).doc(id).update(data)

export const publishItem = ({ collection, id, publish }) => firebase.firestore().collection(collection).doc(id).update({ publish: !publish })

export const deleteItem = ({ collection, selectedId }) => firebase.firestore().collection(collection).doc(selectedId.toString()).delete()

export const getCollection = (collection) => firebase.firestore().collection(collection).get()

export default firebase