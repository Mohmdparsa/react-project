const ShowPostFC = () => {
  const CardData = [
    {
      name: "Ethan Carter",
      desc: "my name is Ethan Carter",
      job: "Full Stack Developer",
    },
    {
      name: "Olivia White",
      desc: "my name is Olivia White",
      job: "Cybersecurity Analyst",
    },
    {
      name: "William Johnson",
      desc: "my name is William Johnson",
      job: "Data Scientist",
    },
    {
      name: "Lily Thompson",
      desc: "my name is Lily Thompson",
      job: "UX/UI Designer",
    },
  ];
  return (
    <>
    <div className="flex items-center justify-center flex-col mt-[5rem]">
      <div><h1 className='text-2xl md:text-4xl font-bold'>Functional Component</h1></div>
         <div className="flex flex-col lg:flex-row bg-gray-400 items-center justify-center rounded-2xl mb-[5rem] w-[70%] lg:w-[90%] mt-[2rem]">
        {CardData.map((item) => (
          <div className=" shadow-md rounded-md p-4 w-[15rem]  md:w-[25rem] lg:w-[17rem] h-[13rem] mt-[4rem] bg-gray-200 mr-[0.7rem] ml-[0.7rem] flex flex-col items-center justify-center mb-[4rem]">
            <h2 className="text-lg md:text-2xl  mb-2 text-red-500 font-bold ">
              {item.name}
            </h2>
            <p className="text-sm md:text-lg">{item.desc}</p>
            <p className="mt-[0.5rem] text-gray-600">{item.job}</p>
          </div>
        ))}
      </div> 
    </div>
    
    </>
  );
};

export default ShowPostFC;
