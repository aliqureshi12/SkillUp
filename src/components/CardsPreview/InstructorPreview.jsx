import React from 'react'
import InstructorCard from '../Card/InstructorCard'

function InstructorPreview({ instructor }) {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {instructor.map(instructor => (
                <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
        </div>
    )
}

export default InstructorPreview