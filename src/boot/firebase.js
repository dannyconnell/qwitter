import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  // YOUR CONFIG HERE
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db