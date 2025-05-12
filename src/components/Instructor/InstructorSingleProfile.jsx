import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CoursePreview from '../CardsPreview/CoursePreview';

function InstructorSingleProfile({ instructor, courses }) {
    const { id } = useParams();
    const myInstructor = instructor.find(i => i.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('course')


    if (!myInstructor) {
        return <div className="text-red-500 text-center p-8">Course not found.</div>;
    }

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
                    <div className='max-w-6xl relative mx-auto flex flex-col bg-white rounded-2xl py-14 px-10 shadow-2xl'>
                        <div className='flex flex-row items-center'>
                            <div>

                                <img
                                    src={myInstructor.image}
                                    alt={myInstructor.name}
                                    className="w-40 object-cover bg-gray-300 rounded-full mr-5 h-auto"
                                />
                            </div>
                            <div>
                                <div className='flex flex-row items-center'>
                                    <p className='font-poppins text-4xl font-extrabold'>{myInstructor.name}</p>
                                    <div className="flex gap-2 flex-wrap justify-start ml-3">
                                        {myInstructor.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="bg-BgSecondary text-black px-3 py-1 rounded-[4px] text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className='mt-5'>{myInstructor.description}</p>
                                <div className="flex mt-3 ">
                                    <div className='flex flex-row gap-3'>
                                        <p className="font-poppins font-bold text-[13px] -mb-[7px]">{myInstructor.ranking}</p>
                                        <i className="fas fa-star text-yellow-400"></i>
                                    </div>

                                    <p className="text-gray-300 mx-3">|</p>
                                    <div>
                                        <p className="font-poppins text-[13px] -mb-[7px]"> Reviews ({myInstructor.reviews})</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-10'>
                            <div className='flex flex-row gap-0 mb-10'>
                                <button onClick={() => setActiveTab('course')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'course' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                                    Course
                                </button>
                                <button onClick={() => setActiveTab('reviews')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'reviews' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                                    Reviews
                                </button>

                            </div>
                            <div className=' '>
                                {activeTab == 'course' && <div>
                                    <CoursePreview
                                        courses={courses.filter(course => myInstructor.HisCourse.includes(course.id))}
                                    />


                                </div>}
                                {activeTab === 'reviews' && (
                                    <div className="flex justify-center">
                                        <h1>hi</h1>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>




                </div>

            </div>

        </div>
    )
}

export default InstructorSingleProfile