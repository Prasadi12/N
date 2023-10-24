import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Article = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios
        .get("http://localhost:5000/article/getarticle/" + id)
        .then((res) => {
            console.log(res);
          setData(res.data); // Slice the array to get the first six articles
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <div>
      <NavBar />
          <div
            className="flex flex-col items-center justify-center py-2"
          >
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="mt-3 text-2xl">{data.description}</p>
              <div className="mt-5">
              <Image src={'http://localhost:5000/'+data.image} alt="" width={500} height={500}/>
              </div>
              <div className="mt-5 text-left max-w-2xl">
                <p className="text-xl">{data.content}</p>
              </div>

              <div className="mt-8 max-w-md">
                <form className="flex items-center">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="w-full border rounded-l-lg py-2 px-4"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
                  >
                    Comment
                  </button>
                </form>
              </div>
            </main>
          </div>
      <Footer />
    </div>
  );
};

export default Article;
