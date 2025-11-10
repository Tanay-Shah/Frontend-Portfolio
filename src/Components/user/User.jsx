import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function User() {
  const { name } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(()=>{
      fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
    },3000)
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  {data ? (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-xs">
      <img
        src={data.avatar_url}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow mb-4"
      />
      <div className="text-lg font-semibold text-gray-800">
        GitHub Followers: <span className="text-blue-600">{data.followers}</span>
      </div>
    </div>
  ) : (
    <div className="text-gray-600 text-lg animate-pulse">Loading...</div>
  )}
</div>

  );
}

export default User;

export function gitAlert(){
alert('HEHEH')
} 
