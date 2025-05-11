import React from 'react';
import CourseCard from '../Card/CourseCard';

function CoursePreview({ courses }) {
    return (
        <div className="grid grid-cols-3 gap-10">
            {courses.map(course => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>

    );
}

export default CoursePreview;
