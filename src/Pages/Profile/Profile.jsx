import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthContext'
import { auth } from '../../Firebase/firebase.config'
import { updateProfile } from 'firebase/auth'
import { Link } from 'react-router'
import { toast } from 'react-toastify'

export const Profile = () => {

  const { user, setUser, updateProfileInfo } = useContext(AuthContext)

  const handleUpdateProfile = (event) => {
    event.preventDefault()
    const updatedName = event.target.updatedName.value;
    const updatedPhoto = event.target.updatedPhoto.value;
    console.log(updatedName, updatedPhoto)
    updateProfileInfo(auth.currentUser, { displayName: updatedName, photoURL: updatedPhoto })
      .then(() => {
        setUser({ ...user, displayName: updatedName, photoURL: updatedPhoto })
        toast.success('successfully changed information')
      })
      .catch(() => toast.error("please try again"))
  }


  return (
    <div className='min-h-screen'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-xl md:text-3xl font-semibold'>UserName: {user?.displayName}</h2>
        <h3 className='text-xl md:text-3xl font-semibold'>UserEmail: {user?.email}</h3>
        <img src={user?.reloadUserInfo?.photoUrl} className='w-48 h-48 rounded-3xl' />
        <button className='btn-primary btn'><Link to={"/"}>Back To Home</Link></button>
      </div>

      <div className='max-w-[420px] mx-auto my-6'>
        <form onSubmit={handleUpdateProfile}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

            <h4 className='mx-auto text-3xl'>Fill up the form <br /> to update profile.....</h4>

            <label className="label">Updated Name</label>
            <input required name='updatedName' type="text" className="input" placeholder="Updated Name" />

            <label className="label">Photo Url</label>
            <input required name='updatedPhoto' type="url" className="input" placeholder="updated photo url" />
            <button className='btn btn-primary'>Update Profile</button>
          </fieldset>
        </form>
      </div>
    </div >
  )
}
