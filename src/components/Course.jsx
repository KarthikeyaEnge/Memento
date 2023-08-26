import React, { useId } from "react";
import { FaLink, FaUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import data from "../data/courses";

const Course = () => {
  const courselist = data.courses.slice(0, 3);
  const keyid = useId();
  return (
    <section
      className="flex flex-col gap-2 flex-nowrap w-full mt-16 "
      id="course"
    >
      <h2 className="font-sora-600 text-slate-100 my-2 lg:block hidden">
        COURSE WORK
      </h2>
      <h2 className="font-sora-600 text-slate-100 my-2 lg:hidden top-0 sticky bg-slate-900 bg-opacity-10  backdrop-blur-md p-2 rounded-lg z-20">
        COURSE WORK
      </h2>

      {courselist &&
        courselist.map((e, i) => {
          return (
            <article
              className=" card lg:card-side gap-3 card-compact   border border-none flex-shrink-0 shadow-lg shadow-black mt-7 image-full"
              key={`${keyid}${i}`}
            >
              <figure>
                <img src={e?.course_img} alt={e?.name} className="bg-white" />
              </figure>

              <section className="flex flex-col items-center justify-center gap-3 p-4 z-20">
                <h2 className="card-title flex flex-row items-center flex-wrap">
                  <a
                    href={e?.course_link}
                    target="_blank"
                    className=" font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center"
                  >
                    {e?.name}
                    <FaUpRightFromSquare className="text-sm text-slate-400" />
                  </a>
                </h2>

                <p className="text-md font-sora-500 text-slate-200">
                  {e?.desc}
                </p>

                <div className="flex flex-row gap-2 items-center flex-nowrap p-2 backdrop-blur-sm bg-sky-500 bg-opacity-20 border border-sky-500 rounded-md">
                  <FaLink className="text-sm text-slate-400" />
                  <a href={e?.credentials} target="_blank">
                    Cerdentials
                  </a>
                </div>
                <h1 className="text-slate-100 font-sora-500">Earned Skills:</h1>
                <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
                  {e?.skills &&
                    e?.skills.map((s) => {
                      return (
                        <li className="badge ring-0 border-none outline-none   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
                          {s}
                        </li>
                      );
                    })}
                </ul>
              </section>
            </article>
          );
        })}

      <Link
        className="flex items-center justify-start gap-3 w-full h-auto p-2 border-b border-cyan-500 text-cyan-500 font-krona"
        to="/courses"
      >
        More
        <FaArrowRight />{" "}
      </Link>
    </section>
  );
};

export default Course;
