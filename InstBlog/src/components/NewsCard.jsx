import React from 'react'

function NewsCard({imageUrl, title, description, author, date}) {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden m-3 mx-auto">
      <img
        className="object-cover object-center h-48 w-full"
        src={imageUrl}
        alt="Card"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600 mb-3">
          {description}
        </p>
        <p className="text-gray-500 text-sm mb-1">Author: {author}</p>
        <p className="text-gray-500 text-sm">Date: {date}</p>
      </div>
    </div>
  )
}

export default NewsCard
