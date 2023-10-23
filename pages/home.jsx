import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router';
import HomeCard from "../components/HomeCard";
import Footer from "../components/Footer";

const Home = () => {
    const router = useRouter();

    const handleLogout = () => {
        axios.post('http://localhost:5000/auth/userlogout')
        .then(res => {
            alert('Logout successfully...!!')
            router.push('/');
        }).catch(err => console.log(err));
    }

  return (
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
      <div>
        <h1 className="text-3xl font-bold text-center mt-5">Recent Articles</h1>
      </div>
      <div className="mx-10">
        <HomeCard/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
