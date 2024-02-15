// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage' // Import getStorage
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAcHLASNwIauJBEgvUdIzM09CB8eHUsqxI',
    authDomain: 'the-barkinglot.firebaseapp.com',
    projectId: 'the-barkinglot',
    storageBucket: 'the-barkinglot.appspot.com',
    messagingSenderId: '462183180795',
    appId: '1:462183180795:web:ad6d6f0ac9de769ddd035e',
    measurementId: 'G-D84DXTPSLW'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app) // Get the Auth instance

export { auth, db, storage, analytics, app } // Export all relevant services
