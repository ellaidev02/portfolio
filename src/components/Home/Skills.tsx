
const Skills = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React JS",
    "Node JS",
    "React Native",
    "Tailwind CSS",
    'Wordpress',
    'Frappe'
  ];
  return (
    <>
      <div className=" bg-primary rounded-[24px]">
        <p className="pt-3 pl-6">Skills</p>
        <div className="flex flex-wrap  gap-4 justify-center">
          {skills.map((item, index) => (
            <div key={index} className="bg-gray-300 text-black font-semibold w-[120px] md:w-auto p-3 my-5 rounded-[24px]">
              <p className="p-3">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
