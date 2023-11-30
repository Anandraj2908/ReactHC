import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

function Home() {
    const blogs = useSelector(state => state.blogReducer.blogs)
  return (
    <div className='h-full w-full flex justify-center content-center '>
      <div className='bg-slate-100/20 w-2/4 rounded-xl p-5 m-5 overflow-auto max-h-96'>
        
            {blogs.map((blog) => (
                <Card key={blog.id} id={blog.id} quote={blog.content}/>
            ))}
      </div>
    </div>
  )
}

export default Home
