import { useCallback, useEffect, useState, useRef } from "react"


function App() {

  const [password,setPassword] = useState('a')
  const [numbers,setNumbers] = useState(false)
  const [symbols,setSymbols] = useState(false)
  const [size,setSize] = useState('8')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    const numS="0123456789"
    const symS="!@#$%^&*()_+"
    let alpha="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numbers)
    alpha+=numS
    if(symbols)
    alpha+=symS
    let ans=""
    for(let i=0;i<size;i++)
    ans+=alpha[Math.floor(Math.random()*alpha.length)]
    setPassword(ans)
    console.log(ans)
  },[size,numbers,symbols])

  useEffect(()=>{generatePassword()},[size,numbers,symbols])

  const copyToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
    <div className="bg-neutral-500 m-10 p-4 rounded-xl" >
      <div className="conent">
        <input value={password} readOnly ref={passwordRef}></input>
        <button className="ml-5 bg-sky-500/100 rounded-xl w-20" onClick={copyToClipboard()}>Copy</button>
      </div>
      <div className="control m-5">
        <input className="m-2" type="range" name="size" min="8" max="16" value={size} onChange={(e)=>{setSize(e.target.value)}} />
        <label htmlFor="size">Size {size}</label>
        <input className="m-2" type="checkbox"  name="numbers" value={numbers} onChange={()=>{setNumbers((prev)=>!prev)}}  />
        <label htmlFor="numbers">Numbers</label>
        <input className="m-2" type="checkbox"  name="symbols" value={symbols} onChange={()=>{setSymbols((prev)=>!prev)}}  />
        <label htmlFor="symbols">Symbols</label>
        
      </div>
    </div>
    </>
    
    
  )
}

export default App
