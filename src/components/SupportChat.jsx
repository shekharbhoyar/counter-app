import React, { useState } from 'react'

export default function SupportChat() {
    let [name,setName]=useState("")
    let[isComplete,setIsComplete]=useState(false)
    const beginChat = () => {
        if (name) {
          setIsComplete(true);
        }
      };

      const capitalize = str => {
        const breakStr = str.split(" ");
        return breakStr
          .map(word => word.charAt(0).toUpperCase() + word.substring(1))
          .join(" ");
      };
      

  return (
   
  <div className="app">
    <h1 id="title">Support Chat</h1>
    {!isComplete ? (
      <div className="form-fields">
        <input
          id="name-fld"
          type="text"
          placeholder="Name"
          onChange={e => setName(capitalize(e.target.value))}
          value={name}
        />
        <button id="enter-btn" onClick={beginChat}>
          Go!
        </button>
      </div>
    ) : (
      <h1 id="confirm">
        Hey, {name}! Our support team is unavailable at the moment!
      </h1>
    )}
  </div>


  )
}
