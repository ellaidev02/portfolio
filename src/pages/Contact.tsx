const Contact = () => {
  const contactDetails = [
    { id: 1, icon: "", title: "ellaidhuraidev@gmail.com" },
    { id: 2, icon: "", title: "+91 8610301262" },
    { id: 3, icon: "", title: "https://www.linkedin.com/in/ellaidhurai" },
    { id: 4, icon: "", title: "https://github.com/ellaidhurain" },
    // { id: 3, icon: "", title: "Twitter" },
    // { id: 3, icon: "", title: "Facebook" },
    // { id: 3, icon: "", title: "Instagram" },
  ];
  return (
    <>
      <div className=" bg-primary rounded-[24px] mt-5 ">
        <p className="py-3 text-center text-[36px] mx-9 md:mx-0 text-black font-semibold">Let's Connect</p>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5 ">
        {/* <p className="pt-3 text-center  text-lg">Contact</p> */}
        <div className="flex flex-col md:flex-row w-full flex-wrap  justify-center">
          {contactDetails?.map((item, index) => (
            <div
              key={index}
              className="md:mx-5 mb-8 my-4 text-sm md:text-[16px] bg-gray-300 text-black font-semibold py-3 px-3 mx-3 rounded-2xl"
            >
              <div className="flex md:w-[300px] w-[200px]">
                <img src={item.icon} />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className=" bg-primary rounded-[24px] mt-5">
          <p className="pt-3 pl-6 text-lg">Send Me a Message</p>
          <div className="grid grid-cols-2">
            <input
              placeholder="Name"
              className="border-none outline-none m-3 p-3 rounded-2xl bg-secondary"
            />
            <input
              placeholder="Email"
              className="border-none outline-none m-3 p-3 rounded-2xl  bg-secondary"
            />
          </div>
          <div className="grid grid-cols-1">
            <textarea
              rows={5}
              placeholder="Message"
              className="bg-secondary m-3 p-3 border-none outline-none rounded-2xl"
            />
          </div>
          <button className=" m-3 p-3 bg-themeColor text-primary w-[800px] rounded-2xl font-bold">
            Send Message
          </button>
        </div> */}
    </>
  );
};

export default Contact;
