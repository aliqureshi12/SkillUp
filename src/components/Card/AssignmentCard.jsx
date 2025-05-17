import React from 'react';
import { ClockIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

function AssignmentCard({ assignment }) {
    return (
        <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-[#C2F7E7] hover:border-hoverGreen">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                        <AcademicCapIcon className="w-6 h-6 text-greenSmall" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-900 mb-1">
                            {assignment.AssignmentTitle}
                        </h2>
                        <span className="inline-block px-4 py-1 text-xs font-medium text-white bg-BgPrimary rounded-full">
                            {assignment.status || 'Active'}
                        </span>
                    </div>
                </div>
                <span className="text-sm text-gray-500">{assignment.DeadLine}</span>
            </div>

            <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {assignment.AssignmentDescription}
            </p>

            <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <DocumentTextIcon className="w-4 h-4" />
                        <span>{assignment.questionsCount || '5'} Questions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>Due in 3 days</span>
                    </div>
                </div>

                <button
                    onClick={() => window.location.href = `/assignment/${assignment.AssignmentId}`}
                    className="px-4 py-2 bg-BgPrimary hover:bg-BgPrimary text-white rounded-lg text-sm font-medium transition-colors duration-200 transform hover:-translate-y-0.5"
                >
                    View Assignment
                </button>
            </div>

            
            <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-500">Progress</span>
                    <span className="text-xs font-medium text-greenSmall">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-BgPrimary rounded-full h-2 transition-all duration-500"
                        style={{ width: '75%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AssignmentCard;