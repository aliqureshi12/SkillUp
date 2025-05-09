import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail({ courses }) {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('course')

    if (!course) {
        return <div className="text-red-500 text-center p-8">Course not found.</div>;
    }

    return (
        <div className='min-h-screen mt-30'>
            <div className='max-w-6xl mx-auto  '>
                <div className='flex flex-row justify-between items-center p-4'>
                    <h1 className='heading-text-lg'>
                        {course.title}
                    </h1>
                    <div className="flex items-center gap-4 text-[15px] text-black ">
                        <i className="fas fa-calendar-alt cursor-pointer"></i>
                        <i className="fas fa-bookmark cursor-pointer"></i>
                        <i className="fas fa-share-alt cursor-pointer"></i>
                    </div>

                </div>
                <div className='flex flex-row gap-0 mb-10'>
                    <button onClick={() => setActiveTab('course')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'course' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                        Course
                    </button>
                    <button onClick={() => setActiveTab('videos')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'videos' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                        Videos
                    </button>
                    <button onClick={() => setActiveTab('animations')} className={` text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'animations' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                        Animations
                    </button>
                </div>
                <div className=' '>
                    {activeTab == 'course' && <div>
                        <h1 className='heading-text-lg font-poppins mb-5 mt-5'>
                            About Course
                        </h1>

                        <div >
                            <h1 className="text-4xl font-bold mb-6 text-left text-black">
                                Introduction to Web Development
                            </h1>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Module 1: Getting Started with Web Development</h2>
                                <p className="text-gray-700 mb-4">
                                    Web development refers to the creation and maintenance of websites and web applications. It encompasses everything from building simple static webpages to complex dynamic platforms and APIs.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    There are two main categories:
                                    <ul className="list-disc list-inside ml-4 mt-2">
                                        <li><strong>Frontend (Client-side):</strong> What the user interacts with.</li>
                                        <li><strong>Backend (Server-side):</strong> The server, databases, and application logic.</li>
                                    </ul>
                                </p>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Key Concepts</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li><strong>HTML (HyperText Markup Language):</strong> The structure of web pages.</li>
                                    <li><strong>CSS (Cascading Style Sheets):</strong> Styles and layout control.</li>
                                    <li><strong>JavaScript:</strong> Adds interactivity and behavior.</li>
                                    <li><strong>Responsive Design:</strong> Ensures content looks great on all devices.</li>
                                </ul>
                            </section>

                            <img
                                src={course.image}
                                alt="ali"
                                className="w-full object-cover mb-13"
                            />
                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Frontend vs Backend</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border border-gray-300 text-sm text-left text-gray-700">
                                        <thead className="bg-gray-100 text-gray-800 font-semibold">
                                            <tr>
                                                <th className="px-4 py-2 border">Frontend</th>
                                                <th className="px-4 py-2 border">Backend</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2 border">HTML, CSS, JavaScript</td>
                                                <td className="px-4 py-2 border">Node.js, Python, PHP</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border">Runs in the browser</td>
                                                <td className="px-4 py-2 border">Runs on the server</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 border">React, Vue, Angular</td>
                                                <td className="px-4 py-2 border">Express, Django, Laravel</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Tools & Technologies</h2>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>VS Code, Sublime Text</li>
                                    <li>Chrome DevTools</li>
                                    <li>Git & GitHub</li>
                                    <li>npm, yarn</li>
                                </ul>
                            </section>

                            <section className="mb-10">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800">Learning Path</h2>
                                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                                    <li>Start with HTML5 and CSS3.</li>
                                    <li>Learn responsive design principles.</li>
                                    <li>Understand JavaScript basics and ES6+.</li>
                                    <li>Build small projects.</li>
                                    <li>Explore React for modern frontend development.</li>
                                    <li>Learn basic backend concepts and connect to APIs.</li>
                                </ol>
                            </section>


                        </div>


                    </div>}
                    {activeTab === 'videos' && (
                        <div className="flex justify-center">
                            <iframe
                                src={course.video}
                                title="Course Video"
                                className="rounded-lg shadow-2xl w-200 h-120"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                    {activeTab == 'animations' && (
                        <img
                            src={course.animation}
                            alt="Animation"
                            className="w-full max-w-lg mx-auto mt-20"
                        />
                    )}
                </div>

            </div>

        </div>

    );
}

export default CourseDetail;
