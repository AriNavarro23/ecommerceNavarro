import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket:process.env.REACT_APP_storageBucket ,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId,
measurementId: process.env.REACT_APP_measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referencia para obtener base de datos y conecto la que inicialice arriba 
export const firestoreDb = getFirestore(app)    