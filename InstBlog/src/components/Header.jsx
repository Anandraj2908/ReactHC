import React, {useState} from 'react'
import { addQuote } from '../redux/reducers/blogSlice'
import { useDispatch } from 'react-redux'


function Header() {
  const [searchInput, setSearchInput] = useState('')
  const dispatch = useDispatch()

  const handelSubmit = (e) =>{
    e.preventDefault()
    dispatch(addQuote(searchInput))
    setSearchInput('')
  }

  return (
    <div className='bg-slate-100/20 p-5 flex justify-center'>
      <form onSubmit={handelSubmit} className='w-1/2 flex justify-center'>
      <input type='text' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className='bg-slate-100/20 rounded-xl p-2 ' placeholder='your Quotes..' />
      <button type='submit' className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 p-2 mx-2' >Add</button>
      </form>
    </div>
  )
}

export default Header