import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";

class ShowPostCC extends React.Component {

  render() {
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
        <div className="flex items-center justify-center flex-col">
            <div>
               <h1 className='text-2xl md:text-4xl font-bold'>Class Component</h1>  
            </div>
           
          <div className="flex flex-col lg:flex-row bg-gray-400 items-center justify-center rounded-2xl mb-[5rem] w-[70%] lg:w-[95%] mt-[2rem]">
            {CardData.map((item) => (
              <div className="shadow-md rounded-md p-4 w-[15rem] md:w-[25rem] lg:w-[20rem] h-[13rem] mt-[4rem] bg-gray-200 mr-[0.7rem] ml-[0.7rem] flex flex-col items-center justify-center mb-[4rem]">
                <div className='flex'>
                  < IoPersonSharp className='mt-[0.4rem] md:mt-[0.6rem] mr-[0.2rem] text-red-500'/>
                   <h2 className="text-lg md:text-2xl mb-2 text-red-500 font-bold">
                  {item.name}
                </h2> 
                </div>
                <div className='flex'>
                  <BiSolidMessageAltDetail className='mt-[0.4rem] md:mt-[0.6rem] mr-[0.2rem]'/>
                     <p className="text-sm md:text-lg">{item.desc}</p>
                </div>
                <div className='flex'>
                  < FaBookOpen className='mt-[0.7rem] mr-[0.2rem]'/>
                   <p className="mt-[0.5rem] text-gray-600">{item.job}</p>
                </div>
              
             
               
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ShowPostCC;
