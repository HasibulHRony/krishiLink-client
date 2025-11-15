import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [userUpdate, setUserUpdate] = useState(null)
    const [loading, setLoading] = useState(true)

    const userByPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateProfileInfo = (userInfo, updatedInfo) => {
        return updateProfile(userInfo, updatedInfo)
    }


    const signInWithPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logOutUser = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        signInWithPassword,
        setUser,
        loading,
        setLoading,
        userByPassword,
        logOutUser,
        signInWithGoogle,
        userUpdate,
        setUserUpdate,
        updateProfileInfo,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
