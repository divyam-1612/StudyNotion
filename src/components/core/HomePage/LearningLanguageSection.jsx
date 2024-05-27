import React from "react";
import HighlightText from "./HighlightText";
import knowyourprogress from "../../../assets/Images/Know_your_progress.png"
import compare from "../../../assets/Images/Compare_with_others.png"
import plan from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col items-center mt-[150px] mb-20 gap-5">
      <div className="md:text-4xl text-3xl font-semibold md:text-center text-start ">
        Your swiss knife for <HighlightText text={"learning any language"} />
      </div>
      <div className="md:text-center text-start text-base lg:max-w-[70%] text-richblack-700 font-medium">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking, custom schedule and more.
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center">
        <img src={knowyourprogress} className="object-contain lg:-mr-32"/>
        <img src={compare} className="object-contain"/>
        <img src={plan} className="object-contain lg:-ml-36"/>
      </div>
      <div>
        <CTAButton active={true} linkto="/signup">Learn More </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
