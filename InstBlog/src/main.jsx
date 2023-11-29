import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Recepie from './components/Recepie.jsx'
import store from './redux/store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/Recepie",
        element:<Recepie/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
