import React from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterLink2 } from "../../data/footer-links";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800 text-richblack-400 ">
      <div className="w-11/12 mx-auto max-w-maxContent mt-20 flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-14 justify-evenly pt-10 pb-20">
          <div className="flex flex-col gap-5 xxs:items-center sm:items-start">
            <img src={logo} />
            <div className="text-richblack-50 font-semibold text-[16px]">
              Company
            </div>
            <div className="hover:text-richblack-25 cursor-pointer">
              Careers
            </div>
            <div className="hover:text-richblack-25 cursor-pointer">
              Affiliates
            </div>
            <div className="flex gap-3">
              <FaFacebook />
              <FaGoogle />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
          <div className="flex flex-col xxs:items-center sm:items-start">
            <div className="text-richblack-50 font-semibold text-[16px]">
              Resources
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((e, index) => {
                  return (
                    <div
                      className="xxs:items-center sm:items-start flex flex-col hover:text-richblack-50 cursor-pointer hover:transition duration-300"
                      key={index}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-3  xxs:items-center sm:items-start">
                <div className="text-richblack-50 font-semibold text-[16px]">
                  Support
                </div>
                <div className="hover:text-richblack-50 cursor-pointer hover:transition duration-300">
                  Help Center
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex flex-row lg:flex-col xxs:gap-32 lg:gap-9 xxs:text-center lg:text-start hidden">
            <div className="">
              <div className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </div>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className=" hover:text-richblack-50 cursor-pointer hover:transition duration-300"
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="text-richblack-50 font-semibold text-[16px]">
                Community
              </div>
              <div className="mt-2 flex flex-col gap-2">
                {Community.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className=" xxs:items-center sm:items-start hover:text-richblack-50 cursor-pointer hover:transition duration-300"
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="lg:flex  lg:text-start justify-evenly w-[50%] gap-[75px] pl-5 xxs:text-center lg:space-y-0 xxs:space-y-10 hidden md:block">
            <div className="lg:h-[650px] lg:w-[1px] bg-richblack-600 translate-x-14"></div>
            {FooterLink2.map((e, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {e.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2 ">
                    {e.links.map((element, index) => {
                      return (
                        <div key={index} className="hover:text-richblack-50 cursor-pointer hover:transition duration-300">
                          {element.title}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-[1px] w-[80rem] bg-richblack-600 -translate-y-16"></div>
        <div className="flex justify-between">
          <div className="mb-20 flex gap-3">
            {BottomFooter.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    BottomFooter.length - 1 == i
                      ? ""
                      : "border-richblack-700 border-r-2 pr-3"
                  }`}
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div className="text-center">
            Made with ❤️ CodeHelp © 2023 Studynotion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
