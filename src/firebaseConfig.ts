import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBjnRjryuwgPyvA7ZE2SpVtK9mVMBVRHpM",
  authDomain: "acslab-5293f.firebaseapp.com",
  projectId: "acslab-5293f",
  storageBucket: "acslab-5293f.firebasestorage.app",
  messagingSenderId: "931501820560",
  appId: "1:931501820560:web:ae22536ed557e03093a615",
  measurementId: "G-VX8W2LP802",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services to use in your Admin and Catalog pages
export const db = getFirestore(app);
export const storage = getStorage(app);
