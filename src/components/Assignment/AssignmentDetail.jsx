import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClockIcon, PaperClipIcon } from '@heroicons/react/24/outline';
import HeroSection from '../Hero Section/HeroSection';
import { div } from 'framer-motion/client';

function AssignmentDetail({ assignments }) {
    const { id } = useParams();
    const assignment = assignments.find(a => a.AssignmentId === parseInt(id));
    const [activeTab, setActiveTab] = useState('instructions');
    const [submissionFile, setSubmissionFile] = useState(null);

    if (!assignment) {
        return <div className="text-red-500 text-center p-8">Assignment not found.</div>;
    }

    return (
        <div>
            <HeroSection
                title={assignment.AssignmentTitle}
                breadcrumb={[
                    { label: 'Home', path: '/' },
                    { label: assignment.AssignmentTitle },
                ]}
            />
            <div className="mt-30 mb-30 font-poppins">

                <div className='grid grid-cols-[65%_35%] max-w-6xl mx-auto'>

                    <div className='order-2 z-1'>
                        <div className='shadow-lg rounded-sm p-5 m-4 bg-white sticky top-20 pb-10'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center mb-4'>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                        assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {assignment.status}
                                    </span>
                                    <p className='text-gray-500 text-sm flex items-center'>
                                        <ClockIcon className='w-4 h-4 mr-1' />
                                        Due {assignment.DeadLine}
                                    </p>
                                </div>

                                <div className='space-y-4 border rounded-lg p-4'>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Total Marks</span>
                                        <span className='text-greenSmall font-bold'>{assignment.totalMarks}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Questions</span>
                                        <span className='text-gray-600'>{assignment.questionsCount}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Attempts</span>
                                        <span className='text-gray-600'>{assignment.attemptsLeft} remaining</span>
                                    </div>
                                </div>


                                <div className='mt-6'>
                                    <h3 className='font-semibold mb-3'>Attachments</h3>
                                    <div className='space-y-2'>
                                        {assignment.attachments.map((file, index) => (
                                            <a
                                                key={index}
                                                href={file.url}
                                                download
                                                className='flex items-center p-2 border rounded hover:bg-gray-50 transition-colors'
                                            >
                                                <PaperClipIcon className='w-4 h-4 mr-2 text-gray-500' />
                                                <span className='text-sm'>{file.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={() => document.getElementById('fileInput').click()}
                                    className='btn-primary w-full py-3 text-sm mt-6'
                                >
                                    {assignment.status === 'Submitted' ? 'Resubmit Assignment' : 'Submit Assignment'}
                                </button>
                                <input
                                    type="file"
                                    id="fileInput"
                                    hidden
                                    onChange={(e) => setSubmissionFile(e.target.files[0])}
                                />

                                {submissionFile && (
                                    <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between'>
                                        <div className='flex items-center'>
                                            <PaperClipIcon className='w-4 h-4 mr-2 text-green-600' />
                                            <span className='text-sm'>{submissionFile.name}</span>
                                        </div>
                                        <button
                                            onClick={() => setSubmissionFile(null)}
                                            className='text-red-500 hover:text-red-700'
                                        >
                                            ×
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>


                    <div className='order-1 pr-5'>
                        <div className='bg-white rounded-2xl pb-10 px-10 shadow-2xl'>
                            <div className="pt-6 pb-6 max-w-4xl mx-auto text-gray-800">
                                <h1 className='font-poppins text-4xl font-extrabold mb-5'>{assignment.AssignmentTitle}</h1>

                                <div className='mb-8'>
                                    <h2 className='text-2xl font-semibold mb-3'>Description</h2>
                                    <p className='text-gray-600 leading-relaxed'>{assignment.AssignmentDescription}</p>
                                </div>

                                <div className='mb-8'>
                                    <h2 className='text-2xl font-semibold mb-3'>Learning Objectives</h2>
                                    <ul className='list-disc pl-6 space-y-2'>
                                        {assignment.objectives.map((objective, index) => (
                                            <li key={index} className='text-gray-600'>{objective}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='mb-8'>
                                    <h2 className='text-2xl font-semibold mb-3'>Submission Guidelines</h2>
                                    <ul className='list-decimal pl-6 space-y-2'>
                                        {assignment.guidelines.map((guideline, index) => (
                                            <li key={index} className='text-gray-600'>{guideline}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className='mt-10'>

                                    <div className='flex flex-row gap-0 mb-10'>
                                        <button onClick={() => setActiveTab('instructions')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'instructions' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                                            Instructions
                                        </button>
                                        <button onClick={() => setActiveTab('submissions')} className={`text-[20px] font-bold font-poppins px-4 py-2 ${activeTab === 'submissions' ? 'border-b-3 border-hoverGreen  text-black' : 'border-b border-gray-200  text-black'}`}>
                                            Submissions
                                        </button>
                                    </div>

                                    {activeTab === 'instructions' && (
                                        <div className='prose max-w-none'>
                                            <h3 className='text-xl font-semibold mb-3'>Assignment Requirements</h3>
                                            <ul className='list-disc pl-6 space-y-2'>
                                                {assignment.requirements.map((req, index) => (
                                                    <li key={index} className='text-gray-600'>{req}</li>
                                                ))}
                                            </ul>

                                            <h3 className='text-xl font-semibold mt-6 mb-3'>Grading Criteria</h3>
                                            <div className='space-y-3'>
                                                {assignment.gradingCriteria.map((criteria, index) => (
                                                    <div key={index} className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                                        <span>{criteria.category}</span>
                                                        <span className='font-medium'>{criteria.percentage}%</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'submissions' && (
                                        <div className='space-y-4'>
                                            {assignment.submissions?.map((submission, index) => (
                                                <div key={index} className='p-4 border rounded-lg hover:bg-gray-50'>
                                                    <div className='flex justify-between items-center mb-2'>
                                                        <div className='flex items-center'>
                                                            <PaperClipIcon className='w-4 h-4 mr-2' />
                                                            <span className='font-medium'>{submission.fileName}</span>
                                                        </div>
                                                        <span className={`text-sm ${submission.status === 'Graded' ? 'text-green-600' :
                                                            submission.status === 'Late' ? 'text-red-600' : 'text-yellow-600'
                                                            }`}>
                                                            {submission.status}
                                                        </span>
                                                    </div>
                                                    <div className='flex justify-between text-sm text-gray-500'>
                                                        <span>Submitted on {submission.date}</span>
                                                        {submission.grade && (
                                                            <span>Grade: {submission.grade}/{assignment.totalMarks}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AssignmentDetail;