import React, { useEffect,useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/AnandRaj2908')
        .then(res => res.json())
        .then(data => {setData(data)})

        
    }, [])

  return (
    <div className='flex justify-center items-center'>
      
      <img width={200} height={200} className="text-center m-4 rounded" src={data.avatar_url} alt="Avatar" />
      <h1 className="text-center m-4 ">Name: {data.name}</h1>
      <h2 className="text-center m-4 ">BIO: {data.bio}</h2>
    </div>
  )
}

export default Github
