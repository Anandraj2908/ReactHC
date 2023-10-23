import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-sky-500 font-mono rounded shadow-2xl mb-4'>This is Anand !</h1>
      <Card username="Anand"/>
      <Card username="Aryan"/>
      

    </>
  )
}

export default App
