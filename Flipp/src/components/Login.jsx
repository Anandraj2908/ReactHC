import React from 'react'
import {NavLink} from 'react-router-dom'

function Login() {
  return (
    <div className='h-full w-full flex justify-center content-center '>
      <div className='bg-slate-100/20 w-2/4 rounded-xl p-5 m-5'>
        <NavLink to={"/login"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>LogIn</NavLink>
        <NavLink to={"/signup"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>SignUp</NavLink>
      </div>
    </div>
  )
}

export default Login
