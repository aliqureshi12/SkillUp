import React from 'react'
import animation from '../../assets/animation.png';
import Education from '../../assets/Education.png';
import Brain from '../../assets/Brain.png';
import Microscope from '../../assets/Microscope.png';
import CourseCard from '../Card/CourseCard';
import CoursePreview from '../CardsPreview/CoursePreview';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AssignmentPreview from '../CardsPreview/AssignmentPreview';
import QuizPreview from '../CardsPreview/QuizPreview';


function StudentDashboard({ courses, assignment, quizzes }) {
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
            <div className='grid grid-cols-[75%_25%] max-w-6xl mx-auto'>
                <div className='order-2 z-1 '>
                    <div className='space-y-8 sticky top-25'>

                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h3 className='text-lg font-bold mb-4'>⏳ Upcoming Deadlines</h3>
                            <div className='space-y-4'>
                                <div className='flex items-start gap-3'>
                                    <div className="w-8 h-8 bg-[#4CBC9A] rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-file-alt text-white text-sm"></i>
                                    </div>
                                    <div>
                                        <p className='font-medium'>Web Design Final Project</p>
                                        <p className='text-sm text-gray-500'>Due: Tomorrow 3:00 PM</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-3'>
                                    <div className="w-8 h-8 bg-[#FEC64F] rounded-full flex items-center justify-center mt-1">
                                        <i className="fas fa-question-circle text-white text-sm"></i>
                                    </div>
                                    <div>
                                        <p className='font-medium'>JavaScript Quiz</p>
                                        <p className='text-sm text-gray-500'>Due: Fri 11:59 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h3 className='text-lg font-bold mb-4'>📈 Course Progress</h3>
                            <div className='space-y-4'>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>React Fundamentals</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#4CBC9A] h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span>UI/UX Design</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-[#FEC64F] h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='bg-white p-6 rounded-xl shadow-md'>
                            <h3 className='text-lg font-bold mb-4'>🚀 Quick Actions</h3>
                            <div className='space-y-3'>
                                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                    <i className="fas fa-video text-[#4CBC9A]"></i>
                                    Join Live Session
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                    <i className="fas fa-tasks text-[#FEC64F]"></i>
                                    View Study Plan
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                    <i className="fas fa-certificate text-[#6c5dd3]"></i>
                                    Request Certificate
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-1 pr-5'>
                    <div className='max-w-6xl relative mx-auto flex flex-col bg-BgPrimary rounded-2xl py-14 px-10 shadow-2xl'>
                        <i className='fas fa-circle-half-stroke rotate-180 absolute text-white text-[200px] opacity-20  -right-25'></i>
                        <div className='text-left w-[80%] ' >
                            <h1 className='heading-text-lg font-poppins pb-2 text-white'>
                                Join Now and Get Discount
                                Voucher Up To 20%
                            </h1>
                            <p className='text-white font-poppins'>Start your learning journey with SkillUp — enroll in top-rated courses designed to boost your skills and career.

                            </p>
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
                                Track your course completions, quiz results, and assignments in one place.
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
                    <CoursePreview courses={Array.isArray(courses) ? courses.slice(0, 4) : []} />
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Enrolled Assignments
                        </h1>
                    </div>
                    <AssignmentPreview assignment={Array.isArray(assignment) ? assignment.slice(0, 3) : []} />
                    <div className='text-left mt-15 mb-10'>
                        <h1 className='heading-text-lg font-poppins '>
                            Enrolled Quizez
                        </h1>
                    </div>
                    <QuizPreview quizzes={Array.isArray(quizzes) ? quizzes.slice(0, 3) : []} />


                </div>

            </div>

        </div>
    )
}

export default StudentDashboard