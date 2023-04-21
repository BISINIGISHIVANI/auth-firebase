import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";
import {toast} from "react-toastify"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwcsFs2c3DIYwZXAaj90g8-9hzI9wpJoo",
    authDomain: "auth-sample-test-450c4.firebaseapp.com",
    projectId: "auth-sample-test-450c4",
    storageBucket: "auth-sample-test-450c4.appspot.com",
    messagingSenderId: "931232183757",
    appId: "1:931232183757:web:d34eef342535ad25458084",
    measurementId: "G-BYNKEH3LPL"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset link sent!");
  } catch (err) {
    console.error(err);
    toast.error(err.message);
  }
};

const logout = () => {
  signOut(auth);
  toast.success("you signed off")
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};