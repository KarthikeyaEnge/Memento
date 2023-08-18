import React from "react";
import img1 from "../assets/bubble.png";
import { Link, Navigate } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa6";
const Hero = () => {
  return (
    <main className="relative min-w-full min-h-screen hback flex flex-col justify-center items-center overflow-hidden">
      <h1 className="font-krona lg:text-8xl text-5xl text-center bg-gradient-to-b from-[#a5f5f1ae] via-[#0ff0e579] to-[#ffffff07] py-3 bg-clip-text  text-transparent h-full z-10">
        Karthikeya Enge
      </h1>

      <h1 className="font-krona lg:text-3xl text-xl mt-3 text-center text-[#2dd7ce79] py-3  h-full z-10">
        I AM A DEVELOPER & LEARNER
      </h1>

      <Link
        to="/Home"
        className="z-10 flex flex-row justify-center items-center"
      >
        <button className="font-krona lg:text-2xl  text-xl py-2 px-3 bg-[#2dd7ce47] text-[#13dbd1d1] rounded-full ring-0 outline-none animate-bounce lg:mt-10  mt-3 hover:animate-none hover:shadow-2xl hover:shadow-[#61c7c2ba] z-10 flex justify-center items-center gap-2">
          Wanna Know me <FaPaperPlane className="text-[#13dbd1d1] text-2xl" />
        </button>
      </Link>

      <ul className="flex flex-row justify-center  gap-5 items-center w-2/3 lg:mt-20 self-center mt-28">
        <li>
          <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
            <FaInstagram className="lg:text-3xl text-2xl hover:text-[#0ff0e59c] text-[#0ff0e579]  hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank">
            <FaLinkedin className="lg:text-3xl text-2xl hover:text-[#0ff0e59c] text-[#0ff0e54d] hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href={import.meta.env.VITE_GITHUB_URL} target="_blank">
            <FaGithub className="lg:text-3xl text-2xl hover:text-[#0ff0e59c] text-[#0ff0e579]  hover:cursor-pointer" />
          </a>
        </li>
        <li>
          <a href="mailto:karthikeya.enge@hotmail.com" target="_blank">
            <FaEnvelope className="lg:text-3xl text-2xl hover:text-[#0ff0e59c] text-[#0ff0e579]  hover:cursor-pointer" />
          </a>
        </li>
      </ul>
      <img
        src={img1}
        alt="img"
        className="absolute lg:h-[750px] h-[400px] w-auto lg:-left-1/4  -left-1/4 -top-32 flex-shrink-0 lg:-top-10  rotate-180  z-0 animate-pulse"
      />
      <img
        src={img1}
        alt="img"
        className="absolute lg:h-[750px] h-[450px] w-auto lg:left-3/4 left-1/2 rotate-60  z-0 animate-pulse"
      />

      <img
        src={img1}
        alt="img"
        className="absolute lg:h-[150px] w-auto lg:left-1/2 lg:top-1/2 lg:block hidden rotate-60  z-0 animate-pulse"
      />
    </main>
  );
};

export default Hero;
