import React from "react";

export default function Divrender() {
  const colors = [
    "red",
    "green",
    "blue",
    "violet",
    "orange",
    "indigo",
    "yellow",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: "pink",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "10px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          padding: "5px",
        }}
      >
        hello
      </div>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: "600px", // Fixed width for child div
            height: "50px", // Fixed height for child div
            backgroundColor: color, // Dynamic background color
            borderRadius: "10px", // Rounded corners
            // top: "50%",
          }}
        ></div>
      ))}
    </div>
  );
}
