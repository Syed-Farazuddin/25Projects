import React, { useRef, useState } from "react";

function Project15() {
  const ref = useRef();
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="bg-black flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl mb-4 font-bold mt-20">
        Project 15 : Scroll to particular section
      </h1>

      <div className="w-1/2 h-[50vh] bg-white text-black mb-10">
        <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
          Section 1
        </h1>
      </div>
      <div
        onClick={() => {
          console.log(ref);
          let pos = ref.current.getBoundingClientRect().top;
          window.scrollTo({
            top: pos,
            behavior: "smooth",
          });
        }}
        className="w-1/2 h-[50vh] bg-orange-200 cursor-pointer  text-black mb-10"
      >
        <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
          Scroll to section 4
        </h1>
      </div>
      <div className="w-1/2 h-[50vh] bg-white text-black mb-10">
        <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
          Section 2
        </h1>
      </div>
      <div className="w-1/2 h-[50vh] bg-white text-black mb-10">
        <h1 className="text-black text-2xl text-center mt-20 font-extrabold">
          Section 3
        </h1>
      </div>
      <div
        className="w-1/2 flex justify-center items-center h-[50vh] bg-green-300  text-blue-600 mb-10 cursor-pointer "
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <h1 ref={ref} className=" text-2xl text-center mt-20 font-extrabold">
          Scroll to top
        </h1>
      </div>
    </div>
  );
}

export default Project15;
