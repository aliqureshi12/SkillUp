import React from 'react';
import { ClockIcon, QuestionMarkCircleIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

function QuizCard({ quizzes }) {
    return (
        <div className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-hoverGreen hover:border-hoverYellow font-poppins">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                        <PuzzlePieceIcon className="w-6 h-6 text-greenSmall" />
                    </div>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-900 mb-1">
                            {quizzes.quizTitle}
                        </h2>
                        <div className="flex items-center space-x-2">
                            <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full">
                                {quizzes.difficulty || 'Intermediate'}
                            </span>
                            <span className="inline-block px-2 py-1 text-xs font-medium text-black bg-gray-100 rounded-full">
                                {quizzes.category || 'General'}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-1 text-sm text-black">
                    <ClockIcon className="w-4 h-4" />
                    <span>{quizzes.timeLimit || '15'} mins</span>
                </div>
            </div>

            <p className="text-black text-sm mb-6 line-clamp-2">
                {quizzes.quizDescription}
            </p>

            <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center space-x-4 text-sm text-black">
                    <div className="flex items-center space-x-1">
                        <QuestionMarkCircleIcon className="w-4 h-4" />
                        <span>{quizzes.questionsCount || '10'} Questions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <i className="fas fa-star text-yellow-300 text-1xl"></i>
                        <span>{quizzes.bestScore || '4.8'} Rating</span>
                    </div>
                </div>

                <button
                    onClick={() => window.location.href = `/quizzes/${quizzes.QuizId}`}
                    className="px-4 py-2 bg-BgPrimary text-white rounded-lg text-sm font-medium transition-colors duration-200 transform hover:-translate-y-0.5"
                >
                    Start Quiz
                </button>
            </div>


            {/* <div className="absolute top-2 right-4 flex items-center space-x-1 text-xs text-greenSmall">
                <svg
                    className="w-4 h-4 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Live Now</span>
            </div> */}
        </div>
    );
}

export default QuizCard;