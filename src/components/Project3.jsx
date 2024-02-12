import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Project3({ noOfStars = 5 }) {
  const [hover, setHover] = useState(0);
  const [color, setColor] = useState("blue");
  const [rating, setRating] = useState(0);
  const handleClick = (index) => {
    console.log(index);
    setRating(index + 1);
  };
  const handleMouseIn = (index) => {
    // console.log(index);
    setHover(index);
  };
  const handleMouseOut = (index) => {
    setHover(rating);
    // setColor(index <= rating ? "#FFD700" : "blue");
  };
  return (
    <div className="h-[100vh] bg-black text-white flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-white mb-10">
        Project 2 : Star Selector
      </h1>
      <div className="flex justify-center items-center bg-white h-1/2 w-[500px] flex-col">
        <div className="flex">
          {[...Array(noOfStars)].map((_, index) => (
            <div
              key={index}
              className=""
              onClick={() => {
                handleClick(index);
              }}
              onMouseMove={() => {
                handleMouseIn(index);
              }}
              onMouseLeave={() => {
                handleMouseOut(index);
              }}
            >
              <FaStar
                className={
                  index + 1 <= (hover || rating)
                    ? "text-[#FFD700]"
                    : "text-[blue]"
                }
                size={40}
              />
            </div>
          ))}
        </div>
        <p className="text-black">Your Rating is {rating}</p>
      </div>
    </div>
  );
}
