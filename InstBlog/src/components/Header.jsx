import React, {useState} from 'react'
import { addQuote } from '../redux/reducers/blogSlice'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { clearNews, getNews } from '../redux/reducers/newsSlice'
import { getRecepie } from '../redux/reducers/recepieSlice'


function Header() {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  const handelQuoteSubmit = (e) =>{
    e.preventDefault()
    dispatch(addQuote(searchInput))
    setSearchInput('')
  }

  const handelNewsSubmit = (e) => {
    dispatch(clearNews())
    e.preventDefault()
    const weatherApiKey=String(import.meta.env.VITE_WEATHER_API_KEY)
    const p = fetch(`https://newsapi.org/v2/everything?q=${searchInput}&sortBy=popularity&apiKey=${weatherApiKey}`)
    p.then((res)=>res.json())
    .then((data) => (
      dispatch(getNews(data))
    ))
    setSearchInput('')
  }

  const handelRecepieSubmit = (e) => {
    e.preventDefault()
    const recepieApiKey=String(import.meta.env.VITE_RECEPIE_API_KEY)
    const rec = fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&apiKey=${recepieApiKey}`)
    rec.then((res) => res.json())
    .then((data) => (
      dispatch(getRecepie(data))
      
    ))
    setSearchInput('')
  }

  const location = useLocation();
  let content=null;
  if(location.pathname==='/'){
    content=
    <form onSubmit={handelQuoteSubmit} className='w-1/2 flex justify-center'>
      <input type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='bg-slate-100/20 rounded-xl p-2 ' placeholder='your Quotes..' />
      <button type='submit' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 p-2 mx-2' >Add</button>
      </form>
  }
  else if(location.pathname==='/recepie'){
    content=
    <form onSubmit={handelRecepieSubmit} className='w-1/2 flex justify-center'>
      <input type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='bg-slate-100/20 rounded-xl p-2 ' placeholder='paneer' />
      <button type='submit' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 p-2 mx-2' >Get Menu</button>
      </form>
  }
  else if(location.pathname==='/news'){
    content=
    <form onSubmit={handelNewsSubmit}  className='w-1/2 flex justify-center'>
      <input type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)}  className='bg-slate-100/20 rounded-xl p-2 ' placeholder='bangalore' />
      <button type='submit' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 p-2 mx-2' >Get News</button>
      </form>
  }
    
  return (
    <div className='bg-slate-100/20 p-5 flex justify-center mx-2 mt-2 rounded-xl'>
      {content}
    </div>
  )
}

export default Header