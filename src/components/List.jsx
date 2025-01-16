import React, { useState } from "react";
import data from "./data";
export default function () {
  const [open, setOpen] = useState(null);
  function handletoggle(id) {
    setOpen(open === id ? null : id);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          backgroundColor: "violet",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {data && data.length > 0 ? (
          data.map((items) => (
            <div
              style={{
                backgroundColor: "salmon",
                borderRadius: "10px",
                width: "50vw",
                justifyContent: "space-between",
                alignItems: "normal",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
              }}
              key={items.id}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1>{items.title}</h1>
                <button onClick={() => handletoggle(items.id)}>
                  {open === items.id ? "-" : "+"}
                </button>
              </div>

              {open === items.id && <div className="ddiv">{items.content}</div>}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </>
  );
}
