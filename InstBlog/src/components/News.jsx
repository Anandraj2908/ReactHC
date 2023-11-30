import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function News() {
    const newsList = useSelector(state => state.newsReducer.news)
    console.log(newsList)
  return (
    <div className='h-full w-full flex justify-center content-center '>
      <div className='bg-slate-100/20 w-2/4 rounded-xl p-5 m-5 overflow-auto max-h-96'>
        
            Hello
      </div>
    </div>
  )
}

export default News
