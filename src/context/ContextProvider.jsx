import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loder, setLoder] = useState(true);

  const creatUser = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const profileUbdeat = (userData) => {
    setLoder(true);
    return updateProfile(auth.currentUser, userData);
  };
  const emailVeryFi = () => {
    setLoder(true);
    return sendEmailVerification(auth.currentUser);
  };

  const loginUser = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const passwordResetEmail = (email) => {
    setLoder(true);
    return sendPasswordResetEmail(auth, email);
  };

  const logOutUser = () => {
    setLoder(true);
    return signOut(auth);
  };

  const googleProvider = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsubcripet = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoder(false);
    });

    return () => unsubcripet();
  }, []);

  const info = {
    creatUser,
    profileUbdeat,
    emailVeryFi,
    loginUser,
    user,
    passwordResetEmail,
    logOutUser,
    loder,
    googleProvider
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
