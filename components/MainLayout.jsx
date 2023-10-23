import React from 'react';
import MainHeader from './MainHeader';
import { GrArticle } from 'react-icons/gr';
import { FaAngleRight } from 'react-icons/fa';
import { BiLogOutCircle,BiAddToQueue,BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { RxDashboard } from 'react-icons/rx';
import Addarticle from './AddArticle';
import { useState } from 'react';
import DashboardContent from './DashboardContent';

const MainLayout = ({ children }) => {
  const [showdashboard, setShowDashboard] = useState(true);
  const [showAddArticle, setShowAddArticle] = useState(false);

  const handleDashboardClick = () => {
    setShowDashboard(true);
    setShowAddArticle(false);
  };
  const handleAddArticleClick = () => {
    setShowDashboard(false);
    setShowAddArticle(true);
  };

  const showComponent = () => {
    if(showdashboard) { 
        return  <DashboardContent/>
    }
    if(showAddArticle) { 
        return <Addarticle /> 
    }
     
  }

  return (
    <div className='bg-gray-200 w-screen min-h-screen'>
        <MainHeader/>
        <div className='flex justify-start items-start bg-gray'>
            <aside className='bg-white rounded-lg w-60 p-4'>
                <ul>
                    <li >
                        <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                            <div className='flex flex-row justify-start items-center w-full' onClick={handleDashboardClick}>
                                <RxDashboard className='mr-2'/>
                                <p className='flex-1 font-semibold text-lg'>Dashboard</p>
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
                                <li className='flex flex-row justify-start items-center ml-4' onClick={handleAddArticleClick}>
                                    <BiAddToQueue className='mr-2'/>
                                    <p className='flex-1 font-semibold text-lg'>Add article</p>
                                </li>
                            </div>
                            {/* <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                                <li className='flex flex-row justify-start items-center ml-4' >
                                    <AiOutlineEdit className='mr-2'/>
                                    <p className='flex-1 font-semibold text-lg'>Edit article</p>
                                </li>
                            </div>
                            <div className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                                <li className='flex flex-row justify-start items-center ml-4' >
                                    <BiShow className='mr-2'/>
                                    <p className='flex-1 font-semibold text-lg'>Show article</p>
                                </li>
                            </div> */}
                        </ul>
                    </li>
                    <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer'>
                        <BiLogOutCircle className='mr-2'/>
                        <h3 className='flex-1 font-semibold text-lg'>Logout</h3>
                    </li>
                </ul>
            </aside>
            <main className='flex-1 ml-4 mr-4'>
                {showComponent()}
            </main>
        </div>
    </div>
  )
};

export default MainLayout;
