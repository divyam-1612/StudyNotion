import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="text-4xl font-semibold text-center text-white">
        Unlock the <HighlightText text={"Power Of Code"} />
      </div>
      <p className="text-center text-richblack-300 text-md mt-3">
        Learn To Build Anything You Can Imagine
      </p>
      <div className="flex md:flex-row flex-col md:rounded-full rounded-lg bg-richblack-800 mb-20 border-richblack-100 mt-10 px-2 py-2 md:space-y-0 *:space-y-4">
        {tabsName.map((e, i) => {
          return (
            <div
              className={`text-base flex flex-row items-center gap-2 ${
                currentTab === e
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } rounded-full transition-all duration-200 hover:richblack-900 hover:text-richblack-5 px-7 py-2 cursor-pointer`}
              key={i}
              onClick={() => setMyCard(e)}
            >
              {e}
            </div>
          );
        })}
      </div>

        <div className="lg:h-[150px]">

        <div className="flex md:flex-row flex-col gap-10 w-11/12 mx-auto items-center max-w-maxContent py-5">
            {
                courses.map((e,i) => {
                    return(
                        <CourseCard key={i} cardData={e} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
                    )
                })
            }
        </div>

        </div>

    </div>
  );
};

export default ExploreMore;
