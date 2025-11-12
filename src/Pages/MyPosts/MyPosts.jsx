import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthContext'
import { PostCard } from '../../Components/PostCard/PostCard'

export const MyPosts = () => {
  const { user } = useContext(AuthContext)
  const [myPost, setMyPost] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/my-posts?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyPost([...data])
        console.log(data)
      })
  }, [user.email])


  return (
    <div>
      <h1 className='text-2xl text-center my-4'>Total Posts For this user: {myPost.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {
          myPost.map((post, index)=><PostCard key={index} post={post}></PostCard>)
        }
      </div>
    </div>
  )
}
