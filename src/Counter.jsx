import React, { useState } from 'react'
import { Button } from '@mui/material'

export default function Counter() {
    let [counter,setCounter]=useState(0)

    const increment=()=>{
        counter=counter+1 
        setCounter(counter)
    }
    const decrement=()=>{
        counter=counter-1 
        setCounter(counter)
    }
  return (
    <div className="parentDiv">
        <div className="childDiv">
        <h1  className="text-3xl font-bold"
>Counter</h1>
<h2 className={counter>=0?"text-2xl font-bold text-green-500":"text-2xl font-bold text-red-500"} >{counter}</h2>

<Button onClick={increment} variant="contained">Increment</Button>
<br />
<br />
<Button onClick={decrement} variant="contained">Decrement</Button>

    </div>
    </div>
  )

}
