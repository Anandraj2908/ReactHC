import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-slate-800 h-screen flex flex-col justify-between'>
        <Header/>
        <Outlet/>
        <Footer/>      
    </div>
  )
}

export default Layout
