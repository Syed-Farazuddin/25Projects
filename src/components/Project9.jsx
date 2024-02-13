import React, { useState } from "react";

function Project9() {
  const [currIdx, setCurrIdx] = useState("Tab 1");
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <h1 className="text-black font-bold text-xl">Content for tab 1</h1>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <h1 className="text-black font-bold text-xl">Content for tab 2</h1>
      ),
    },
    {
      label: "Tab 3",
      content: (
        <h1 className="text-black font-bold text-xl">Some random content</h1>
      ),
    },
  ];
  return (
    <div className="h-[100vh] bg-black text-white flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold text-white mb-10">Project 9 : Tabs</h1>

      <section
        className={`w-1/2 h-1/2 flex justify-center items-center gap-4 bg-white text-black flex-col`}
      >
        <div className="flex gap-4">
          {tabs.map((item, index) => (
            <button
              onClick={() => {
                setCurrIdx(item.label);
              }}
              className="bg-blue-600 p-2 rounded-lg w-[100px] text-white font-extrabold "
              key={index}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>{tabs[currIdx] && tabs[currIdx].content}</div>
      </section>
    </div>
  );
}

export default Project9;
