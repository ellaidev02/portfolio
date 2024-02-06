import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utilities/ScrollToTop";

interface ProjectProps {
  image: string; // Replace with the actual type of 'image'
  categories: string[]; // Replace with the actual type of 'categories'
  projectName: string; // Replace with the actual type of 'projectName'
}

interface ProjectsProps {
  projects: ProjectProps[];
  isTrue?: boolean;
}

const Project: React.FC<ProjectProps> = ({ categories, projectName }) => {
  return (
    <div>
      <div className="h-[250px] w-[400px] bg-secondary rounded-xl my-3"></div>
      <div className="flex gap-2 py-3">
        {categories?.map((category, index) => (
          <p
            key={index}
            className="bg-secondary text-themeColor p-1 px-2 text-[12px] rounded-xl"
          >
            {category}
          </p>
        ))}
      </div>
      <p className="px-2 ">{projectName}</p>
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects, isTrue }) => {
  return (
    <div className="bg-primary p-3 my-5 rounded-[24px]">
      <p className="mx-3">Projects</p>
      <div className="flex gap-3 flex-wrap">
        {projects?.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      {!isTrue && (
        <Link to="/allProjects" onClick={scrollToTop}>
          <button className="bg-secondary w-[800px] mt-6 mb-2 mx-2 text-themeColor rounded-xl py-2">
            All Projects
          </button>
        </Link>
      )}
    </div>
  );
};

export default Projects;
