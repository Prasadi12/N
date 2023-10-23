import React, { useState } from "react";
import axios from "axios";

const Addarticle = () => {
    const [data,setData] = useState({
        title: '',
        description: '',
        content: '',
        authorname: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/article/createarticle', data)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err));
    }

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} id='addarticle' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          <div className="d-flex justify-content-center mb-4 mt-2 text-2xl font-semibold text-teal-700">
            <h3>Add Article</h3>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              name="title"
              required
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Enter title"
            />
          </div>
          {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div> */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              required
              name="description"
            //   value={formData.description}
            //   onChange={handleChange}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="content"
            >
              Content
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              type="text"
              name="content"
              required
            //   value={formData.content}
            //   onChange={handleChange}
              onChange={(e) => setData({ ...data, content: e.target.value })}
              placeholder="Enter content"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="authorname"
            >
              Author Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="authorname"
              type="text"
              name="authorname"
              required
            //   value={formData.authorname}
            //   onChange={handleChange}
              onChange={(e) => setData({ ...data, authorname: e.target.value })}
              placeholder="Enter authorname"
            />
          </div>
          {/* <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publishdate"
          >
            Publish Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="publishdate"
            type="date"
            name="publishDate"
            value={formData.publishDate}
            onChange={handleChange}
          />
        </div> */}
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
    </div>
  );
};

export default Addarticle;
