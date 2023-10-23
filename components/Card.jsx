import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5000/article/')
    .then(res => {
      setData(res.data); // Slice the array to get the first six articles
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {data.map((article) => (
        <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-lg p-6 w-full">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="font-bold text-xl mb-4">{article.title}</div>
              <p className="text-gray-700 text-base">{article.description}</p>
            </div>
            <div className="mt-4">
              <a href={`/article/${article._id}`} className="block text-center text-cyan-600 hover:text-cyan-700">
                More Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
