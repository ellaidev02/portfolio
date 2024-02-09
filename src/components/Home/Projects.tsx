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
      <p className="px-2 mt-4">{projectName}</p>
      <div className="h-[250px] md:w-[400px] w-[280px] ml-1 md:ml-0 bg-secondary rounded-xl my-3"></div>
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
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ projects, isTrue }) => {
  return (
    <div className="bg-primary p-3 my-5 rounded-[24px]">
      <div className="bg-primary rounded-[24px]">
        <p className="pt-3 pl-2 text-[36px]">Explore My Projects</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        {projects?.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      {!isTrue && (
        <div className="flex justify-center">
          <Link to="/allProjects" onClick={scrollToTop}>
            <button className="bg-secondary p-4 mt-6 mb-2 mx-2 text-themeColor rounded-xl py-2">
              All Projects
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Projects;
