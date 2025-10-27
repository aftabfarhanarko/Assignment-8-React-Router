import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
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

    const info = {
      creatUser,
      profileUbdeat,
      emailVeryFi
    }

    return (
       <AuthContext.Provider value={info} >{children}</AuthContext.Provider>
    );
};

export default ContextProvider;