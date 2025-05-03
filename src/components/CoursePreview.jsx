import React from 'react';
import CourseCard from './CourseCard';

function CoursePreview({ courses }) {
    return (
        <section className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-8">Explore Our Courses</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}

export default CoursePreview;
