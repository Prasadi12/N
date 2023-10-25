import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nes-backend.onrender.com/article/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {data.map((article) => (
        <div
          key={article.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg p-6 w-full"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="font-bold text-xl mb-4">{article.title}</div>
              <Image
                src={"http://localhost:5000/" + "images/" + article.image}
                alt=""
                width={500}
                height={500}
              />
              <p className="text-gray-700 text-base mt-2">{article.description}</p>
            </div>
            <div className="mt-4">
              <a
                href='/login'
                className="block text-center text-cyan-600 hover:text-cyan-700"
              >
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
