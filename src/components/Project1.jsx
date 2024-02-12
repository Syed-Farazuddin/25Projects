import React, { useState } from "react";
import Data1 from "../Data";
function Project1() {
  const data = Data1;
  const [scrollme, setScrollme] = useState(false);
  const [id, setId] = useState();
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiIds, setMultiIds] = useState([]);
  const handleMultipleSelection = (id) => {
    const cpyMultiple = [...multiIds];
    const findInd = cpyMultiple.indexOf(id);
    if (findInd == -1) {
      cpyMultiple.push(id);
      console.log(cpyMultiple);
      console.log("ID is not present");
    } else {
      console.log("ID is already present");
      cpyMultiple.splice(findInd);
      console.log(cpyMultiple);
    }
    setMultiIds(cpyMultiple);
  };
  const handleSingleSelection = (id) => {
    console.log(id);
    setId(id);
    setScrollme(!scrollme);
  };
  return (
    <div className="h-[100vh] bg-black text-white flex items-center justify-center flex-col">
      <h1 className="text-white font-bold text-2xl mb-10">
        Project1: Accordian
      </h1>
      <h4
        className="text-black font-extrabold cursor-pointer rounded-xl text-xl mb-5 bg-orange-400 p-3"
        onClick={() => {
          setMultipleSelection(!multipleSelection);
        }}
      >
        Select Multiple
      </h4>
      <div className="bg-white p-4 w-[80%]">
        {Data1.map((item) => (
          <div key={item.id} className="bg-orange-400 mb-5 p-2">
            <div className="font-bold text-black flex justify-between">
              <p className="mb-4">{item.question}</p>
              <p
                className="font-bold text-2xl cursor-pointer"
                onClick={() => {
                  console.log(multipleSelection);
                  multipleSelection
                    ? handleMultipleSelection(item.id)
                    : handleSingleSelection(item.id);
                }}
              >
                &darr;
              </p>
            </div>
            <div>
              {multipleSelection
                ? multiIds.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                : id === item.id && <div>{item.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project1;
