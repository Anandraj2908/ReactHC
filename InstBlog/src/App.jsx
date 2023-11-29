import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-800 h-screen flex flex-col justify-between'>
        <Header/>
        <Outlet/>
        <Footer/>      
    </div>
    
  )
}

export default App
