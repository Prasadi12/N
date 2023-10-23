import Link from "next/link";
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
})
const router = useRouter();

// axios.defaults.withCredentials = true;

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/auth/userlogin', values)
    .then(res => {
      console.log(res)
      if(res.data.role == 'admin'){
        alert('Admin successfully login...!!')
        router.push('/dashboard');
      } else {
        alert('User successfully login...!!')
        router.push('/home');
      }
      
    })
    .catch(err => {
      console.log(err)
      alert('Login Failed...!!')
    });
}
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className=" bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 mt-20">
          <div className="d-flex justify-content-center text-center mb-4 mt-2 text-2xl font-semibold text-teal-700">
            <h3>Login</h3>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              required
              onChange={e => setValues({...values, username: e.target.value})}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              required
              onChange={e => setValues({...values, password: e.target.value})}
              placeholder="*********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <h4>
              Not a Member?{" "}
              <Link href="/register" className="text-cyan-500 cursor-pointer">
                Signup now
              </Link>
            </h4>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
