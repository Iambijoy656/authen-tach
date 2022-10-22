import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext();



const UserContexts = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // CreateUser
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update name
    const updateName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    //  Email verify
    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    // Googlr signIn

    const SignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // login with email and password
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // LogOut
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // fotget password
    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log('auth state change', currentUser)
        })

        return () => {
            unsubscribe();
        }


    }, [])

    const authInfo = { user, createUser, updateName, verifyEmail, SignInWithGoogle, logout, signIn, resetPassword, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;