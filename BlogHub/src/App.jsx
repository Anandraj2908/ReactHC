
import React,{ useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import {} from './store/authSlice'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect( () => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))
  },[])
  
  return !loading ? (
    <div>
      <Header/>
      Hey Not working
      <Footer/>
    </div>
  ) : null
}

export default App
