import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC2i2iE-9K1JUO3vaMb9DQ0WOKT4GkpKUI",
  authDomain: "databasetest-227d5.firebaseapp.com",
  databaseURL: "https://databasetest-227d5-default-rtdb.firebaseio.com",
  projectId: "databasetest-227d5",
  storageBucket: "databasetest-227d5.appspot.com",
  messagingSenderId: "483258182105",
  appId: "1:483258182105:web:bf828e958a1f6b8c17d1c8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);