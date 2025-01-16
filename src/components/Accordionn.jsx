import React, { useState } from "react";
import data from "./data";
import Card from "./Card";

// export default function Accordionn() {
//   const [open, setOpen] = useState(null);
//   const toggleHandle = (id) => {
//     setOpen(open === id ? null : id);
//   };
//   return (
//     <>
//       <div className="accorp">
//         {data && data.length > 0 ? (
//           data.map((dataItems) => (
//             <div className="accorc" key={dataItems.id}>
//               <div className="accorc-header">
//                 <h2>{dataItems.title}</h2>
//                 <button
//                   onClick={() => {
//                     toggleHandle(dataItems.id);
//                   }}
//                 >
//                   {open === dataItems.id ? "-" : "+"}
//                 </button>
//               </div>
//               {open === dataItems.id && (
//                 <div className="accorc-content">
//                   <p>{dataItems.content}</p>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div>no data found</div>
//         )}
//       </div>
//     </>
//   );
// }
// export default function Accordionn() {
//   const [open, setOpen] = useState(null);
//   const handleToggle = (id) => {
//     setOpen(open === id ? null : id);
//   };
//   return (
//     <>
//       <div className="accorp">
//         {data && data.length > 0 ? (
//           data.map((dataItems) => (
//             <div className="accorc" key={dataItems.id}>
//               <div className="accorc-header">
//                 {dataItems.title}
//                 <button
//                   onClick={() => {
//                     handleToggle(dataItems.id);
//                   }}
//                 >
//                   {open === dataItems.id ? "-" : "+"}
//                 </button>
//               </div>
//               {open === dataItems.id && (
//                 <div className="accorc-content">
//                   <p>{dataItems.content}</p>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div>no data found</div>
//         )}
//       </div>
//     </>
//   );
// }

const Accordionn = () => {
  const [open, setOpen] = useState(null);
  const handletoggle = () => {
    setOpen(open === null ? true : null);
  };
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50vw",
          justifyContent: "center",
          margin: "200px",
          backgroundColor: "blueviolet",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            border: "1px solid black",
            backgroundColor: "yellow",
            borderRadius: "5px",
            padding: "5px",
          }}
          onClick={handletoggle}
        >
          {open ? "hide divs" : "show divs"}
        </button>
        {open && (
          <div
            style={{
              border: "1px solid black",
              backgroundColor: "whitesmoke",
              width: "100%",
              margin: "10px",
            }}
          >
            iam content
          </div>
        )}
      </div>
    </>
  );
};
export default Accordionn;
