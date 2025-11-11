import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthContext'

export const Home = () => {
    const {user} = useContext(AuthContext)

    console.log(user)

  return (
    <div>Home</div>
  )
}
