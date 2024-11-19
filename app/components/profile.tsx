"use client";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPrisma } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

const profile = () => {

  return (
    <section
      className=" bg-profileGradient px-12 xl:px-64 pt-36 pb-14 h-auto mb-12"
      id="profile"
    >
      <div className="mb-14">
        <h3 className="text-slate-700 text-lg mb-2 scroll">Get To Know Me</h3>
        <h1 className="text-slate-700 text-3xl font-bold scroll">
          Fahmi Ahmadhika Ramadhan
        </h1>
        <h4 className="text-slate-700 mb-4 italic font-mono scroll">
          Technology Enthusiast
        </h4>

        <p className="text-slate-700 mb-2 xl:w-[640] scroll">
          Hello, thank you for visiting my website. I am from Indonesia. I am
          currently studying at SMK Telkom Malang. This website will be the core
          of all the works that I will create. I like to create simple programs.
          On the next page, you will see some of my projects.
        </p>
      </div>

      {/* skill & tool */}
      <h1 className="text-slate-700 text-4xl text-center font-bold mb-12 scroll">
        Skill & Tools
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <FaHtml5
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <FaCss3Alt
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <IoLogoJavascript
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <RiTailwindCssFill
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <FaReact
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <RiNextjsFill
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <SiXampp
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <SiPrisma
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <SiPostman
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <FaJava
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
        <div className="rounded-xl shadow-xl p-6 cursor-pointer scroll">
          <FaNodeJs
            size={100}
            className="hover:scale-125 transition ease-out duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default profile;
