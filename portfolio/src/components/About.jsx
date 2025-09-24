import React from 'react'
//import AboutImage from '../assets/profile.jpg'

const About = () => {
    return (
        
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src='\src\assets\profile.jpg'
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                    <p className='text-lg mb-8'>
                        I am a dedicated BSc IT undergraduate with a passion for learning and exploring the world of technology. With a growing foundation in software development, databases, and modern web technologies, I aim to build innovative and user-friendly solutions. I am eager to expand my knowledge, enhance my skills, and contribute to impactful projects in the IT field.
                    </p>
                    <div className='space-y-4'>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>

                                </div>

                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'>

                                </div>

                            </div>
                        </div>

                    </div>
                    
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default About