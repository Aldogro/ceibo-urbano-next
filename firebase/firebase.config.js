import firebase from 'firebase/app'
import '@firebase/firestore'
import 'firebase/auth'
import 'firebase/firebase-storage'

const loadFirebase = () => {
  try {
    const config = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,  
    }

    firebase.initializeApp(config)
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  }
  catch (error) {
    console.log('Firebase initialization error', error.stack)
  }

  return firebase
}

const app = loadFirebase()

export const db = app.firestore()
export const firebaseAuth = app.auth()
export const firestorage = app.storage()
