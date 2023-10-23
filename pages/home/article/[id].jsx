import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";

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

  const handleLogout = () => {
    axios.post('http://localhost:5000/auth/userlogout')
    .then(res => {
        alert('Logout successfully...!!')
        router.push('/');
    }).catch(err => console.log(err));
}

  return (
    <div>
        <div>
        <nav className="flex items-center justify-between flex-wrap bg-teal-600 p-6">
      <div className="justify-between flex">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold border rounded-2xl text-xl tracking-tight">NEWS-APP</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow">
            <Link
              href="/home"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Contact
            </Link>
            <button onClick={handleLogout}
              className="block bg-white hover:bg-blue-700 rounded-lg mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
        </div>
          <div
            className="flex flex-col items-center justify-center py-2"
          >
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="mt-3 text-2xl">{data.description}</p>
              <div className="mt-5">
                {/* <img className="rounded-lg" src="https://via.placeholder.com/800x400" alt="Article" /> */}
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
