import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail({ courses }) {
    const { id } = useParams();
    const course = courses.find(c => c.id === parseInt(id));

    if (!course) {
        return <div className="text-red-500 text-center p-8">Course not found.</div>;
    }

    return (
        <div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600">{course.description}</p>
        </div>
    );
}

export default CourseDetail;
