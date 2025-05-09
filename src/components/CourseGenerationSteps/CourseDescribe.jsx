import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseDescribe({ courses, setCourses }) {
    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '' || description.trim() === '') {
            setError('All fields are required.');
            setSuccess('');
            return;
        }

        const newCourse = {
            id: courses.length + 1,
            title,
            description,
        };

        setCourses([...courses, newCourse]);
        setTitle('');
        setDescription('');
        setError('');
        setSuccess('Course added successfully! Redirecting...');

        setTimeout(() => {
            navigate('/');
        }, 1500);
    };
    return (
        <div className="min-h-screen mt-30 mb-30">
            <div className='max-w-6xl mx-auto flex flex-row justify-between items-center p-4'>
                <h1 className='heading-text-lg'>
                    Generate your course in 4 easy steps!
                </h1>
                <div className="flex items-center gap-4 text-[15px] text-black ">
                    <i className="fas fa-calendar-alt cursor-pointer"></i>
                    <i className="fas fa-bookmark cursor-pointer"></i>
                    <i className="fas fa-share-alt cursor-pointer"></i>
                </div>

            </div>
            <div className="flex justify-center pt-10">
                <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="z-10 w-16 h-16 bg-BgPrimary rounded-full flex items-center justify-center text-white text-xl font-bold">
                        1
                    </div>


                    <div className="absolute bottom-0 w-20 h-10 border-2 border-hoverGreen rounded-b-full border-t-0"></div>


                    <div className="absolute -left-[2.9px] bottom-[35px] w-2 h-2 bg-white border-1 border-hoverGreen rounded-full"></div>


                    <div className="absolute -right-[2.9px] bottom-[35px] w-2 h-2 bg-white z-1 border-1 border-hoverGreen rounded-full"></div>
                </div>
                <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="z-10 w-16 h-16 bg-BgSecondary rounded-full flex items-center justify-center text-black text-xl font-bold">
                        2
                    </div>


                    <div className="absolute top-0 w-20 h-10 border-2 border-hoverLightGreen rounded-t-full border-b-0"></div>



                    <div className="absolute -right-[2.9px] bottom-[35px] w-2 h-2 bg-white border-1 z-1 border-hoverLightGreen rounded-full"></div>
                </div>
                <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="z-10 w-16 h-16 bg-BgSecondary rounded-full flex items-center justify-center text-black text-xl font-bold">
                        3
                    </div>


                    <div className="absolute bottom-0 w-20 h-10 border-2 border-hoverLightGreen rounded-b-full border-t-0"></div>



                    <div className="absolute -right-[2.9px] bottom-[35px] w-2 h-2 bg-white z-1 border-1 border-hoverLightGreen rounded-full"></div>
                </div>
                <div className="relative flex items-center justify-center w-20 h-20">
                    <div className="z-10 w-16 h-16 bg-BgSecondary rounded-full flex items-center justify-center text-black text-xl font-bold">
                        4
                    </div>


                    <div className="absolute top-0 w-20 h-10 border-2 border-hoverLightGreen rounded-t-full border-b-0"></div>



                    <div className="absolute -right-[2.9px] bottom-[35px] w-2 h-2 bg-white z-1 border-1 border-hoverLightGreen rounded-full"></div>
                </div>

            </div>
            <div className='max-w-6xl mx-auto pt-20 p-4 flex flex-col'>
                <h1 className='text-2xl font-bold pb-10'>
                    Describe your Course
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block font-medium text-gray-700 mb-1">
                            Name of Your Core  Topic:
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Type Your core topic here..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="pl-10 w-full rounded-md bg-BgGreyColor focus:outline-none focus:border-primary py-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
                            Describe Your Course in simple words:
                        </label>
                        <textarea
                            id="description"
                            placeholder="Brief description about the course..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="pl-10 w-full rounded-md bg-BgGreyColor focus:outline-none focus:border-primary py-2"
                            rows={10}
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium text-gray-700 mb-3">
                            Your Previous Knowledge about this topic:
                        </label>
                        <div className='flex flex-row gap-10 pl-5'>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="option" value="Beginners" className="accent-green-700" />
                                <span>Beginners</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="radio" name="option" value="Intermediate" className="accent-green-700" />
                                <span>Intermediate</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="radio" name="option" value="Advance" className="accent-green-700" />
                                <span>Advance</span>
                            </label>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium text-gray-700 mb-3">
                            Want to add videos in your course?
                        </label>
                        <div className='flex flex-row gap-10 pl-5'>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="option" value="Yes" className="accent-green-700" />
                                <span>Yes</span>
                            </label>

                            <label className="flex items-center space-x-2">
                                <input type="radio" name="option" value="No" className="accent-green-700" />
                                <span>No</span>
                            </label>


                        </div>

                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                    >
                        Add Course
                    </button>
                </form>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
            </div>

        </div>
    );
}

export default CourseDescribe;
