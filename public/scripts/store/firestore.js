import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const PROJECT_ID = "learning-2b2cc"
const DATABASE_NAME = "dictionary"
const API_KEY = "AIzaSyCqHRFbsp05Us6Rbd3V8saRMFZsStU0HwE"
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, DATABASE_NAME, "main_screen");

export default async function dictionary_main_screen() {
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}
