import React from 'react'
import AssignmentCard from '../Card/AssignmentCard'

function AssignmentPreview({ assignment }) {
    return (
        <div className="grid grid-cols-3 gap-10">
            {assignment.map(assignment => (
                <AssignmentCard key={assignment.AssignmentId} assignment={assignment} />
            ))}
        </div>
    )
}

export default AssignmentPreview