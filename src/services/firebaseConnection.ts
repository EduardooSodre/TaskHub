import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIYi95wdmLvOrlw1A3PrPbG0saUZ1-iU4",
  authDomain: "tarefasplus-1fbbc.firebaseapp.com",
  projectId: "tarefasplus-1fbbc",
  storageBucket: "tarefasplus-1fbbc.appspot.com",
  messagingSenderId: "914220081731",
  appId: "1:914220081731:web:583c7e04b68cce93ec6af6"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };