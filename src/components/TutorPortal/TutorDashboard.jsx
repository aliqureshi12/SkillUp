import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TutorDashboard = ({ tcourses, enrollmentRequests, liveSessions, submissions }) => {
    const performanceData = [
        { name: 'Week 1', score: 65 },
        { name: 'Week 2', score: 75 },
        { name: 'Week 3', score: 82 },
        { name: 'Week 4', score: 78 },
        { name: 'Week 5', score: 88 },
    ];

    const submissionData = [
        { name: 'Graded', value: 75 },
        { name: 'Pending', value: 25 },
    ];

    const COLORS = ['#4CBC9A', '#FEC64F'];

    return (
        <div className="min-h-screen mt-16 mb-16 font-poppins px-4 sm:px-6">
            <div className='grid grid-cols-1 lg:grid-cols-[75%_25%] max-w-6xl mx-auto gap-6'>


                <div className='order-1 lg:pr-5'>

                    <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-6 md:mt-10'>
                        <div className='bg-[#6c5dd3] p-4 md:p-6 rounded-xl text-white shadow-lg'>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className='text-xl md:text-2xl font-bold'>24</p>
                                    <p className='text-xs md:text-sm'>Courses</p>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[5px] flex items-center justify-center">
                                    <i className="fas fa-book-open text-[#6c5dd3] text-lg md:text-2xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#4CBC9A] p-4 md:p-6 rounded-xl text-white shadow-lg'>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className='text-xl md:text-2xl font-bold'>156</p>
                                    <p className='text-xs md:text-sm'>Students</p>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[5px] flex items-center justify-center">
                                    <i className="fas fa-users text-[#4CBC9A] text-lg md:text-2xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#FEC64F] p-4 md:p-6 rounded-xl text-white shadow-lg'>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className='text-xl md:text-2xl font-bold'>42</p>
                                    <p className='text-xs md:text-sm'>Pending Submissions</p>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[5px] flex items-center justify-center">
                                    <i className="fas fa-file-import text-[#FEC64F] text-lg md:text-2xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className='bg-black p-4 md:p-6 rounded-xl text-white shadow-lg'>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className='text-xl md:text-2xl font-bold'>84%</p>
                                    <p className='text-xs md:text-sm'>Avg. Attentiveness</p>
                                </div>
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[5px] flex items-center justify-center">
                                    <i className="fas fa-brain text-black text-lg md:text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row w-full gap-5 mt-8 md:mt-10">
                        <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-4 md:p-5">
                            <h3 className="text-md md:text-lg font-bold mb-4">Student Performance Trend</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={performanceData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#6c5dd3"
                                        strokeWidth={2}
                                        dot={{ r: 4 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-4 md:p-5">
                            <h3 className="text-md md:text-lg font-bold mb-4">Submissions Status</h3>
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={submissionData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {submissionData.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-center gap-4">
                                {submissionData.map((entry, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                                        <span className="text-sm">{entry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className='text-left mt-10 md:mt-15 mb-6 md:mb-10'>
                        <h1 className='text-xl md:text-3xl font-poppins'>Your Courses</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                        {tcourses.map((tcourse, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-md md:text-lg font-bold">{tcourse.title}</h3>
                                        <p className="text-xs md:text-sm text-gray-500">{tcourse.enrolled} students</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                                            <i className="fas fa-edit text-[#6c5dd3] text-md md:text-lg"></i>
                                        </button>
                                        <button className="p-2 hover:bg-gray-100 rounded-lg">
                                            <i className="fas fa-chart-bar text-[#4CBC9A] text-md md:text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="w-3/4 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-[#6c5dd3] h-2 rounded-full"
                                            style={{ width: `${tcourse.completion}%` }}
                                        ></div>
                                    </div>
                                    <span className="lg:text-[12px] md:text-sm">{tcourse.completion}% Complete</span>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='text-left mt-10 md:mt-15 mb-6 md:mb-10'>
                        <h1 className='text-xl md:text-3xl font-poppins'>Enrollment Requests</h1>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
                        {enrollmentRequests.map((request, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between py-3 border-b last:border-0">
                                <div className="mb-2 md:mb-0">
                                    <p className="font-medium text-sm md:text-base">{request.studentName}</p>
                                    <p className="text-xs md:text-sm text-gray-500">Requested: {request.course}</p>
                                </div>
                                <div className="flex gap-2 mt-2 md:mt-0">
                                    <button className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-[#4CBC9A] text-white rounded-lg hover:bg-[#3aa384]">
                                        Approve
                                    </button>
                                    <button className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-[#FF7A7A] text-white rounded-lg hover:bg-[#e66868]">
                                        Deny
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className='text-left mt-10 md:mt-15 mb-6 md:mb-10'>
                        <h1 className='text-xl md:text-3xl font-poppins'>Session Analytics</h1>
                    </div>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={liveSessions}>
                                <XAxis dataKey="date" />
                                <YAxis domain={[0, 100]} />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="attentiveness"
                                    stroke="#6c5dd3"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="attendance"
                                    stroke="#4CBC9A"
                                    strokeWidth={2}
                                    dot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>


                <div className='order-2'>
                    <div className='space-y-6 lg:space-y-8 sticky top-25'>

                        <div className='bg-white p-4 md:p-6 rounded-xl shadow-md'>
                            <h3 className='text-md md:text-lg font-bold mb-4'>🚀 Quick Actions</h3>
                            <div className='space-y-2 md:space-y-3'>
                                <button className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition">
                                    <i className="fas fa-plus text-[#6c5dd3] text-sm md:text-base"></i>
                                    <span className="text-sm md:text-base">Create New Course</span>
                                </button>
                                <button className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition">
                                    <i className="fas fa-question-circle text-[#4CBC9A] text-sm md:text-base"></i>
                                    <span className="text-sm md:text-base">Create Assignment</span>
                                </button>
                                <button className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition">
                                    <i className="fas fa-video text-[#FEC64F] text-sm md:text-base"></i>
                                    <span className="text-sm md:text-base">Schedule Live Session</span>
                                </button>
                                <button className="w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 hover:bg-gray-100 rounded-lg transition">
                                    <i className="fas fa-robot text-[#6c5dd3] text-sm md:text-base"></i>
                                    <span className="text-sm md:text-base">AI Content Tools</span>
                                </button>
                            </div>
                        </div>


                        <div className='bg-white p-4 md:p-6 rounded-xl shadow-md'>
                            <h3 className='text-md md:text-lg font-bold mb-4'>📅 Upcoming Sessions</h3>
                            <div className='space-y-3 md:space-y-4'>
                                {liveSessions.map((session, index) => (
                                    <div key={index} className='flex items-start gap-2 md:gap-3'>
                                        <div className="w-6 h-6 md:w-8 md:h-8 bg-[#6c5dd3] rounded-full flex items-center justify-center mt-1">
                                            <i className="fas fa-video text-white text-xs md:text-sm"></i>
                                        </div>
                                        <div>
                                            <p className='font-medium text-sm md:text-base'>{session.title}</p>
                                            <p className='text-xs md:text-sm text-gray-500'>{session.date} | {session.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className='bg-white p-4 md:p-6 rounded-xl shadow-md'>
                            <h3 className='text-md md:text-lg font-bold mb-4'>📊 Performance Snapshot</h3>
                            <div className='text-center'>
                                <div className="mx-auto" style={{ width: '70%', maxWidth: '150px' }}>
                                    <CircularProgressbar
                                        value={78}
                                        text={`78%`}
                                        styles={buildStyles({
                                            pathColor: '#6c5dd3',
                                            textColor: '#6c5dd3',
                                            trailColor: '#f0f0f0',
                                        })}
                                    />
                                </div>
                                <p className="text-sm mt-2 text-gray-600">Average Class Score</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDashboard;