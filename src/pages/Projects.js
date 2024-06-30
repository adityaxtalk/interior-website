import React from 'react'
import interiorProject from "../interior/projects"
import { Link } from 'react-router-dom';
import architectureProject from '../architecture/projects';
const ProjectElement = ({projects, title}) => {
  return projects.map((project)=> (
    <div key={project["Sr. No."]} className='mb-16 text-center hover:scale-110 max-w-[300px] transition-all duration-500 hover:text-[#FFEAD0]'>
       <Link to={`/projects/${title}/${project["Project"]}`} aria-label={`View details for ${project["Project"]} ${project["Typology"]} project`}>
           <img  className='max-w-full w-[300px] rounded-md mx-auto h-[167px]' src={project.imageURL} alt={project["Project"]}/>
           <div className='info'>
               <p className='font-bold text-2xl h-[64px] my-4 capitalize'>{project["Project"]}</p>
               <p className="text-l underline uppercase">View Details</p>
           </div>
       </Link>
    </div>
 )); 
}
const Projects = () => {
  return (
    <div className='max-w-full p-4'>
        <h1 className='font-bold text-3xl mt-28 md:ml-40'>Selected Interior works</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-1 justify-center mx-auto place-items-center mt-12'>
           <ProjectElement projects={interiorProject} title={"interior"}/>
        </div>
        <h1 className='font-bold text-3xl mt-28 md:ml-40'>Selected Architecture works</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-1 justify-center mx-auto place-items-center mt-12'>
           <ProjectElement projects={architectureProject} title={"architecture"}/>
        </div>
    </div>
  )
}

export default Projects;