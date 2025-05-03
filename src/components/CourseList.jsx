import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CoursePreview from './CoursePreview';
import CallToAction from './CallToAction';
import Login from './loginScreens/Login';

function CourseList({ courses }) {
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

export default CourseList;
