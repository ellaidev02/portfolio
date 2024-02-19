const AboutMe = () => {
  return (
    <div>
      <div className="bg-primary rounded-[24px]">
        <p className="pt-3 pl-5 text-[36px] text-black font-semibold">Get to Know Me Better!</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <p className="m-5 text-slate-800 font-semibold">
            My passion lies in crafting seamless user experiences for web and
            mobile applications. With a strong foundation in frontend
            technologies and a keen eye for design, I bring creativity and
            precision to every project.
          </p>
        </div>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5 ">
        <p className="pt-3 pl-5 text-lg text-black font-bold">Education</p>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <span></span>
            <p className="text-slate-800 font-semibold">Bachelor of Engineering</p>
      
            <p className=" text-slate-800 font-semibold mb-3">2016-2019</p>
          </div>
        </div>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5 mb-5">
        <p className="pt-3 pl-5 text-lg font-bold text-black">Experience</p>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <p className="text-black font-semibold">Frontend Web developer</p>
            <p className=" text-slate-800 font-semibold">
              Anicha digital infrastructure pvt ltd
            </p>
            <p className=" text-slate-800 font-semibold mb-3">
              Jul 2022 - Jan 2024
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-left mx-5 ">
          <div>
            <span></span>
            <p className="font-bold text-black">Freelancer | Web developer | Mobile app developer </p>
            {/* <p className="font-light text-slate-800 font-semibold">Happy Begins</p> */}
            <p className=" text-slate-800 font-semibold mb-3">
              Jan 2024 - Present
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
