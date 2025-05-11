import React from 'react'

function AssignmentCard({ assignment }) {
    return (
        <div className="p-5 rounded-lg shadow-md w-full flex flex-col  ">
            <div className='flex-1 flex-col items-start mb-5'>

                <h2 className="font-poppins text-[20px] font-bold mb-2 text-left">{assignment.AssignmentTitle}</h2>
                <p className="text-gray-600 text-left">{assignment.AssignmentDescription}</p>
                <p className="text-gray-600 text-left">{assignment.DeadLine}</p>
            </div>
            <button onClick={() => window.location.href = `/assignment/${assignment.AssignmentId}`} className='btn-primary w-55 text-sm'>
                View Assignment
            </button>

        </div>
    );
}

export default AssignmentCard