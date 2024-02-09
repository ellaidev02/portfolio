import HomeAbout from "../components/Home/HomeAbout";
import Skills from "../components/Home/Skills";
import Stack from "../components/Home/Stack";
import Projects from "../components/Home/Projects";
import { projectData } from "../constants/ProjectData";
import { stack } from "../constants/StackData";
import Header from "../components/common/Header";

const Home = () => {
  return (
    <div>
      <div className="mb-5">
        <Header />
      </div>
      <HomeAbout />
      <Skills />
      <Projects projects={projectData} />
      <Stack stack={stack} />
    </div>
  );
};

export default Home;
