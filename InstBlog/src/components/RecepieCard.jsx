import React from 'react'

function RecepieCard({imageUrl, title}) {
  return (
    <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden m-3 mx-auto">
       <img
        className="object-cover object-center h-48 w-full"
        src={imageUrl}
        alt="Card"
      />
       <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
      </div>
    </div>

  )
}

export default RecepieCard
