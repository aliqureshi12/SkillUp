import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img3 from '../assets/img3.png';


function AddCourseForm({ courses, setCourses }) {
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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl w-full">

                {/* Left Image Section */}
                <div className="lg:w-1/2 w-full">
                    <img
                        src={img3}
                        alt="Course illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Form Section */}
                <div className="lg:w-1/2 w-full p-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold text-amber-700 mb-6 text-center lg:text-left">
                        Add a New Course
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="title" className="block font-medium text-gray-700 mb-1">
                                Course Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="e.g. Full Stack Development"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
                                Course Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Brief description about the course..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                                rows={4}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition duration-200"
                        >
                            Add Course
                        </button>
                    </form>

                    {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                    {success && <p className="text-green-600 mt-4 text-center">{success}</p>}
                </div>
            </div>
        </div>
    );
}

export default AddCourseForm;
