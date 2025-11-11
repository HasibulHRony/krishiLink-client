import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../Providers/AuthContext'

export const LogIn = () => {

    const { user, setUser, signInWithPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignIn =(event)=>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithPassword(email, password)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
            navigate("/")
        
        })
        .catch(error=>console.log(error))
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <p className='text-center text-2xl my-4'>LogIn</p>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input required name='password' type="password" className="input" placeholder="Password" />
                                <div><p className="link link-hover">Don't have account? Please <Link to={"/register"} className='cursor-pointer text-blue-500'>Register</Link></p></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
