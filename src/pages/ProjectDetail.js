import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";
const ProjectDetail = () => {
  const params = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const _project = projects.filter(
      (data) => data["Project"].trim() === params.id
    )[0];
    setProject(_project);
  }, [params.id]);
  return (
    <div className="max-w-[1440px] w-full mx-auto p-6">
      {project ? (
        <>
          <div className="max-w-full  m-auto py-16 grid lg:grid-cols-2 gap-4">
            <div className="md:mx-12 grid grid-cols-2 grid-rows-6 h-[80vh]">
              {project.slidesURL.map((slideURL, index) => (
                <img
                  className={`row-span-${
                    index % 3 === 0 ? 3 : 2
                  } object-cover w-full h-full p-2`}
                  key={index}
                  src={slideURL}
                  alt={project["Project"]}
                />
              ))}
            </div>
            <div className="flex flex-col h-full justify-center px-4">
              <p className="uppercase  mb-4 text-2xl">{project["Project"]}</p>
              <h3 className="text-3xl md:text-4xl font-bold">
                {project["Client Name"]}
              </h3>

              <p className="text-2xl md:text-3xl font-bold mt-2">
                {project["Location"]}
              </p>
              <p className="text-2xl mt-4">{project.Typology}</p>
              <p className="text-2xl mt-4">Area (Sq. Ft.): {project["Area"]}</p>
              <p className="text-2xl mt-4">
                Status:{" "}
                {project["Status"].trim()
                  ? project["Status"].trim()
                  : "Ongoing"}
              </p>
              <p className="w-4/5 leading-relaxed text-xl py-6">
                {project["Description"]}
              </p>
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
    </div>
  );
};

export default ProjectDetail;
