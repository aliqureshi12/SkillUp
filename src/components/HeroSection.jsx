import React from 'react';
import bg from '../assets/bg.jpg';
import img1 from '../assets/img1.png';

function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${bg})`,
                height: '80vh',
            }}
        >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10 w-full h-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-10 lg:py-16">
                <div className="w-full lg:w-2/3 text-left mb-8 lg:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Welcome to Course Hub
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore and add courses to boost your skills.
                    </p>
                    <a
                        href="/add-course"
                        className="bg-white text-amber-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 inline-block"
                    >
                        Add Your Own Course
                    </a>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center">
                    <img
                        src={img1}
                        alt="Hero Section Image"
                        className="rounded-lg shadow-lg max-w-full w-[80%] lg:w-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
