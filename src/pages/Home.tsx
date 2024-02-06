import HomeAbout from "../components/Home/HomeAbout";
import Skills from "../components/Home/Skills";
import Stack from "../components/Home/Stack";
import Projects from "../components/Home/Projects";
import { projectData } from "../constants/ProjectData";
import { stack } from "../constants/StackData";

const Home = () => {
  return (
    <>
      <HomeAbout />
      <Skills />
      <Projects projects={projectData} />
      <Stack stack={stack} />
    </>
  );
};

export default Home;
