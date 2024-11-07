// FirebaseContext.js

import React, { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Auth, if needed

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-IEPv5VJBnjcAoiGtg05g8-s_xg31nac",
  authDomain: "frc-kaizen.firebaseapp.com",
  projectId: "frc-kaizen",
  storageBucket: "frc-kaizen.appspot.com",
  messagingSenderId: "1086452525609",
  appId: "1:1086452525609:web:d161220ac10a93fa47ca38",
  measurementId: "G-ELG0HJK7SZ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase services (Firestore and Auth)
const firestore = getFirestore(app);
const auth = getAuth(app);

// Create a Firebase context
const FirebaseContext = createContext();

// Custom hook to use Firebase context
export const useFirebase = () => useContext(FirebaseContext);

// Firebase Provider component
export const FirebaseProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to add contact info to Firestore
  const addContactInfo = async (name, email, phone, notes) => {
    setIsSubmitting(true);
    try {
      const docRef = doc(firestore, "contacts", email); // Use email as the unique document ID
      await setDoc(docRef, {
        name,
        email,
        phone,
        notes,
        createdAt: new Date(),
      });
      setIsSubmitting(false);
      alert("Contact info added successfully!");
    } catch (error) {
      console.error("Error adding contact info: ", error);
      setIsSubmitting(false);
    }
  };

  return (
    <FirebaseContext.Provider value={{ addContactInfo, isSubmitting, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
