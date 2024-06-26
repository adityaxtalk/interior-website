import React from 'react'
import { projects } from "../projects"
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectElement= projects.map((project)=> (
     <div key={project["Sr. No."]} className='mb-16 text-center hover:scale-110 max-w-[300px] transition-all duration-500 hover:text-[#FFEAD0]'>
        <Link to={`/projects/${project["Project"]}`} aria-label={`View details for ${project["Project"]} ${project["Typology"]} project`}>
            <img  className='max-w-full rounded-md mx-auto' src={project.imageURL} alt={project["Project"]}/>
            <div className='info'>
                <p className='font-bold text-2xl my-4 capitalize'>{project["Project"]}</p>
                <p className="text-l underline uppercase">View Details</p>
            </div>
        </Link>
     </div>
  )); 
  return (
    <div className='max-w-full p-4'>
        <h1 className='font-bold text-3xl mt-28 md:ml-40'>Selected works</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-1 justify-center mx-auto place-items-center mt-12'>
            {projectElement}
        </div>
    </div>
  )
}

export default Projects;