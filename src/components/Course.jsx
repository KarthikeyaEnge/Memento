import React from "react";
import mongodb from "../assets/mongodb.png";
import meta from "../assets/Meta-Logo.png";
import { FaLink, FaUpRightFromSquare } from "react-icons/fa6";

const Course = () => {
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

      <article className=" card lg:card-side gap-3 card-compact  bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none flex-shrink-0 shadow-lg shadow-black mt-7">
        <figure className="p-2">
          <img src={mongodb} alt="mineskill" className=" rounded-lg " />
        </figure>

        <section className="flex flex-col items-center justify-center gap-3 p-2">
          <h2 className="card-title flex flex-row items-center flex-wrap">
            <a
              href="https://learn.mongodb.com/learning-paths/mongodb-nodejs-developer-path"
              target="_blank"
              className=" font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center"
            >
              MongoDB Node.js Developer Path
              <FaUpRightFromSquare className="text-sm text-slate-400" />
            </a>
          </h2>

          <p className="text-md font-sora-500">
            MongoDb Node.js Developer Path course helps developers to learn
            MongoDB Node.js Drivers and also teaches various topics like Data
            Modeling, Indexing, Document Model etc.
          </p>

          <div className="flex flex-row gap-2 items-center flex-nowrap p-2 backdrop-blur-sm bg-sky-500 bg-opacity-20 border border-sky-500 rounded-md">
            <FaLink className="text-sm text-slate-400" />
            <a
              href="https://www.credly.com/badges/24357bcf-9130-4f62-a0e2-c7c6595912ae"
              target="_blank"
            >
              Cerdentials
            </a>
          </div>
          <h1 className="text-slate-100 font-sora-500">Earned Skills:</h1>
          <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Drivers
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              CRUD
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Data Modeling
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Indexes
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              MongoDB Atlas
            </li>
          </ul>
        </section>
      </article>

      <article className=" card lg:card-side gap-3 card-compact  bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none flex-shrink-0 shadow-lg shadow-black mt-7">
        <figure className="p-2  w-80 h-72 bg-white">
          <img src={meta} alt="mineskill" className=" rounded-lg " />
        </figure>

        <section className="flex flex-col items-center justify-center gap-3 p-2">
          <h2 className="card-title flex flex-row items-center flex-wrap">
            <a
              href="https://www.coursera.org/learn/principles-of-ux-ui-design"
              target="_blank"
              className=" font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center"
            >
              Principles of UX/UI Design
              <FaUpRightFromSquare className="text-sm text-slate-400" />
            </a>
          </h2>

          <p className="text-md font-sora-500">
            This is a beginner course for learners who would like to prepare
            themselves for a career in UX/UI development.
          </p>

          <div className="flex flex-row gap-2 items-center flex-nowrap p-2 backdrop-blur-sm bg-sky-500 bg-opacity-20 border border-sky-500 rounded-md">
            <FaLink className="text-sm text-slate-400" />
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/HBJKQZPUEJSH"
              target="_blank"
            >
              Cerdentials
            </a>
          </div>
          <h1 className="text-slate-100 font-sora-500">Earned Skills:</h1>
          <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Web Design
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              User Experience (UX)
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Front-End Web Development
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Accessibility
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Course;
