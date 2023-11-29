import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-slate-100/20 p-5 flex justify-between'>
      <div className='text-slate-200'>
      Quotes - A react redux project by Anand Raj
      </div>
      <div className='flex justify-between'>
        <NavLink to={"/"} className={({isActive}) => `mx-5 ${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>Quotes</NavLink>
        <NavLink to={"/Recepie"} className={({isActive}) => `mx-5 ${isActive ? "text-slate-200 text-decoration-line: underline" : "text-slate-800"}`}>Recepie</NavLink>
      </div>
     
    </div>
  )
}

export default Footer
