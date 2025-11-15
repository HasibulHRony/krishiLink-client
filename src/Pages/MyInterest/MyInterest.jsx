import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthContext'

export const MyInterest = () => {

  const { user, } = useContext(AuthContext)
  const [myInterests, setMyInterests] = useState([])


  useEffect(() => {
    fetch(`https://krishi-link-server-neon.vercel.app/users_interests?usersEmail=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setMyInterests([...data])
      })
  }, [user.email])

  return (
    <div>
      <h1 className='text-2xl text-center my-4'>Total Interests For this user: {myInterests.length}</h1>

      <h3 className='text-center mb-4 text-sm text-gray-500'>Sorted by time, Latest to Oldest: </h3>

      {
        myInterests.length > 0 ? <div className="p-4 mx-auto">
          <div className='overflow-x-auto'>
            <table className="table p-4 mx-auto">
              {/* head */}
              <thead>
                <tr>
                  <th className='border border-black'>CropsName</th>
                  <th className='border border-black'>OwnersName</th>
                  <th className='border border-black'>Quantity</th>
                  <th className='border border-black'>Users Msg</th>
                  <th className='border border-black'>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  myInterests.map((interest, index) => <tr key={index}>
                    <td className='border border-black'>{interest.cropName}</td>
                    <td className='border border-black'>{interest.ownerName}</td>
                    <td className='border border-black'>{interest.quantityRequested}</td>
                    <td className='border border-black'>{interest.userMessage}</td>
                    <td className='border border-black'>{interest.status}</td>
                  </tr>)
                }

              </tbody>
            </table>



          </div>
        </div> : <div><p className='text-center font-bold text-2xl my-5'>You don't have Interested to any product yet.</p></div>
      }


    </div>
  )
}
