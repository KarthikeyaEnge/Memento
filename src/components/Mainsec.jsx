import React from "react";
import img from "../assets/code.png";
import img1 from "../assets/ai.png";
import img2 from "../assets/phy.png";
import img3 from "../assets/mdb.png";
import Projectsec from "./Projectsec";
import Footer from "./Footer";
import { FaArrowRight } from "react-icons/fa6";

const Mainsec = () => {
  return (
    <section className="flex-shrink-0  h-auto lg:w-3/5 w-screen flex flex-col flex-nowrap items-center lg:p-2  p-7 lg:pt-36">
      <section id="about">
        <h2 className="font-sora-600 text-slate-100 my-2 lg:hidden top-0 sticky bg-slate-900 bg-opacity-10 backdrop-blur-md p-2 rounded-lg">
          ABOUT
        </h2>
        <p className="font-sora-500 text-slate-300 text-lg">
          I took Computer Science as my undergrad course, thinking I could build
          something useful that people could use to resolve their issues. I took{" "}
          <a href="https://cs50.harvard.edu/x/2023/" className="text-sky-500">
            CS50
          </a>
          , which inspired me to learn more about coding, and that's how I
          started my web development journey. Fast-forward to today: I've built
          an attendance manager for my college, several other web apps and am
          looking forward to building more.
        </p>{" "}
        <br />
        <p className="font-sora-500 text-slate-300 text-lg">
          {" "}
          My Focus is on building creative web apps that can solve common issues
          and help Learners, tutors, etc. to do more. In my free time, I mostly
          create my own fun web apps to learn and help my friends learn.
        </p>{" "}
        <br />
        <p className="font-sora-500 text-slate-300 text-lg">
          {" "}
          When I'm not on the computer, I mostly love to spend my time with my
          Family and Friends.
        </p>
      </section>

      {/* passion section */}

      <section id="passion" className="mt-20">
        <h2 className="font-sora-600 text-slate-100 my-2 lg:block hidden">
          PASSION
        </h2>
        <h2 className="font-sora-600 text-slate-100 my-2 lg:hidden top-0 sticky bg-slate-900 bg-opacity-10  backdrop-blur-md p-2 rounded-lg z-20">
          PASSION
        </h2>
        <section className="w-full flex flex-row flex-wrap items-center justify-center h-fit gap-2 text-slate-100">
          <article className=" card card-compact w-64 bg-white h-96 w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-none shadow-lg shadow-black flex-shrink-0 bg-opacity-5">
            <figure className="h-40">
              <img src={img} alt="code" />
            </figure>
            <div className=" card-body">
              <h2 className=" card-title"> Development</h2>
              <p className="text-md">
                {" "}
                with a love for web design and development and a strong CS
                foundation. I'm Passionate about building various creative web
                applications. As I'm improving as a web developer. I would like
                to develop apps that are clean, easily readable, and
                understandable
              </p>
            </div>
          </article>
          <article className="card card-compact w-64 bg-white h-96 w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-none shadow-lg shadow-black flex-shrink-0 bg-opacity-5">
            <figure className=" h-40">
              <img src={img1} alt="code" />
            </figure>
            <div className=" card-body">
              <h2 className=" card-title"> Artificial Intelligence</h2>
              <p className="text-md">
                {" "}
                I am always curious to know about the early advancements of AI
                in various fields. I took AI as my minor in undergrad so that I
                could understand and implement it in various use cases.
              </p>
            </div>
          </article>
          <article className=" card card-compact w-64 bg-white h-96 w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border border-none shadow-lg shadow-black flex-shrink-0 bg-opacity-5">
            <figure className="h-40">
              <img src={img2} alt="code" />
            </figure>
            <div className=" card-body">
              <h2 className=" card-title">Physics</h2>
              <p className="text-md">
                {" "}
                I have been a Fan of the Special Theory OF Relativity and
                Quantum Physics since I was a kid. I would love to know about
                the various paradoxes and theories that our world runs on. I
                believe Quantum computing will change the world.
              </p>
            </div>
          </article>
        </section>
      </section>

      {/**skills section */}

      <section id="skills" className="mt-20 ">
        <section className="flex flex-row flex-wrap gap-2 items-center justify-center">
          <article className=" card card-compact w-64 bg-white  w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  bg-opacity-5 border border-none shadow-lg shadow-black flex-shrink-0 h-56">
            <div className=" card-body">
              <h2 className=" card-title self-center text-slate-100">
                {" "}
                Achievements
              </h2>
            </div>
            <a
              href="https://www.credly.com/badges/24357bcf-9130-4f62-a0e2-c7c6595912ae/public_url"
              target="_blank"
            >
              <figure>
                {" "}
                <img src={img3} alt="code" />
              </figure>
            </a>
          </article>

          <article className="flex flex-col gap-2 items-center w-fullrounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-white  bg-opacity-5 border border-none shadow-lg shadow-black p-5 rounded-xl h-56 cursor-pointer">
            <h2 className="font-sora-600 text-slate-100 text-xl">
              Technologies I'v worked
            </h2>
            <img
              src="https://skillicons.dev/icons?i=c,java,py,html,css,js,git"
              alt="skills-1"
            />

            <img
              src="https://skillicons.dev/icons?i=github,eclipse,md,vscode,react,tailwind,vite"
              alt="skills-1"
            />

            <img
              src="https://skillicons.dev/icons?i=django,nodejs,mongodb,express,firebase,figma"
              alt="skills-1"
            />
          </article>
        </section>
      </section>

      <a
        href={import.meta.env.VITE_RESUME_URL}
        className=" group text-xl font-sora-500 m-5  flex flex-row flex-nowrap items-center hover:underline transition-all hover:text-sky-500"
        target="_blank"
      >
        My Resume{" "}
        <FaArrowRight className="group-hover:ml-4 transition-all ml-1" />{" "}
      </a>

      {/**projects section */}
      <Projectsec />
      <Footer />
    </section>
  );
};

export default Mainsec;
