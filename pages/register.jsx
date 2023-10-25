import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useRouter } from "next/router";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    role: "",
    username: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/createuser", data)
      .then((res) => {
        console.log(res);
        alert("Registration successfully...!!");
        router.push("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md rounded px-8 pt-2 pb-4 mt-3 mb-4 w-1/3"
        >
          <div className="d-flex justify-content-center mb-4 mt-8 text-2xl font-semibold text-teal-700">
            <h3>Registration</h3>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              required
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              name="age"
              required
              onChange={(e) => setData({ ...data, age: e.target.value })}
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              name="role"
              required
              onChange={(e) => setData({ ...data, role: e.target.value })}
              placeholder="Enter your role"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              name="username"
              required
              onChange={(e) => setData({ ...data, username: e.target.value })}
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
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="*********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-teal-600 text-white text-center py-4 absolute bottom-0 w-full">
        © 2023 All rights reserved.
      </footer>
    </div>
  );
};

export default Register;
