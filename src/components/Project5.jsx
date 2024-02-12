import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Project5() {
  const [count, setCount] = useState(0);
  const [fetch, setFetch] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(count);
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const { products } = await data;
      setData((prev) => [...prev, ...products]);
      setLoading(false);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [count]);
  useEffect(() => {
    data && data.length === 100 && setDisable(true);
  });
  if (loading) return <div>Loading data........</div>;
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="top-0 bg-black w-full text-white px-2 py-4 flex items-center justify-center mb-10">
        <h1 className="text-2xl font-extrabold text-white ">
          Project 5:Load more
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4 p-8 cursor-pointer ">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 border-2 border-slate-500 flex flex-col justify-start items-start"
          >
            <h4 className="font-bold text-xl mb-3">{item.title}</h4>
            <p>{item.description}</p>
            <img
              className="h-[200px] mt-2 bg-cover"
              src={item.images[0]}
              alt=""
            />
          </div>
        ))}
      </div>

      <button
        disabled={disable}
        onClick={() => {
          setCount(count + 1);
          setFetch(!fetch);
        }}
        className={`px-4 py-2 bg-blue-600 mb-4 rounded-md text-center font-bold text-white`}
      >
        Load more
      </button>
      {disable && <p>You have reached to 100 products</p>}
    </div>
  );
}
