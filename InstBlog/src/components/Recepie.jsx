import React from 'react'
import { useSelector } from 'react-redux'
import RecepieCard from './RecepieCard'
import { nanoid } from '@reduxjs/toolkit'

function Recepie() {
  const recepie = useSelector(state => state.recepieReducer)
  console.log(recepie)
  if(recepie.recepies.results){
    return (
      <div className='h-full w-full flex flex-wrap  overflow-auto'>
          {
            recepie.recepies.results.map( (recepie) => (
              <RecepieCard key={recepie.id} imageUrl={recepie.image} title={recepie.title}/>
            ))
          }
      </div>
    )

  }
  else{
    return (
      <div className='h-full w-full  m-auto   overflow-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-600'>Search for the food items</h1>
      </div>
    )
  }
  
}

export default Recepie
