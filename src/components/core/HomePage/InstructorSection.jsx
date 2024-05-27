import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16 flex items-center justify-center lg:flex-row flex-col-reverse gap-20">
      <div className="lg:w-[50%]">
        <img src={instructor} className="shadow-white" />
      </div>
      <div className="flex flex-col lg:gap-10 gap-5">
        <div className="text-4xl font-semibold w-[60%]">
          Become an
          <HighlightText text={"instructor"} />
        </div>
        <div className="max-w-[30rem] font-medium text-base text-richblack-300">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </div>
        <div className="w-fit">
          <Button active={true} linkto="/signup" className="w-fit">
            <div className="flex items-center gap-2">
              Learn More
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
