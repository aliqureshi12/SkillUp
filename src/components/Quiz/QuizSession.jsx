import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

function QuizSession({ quizzes }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // Add debug logs
    console.log('Received quizzes:', quizzes);
    console.log('Looking for quiz with ID:', id);

    const quiz = quizzes.find(q => q.QuizId === parseInt(id));
    console.log('Found quiz:', quiz);

    // Safe state initialization
    const [timeLeft, setTimeLeft] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        if (!submitted && timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [submitted, timeLeft]);

    useEffect(() => {
        if (quiz) {
            setTimeLeft(quiz.timeLimit * 60);
            // Initialize empty answers array
            setAnswers(Array(quiz.questions.length).fill(null));
        }
    }, [quiz]);

    if (!quiz) {
        return (
            <div className="text-center p-8">
                <h2 className="text-2xl text-red-600 mb-4">Quiz Not Found</h2>
                <p className="text-gray-600 mb-4">
                    No quiz found with ID: {id}
                </p>
                <button
                    onClick={() => navigate(-1)}
                    className="btn-primary py-2 px-6"
                >
                    Go Back
                </button>
            </div>
        );
    }



    const handleAnswerSelect = (questionIndex, optionIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionIndex]: optionIndex
        }));
    };

    const calculateScore = () => {
        return quiz.questions.reduce((score, question, index) => {
            return answers[index] === question.correctAnswer ? score + question.points : score;
        }, 0);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        // Add logic to save attempt results
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="mt-30 mb-30 font-poppins">
            <div className='grid grid-cols-[65%_35%] max-w-6xl mx-auto'>
                {/* Right Sidebar */}
                <div className='order-2 z-1'>
                    <div className='shadow-lg rounded-sm p-5 m-4 bg-white sticky top-20 pb-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between items-center mb-4'>
                                <span className='text-lg font-semibold'>Time Remaining</span>
                                <div className='flex items-center bg-red-50 px-3 py-1 rounded-lg'>
                                    <ClockIcon className='w-5 h-5 mr-1 text-red-600' />
                                    <span className='font-medium text-red-600'>{formatTime(timeLeft)}</span>
                                </div>
                            </div>

                            <div className='grid grid-cols-5 gap-2'>
                                {quiz.questions.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentQuestion(index)}
                                        className={`h-10 rounded flex items-center justify-center ${currentQuestion === index
                                            ? 'bg-purple-600 text-white'
                                            : answers[index] !== undefined
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-gray-100'
                                            }`}
                                    >
                                        Q{index + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={submitted}
                                className='btn-primary w-full py-3 text-sm mt-6 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400'
                            >
                                {submitted ? 'Quiz Submitted' : 'Submit Quiz'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className='order-1 pr-5'>
                    <div className='bg-white rounded-2xl pb-10 px-10 shadow-2xl'>
                        {submitted ? (
                            <div className="pt-6 pb-6 max-w-4xl mx-auto text-gray-800">
                                <h1 className='text-3xl font-bold mb-6'>Quiz Results</h1>
                                <div className='bg-green-50 p-6 rounded-xl mb-8'>
                                    <div className='flex items-center justify-center gap-4'>
                                        <div className='text-center'>
                                            <div className='text-4xl font-bold text-green-600'>
                                                {calculateScore()}/{quiz.totalPoints}
                                            </div>
                                            <div className='text-sm'>Final Score</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='space-y-8'>
                                    {quiz.questions.map((question, qIndex) => (
                                        <div key={qIndex} className='border-b pb-6'>
                                            <div className='flex items-center gap-2 mb-4'>
                                                {answers[qIndex] === question.correctAnswer ? (
                                                    <CheckCircleIcon className='w-6 h-6 text-green-600' />
                                                ) : (
                                                    <XCircleIcon className='w-6 h-6 text-red-600' />
                                                )}
                                                <h3 className='text-xl font-semibold'>Question {qIndex + 1}</h3>
                                            </div>
                                            <p className='text-lg mb-4'>{question.text}</p>
                                            <div className='grid grid-cols-1 gap-2'>
                                                {question.options.map((option, oIndex) => (
                                                    <div
                                                        key={oIndex}
                                                        className={`p-3 rounded-lg border ${oIndex === question.correctAnswer
                                                            ? 'border-green-600 bg-green-50'
                                                            : answers[qIndex] === oIndex
                                                                ? 'border-red-600 bg-red-50'
                                                                : 'border-gray-200'
                                                            }`}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="pt-6 pb-6 max-w-4xl mx-auto text-gray-800">
                                <div className='flex justify-between items-center mb-8'>
                                    <h1 className='text-2xl font-semibold'>
                                        Question {currentQuestion + 1} of {quiz.questions.length}
                                    </h1>
                                    <span className='text-purple-600 font-semibold'>
                                        {quiz.questions[currentQuestion].points} Points
                                    </span>
                                </div>

                                <p className='text-xl mb-8'>{quiz.questions[currentQuestion].text}</p>

                                <div className='space-y-4'>
                                    {quiz.questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerSelect(currentQuestion, index)}
                                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[currentQuestion] === index
                                                ? 'border-purple-600 bg-purple-50'
                                                : 'border-gray-200 hover:border-purple-400'
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                <div className='flex justify-between mt-10'>
                                    <button
                                        onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                        disabled={currentQuestion === 0}
                                        className='btn-secondary py-2 px-6'
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={() => setCurrentQuestion(prev => Math.min(quiz.questions.length - 1, prev + 1))}
                                        disabled={currentQuestion === quiz.questions.length - 1}
                                        className='btn-primary bg-purple-600 hover:bg-purple-700 py-2 px-6'
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizSession;