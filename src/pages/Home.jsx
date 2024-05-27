import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import HighlightText from "../components/core/HomePage/HighlightText";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div className="text-white">
      {/* SECTION 1 */}
      <div className="flex justify-center items-center mx-auto w-11/12 flex-col max-w-maxContent text-white">
        <div className="mx-auto mt-16 p-1 hover:scale-95 w-fit flex rounded-full text-richblack-300 transition-all bg-richblack-800 duration-200 items-center gap-3 font-bold">
          <Link to="/signup">
            <div className="flex flex-row items-center rounded-full gap-3 px-10 py-[5px] hover:bg-richblack-900">
              <p className="">Become an instructor </p>
              <FaArrowRight />
            </div>
          </Link>
        </div>

        <div className="md:text-center text-start text-4xl font-semibold text-white mt-11">
          Empower Your Future With
          {/* <span className="text-richblue-200"> Coding Skills</span> */}
          <HighlightText text={"Coding Skills"} />
        </div>
        <div className="lg:w-[90%] text-start md:text-center text-lg font-bold text-richblack-300 mt-6">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex flex-row lg:items-center items-start gap-7 mt-11">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book A Demo
          </CTAButton>
        </div>

        <div className="mx-3 my-16 lg:w-[70rem] shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/*Code Section 1*/}

        <div className="mt-7">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold ">
                Unlock Your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try It Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-yellow-100"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/*Code Section 2*/}

        <div className="mt-1">
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold lg:pl-40">
                Start
                <HighlightText text={"Coding In Seconds"} />
              </div>
            }
            subheading={
              <div className="max-w-[50rem] lg:pl-40">
                "Go ahead, give it a try. Our hands-on learning environment
                means you'll be writing real code from your very first lesson."
              </div>
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            codeColor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
            alert={true}
          />
        </div>
      </div>

      <ExploreMore />

      {/*Section 2*/}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg md:h-[310px] h-[100px]">
          <div className="w-11/12 max-w-maxContent flex items-center justify-center gap-5 mx-auto">
            <div className="flex gap-10 text-white md:mt-[15rem] mt-[5rem]">
              <CTAButton active={true} linkto="/signup">
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto="/signup">
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-maxContent w-11/12 flex flex-col items-center gap-7">
          <div className="mb-10 mt-[100px] flex md:flex-row flex-col md:gap-16 gap-5">
            <div className="font-semibold md:text-4xl text-3xl lg:w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand"} />
            </div>
            <div className="flex flex-col gap-10 lg:w-[45%] items-start">
              <div className="text-[18px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto="/signup">
                Learn More
              </CTAButton>
            </div>
          </div>
          <TimeLineSection />

          <LearningLanguageSection />
        </div>
      </div>
      <div className="w-11/12 max-w-maxContent bg-richblack-900 text-white flex flex-col items-center justify-between gap-8 mx-auto mb-32">
        <InstructorSection />
      </div>
      <h2 className="text-4xl font-semibold mt-10 w-full md:flex flex-col items-center text-white">
        <div className="md:block hidden">Review From Other Learners</div>
        <div><ReviewSlider /></div>
      </h2>
      <Footer />
    </div>
  );
};

export default Home;
