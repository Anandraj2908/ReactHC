import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Recepie from './components/Recepie.jsx'
import News from './components/News.jsx'
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
        path:"/recepie",
        element:<Recepie/>
      },
      {
        path:"/news",
        element:<News/>
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
