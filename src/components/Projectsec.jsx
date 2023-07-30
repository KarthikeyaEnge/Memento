import React from "react";
import proj1 from "../assets/ms.png";
import proj3 from "../assets/rs.png";
import proj2 from "../assets/am.png";
import { Link } from "react-router-dom";
import { FaGithub, FaUpRightFromSquare } from "react-icons/fa6";

const Projectsec = () => {
  return (
    <section
      className="flex flex-col gap-2 flex-nowrap w-full mt-16 "
      id="projects"
    >
      <h2 className="font-sora-600 text-slate-100 my-2 lg:block hidden">
        PROJECTS
      </h2>
      <h2 className="font-sora-600 text-slate-100 my-2 lg:hidden top-0 sticky bg-slate-900 bg-opacity-10  backdrop-blur-md p-2 rounded-lg z-20">
        PROJECTS
      </h2>
      <article className=" card lg:card-side gap-3 card-compact  bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none flex-shrink-0 shadow-lg shadow-black mt-7">
        <figure className="p-2">
          <img src={proj1} alt="mineskill" className=" rounded-lg " />
        </figure>

        <section className="flex flex-col items-center justify-center gap-3 p-2">
          <h2 className="card-title flex flex-row items-center flex-wrap">
            <a
              href="https://mineskill.onrender.com/"
              target="_blank"
              className=" font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center"
            >
              MINESKILL
              <FaUpRightFromSquare className="text-sm text-slate-400" />
            </a>
            <a
              href="https://github.com/KarthikeyaEnge/StudyScraper_FrontEnd"
              className="badge hover:text-sky-300"
              target="_blank"
            >
              <FaGithub className="m-1" /> Github repo
            </a>
          </h2>

          <p className="text-md font-sora-500">
            A web App that helps students to find quality content in web, videos
            with just their syllabus copy scan/photo. Just upload the syllabus
            copy you can get quality content like videos, website-links and
            more.
          </p>

          <h1 className="text-slate-100 font-sora-500">Build with</h1>
          <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              ReactJS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              ViteJS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              MongoDB
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              ExpressJS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Tailwindcss
            </li>
          </ul>
        </section>
      </article>

      {/**project2 */}
      <article className=" card lg:card-side gap-3 card-compact  bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none flex-shrink-0 shadow-lg shadow-black mt-7">
        <figure className="p-5">
          <img src={proj2} alt="attendance" className=" rounded-lg " />
        </figure>

        <section className="flex flex-col items-center justify-center gap-3 p-2">
          <h2 className="card-title flex flex-row items-center flex-wrap ">
            <a
              href="https://github.com/KarthikeyaEnge/Attendance_mng"
              className="font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center"
              target="_blank"
            >
              ATTENDANCE_MANAGER
              <FaUpRightFromSquare className="text-sm text-slate-400" />
            </a>
            <a
              href="https://github.com/KarthikeyaEnge/Attendance_mng"
              className="badge hover:text-sky-300"
              target="_blank"
            >
              <FaGithub className="m-1" /> Github repo
            </a>
          </h2>

          <p className="text-md font-sora-500">
            A PWA which basically ease daily attendance procedure and has
            features like attendance pdf and excel sheet converter.
          </p>

          <h1 className="text-slate-100 font-sora-500">Build with</h1>
          <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              ReactJS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              ViteJS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Google scripts
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              DaisyUI
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Tailwindcss
            </li>
          </ul>
        </section>
      </article>

      {/** project3 */}
      <article className=" card lg:card-side gap-3 card-compact  bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none flex-shrink-0 shadow-lg shadow-black mt-7">
        <figure className="p-5">
          <img src={proj3} alt="mineskill" className=" rounded-lg " />
        </figure>

        <section className="flex flex-col items-center justify-center gap-3 p-2">
          <h2 className="card-title flex flex-row items-center flex-wrap">
            <a
              href="https://github.com/KarthikeyaEnge/Learn-web_progs/tree/main/web_adv/webpage_15"
              target="_blank"
              className=" font-sora-600 text-slate-200 hover:text-sky-400 flex flex-row flex-nowrap gap-2 items-center "
            >
              RAILRESERVE SYS.
              <FaUpRightFromSquare className="text-sm text-slate-400" />
            </a>
            <a
              href="https://github.com/KarthikeyaEnge/Learn-web_progs/tree/main/web_adv/webpage_15"
              target="_blank"
              className="badge hover:text-sky-300"
            >
              <FaGithub className="m-1" /> Github repo
            </a>
          </h2>

          <p className="text-md font-sora-500">
            A web App that acts as a platform for Railway Reservation using user
            authentication, and features like past reservation search and more.
          </p>

          <h1 className="text-slate-100 font-sora-500">Build with</h1>
          <ul className="flex flex-row gap-3 items-center flex-wrap justify-center">
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              Django
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              HTML
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              CSS
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              JavaScript
            </li>
            <li className="badge   bg-cyan-400 bg-opacity-30 text-cyan-500 font-inter font-normal">
              SQLite
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
};

export default Projectsec;
