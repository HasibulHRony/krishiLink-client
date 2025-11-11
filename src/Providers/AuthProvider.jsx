import React from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {


    const authInfo = {

    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
}
