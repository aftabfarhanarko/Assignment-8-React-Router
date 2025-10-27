import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const ContextProvider = ({children}) => {
    const creatUser = (email,password ) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const profileUbdeat = (userData) => {
        return updateProfile(auth.currentUser, userData )
    }
    const emailVeryFi = () =>{
        return sendEmailVerification(auth.currentUser);
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const info = {
      creatUser,
      profileUbdeat,
      emailVeryFi,
      loginUser
    }

    return (
       <AuthContext.Provider value={info} >{children}</AuthContext.Provider>
    );
};

export default ContextProvider;