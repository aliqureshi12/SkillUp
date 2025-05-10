import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import medal from '../../assets/Medal.png';

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="mt-auto ">
            <div className="max-w-6xl mx-auto ">


                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/80 z-40"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}


                <div
                    className={`fixed top-0 left-0 h-full w-80 bg-white z-100 shadow-lg transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex justify-between items-center p-4 ">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="w-40" />
                        </Link>
                        <button onClick={() => setSidebarOpen(false)}>
                            <i className="fas fa-times cursor-pointer text-gray-600 text-xl"></i>
                        </button>
                    </div>
                    <div className="space-y-4 h-full overflow-y-auto pb-30">
                        <div className='bg-BgPrimary py-15 relative'>
                            <div className="font-semibold text-white text-center">M. Asad Rehman</div>


                            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/5">
                                <img
                                    src={avatar}
                                    alt="Avatar"
                                    className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-lg"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-4 space-y-3 mt-16 text-gray-700">
                            <a href="/login"><SidebarItem icon="fa-book" text="Login" /></a>
                            <a href="/registration"><SidebarItem icon="fa-book" text="Registration" /></a>
                            <a href="/add-course"><SidebarItem icon="fa-book" text="Add Courses" /></a>
                            <a href="/generated-courses"><SidebarItem icon="fa-book" text="Generated Courses" /></a>



                        </div>
                        <div className='shadow-lg rounded-sm p-5 m-5'>
                            <div className=' flex flex-row'>
                                <h1 className='font-poppins font-extrabold text-[20px]'>Upgrade your
                                    Account to Pro</h1>
                                <img src={medal} alt="Logo" className="w-13 h-auto object-contain" />

                            </div>
                            <div>
                                <p className='font-poppins text-[15px] mt-4 mb-8'>Upgrade to premium to get premium features</p>
                            </div>
                            <button className='btn-primary'>
                                Upgrade
                            </button>

                        </div>
                    </div>
                </div>


                <div className="flex-1 w-full z-99 fixed top-0 max-w-6xl">
                    <header className="bg-white p-4 flex flex-row shadow-lg rounded-t-0 rounded-b-2xl justify-between">
                        <div className='w-1/15 flex items-center'>
                            <button onClick={() => setSidebarOpen(true)} className="text-2xl text-gray-700">
                                <i className="fas cursor-pointer fa-bars"></i>
                            </button>
                        </div>

                        <div className='w-full flex flex-row items-center'>
                            <div className='flex justify-start items-center'>
                                <h1 className="text-xl font-bold text-gray-800">Courses</h1>
                            </div>
                            <div className='w-full flex justify-center'>
                                <form className='w-1/2'>
                                    <div className='relative'>
                                        <input type="text"
                                            placeholder='Search here...'
                                            className='pl-10 w-full rounded-md bg-BgGreyColor focus:outline-none focus:border-primary py-2'
                                        />
                                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-greenSmall"></i>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className="flex items-center gap-4 text-xl text-gray-600">
                            <i className="fas fa-bell cursor-pointer"></i>
                            <i className="fas fa-cog cursor-pointer"></i>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
}

const SidebarItem = ({ icon, text }) => (
    <div className="flex items-center gap-3 cursor-pointer hover:text-teal-600">
        <i className={`fas ${icon}`}></i>
        <span>{text}</span>
    </div>
);
