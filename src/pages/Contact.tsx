const Contact = () => {
  const contactDetails = [
    { id: 1, icon: "", title: "ellaidhuraidev@gmail.com" },
    { id: 2, icon: "", title: "+91 8610301262" },
    { id: 3, icon: "", title: "Linkedin" },
    // { id: 3, icon: "", title: "Twitter" },
    // { id: 3, icon: "", title: "Facebook" },
    // { id: 3, icon: "", title: "Instagram" },
  ];
  return (
    <div className="w-[800px]">
      <div className=" bg-primary rounded-[24px] mt-5">
        <p className="py-3 pl-6 text-[36px]">Let's Connect</p>
      </div>
      <div className=" bg-primary rounded-[24px] mt-5">
        <p className="pt-3 pl-6 text-lg">Contact</p>
        <div className="grid grid-cols-2 ">
          {contactDetails?.map((item, index) => (
            <div key={index} className="mx-5 my-4 bg-secondary p-3 rounded-2xl">
              <div className="flex">
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
    </div>
  );
};

export default Contact;
