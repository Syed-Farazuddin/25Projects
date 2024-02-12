import React, { useState } from "react";

function Project2() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#ffffff");
  function rand(len) {
    return Math.floor(Math.random() * len);
  }
  const handleRandomColor = () => {
    console.log(type + " " + color);
    if (type === "hex") {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      console.log(hex.length);
      for (let i = 0; i < 6; i++) {
        let random = rand(hex.length);
        hexColor += hex[random];
      }
      setColor(hexColor);
    } else {
      let rgb = `rgb(${rand(100)}%, ${rand(100)}%,${rand(100)}%)`;
      setColor(rgb);
    }
    console.log(color);
  };
  return (
    <div className="h-[100vh] bg-black text-white flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold text-white mb-10">
        Project 2 : Random Color Generator
      </h1>
      <div className="flex gap-4 mb-4">
        <button
          className="bg-orange-400 p-2 text-black font-bold rounded-xl cursor-pointer"
          onClick={() => {
            setType("hex");
          }}
        >
          Create HEX
        </button>
        <button
          className="bg-orange-400 p-2 text-black font-bold rounded-xl cursor-pointer"
          onClick={() => {
            setType("RGB");
          }}
        >
          Create RGB
        </button>
        <button
          className="bg-orange-400 p-2 text-black font-bold rounded-xl cursor-pointer"
          onClick={handleRandomColor}
        >
          Create Random Color
        </button>
      </div>
      <section
        className={`w-1/2 h-1/2 flex justify-center items-center flex-col gap-4`}
        style={{ backgroundColor: color }}
      >
        {type === "hex" ? (
          <p className="font-black text-black text-4xl">{"HEX COLOR"}</p>
        ) : (
          <p className="font-black text-black text-4xl">{"RGB COLOR"}</p>
        )}
        <p className="font-black text-black text-4xl">{color}</p>
      </section>
    </div>
  );
}

export default Project2;
