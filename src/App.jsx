
import { useState } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState(0);

  return (
    <>
  <h1>Count{value}</h1>
  <button onClick={
    ()=>{   setvalue(value+1)
    }
  }>Add</button>
  <button onClick={
    ()=>{   setvalue(value+2)
    }
  }>add2</button>
</>
  )
}
export default App
