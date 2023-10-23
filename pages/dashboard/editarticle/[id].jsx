import MainHeader from "@/components/MainHeader";
import React, { useState,useEffect } from "react";
import { GrArticle } from 'react-icons/gr';
import { FaAngleRight } from 'react-icons/fa';
import { BiLogOutCircle,BiAddToQueue,BiShow } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import Link from "next/link";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Editarticle = () => {
    const [data, setData] = useState({
		title: '',
		description: '',
		content: '',
		authorname: '',
	})

    const {id} = useParams();

    useEffect(()=> {
		axios.get('http://localhost:5000/article/getarticle/'+id)
		.then(res => {
			setData({...data, 
        title: res.data.Result[0].title,
				description: res.data.Result[0].description,
				content: res.data.Result[0].content,
				authorname: res.data.Result[0].authorname
			})
		})
		.catch(err =>console.log(err));
	}, [])

    const handleSubmit = (event) => {
		event.preventDefault();
		axios.put('http://localhost:5000/article/updatearticle/${_id}', data)
		.then(res => {
			if(res.data.Status === "Success") {
				alert('success')
			}
		})
		.catch(err => console.log(err));
	}

  return (
    <div className='bg-gray-200 w-screen min-h-screen'>
        <MainHeader/>
        <div className='flex justify-start items-start bg-gray mt-2'>
        <aside className='bg-white rounded-lg w-60 p-4'>
                <ul>
                    <li >
                        <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                            <div className='flex flex-row justify-start items-center w-full' >
                                <RxDashboard className='mr-2'/>
                                <Link href='/dashboard'><p className='flex-1 font-semibold text-lg'>Dashboard</p></Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                            <div className='flex flex-row justify-start items-center w-full'>
                                <GrArticle className='mr-2'/>
                                <h3 className='flex-1 font-semibold text-lg'>Manage Articles</h3>
                                <FaAngleRight/>
                            </div>
                        </div>
                        <ul>
                            <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                                <li className='flex flex-row justify-start items-center ml-4'>
                                    <BiAddToQueue className='mr-2'/>
                                    <Link href='/dashboard'><p className='flex-1 font-semibold text-lg'>Add article</p></Link>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                        <BiLogOutCircle className='mr-2'/>
                        <h3 className='flex-1 font-semibold text-lg'>Logout</h3>
                    </li>
                </ul>
            </aside>
        <main className='flex-1 ml-4 mr-4'>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <div className="d-flex justify-content-center mb-4 mt-2 text-2xl font-semibold text-teal-700">
          <h3>Edit Article</h3>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            required
            onChange={e => setData({...data, title: e.target.value})} value={data.title}
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
            name="description"
            required
            onChange={e => setData({...data, description: e.target.value})} value={data.description}
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
            onChange={e => setData({...data, content: e.target.value})} value={data.content}
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
            onChange={e => setData({...data, authorname: e.target.value})} value={data.authorname}
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
          />
        </div> */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
        </main>
        </div>
    
    </div>
  );
};

export default Editarticle;
