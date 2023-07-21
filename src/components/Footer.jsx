import React from "react";

const link = (name, hr) => {
  return (
    <a href={hr} className="hover:text-sky-500 font-sora-600" target="_blank">
      {name}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className=" my-32">
      <h1 className="font-inter text-slate-400 md:text-lg text-xs">
        Designed inspired from{" "}
        {link("Britanny Chiag", "https://brittanychiang.com/")} , Coded in{" "}
        {link("Visual Studio Code", "https://visu")}. Built by{" "}
        {link("ViteJS", "https://brittanychiang.com/")} and{" "}
        {link("ReactJS", "https://brittanychiang.com/")}, Styled by{" "}
        {link("Tailwindcss", "https://brittanychiang.com/")} and{" "}
        {link("DaisyUI", "https://brittanychiang.com/")}
      </h1>
    </footer>
  );
};

export default Footer;
