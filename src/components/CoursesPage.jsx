import React from 'react';

import AboutSection from './AboutSection';
import CoursePreview from './CardsPreview/CoursePreview';
import CallToAction from './CallToAction';

function CoursesPage({ courses }) {
    return (
        <div>

            <AboutSection />
            <CoursePreview courses={courses} />

        </div>
    );
}

export default CoursesPage;
