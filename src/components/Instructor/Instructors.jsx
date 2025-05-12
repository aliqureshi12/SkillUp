import React from 'react'
import InstructorPreview from '../CardsPreview/InstructorPreview'

function Instructors({ instructor }) {
    return (
        <div className=" mt-30 mb-30">
            <div className='grid grid-cols-[80%_20%] max-w-6xl mx-auto'>
                <div className='order-2 z-1 '>
                    <div className='shadow-lg rounded-sm p-5 m- bg-white sticky top-20'>
                        <div className=' flex flex-row justify-between'>
                            <h1 className='font-poppins font-extrabold text-[16px]'>Home Work</h1>
                            <i className='fas fa-ellipsis'></i>

                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-2xl h-2.5 mt-5 mb-2">
                                <div
                                    className="bg-[#FEC64F] h-2.5 rounded-full"
                                    style={{ width: '60%' }}
                                ></div>
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <p className='font-poppins font-semibold text-[11px]'>Web Design</p>
                                <p className='font-poppins font-semibold text-[11px]'>6/10</p>


                            </div>
                        </div>
                        <div>
                            <div className="w-full bg-gray-200 rounded-2xl h-2.5 mt-5 mb-2">
                                <div
                                    className="bg-BgPrimary h-2.5 rounded-full"
                                    style={{ width: '80%' }}
                                ></div>
                            </div>
                            <div className=' flex flex-row justify-between'>
                                <p className='font-poppins font-semibold text-[11px]'>Data Structure</p>
                                <p className='font-poppins font-semibold text-[11px]'>8/10</p>


                            </div>
                        </div>
                    </div>
                </div>
                <div className='order-1 pr-5'>
                    <div className='text-left mb-10 '>
                        <h1 className='heading-text-lg font-poppins '>
                            Available Instructors
                        </h1>
                    </div>
                    <InstructorPreview instructor={instructor} />
                </div>

            </div>


        </div>
    )
}

export default Instructors