import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function Project12() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dropDown, setDropDown] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users.map((item) => item.firstName));
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading............</div>;
  }
  return (
    <div className="bg-black h-[100vh] flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl mb-4 font-bold">
        Project 11 : Search Autocomplete
      </h1>

      <div className="w-1/2 h-1/2 bg-black text-black p-5">
        {/* <div clas */}

        <div className="flex justify-center items-center text-white flex-col gap-4">
          <input
            value={searchParams}
            onChange={(e) => {
              const query = e.target.value;
              setSearchParams(query);
              if (query.length >= 1) {
                const filteredData = users.filter((item) =>
                  item.toLowerCase().startsWith(query)
                );
                if (filteredData.length > 0) {
                  setDropDown(true);
                }
                setFilteredUsers(filteredData);
              }
            }}
            className="outline-none px-5 text-xl placeholder:text-lg placeholder:text-slate-500  h-[60px] w-[100%] text-white bg-black text-center border-white border-2 placeholder:text-center"
            type="text"
            placeholder="Search users"
          />
          {dropDown ? (
            <div className="cursor-pointer ">
              {filteredUsers.map((item, index) => (
                <h1
                  className="border-b border-slate-400 text-center"
                  onClick={() => {
                    setSearchParams(item);
                    setFilteredUsers([]);
                  }}
                  key={index}
                >
                  {item}
                </h1>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project12;
