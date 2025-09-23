import React from "react"
//import Shoe from "../assets/shoe.png"
//import Cakebar from "../assets/Cakebar.png"

const projects = [
  {
    id: 1,
    title: "S&S Footwear",
    stack: "MERN Stack",
    img: "/src/assets/Shoe.png",
    link: "https://github.com/Hiumi112688",
  },
  {
    id: 2,
    title: "Cakebar",
    stack: "MERN Stack",
    img: "/src/assets/cakebar.png",
    link: "https://github.com/Hiumi112688",
  },
  {
    id: 3,
    title: "TastyCook",
    stack: "MERN Stack",
    img: "/src/assets/tastycook.webp",
    link: "https://github.com/Hiumi112688",
  },
];
const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) =>(
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.img} alt={project.title} className="rounded-lg mb-4 w-full h-48 0bject-cover"/>
                            <h3 className="text-2xl font-bold mb-2">{project.title}
                            </h3>
                            <p className="text-gray-400 mb-4">{project.stack}</p>
                            <a href={project.link} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                        

                        
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Projects