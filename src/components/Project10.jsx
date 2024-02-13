import React, { useState } from "react";

function Project10() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-white flex-col">
      <h1>Project 10 : Open model</h1>
      <button
        onClick={() => {
          setOpenModel(!openModel);
        }}
        className="p-2 m-4 bg-blue-400 hover:bg-orange-500 rounded-lg font-bold text-black"
      >
        {openModel ? "Close Model" : "Open Model"}
      </button>
      {openModel ? (
        <div className="w-1/2 h-1/2 bg-white text-black">
          <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
            Model Content here
          </h1>
        </div>
      ) : null}
    </div>
  );
}

export default Project10;
