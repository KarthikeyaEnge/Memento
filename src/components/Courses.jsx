import React from "react";
import data from "../data/courses";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaLink, FaArrowUpLong } from "react-icons/fa6";

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
              <tr key={i}>
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
                  <Link className="font-sora-500 lg:text-sm text-xs text-cyan-500">
                    {e?.name}
                  </Link>
                </td>

                <td>
                  <Link
                    className="rounded-full flex items-center justify-center bg-[#2ae2ec53] text-cyan-500 p-1 shadow-lg shadow-slate-950"
                    to={e?.credentials}
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
