import React from 'react'
import { Link } from 'react-router-dom';

function HeroSection({ title, subtitle, breadcrumb = [] }) {
    return (
        <div
            className="h-[400px] text-black pt-45 px-4 bg-[#EEFFFA]"

        >

            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2 ">{title}</h1>
                <p className="text-lg max-w-2xl">{subtitle}</p>

                <nav className="text-sm font-semibold text-black mt-5">
                    <ol className="list-reset flex">
                        {breadcrumb.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2 text-gray-400">/</span>}

                                {item.path ? (
                                    <Link to={item.path} className="hover:underline text-greenSmall flex items-center gap-1">
                                        {item.label === "Home" && <i className="fas fa-home text-[14px]"></i>}
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className="text-black flex items-center gap-1">
                                        {item.label === "Home" && <i className="fas fa-home text-[14px]"></i>}
                                        {item.label}
                                    </span>
                                )}
                            </li>

                        ))}
                    </ol>
                </nav>



            </div>
        </div>

    )
}

export default HeroSection