import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-slate-100/20 p-5 flex justify-between'>
      <div className='text-slate-200'>
      Quotes - A react redux project by Anand Raj 
      </div>
      <div className='flex justify-between'>
        <h2>NavBar -&gt;</h2>
        <NavLink to={"/"} className={({isActive}) => `mx-5 ${isActive ? "text-slate-200 font-bold" : "text-slate-800"}`}>Quotes</NavLink>
        <NavLink to={"/recepie"} className={({isActive}) => `mx-5 ${isActive ? "text-slate-200 font-bold" : "text-slate-800"}`}>Food</NavLink>
        <NavLink to={"/news"} className={({isActive}) => `mx-5 ${isActive ? "text-slate-200 font-bold" : "text-slate-800"}`}>News</NavLink>
      </div>
     
    </div>
  )
}

export default Footer
