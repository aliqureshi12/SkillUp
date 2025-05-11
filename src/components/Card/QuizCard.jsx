import React from 'react'

function QuizCard({ quiz }) {
    return (
        <div className="p-5 rounded-lg shadow-md w-full flex flex-col  ">
            <div className='flex-1 flex-col items-start mb-5'>

                <h2 className="font-poppins text-[20px] font-bold mb-2 text-left">{quiz.QuizTitle}</h2>
                <p className="text-gray-600 text-left">{quiz.QuizDescription}</p>
                <p className="text-gray-600 text-left">{quiz.DeadLine}</p>
            </div>
            <button onClick={() => window.location.href = `/assignment/${quiz.QuizId}`} className='btn-primary w-55 text-sm'>
                View Assignment
            </button>

        </div>
    );
}

export default QuizCard

