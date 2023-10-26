import MainHeader from "@/components/MainHeader";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GrArticle } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { BiLogOutCircle, BiAddToQueue, BiShow } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Showarticle = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
    authorname: "",
    image: null,
    publishdate: "",
  });

  const router = useRouter();
  const { id } = router.query;
  const Token = '';

  useEffect(() => {
    const Token = localStorage.getItem('token');
    if (id) {
      axios
        .get("https://nes-backend.onrender.com/article/getarticle/" + id, {
          headers: {
            token: Token,
          },
        })
        .then((res) => {
          if (!Token) {
            router.push('/') 
          }
          console.log(res);
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleLogout = () => {
    axios
      .post("https://nes-backend.onrender.com/auth/userlogout", {
        headers: {
          token: Token,
        },
      })
      .then((res) => {
        localStorage.removeItem('token');
        alert("Logout successfully...!!");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-200 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start bg-gray mt-2">
        <aside className="bg-white rounded-lg w-60 p-4">
          <ul>
            <li>
              <div className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
                <div className="flex flex-row justify-start items-center w-full">
                  <RxDashboard className="mr-2" />
                  <Link href="/dashboard">
                    <p className="flex-1 font-semibold text-lg">Dashboard</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
                <div className="flex flex-row justify-start items-center w-full">
                  <GrArticle className="mr-2" />
                  <h3 className="flex-1 font-semibold text-lg">
                    Manage Articles
                  </h3>
                  <FaAngleRight />
                </div>
              </div>
              <ul>
                <div className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
                  <li className="flex flex-row justify-start items-center ml-4">
                    <BiAddToQueue className="mr-2" />
                    <Link href="/dashboard">
                      <p className="flex-1 font-semibold text-lg">
                        Add article
                      </p>
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
            <li
              onClick={handleLogout}
              className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer"
            >
              <BiLogOutCircle className="mr-2" />
              <h3 className="flex-1 font-semibold text-lg">Logout</h3>
            </li>
          </ul>
        </aside>
        <main className="flex-1 ml-4 mr-4">
          <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
              <div className="d-flex justify-content-center mb-4 mt-2 text-2xl font-semibold text-teal-700">
                <h3>Show Article</h3>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title:
                </label>
                <p className="mt-2">{data.title}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <Image
                  src={`https://nes-backend.onrender.com/images/${data.image}`}
                  width={500}
                  height={500}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description :
                </label>
                <p className="mt-2 text-justify">{data.description}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="content"
                >
                  Content :
                </label>
                <p className="mt-2 text-justify">{data.content}</p>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="authorname"
                >
                  Author Name :
                </label>
                <p className="mt-2">{data.authorname}</p>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="publishdate"
                >
                  Publish Date :
                </label>
                <p className="mt-2">{data.publishdate}</p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Showarticle;
