import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClockIcon, QuestionMarkCircleIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import HeroSection from '../Hero Section/HeroSection';

function QuizDetail({ quizzes }) {
    const { id } = useParams();
    const quiz = quizzes.find(q => q.QuizId === parseInt(id));
    const [activeTab, setActiveTab] = useState('instructions');
    const [timeRemaining, setTimeRemaining] = useState(quiz?.timeLimit * 60);

    if (!quiz) {
        return <div className="text-red-500 text-center p-8">Quiz not found.</div>;
    }

    return (
        <div>
            <HeroSection
                title={quiz.QuizTitle}
                breadcrumb={[
                    { label: 'Home', path: '/' },
                    { label: 'Quiz' },
                ]}
            />
            <div className="mt-30 mb-30 font-poppins">
                <div className='grid grid-cols-[65%_35%] max-w-6xl mx-auto'>

                    <div className='order-2 z-1'>
                        <div className='shadow-lg rounded-sm p-5 m-4 bg-white sticky top-20 pb-10'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex justify-between items-center mb-4'>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                        quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {quiz.difficulty}
                                    </span>
                                    <p className='text-gray-500 text-sm flex items-center'>
                                        <TrophyIcon className='w-4 h-4 mr-1' />
                                        {quiz.totalPoints} Points
                                    </p>
                                </div>

                                <div className='space-y-4 border rounded-lg p-4 bg-purple-50'>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Questions</span>
                                        <span className='text-purple-600 font-bold'>{quiz.questionsCount}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Time Limit</span>
                                        <span className='text-gray-600'>{quiz.timeLimit} mins</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <span className='font-medium'>Attempts</span>
                                        <span className='text-gray-600'>{quiz.attemptsLeft} remaining</span>
                                    </div>
                                </div>


                                <div className='mt-6'>
                                    <h3 className='font-semibold mb-3'>Your Progress</h3>
                                    <div className='space-y-2'>
                                        <div className='flex items-center justify-between p-2 bg-gray-50 rounded'>
                                            <span>Best Score</span>
                                            <span className='font-medium text-purple-600'>{quiz.bestScore}/100</span>
                                        </div>
                                        <div className='flex items-center justify-between p-2 bg-gray-50 rounded'>
                                            <span>Average Score</span>
                                            <span className='font-medium text-gray-600'>72/100</span>
                                        </div>
                                    </div>
                                </div>

                                <button

                                    onClick={() => window.location.href = `/quiz/${quiz.QuizId}/start`}
                                    className='btn-primary w-full py-3 text-sm mt-6 bg-purple-600 hover:bg-purple-700'
                                >
                                    Start Quiz Now
                                </button>

                                <div className='mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg'>
                                    <div className='flex items-center text-sm text-yellow-800'>
                                        <ClockIcon className='w-4 h-4 mr-2' />
                                        <span>You have {quiz.attemptsLeft} attempts remaining</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='order-1 pr-5'>
                        <div className='bg-white rounded-2xl pb-10 px-10 shadow-2xl'>
                            <div className="pt-6 pb-6 max-w-4xl mx-auto text-gray-800">
                                <h1 className='font-poppins text-4xl font-extrabold mb-5'>{quiz.QuizTitle}</h1>

                                <div className='mb-8'>
                                    <h2 className='text-2xl font-semibold mb-3'>Quiz Overview</h2>
                                    <p className='text-gray-600 leading-relaxed'>{quiz.QuizDescription}</p>
                                </div>

                                <div className='mb-8 bg-blue-50 p-6 rounded-xl'>
                                    <h2 className='text-2xl font-semibold mb-3'>📌 Quick Facts</h2>
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='flex items-center'>
                                            <ChartBarIcon className='w-5 h-5 mr-2 text-blue-600' />
                                            <span>Passing Score: {quiz.passingScore}%</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <ClockIcon className='w-5 h-5 mr-2 text-blue-600' />
                                            <span>Time Per Question: {quiz.timePerQuestion}s</span>
                                        </div>
                                    </div>
                                </div>

                                <div className='mt-10'>
                                    <div className='flex gap-0 mb-10 border-b'>
                                        <button
                                            onClick={() => setActiveTab('instructions')}
                                            className={`text-xl font-semibold px-4 py-2 ${activeTab === 'instructions'
                                                ? 'border-b-2 border-purple-600 text-black'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            Instructions
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('attempts')}
                                            className={`text-xl font-semibold px-4 py-2 ${activeTab === 'attempts'
                                                ? 'border-b-2 border-purple-600 text-black'
                                                : 'text-gray-500 hover:text-gray-700'
                                                }`}
                                        >
                                            Previous Attempts
                                        </button>
                                    </div>

                                    {activeTab === 'instructions' && (
                                        <div className='prose max-w-none'>
                                            <h3 className='text-xl font-semibold mb-3'>📝 Quiz Structure</h3>
                                            <ul className='list-disc pl-6 space-y-2'>
                                                {quiz.structure.map((item, index) => (
                                                    <li key={index} className='text-gray-600'>{item}</li>
                                                ))}
                                            </ul>

                                            <h3 className='text-xl font-semibold mt-6 mb-3'>🎯 Scoring Policy</h3>
                                            <div className='space-y-3'>
                                                {quiz.scoringPolicy.map((policy, index) => (
                                                    <div key={index} className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'>
                                                        <span>{policy.category}</span>
                                                        <span className='font-medium'>{policy.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'attempts' && (
                                        <div className='space-y-4'>
                                            {quiz.attempts?.map((attempt, index) => (
                                                <div key={index} className='p-4 border rounded-lg hover:bg-gray-50'>
                                                    <div className='flex justify-between items-center mb-2'>
                                                        <div className='flex items-center'>
                                                            <span className='font-medium'>Attempt #{index + 1}</span>
                                                        </div>
                                                        <span className={`text-sm ${attempt.score >= quiz.passingScore ? 'text-green-600' :
                                                            'text-red-600'
                                                            }`}>
                                                            {attempt.score}%
                                                        </span>
                                                    </div>
                                                    <div className='flex justify-between text-sm text-gray-500'>
                                                        <span>{attempt.date}</span>
                                                        <span>Time Spent: {attempt.timeSpent}m</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                <div className='mt-10 bg-green-50 p-6 rounded-xl'>
                                    <h3 className='text-xl font-semibold mb-4'>🔍 Sample Question</h3>
                                    <div className='space-y-4'>
                                        <p className='font-medium'>{quiz.sampleQuestion.text}</p>
                                        <div className='grid grid-cols-2 gap-4'>
                                            {quiz.sampleQuestion.options.map((option, index) => (
                                                <div key={index} className='p-3 border rounded hover:bg-white transition-colors'>
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default QuizDetail;