import React, { useState } from 'react'

export default function Tailwindtest() {
    const[color,setColor]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'></div>
    </div>
  )
}

