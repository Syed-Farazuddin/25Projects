import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Project4() {
  const [currIdx, setCurrIdx] = useState(0);
  function Dots() {
    return (
      <div>
        {[...Array(images.length)].map((i, index) => (
          <p
            key={index}
            className="w-2 h-2 rounded-full bg-white absolute bottom-2"
          ></p>
        ))}
      </div>
    );
  }
  const images = [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais",
    "https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580",
    "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg",
  ];
  return (
    <div className="h-[100vh] bg-black text-white flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-white mb-10">
        Project 4 : Image Slider
      </h1>
      <div className="flex justify-center items-center bg-white h-1/2 w-[500px] flex-col relative">
        {images.map((item, index) => (
          <img
            key={index}
            className={
              currIdx !== index
                ? "hidden"
                : "w-full h-full border-2 border-slate-700"
            }
            src={item}
            alt=""
          />
        ))}
        <FaArrowRight
          className="absolute right-2 w-8 bg-white h-8 rounded-full p-2 cursor-pointer"
          color="black"
          onClick={() => {
            if (currIdx === images.length - 1) {
              setCurrIdx(0);
            } else {
              setCurrIdx(currIdx + 1);
            }
          }}
        />
        <FaArrowLeft
          className="absolute left-2 w-8 bg-white h-8 rounded-full p-2 cursor-pointer"
          color="black"
          onClick={() => {
            if (currIdx > 0) {
              setCurrIdx(currIdx - 1);
            } else {
              setCurrIdx(images.length - 1);
            }
          }}
        />
        {/* <Dots /> */}
      </div>
    </div>
  );
}
