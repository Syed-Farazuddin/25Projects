import React, { useEffect, useRef, useState } from "react";

function Project14() {
  const ref = useRef();
  const [openModel, setOpenModel] = useState(false);
  //   useEffect(() => {
  //     function listener(event) {
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       handler(event);
  //     }
  //     document.addEventListener("mousedown", listener);
  //     document.addEventListener("touchstart", listener);
  //     return () => {
  //       document.removeEventListener("mousedown", listener);
  //       document.removeEventListener("touchstart", listener);
  //     };
  //   }, [handler, ref]);

  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl mb-4 font-bold">Project 14 : Open model</h1>
      <button
        onClick={() => {
          setOpenModel(!openModel);
        }}
        className="p-2 m-4 bg-blue-400 hover:bg-orange-500 rounded-lg font-bold text-black"
      >
        {openModel ? "Close Model" : "Open Model"}
      </button>
      {openModel ? (
        <div
          ref={ref}
          className="w-1/2 h-1/2 bg-white text-black border-2 border-orange-500"
          onClick={() => {
            console.log(ref);
          }}
        >
          <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
            Model Content here
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Project14;
