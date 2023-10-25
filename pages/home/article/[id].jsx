import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";

const Article = () => {
  const [data, setData] = useState([]);
  const [test, setTest] = useState({ comment: "" });

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
          console.log(res);
          setData(res.data);
          if (!Token) {
            router.push('/') 
          }
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://nes-backend.onrender.com/article/createcomment", test)
      .then((res) => {
        console.log(res);
        alert("Comment send successfully...!!");
        window.location.reload(true);
      })
      .catch((err) => console.log(err));
  };

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
    <div className="flex flex-col h-screen">
      <div>
      <nav className="flex items-center justify-between bg-teal-600 p-6 fixed w-full mb-6 z-10 top-0">
      <div className="flex items-center justify-start text-white mr-6">
        <span className="font-semibold border rounded-2xl text-xl tracking-tight">
          NEWSAPP
        </span>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-lg flex">
          <Link href="/home" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/home" className="block mt-4 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link href="/home" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Contact
          </Link>
          <button onClick={handleLogout} className="block mt-4 text-teal-200 hover:text-white">
            Logout
          </button>
        </div>
      </div>
    </nav>
      </div>
      <div className="flex-1">
      <div className="flex flex-col py-2 mt-20">
        <main className="flex flex-col w-full flex-1 px-20">
          <h1 className="text-3xl flex justify-center font-bold">{data.title}</h1>
          
          <div className="mt-5 flex justify-center">
            <Image
              src={`/images/${data.image}`}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="mt-5 mb-5 flex justify-center">
            <p className="text-xl text-justify">{data.content}</p>
          </div>
          <p className="text-xl justify-start font-bold">
            Author: {data.authorname}
          </p>
          <p className="text-xl font-bold">
            Published Data :{data.publishdate}
          </p>

          <div className="mt-8  flex justify-center">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                name="comment"
                autoComplete="off"
                required
                placeholder="Write a comment..."
                onChange={(e) => setTest({ ...test, comment: e.target.value })}
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
      <Footer/>
    </div>
    </div>
  );
};

export default Article;
