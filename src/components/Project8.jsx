import React, { useEffect, useState } from "react";

function Project8({ url }) {
  const [data, setData] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const { products } = await response.json();
      if (products && products.length > 0) {
        setData(products);
      }
    } catch (e) {
      console.log(e);
      setErrMessage(e.message);
    }
  };

  function handleScrollPercentage() {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrolled / height) * 100);
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className="">
      <div className="text-center bg-black text-white w-full fixed top-0 z-100 p-2">
        <h1 className="mb-1"> Project 8: Scroll Indicator</h1>
      </div>
      <div className="w-full bg-green-500 h-2 fixed top-10">
        <div
          style={{ width: `${scrollPercentage}%` }}
          className={`bg-orange-500 h-2`}
        ></div>
      </div>

      {data && data.length > 0
        ? data.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white text-black font-bold flex flex-col items-center justify-center"
            >
              {item.title}
            </div>
          ))
        : null}
    </div>
  );
}

export default Project8;
