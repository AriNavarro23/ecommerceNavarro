// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
apiKey: "AIzaSyDyNItpKfdtpRsX0mWGY0ldvbrlBIBWE_U",
authDomain: "ecommercenavarro-76bbd.firebaseapp.com",
projectId: "ecommercenavarro-76bbd",
storageBucket: "ecommercenavarro-76bbd.appspot.com",
messagingSenderId: "181442605097",
appId: "1:181442605097:web:2abeeb915aa9aa923bec38",
measurementId: "G-KPNWX5FM1L"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// referencia para obtener base de datos y conecto la que inicialice arriba 
export const FirestoreDb = getFirestore(app)    