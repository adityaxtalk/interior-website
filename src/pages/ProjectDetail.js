import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import interiorProjects from "../interior/projects";
import architectureProjects from "../architecture/projects";
import "./ProjectDetail.css"; // Import your CSS file for styling

const ProjectDetail = () => {
  const { category, name } = useParams();
  const [project, setProject] = useState(null);
  const [enlargedImage, setEnlargedImage] = useState(null); // State to track enlarged image URL

  useEffect(() => {
    const projects = category === "architecture" ? architectureProjects : interiorProjects;
    const _project = projects.find(data => data["Project"].trim() === name); // Use find instead of filter[0]
    setProject(_project);
  }, [name, category]);

  const openEnlargedView = (slideURL) => {
    setEnlargedImage(slideURL);
  };

  const closeEnlargedView = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="max-w-[1440px] w-full mx-auto p-6">
      {project ? (
        <>
          <div className="max-w-full m-auto py-16 grid lg:grid-cols-2 gap-4">
            <div className="md:mx-12 grid grid-cols-2 grid-rows-6 h-[80vh]">
              {project.slidesURL.map((slideURL, index) => (
                <img
                  className={`row-span-${index % 3 === 0 ? 3 : 2} object-cover w-full h-full p-2 cursor-pointer`}
                  key={index}
                  src={slideURL}
                  alt={project["Project"]}
                  onClick={() => openEnlargedView(slideURL)} // Open image on click
                />
              ))}
            </div>
            <div className="flex flex-col h-full justify-center px-4">
              <p className="uppercase mb-4 text-2xl">{project["Project"]}</p>
              <h3 className="text-3xl md:text-4xl font-bold">{project["Client Name"]}</h3>
              <p className="text-2xl md:text-3xl font-bold mt-2">{project["Location"]}</p>
              <p className="text-2xl text-white text font-bold mt-2">Category: {project.Typology}</p>
              <p className="text-2xl text-white font-bold">Area: {project["Area"]} Sq. Ft.</p>
              <p className="text-2xl text-white font-bold">
                Status: {project["Status"].trim() ? project["Status"].trim() : "Ongoing"}
              </p>
              <p className="w-4/5 leading-relaxed text-xl py-6">{project["Description"]}</p>
              <Link
                to="/projects"
                className="block mt-[60px] text-2xl font-bold hover:translate-x-[-15px] hover:text-[#f6d5ac]"
              >
                &larr; <span>Back to Projects</span>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading....</h2>
      )}

      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlargedView}>
          <div className="enlarged-image-container">
            <img src={enlargedImage} alt="Enlarged View" className="enlarged-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
