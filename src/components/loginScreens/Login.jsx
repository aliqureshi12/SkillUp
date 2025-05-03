import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim == '' || password.trim == '') {
            setError("Kindly fill all required fields")
            setSuccess('')
            return
        }

        setEmail('')
        setPassword('')
        setError('')
        setSuccess("Login Successfully!")

        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

    return (
        <div className='min-h-screen bg-ali flex items-center justify-center'>
            <div className='flex flex-row max-w-6xl w-full'>
                <div className='lg:w-1/2'>
                    <h1>Left</h1>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold text-[headingColor]'>Login Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className='block'>
                                Enter your Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Enter Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus: ring-amber-600'
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block'>
                                Enter your Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder='Enter Your Password'
                                value={password}
                                onChange={(e) => setEmail(e.target.value)}
                                className=' w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus: ring-amber-600'
                            />
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login