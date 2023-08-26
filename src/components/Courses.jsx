import React from "react";
import data from "../data/courses";
import { Link } from "react-router-dom";
import {
  FaArrowLeftLong,
  FaLink,
  FaArrowUpLong,
  FaArrowRightLong,
  FaX,
} from "react-icons/fa6";

const Courses = () => {
  return (
    <main className="back h-auto py-2">
      <nav
        className="p-2 flex w-full flex-col flex-nowrap items-center "
        id="top"
      >
        <div className="rounded-full w-9 h-9 bg-[#1af4e624] flex justify-center items-center self-start">
          <Link to="/Home">
            <FaArrowLeftLong className="text-cyan-500" />
          </Link>
        </div>

        <h1 className="text-cyan-500 font-krona text-center text-3xl">
          COURSE WORK
        </h1>
      </nav>

      <table className="table">
        <thead className="lg:text-xl text-md text-slate-300 top-0 sticky bg-slate-900 bg-opacity-10 backdrop-blur-md p-2 rounded-lg">
          <th>Issued By</th>
          <th className="lg:block hidden">Year</th>
          <th>Course</th>
          <th>credentials</th>
          <th className="lg:block hidden">Skills</th>
        </thead>
        <tbody>
          {data.courses.map((e, i) => {
            return (
              <tr key={i} className="hover:bg-[#17eaea2a]">
                <td>
                  <img
                    src={e?.img}
                    className=" h-14  w-14 rounded-lg"
                    alt={e.iby}
                  />
                </td>
                <td className="lg:block hidden">
                  <h1 className="font-krona text-cyan-500">{e.id}</h1>
                </td>
                <td>
                  <button
                    className="font-sora-500 lg:text-sm text-xs text-cyan-500"
                    onClick={() =>
                      document.getElementById(`model_${i}`).showModal()
                    }
                  >
                    {e?.name}
                  </button>

                  <dialog id={`model_${i}`} className="modal scroll_bar">
                    <form
                      method="dialog"
                      className="modal-box  bg-[#8eebf336] backdrop-blur-lg bg-opacity-70"
                    >
                      <figure className="rounded-lg overflow-hidden">
                        <img
                          src={e?.course_img}
                          alt="course_img"
                          className=" h-fit w-auto"
                        />
                      </figure>

                      <section className="card-body font-sora-500">
                        <h1 className="card-title">{e?.name}</h1>
                        <h3 className="card-tite text-cyan-300">Description</h3>
                        <p>{e?.desc}</p>
                        <h2 className="text-cyan-300">Issued by:{e?.iby}</h2>
                        <h2 className="text-cyan-300">Issued Year:{e?.id}</h2>

                        <ul className="flex flow-row flex-wrap items-center">
                          <h2>skills</h2>
                          {e.skills.map((ele, i) => {
                            return (
                              <li
                                className="rounded-full flex items-center justify-center bg-[#2ae2ec53] text-cyan-500 p-1 m-1 w-fit h-auto"
                                key={i}
                              >
                                <h4>{ele}</h4>
                              </li>
                            );
                          })}
                        </ul>

                        <Link
                          className="rounded-full flex items-center justify-center bg-[#2ae2ec53] text-cyan-500 p-1 shadow-lg shadow-[#10333b] active:shadow-none"
                          to={e?.credentials}
                          target="_blank"
                        >
                          <FaLink /> Credentials
                        </Link>

                        <Link
                          to={e?.course_link}
                          className="flex justify-normal gap-1 items-center hover:text-cyan-400  transition-all "
                        >
                          <FaLink />
                          Browse course
                        </Link>
                      </section>
                      <div className="modal-action -mt-10">
                        <button className="btn">close</button>
                      </div>
                    </form>
                  </dialog>
                </td>

                <td>
                  <Link
                    className="rounded-full flex items-center justify-center bg-[#2ae2ec53] text-cyan-500 p-1 shadow-lg shadow-slate-950"
                    to={e?.credentials}
                    target="_blank"
                  >
                    <FaLink /> Credentials
                  </Link>
                </td>

                <td className="lg:block hidden">
                  <ul className="flex flow-row flex-wrap">
                    {e.skills.map((ele, i) => {
                      return (
                        <li
                          className="rounded-full flex items-center justify-center bg-[#2ae2ec53] text-cyan-500 p-1 m-1 w-fit h-auto"
                          key={i}
                        >
                          <h4>{ele}</h4>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="#top" className="p-3 mr-4 self-end">
        <FaArrowUpLong className="text-xl hover:scale-y-150 hover:text-cyan-400 transition-all" />
      </a>
    </main>
  );
};

export default Courses;
