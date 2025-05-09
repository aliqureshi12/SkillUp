import React from 'react'
import animation from '../../assets/animation.png';
import Education from '../../assets/Education.png';
import Brain from '../../assets/Brain.png';
import Microscope from '../../assets/Microscope.png';
import CourseCard from '../CourseCard';
import CoursePreview from '../CoursePreview';



function GeneratedCourses({ courses }) {
    return (
        <div className="min-h-screen mt-30 mb-30">
            <div className='max-w-6xl mx-auto flex flex-col p-4'>
                <div className='text-left'>
                    <h1 className='heading-text-lg font-poppins '>
                        Course Features
                    </h1>
                </div>

                <div className='flex flex-row gap-5 mt-10'>
                    <div className='flex flex-row justify-center items-start '>
                        <img src={animation} alt="animation" className='w-10' />
                        <div className='flex flex-col ml-5 gap-1'>
                            <p className='text-[20px] font-semibold font-poppins'>Animations</p>
                            <p className='font-poppins'>Our Course include animations</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-start '>
                        <img src={Education} alt="animation" className='w-10' />
                        <div className='flex flex-col ml-5 gap-1'>
                            <p className='text-[20px] font-semibold font-poppins'>IDE Integration</p>
                            <p className='font-poppins'>With IDE you  can practice in real-time</p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-start '>
                        <img src={Brain} alt="animation" className='w-10' />
                        <div className='flex flex-col ml-5 gap-1'>
                            <p className='text-[20px] font-semibold font-poppins'>Quizes & Assignments</p>
                            <p className='font-poppins'>With Quizes and Assignments you can practice </p>
                        </div>
                    </div>


                </div>
                <div className='text-left my-10'>
                    <h1 className='heading-text-lg font-poppins '>
                        Generated Courses
                    </h1>
                </div>
                <CoursePreview courses={courses} />
            </div>


        </div>
    )
}

export default GeneratedCourses