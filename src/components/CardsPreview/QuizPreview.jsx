import React from 'react'
import QuizCard from '../Card/QuizCard'

function QuizPreview({ quizzes }) {
    return (
        <div className="grid grid-cols-2 gap-5">
            {quizzes.map(quizzes => (
                <QuizCard key={quizzes.QuizId} quizzes={quizzes} />
            ))}
        </div>

    )
}

export default QuizPreview

