import React, { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";

const Home = () => {
  const router = useRouter();
  const Token = '';

  useEffect(()=>{
    const Token = localStorage.getItem('token');
    if (!Token) {
      router.push('/') 
    }
  },[])

  const handleLogout = () => {
    axios
      .post("https://nes-backend.onrender.com/auth/userlogout", {
        headers: {
          token: Token,
        },
      })
      .then((res) => {
        // localStorage.removeItem('token');
        // alert("Logout successfully...!!");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="flex items-center justify-between bg-teal-600 p-6 fixed w-full mb-6 z-10 top-0">
      <div className="flex items-center justify-start text-white mr-6">
        <span className="font-semibold border rounded-2xl text-xl tracking-tight">
          NEWSAPP
        </span>
      </div>
      <div className="flex items-center justify-end">
        <div className="text-lg flex">
          <Link href="/" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/about" className="block mt-4 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link href="/contact" className="block mt-4 text-teal-200 hover:text-white mr-4">
            Contact
          </Link>
          <button onClick={handleLogout} className="block mt-4 text-teal-200 hover:text-white">
            Logout
          </button>
        </div>
      </div>
    </nav>
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Recent Articles</h1>
      </div>
      <div className="mx-10 my-20">
        <HomeCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
