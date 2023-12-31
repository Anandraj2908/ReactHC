import React from 'react'

function Card({id,quote}) {
  return (
    <div class="m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{quote}</h5>
        </a>
        <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">Quote Id: {id}</p>
    </div>
  )
}

export default Card
