import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from './Hero Section/HeroSection';


function CourseDetail({ courses }) {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('course')

    if (!course) {
        return <div className="text-red-500 text-center p-8">Course not found.</div>;
    }
    const curriculumData = [
        {
            title: "1. Introduction",
            lessons: [
                { name: "What is Web Development?", duration: "10:00" },
                { name: "Frontend vs Backend", duration: "12:30" },
                { name: "How Websites Work", duration: "11:15" },
            ],
        },
        {
            title: "2. Getting Started with HTML",
            lessons: [
                { name: "HTML Basics", duration: "15:00" },
                { name: "Common HTML Tags", duration: "17:20" },
                { name: "Creating a Simple Page", duration: "14:50" },
            ],
        },
        {
            title: "3. Styling with CSS",
            lessons: [
                { name: "CSS Syntax and Selectors", duration: "16:45" },
                { name: "Colors, Fonts, and Layout", duration: "19:30" },
                { name: "Box Model & Positioning", duration: "20:10" },
            ],
        },
        {
            title: "4. Responsive Design",
            lessons: [
                { name: "Media Queries", duration: "18:00" },
                { name: "Flexbox Layout", duration: "20:20" },
                { name: "CSS Grid Basics", duration: "22:15" },
            ],
        },
        {
            title: "5. JavaScript Fundamentals",
            lessons: [
                { name: "Variables and Data Types", duration: "17:00" },
                { name: "Functions and Events", duration: "18:45" },
                { name: "Conditionals and Loops", duration: "19:30" },
            ],
        },
        {
            title: "6. DOM Manipulation",
            lessons: [
                { name: "Selecting Elements", duration: "16:40" },
                { name: "Changing Content and Style", duration: "18:15" },
                { name: "Creating and Removing Elements", duration: "17:30" },
            ],
        },
        {
            title: "7. Forms and Validation",
            lessons: [
                { name: "HTML Forms", duration: "15:20" },
                { name: "Client-side Validation", duration: "17:10" },
                { name: "Form Events in JS", duration: "16:45" },
            ],
        },
        {
            title: "8. Web Hosting & Deployment",
            lessons: [
                { name: "Preparing Your Project", duration: "12:00" },
                { name: "Using Git & GitHub", duration: "15:30" },
                { name: "Deploying on Netlify/Vercel", duration: "14:40" },
            ],
        },
        {
            title: "9. Intro to Developer Tools",
            lessons: [
                { name: "Browser Dev Tools", duration: "13:25" },
                { name: "Debugging JavaScript", duration: "14:45" },
                { name: "Using Extensions", duration: "12:50" },
            ],
        },
        {
            title: "10. Mini Project: Build a Portfolio",
            lessons: [
                { name: "Project Structure", duration: "12:30" },
                { name: "Creating Pages & Layout", duration: "20:00" },
                { name: "Final Touches & Deployment", duration: "18:15" },
            ],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleSection = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            <HeroSection
                title={course.title}
                breadcrumb={[
                    { label: 'Home', path: '/' },
                    { label: course.title },
                ]}
            />
            <div className='min-h-screen mt-0'>
                <div className="mt-13 mb-30 font-poppins ">
                    <div className='grid grid-cols-[70%_30%] max-w-6xl mx-auto gap-5'>
                        <div className='order-1 z-1 bg-white rounded-2xl py-10 px-10 shadow-md'>
                            <div className='flex flex-row justify-between items-center mb-5 '>
                                <h1 className='heading-text-lg'>
                                    {course.title}
                                </h1>

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
                                    <div >
                                        <h1 className="text-3xl font-bold mb-6 text-left text-black">
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
                        <div className='order-2 pr-5'>
                            <div className="shadow-md rounded-2xl p-5 m- bg-white sticky top-20">
                                <h2 className="text-lg font-semibold mb-4">Curriculum</h2>
                                {curriculumData.map((section, index) => (
                                    <div key={index} className="border border-green-100 rounded-md mb-2 overflow-hidden bg-[#eefffa]">
                                        <button
                                            className={`w-full text-left px-4 py-4 rounded-[10px] flex justify-between items-center ${activeIndex === index ? "bg-BgPrimary text-white" : "bg-BgSecondary text-black"
                                                }`}
                                            onClick={() => toggleSection(index)}
                                        >
                                            <span className='text-[15px]'>{section.title}</span>
                                            <i
                                                className={`fas fa-chevron-down transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                                                    }`}
                                            ></i>
                                        </button>

                                        {activeIndex === index && (
                                            <div className="divide-y divide-green-100">
                                                {section.lessons.map((lesson, idx) => (
                                                    <div key={idx} className="flex justify-between items-center px-4 py-5 text-sm">
                                                        <div className="flex items-center gap-2 text-gray-700">
                                                            <i className="fas fa-play-circle text-greenSmall"></i>
                                                            {lesson.name}
                                                        </div>
                                                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto  '>


                </div>

            </div>

        </div>

    );
}

export default CourseDetail;
