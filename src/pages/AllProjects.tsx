import Projects from "../components/Home/Projects";
import { allProjectData } from "../constants/ProjectData";

const AllProjects = () => {
  return (
    <div>
      <div className=" bg-primary rounded-[24px] mt-5">
        {/* <p className="py-3 pl-6 text-[36px]">My Projects!</p> */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* <p className="m-5 font-light text-textSecondary">
          Welcome to my Project Page! I'm Leon, a web designer focused on crafting seamless, captivating digital experiences. Explore my work—a blend of responsive design and intuitive UI. Let's create digital stories together!.
          </p> */}
        </div>
      </div>
      <Projects projects={allProjectData} isTrue={true} />
    </div>
  );
};

export default AllProjects;
