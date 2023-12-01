import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import { nanoid } from '@reduxjs/toolkit'

function News() {
  const newsList = useSelector(state => state.newsReducer)
    
  if(newsList.newsList.articles){
    return (
      <div className='h-full w-full flex flex-wrap  overflow-auto'>
        {
          newsList.newsList.articles.map((news) => (
            <NewsCard key={nanoid()} imageUrl={news.urlToImage} title={news.title} description={news.description} author={news.author} date={news.publishedAt}/>
          ))
        }
        
      </div>
    )
  }
  else{
    return(
      <div className='h-full w-full  m-auto   overflow-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-600'>No News Found</h1>
      </div>
    )
    
  }
  
}

export default News
