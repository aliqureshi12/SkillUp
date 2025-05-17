import React from 'react';

import AboutSection from './AboutSection';
import CoursePreview from './CardsPreview/CoursePreview';
import CallToAction from './CallToAction';
import Login from './loginScreens/Login';

function HomePage({ courses }) {
    return (
        <div>
            <Login />

            <AboutSection />
            <CoursePreview courses={courses} />
            <CallToAction />
        </div>
    );
}

export default HomePage;
