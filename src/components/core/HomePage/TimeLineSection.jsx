import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    logo: logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimeLineSection = () => {
  return (
    <div className="">
      <div className="lg:flex space-y-10 gap-14 mb-10 mt-5 items-center">
        <div className="lg:w-[45%] flex flex-col gap-2 ">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-col">
                <div className="flex gap-6" key={index}>
                  <div className="w-[50px] h-[50px] flex items-center bg-white">
                    <img src={element.logo} />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.description}</p>
                  </div>
                </div>
                <div className={`${timeline.length - 1 === index ? "" : "translate-x-2 h-[25px] w-[1px] bg-richblack-50"}`}></div>
              </div>
            );
          })}
        </div>

        <div className="relative shadow-blue-200">
          <img
            src={timelineImage}
            className="shadow-white object-cover h-fit"
          />

          <div className="absolute bg-caribbeangreen-700 flex sm:flex-row flex-col text-white uppercase ms:py-6 py-3 left-[50%] translate-x-[-50%] translate-y-[-20%] md:translate-y-[-50%]">
            <div className="flex gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className="md:text-3xl text-xxl font-bold">10</p>
              <p className="text-caribbeangreen-300 md:text-sm text-[10px]">
                Years Of Experience
              </p>
            </div>
            <div className={`flex gap-5 items-center border-caribbeangreen-300 px-7 md:py-0 lg:py-2`}>
              <p className="md:text-3xl text-xxl font-bold">250</p>
              <p className="text-caribbeangreen-300 md:text-sm text-[10px]">Type Of courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
