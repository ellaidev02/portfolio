const AboutMe = () => {
  return (
    <div>
      <div className="bg-primary rounded-[24px]">
        <p className="pt-3 pl-5 text-[36px]">Get to Know Me Better!</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <p className="m-5 font-light text-textSecondary">
            My passion lies in crafting seamless user experiences for web and
            mobile applications. With a strong foundation in frontend
            technologies and a keen eye for design, I bring creativity and
            precision to every project.
          </p>
        </div>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5 ">
        <p className="pt-3 pl-5 text-lg">Education</p>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <span></span>
            <p>Bachelor Degree in Civil Engineering</p>
            <p className="font-light text-textSecondary">
              M.Kumarasamy College of Engineering, Karur
            </p>
            <p className="font-light text-textSecondary mb-3">2016-2019</p>
          </div>
        </div>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5 mb-5">
        <p className="pt-3 pl-5 text-lg">Experience</p>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <span></span>
            <p>Frontend Web developer</p>
            <p className="font-light text-textSecondary">
              Anicha digital infrastructure pvt ltd
            </p>
            <p className="font-light text-textSecondary mb-3">
              Jul 2022 - Jan 2024
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <span></span>
            <p>Freelancer | Web developer | Mobile app developer </p>
            {/* <p className="font-light text-textSecondary">Happy Begins</p> */}
            <p className="font-light text-textSecondary mb-3">
              Jan 2024 - Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
