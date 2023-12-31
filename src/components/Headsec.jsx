import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
const Headsec = () => {
  return (
    <section className="flex-shrink-0 lg:sticky lg:top-0 lg:h-screen h-fit lg:w-1/3 w-screen flex flex-col flex-nowrap items-center lg:p-2  p-7 justify-center">
      <section>
        <h1 className=" lg:text-5xl  text-4xl font-sora-700 text-slate-50">
          Karthikeya Enge
        </h1>
        <ul className="steps steps-vertical font-sora-600 lg:text-xl text-sm font-semibold text-sky-500">
          <li data-content="" className="step step-info">
            MERN Stack Developer
          </li>
          <li data-content="" className="step step-info">
            Quantum Computing Enthusiast
          </li>
          <li data-content="" className="step step-info">
            AI Enthusiast
          </li>
        </ul>

        <p className="text-lg font-sora-300 font-extrabold text-slate-300 mt-4">
          I build creative Web applications & ❤️ to know about Quantum Physics &
          Space.
        </p>
      </section>
      <nav className="mt-16 w-1/2">
        <ul className="text-lg lg:flex hidden flex-col font-sora-500 font-bold w-full transition-all delay-100 gap-3">
          <li className="group flex flex-row items-center justify-normal gap-4 ">
            <div className="bg-slate-300 w-24 h-0.5 group-hover:scale-125 group-hover:bg-slate-100"></div>
            <a
              href="#about"
              className="px-2 text-slate-300 group-hover:scale-125 group-hover:mx-4 group-hover:text-sky-400 "
            >
              About
            </a>
          </li>
          <li className="group flex flex-row items-center justify-normal gap-4 ">
            <div className="bg-slate-300 w-24 h-0.5 group-hover:scale-125 group-hover:bg-slate-100 "></div>
            <a
              href="#passion"
              className=" px-2 text-slate-300 group-hover:scale-125 group-hover:mx-4 group-hover:text-sky-400"
            >
              Passion
            </a>
          </li>
          <li className="group flex flex-row items-center justify-normal gap-4 ">
            <div className="bg-slate-300 w-24 h-0.5 group-hover:scale-125 group-hover:bg-slate-100 "></div>
            <a
              href="#skills"
              className=" px-2 text-slate-300 group-hover:scale-125 group-hover:mx-4 group-hover:text-sky-400"
            >
              Skills
            </a>
          </li>
          <li className="group flex flex-row items-center justify-normal gap-4 ">
            <div className="bg-slate-300 w-24 h-0.5 group-hover:scale-125 group-hover:bg-slate-100 "></div>
            <a
              href="#projects"
              className=" px-2 text-slate-300 group-hover:scale-125 group-hover:mx-4 group-hover:text-sky-400"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <ul className="flex flex-row lg:justify-center justify-start gap-5 items-center w-2/3 lg:mt-20 self-center">
        <li>
          <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
            <FaInstagram className="text-3xl hover:text-sky-500 text-slate-400  hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
            <FaLinkedin className="text-3xl hover:text-sky-500 text-slate-400 hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
            <FaGithub className="text-3xl hover:text-sky-500 text-slate-400  hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="mailto:karthikeya.enge@hotmail.com" target="_blank">
            <FaEnvelope className="text-3xl hover:text-sky-500 text-slate-400  hover:cursor-pointer" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Headsec;
