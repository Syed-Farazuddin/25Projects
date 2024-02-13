import React, { useEffect, useState } from "react";

function Project11() {
  const [name, setName] = useState("Syed-Farazuddin");
  const [data, setData] = useState([]);
  async function fetchUserData(name) {
    try {
      const res = await fetch(`https://api.github.com/users/${name}`);
      const result = await res.json();
      setData(result);
    } catch (E) {
      console.log(E);
    }
  }
  const HandleClick = () => {
    useEffect(() => {
      fetchUserData(name);
    }, [HandleClick]);
  };
  console.log(data);
  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl mb-4 font-bold">
        Project 11 : Github Profile Finder
      </h1>
      <div className="flex justify-center items-center w-1/2">
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="outline-none px-5 text-xl placeholder:text-lg placeholder:text-white  h-[60px] w-[100%] text-white bg-black text-center border-white border-2 border-r-0 placeholder:text-center"
          type="text"
          placeholder="Enter github username"
        />

        <button
          className="p-2 my-4 bg-blue-400 hover:bg-orange-500 w-[245px] font-bold text-black h-[60px]"
          onClick={HandleClick()}
        >
          Find Github Profile
        </button>
      </div>

      <div className="w-1/2 h-1/2 bg-white text-black p-5">
        <div className="flex">
          <img src={data.avatar_url} className="rounded-full w-1/3" alt="" />
          <div className="flex flex-col">
            <p className="text-slate-600 font-extrabold text-center text-xl">
              {data.login}
            </p>
            <h1 className="text-orange-500 text-2xl text-center mt-20 font-extrabold mb-2">
              {data.bio}
            </h1>
            <div className="flex justify-between">
              {" "}
              <p className="text-slate-600 font-bold">{data.location}</p>
              <p className="text-slate-600 font-bold">{data.updated_at}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project11;
