import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAo34-jtFPZolC8aDFFqrg6D1WneSX638",
  authDomain: "cclab5-171f6.firebaseapp.com",
  projectId: "cclab5-171f6",
  storageBucket: "cclab5-171f6.firebasestorage.app",
  messagingSenderId: "231813524679",
  appId: "1:231813524679:web:fe581b10d70d13494262e2",
  measurementId: "G-Y7XH6ZVF33"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
