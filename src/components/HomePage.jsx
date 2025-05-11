import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CoursePreview from './CardsPreview/CoursePreview';
import CallToAction from './CallToAction';
import Login from './loginScreens/Login';

function HomePage({ courses }) {
    return (
        <div>
            <Login />
            <HeroSection />
            <AboutSection />
            <CoursePreview courses={courses} />
            <CallToAction />
        </div>
    );
}

export default HomePage;
