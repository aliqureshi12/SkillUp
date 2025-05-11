import React from 'react'
import QuizCard from '../Card/QuizCard'

function QuizPreview({ quiz }) {
    return (
        <div className="grid grid-cols-3 gap-10">
            {quiz.map(quiz => (
                <QuizCard key={quiz.QuizId} quiz={quiz} />
            ))}
        </div>

    )
}

export default QuizPreview

