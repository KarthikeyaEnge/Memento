import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const link = (name, hr) => {
  return (
    <a href={hr} className="hover:text-sky-500 font-sora-600" target="_blank">
      {name}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className=" my-32 flex flex-col">
      <h1 className="font-inter text-slate-400 md:text-lg text-xs ">
        Design inspired by{" "}
        {link("Brittany Chiang", "https://brittanychiang.com/")} , Coded in{" "}
        {link("Visual Studio Code", "https://code.visualstudio.com/")}. Built by{" "}
        {link("ViteJS", "https://vitejs.dev/")} and{" "}
        {link("ReactJS", "https://react.dev/")}, Styled by{" "}
        {link("Tailwind CSS", "https://tailwindcss.com/")} and{" "}
        {link("DaisyUI", "https://daisyui.com/")}
      </h1>

      <a href="#about" className="p-3 self-end">
        <FaLongArrowAltUp className="text-xl hover:scale-y-150 hover:text-sky-400 transition-all" />
      </a>
    </footer>
  );
};

export default Footer;
