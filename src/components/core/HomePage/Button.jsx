import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <div>
      <Link to={linkto}>
        <div
          className={`text-center text-[13px] sm:text-[16px] md:px-6 px-3 md:py-3 py-2 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800 text-white"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default Button;
