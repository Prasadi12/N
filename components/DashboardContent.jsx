import React, { useEffect, useState } from "react";
import axios from 'axios'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const DashboardContent = () => {
  const [data, setData] = useState([])

  const router = useRouter();
  const { id } = router.query;

  useEffect(()=> {
    axios.get('http://localhost:5000/article/')
    .then(res => {
      console.log(res)
      setData(res.data); // Assuming the response data is an array
    })
    .catch(err => console.log(err));
  }, [id])

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/article/deletearticle/${id}`)
      .then(res => {
        console.log(res);
        alert('Record deleted successfully')
        window.location.reload(true);
      }
    )
    .catch(err => console.log(err));
  }
  
  return (
    <div className="bg-white-100 flex flex-col items-center justify-start pt-12 min-h-full">
      <div className="d-flex justify-content-center mt-2 text-2xl font-semibold text-teal-700 pb-4">
        <h3>Article List</h3>
      </div>
      <table className="min-w-full bg-white border divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              AuthorName
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              PublishDate
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((article) => (
            <tr key={article.id}>
              <td className="px-6 py-4 whitespace-nowrap">{article.title}</td>
              <td>{
                    <Image src={'http://localhost:5000/'+article.image} width={100} height={100} alt=""/>
                    }</td>
              <td className="px-6 py-4 whitespace-nowrap">{article.authorname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{article.publishdate}</td>
              <td className="px-4 py-4 whitespace-nowrap flex cursor-pointer">
                <div className="mr-2">
                  <Link href={`/dashboard/editarticle/${article._id}`}><AiFillEdit  style={{fontSize:'20px'}}/></Link>
                  {/* {isModalOpen && <MyModal closeModal={() => setIsModalOpen(false)} />} */}
                </div>
                <div className="mr-2">
                <Link href={`/dashboard/showarticle/${article._id}`}><BiShow  style={{fontSize:'20px'}}/></Link>
                </div>
                <div>
                  <AiFillDelete onClick={() => handleDelete(article._id)} style={{fontSize:'20px'}}/> 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardContent;
