import React, { useState } from "react";

export default function Colorpanel() {
  let [color, setColor] = useState("olive");
  const colorChange = () => {
    setColor("red");
  };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={colorChange}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("violet");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "violet" }}
          >
            violet
          </button>
          <button
            onClick={() => {
              setColor("indigo");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "indigo" }}
          >
            indigo
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg active:scale-90 transition-transform duration-100"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}
