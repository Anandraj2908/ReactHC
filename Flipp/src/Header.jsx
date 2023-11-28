import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-100/20 p-5 flex justify-between'>
      <NavLink to={"/"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>Home </NavLink>
      <NavLink to={"/About"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>About</NavLink>
      <NavLink to={"/login"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>Login</NavLink>
      <NavLink to={"/signup"} className={({isActive}) => `${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>Sign Up</NavLink>
    </div>
  )
}

export default Header
