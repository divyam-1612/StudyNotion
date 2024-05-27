import React, { useEffect, useState } from "react";
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";
import { Link } from "react-router-dom";

const Course_Card = ({ course, Height, Width }) => {
  console.log("course is this", course);
  console.log(
    "course",
    course.instructor.firstName,
    course.instructor.lastName
  );

  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="flex flex-col">
          <div className="rounded-xl">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-contain ${Width}`}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 md:py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm uppercase text-richblack-50">
              {course?.instructor?.firstName} {course.instructor.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Course_Card;
