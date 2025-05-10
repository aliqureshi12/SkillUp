import React from 'react'
import animation from '../../assets/animation.png';
import Education from '../../assets/Education.png';
import Brain from '../../assets/Brain.png';
import Microscope from '../../assets/Microscope.png';
import CourseCard from '../CourseCard';
import CoursePreview from '../CoursePreview';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function StudentDashboard({ courses }) {
    const data = [
        { name: 'Mon', lastWeek: 50, thisWeek: 65 },
        { name: 'Tue', lastWeek: 60, thisWeek: 40 },
        { name: 'Wed', lastWeek: 70, thisWeek: 80 },
        { name: 'Thu', lastWeek: 50, thisWeek: 90 },
        { name: 'Fri', lastWeek: 85, thisWeek: 65 },
        { name: 'Sat', lastWeek: 55, thisWeek: 95 },
        { name: 'Sun', lastWeek: 70, thisWeek: 80 },
    ];
    return (
        <div className="min-h-screen mt-30 mb-30">
            <div className='grid grid-cols-[80%_20%] max-w-6xl mx-auto'>
                <div className='order-2 z-1 '>
                    <div className='shadow-lg rounded-sm p-5 m- bg-white sticky top-20'>
                        <div className=' flex flex-row justify-between'>
                            <h1 className='font-poppins font-extrabold text-[16px]'>Home Work</h1>
                            <i className='fas fa-ellipsis'></i>

                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-2xl h-2.5 mt-5 mb-2">
                                <div
                                    className="bg-[#FEC64F] h-2.5 rounded-full"
                                    style={{ width: '60%' }}
                                ></div>
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <p className='font-poppins font-semibold text-[11px]'>Web Design</p>
                                <p className='font-poppins font-semibold text-[11px]'>6/10</p>


                            </div>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-2xl h-2.5 mt-5 mb-2">
                                <div
                                    className="bg-BgPrimary h-2.5 rounded-full"
                                    style={{ width: '80%' }}
                                ></div>
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <p className='font-poppins font-semibold text-[11px]'>Data Structure</p>
                                <p className='font-poppins font-semibold text-[11px]'>8/10</p>


                            </div>
                        </div>





                    </div>
                </div>
                <div className='order-1 pr-5'>
                    <div className='max-w-6xl relative mx-auto flex flex-col bg-BgPrimary rounded-2xl py-14 px-10 shadow-2xl'>
                        <i className='fas fa-circle-half-stroke rotate-180 absolute text-white text-[200px] opacity-20  -right-25'></i>
                        <div className='text-left w-1/2 ' >
                            <h1 className='heading-text-lg font-poppins pb-2 text-white'>
                                Join Now and Get Discount
                                Voucher Up To 20%
                            </h1>
                            <p className='text-white font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                        </div>



                    </div>
                    <div className='max-w-6xl mx-auto grid grid-cols-3 gap-7 mt-10'>
                        <div className='relative group w-full flex flex-col bg-BgPrimary rounded-2xl py-14 px-10 justify-between shadow-lg'>

                            <i className="fas fa-check-square absolute text-white text-[150px] opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none -right-10 "></i>



                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5">
                                <i className="fas fa-check-square text-greenSmall text-3xl"></i>
                            </div>


                            <p className='font-poppins text-3xl text-white font-bold mb-2'>1500</p>
                            <p className='font-poppins text-1xl text-white'>Completed Courses</p>
                        </div>
                        <div className='relative group w-full flex flex-col bg-[#FEC64F] rounded-2xl py-14 px-10 justify-between shadow-lg'>

                            <i className="fas fa-lightbulb absolute text-white text-[150px] opacity-26 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none -right-10 "></i>



                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5">
                                <i className="fas fa-lightbulb text-[#FEC64F] text-3xl"></i>
                            </div>
                            <p className='font-poppins text-3xl text-white font-bold mb-2'>1500</p>
                            <p className='font-poppins text-1xl text-white '>Completed Courses</p>
                        </div>
                        <div className='relative group w-full flex flex-col bg-black rounded-2xl py-14 px-10 justify-between shadow-lg'>

                            <i className="fas fa-bookmark absolute text-white text-[150px] opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none -right-10 "></i>


                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-5">
                                <i className="fas fa-bookmark text-black text-3xl"></i>
                            </div>

                            <p className='font-poppins text-3xl text-white font-bold mb-2'>1500</p>
                            <p className='font-poppins text-1xl text-white'>Completed Courses</p>
                        </div>



                    </div>
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Progress Report
                        </h1>
                    </div>
                    <div className="flex w-full gap-5 mt-10 ">


                        <div className="w-2/3 bg-white shadow-md rounded-lg p-5">

                            <div>
                                <ResponsiveContainer width="100%" height={250}>
                                    <LineChart data={data}>
                                        <XAxis dataKey="name" />
                                        <YAxis domain={[0, 100]} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'black', color: '#ffff', borderRadius: '6px' }}
                                            formatter={(value) => [`${value}`, 'Score']}
                                        />
                                        <Line type="monotone" dataKey="lastWeek" stroke="#FFC107" strokeWidth={2} dot={{ r: 4 }} />
                                        <Line type="monotone" dataKey="thisWeek" stroke="#4BB998" strokeWidth={2} dot={{ r: 4 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                        </div>


                        <div className="w-1/3 bg-white shadow-md rounded-lg p-5 flex flex-col items-center justify-center">
                            <div className="w-24 h-24 mb-4">
                                <CircularProgressbar
                                    value={75}
                                    text={`75%`}
                                    styles={buildStyles({
                                        textColor: '#000',
                                        pathColor: '#4BB998',
                                        trailColor: '#f0f0f0',
                                        textSize: '18px'
                                    })}
                                />
                            </div>
                            <h3 className="text-base font-bold text-gray-700 mb-1">My Progress</h3>
                            <p className="text-sm text-gray-500 text-center px-2 mb-2">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
                            </p>
                            <button className="btn-primary">
                                More Details
                            </button>
                        </div>
                    </div>
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Enrolled Courses
                        </h1>
                    </div>
                    <CoursePreview courses={courses.slice(0, 3)} />
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Enrolled Assignments
                        </h1>
                    </div>
                    <CoursePreview courses={courses.slice(0, 3)} />
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Enrolled Quizez
                        </h1>
                    </div>
                    <CoursePreview courses={courses.slice(0, 3)} />


                </div>

            </div>

        </div>
    )
}

export default StudentDashboard