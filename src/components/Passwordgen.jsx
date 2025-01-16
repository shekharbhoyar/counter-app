import React, { useState, useCallback, useEffect, useRef } from "react";

export default function Passwordgen() {
  const [length, setLength] = useState(8);
  const [numberA, setNumberA] = useState(false);
  const [charA, setCharA] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGene = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberA) str += "0123456789";
    if (charA) str += "!@#%^&*(){}_+-";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberA, charA, setPassword]);

  //usereff hook
  const passwordReff = useRef(null);
  const copyPassword = useCallback(() => {
    passwordReff.current?.select();
    passwordReff.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGene();
  }, [length, numberA, charA, passwordGene]);
  return (
    <>
      {/* <div className='w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='passwors'
          readOnly/>
        </div>
      </div> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="w-full max-w-md shadow-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray-700 flex flex-col  justify-center">
          <h1 className="text-white text-center my-3 text-2xl">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 w-full">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 "
              placeholder="password"
              readOnly
              ref={passwordReff}
            />
            <button
              onClick={copyPassword}
              className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 active:scale-95 transition-transform outline-1"
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={0}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberA}
                id="numberInput"
                onChange={() => {
                  setNumberA((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberA}
                id="charecterInput"
                onChange={() => {
                  setCharA((prev) => !prev);
                }}
              />
              <label htmlFor="charecterInput">Charecters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
