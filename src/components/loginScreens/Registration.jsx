import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';
import logoWhite from '../../assets/logoWhite.png';


function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() == '' || password.trim() == '' || name.trim() == '') {
            setError("Kindly fill all required fields")
            setSuccess('')
            return
        }

        setEmail('')
        setPassword('')
        setError('')
        setSuccess("You have been Login Successfully!")

        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

    return (
        <div className='min-h-screen bg-BgGradient flex items-center justify-center sm:p-10 '>
            <div className='flex flex-col lg:flex-row max-w-6xl w-full bg-transparent pt-20'>
                <div className='lg:w-1/2 flex flex-col justify-center sm: items-center lg:items-start'>

                    <img src={logoWhite} alt="logo" className="w-100" />

                </div>
                <div className='lg:w-1/2 bg-BgWhiteColor flex flex-col p-10 justify-center rounded-2xl shadow-lg'>
                    <h1 className='heading-text-lg font-bold text-[headingColor]'>Create Account</h1>
                    <form onSubmit={handleSubmit} className='space-y-5 py-5'>

                        <div>
                            <label htmlFor="name" className='block'>
                                Name*
                            </label>
                            <input
                                type="name"
                                id="name"
                                value={name}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' w-full border-b border-gray-400 focus:outline-none focus:border-primary py-2'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='block'>
                                Enter your Email Address*
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' w-full border-b border-gray-400 focus:outline-none focus:border-primary py-2'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block'>
                                Enter your Password*
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className=' w-full border-b border-gray-400 focus:outline-none focus:border-primary py-2'
                            />
                        </div>
                        <div className='text-right text-sm'>
                            <a href="/" className='text-greenSmall'> Forget Your Password?</a>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className="btn-primary">
                                Login
                            </button>
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-500">Or Login with Social Media</div>
                        <div className="flex justify-center space-x-4 mt-4 text-xl text-gray-600">
                            <i className="fab fa-twitter cursor-pointer hover:text-greenSmall"></i>
                            <i className="fab fa-google cursor-pointer hover:text-greenSmall"></i>
                            <i className="fab fa-github cursor-pointer hover:text-greenSmall"></i>
                            <i className="fab fa-facebook cursor-pointer hover:text-greenSmall"></i>
                        </div>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-greenSmall font-semibold hover:underline">Login Now</a>
                        </div>






                    </form>
                </div>

            </div>

        </div>
    )
}

export default Registration