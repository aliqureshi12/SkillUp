import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-64">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <Link
                to={`/course/${course.id}`}
                className="inline-block mt-4 bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-700"
            >
                View Details
            </Link>
        </div>
    );
}

export default CourseCard;
