import React, { createContext, useEffect, useState } from 'react';
import { getAuth, sendEmailVerification, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const profileAdded = (profile) => {
        setLoading(true);
        updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Inside auth", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        googleSignIn,
        createUser,
        signInUser,
        profileAdded,
        verifyEmail,
        passwordResetEmail,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;