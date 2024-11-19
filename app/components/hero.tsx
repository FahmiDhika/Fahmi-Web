"use client";

import { RxDoubleArrowDown } from "react-icons/rx";
import { TypeAnimation } from "react-type-animation";

const hero = () => {
  return (
    <>
      <section
        className="bg-heroMobile md:bg-heroLaptop xl:bg-heroDekstop bg-cover w-full h-screen after shadow-2xl shadow-blue-200"
        id="home"
      >
        <div className="pt-32 flex justify-center items-center mb-5 xl:pt-36">
          <img
            src="foto gua square.JPG"
            alt="Foto Gua"
            width={200}
            className="border-4 rounded-meliuk border-[#608BC1]"
          />
        </div>
        <div className="px-12">
          <h2 className="text-xl text-[#295bb9] font-semibold text-center mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl text-center font-bold mb-4 text-blueGradient">
            Fahmi Dhika
          </h1>
          <div>
            <TypeAnimation
              className="text-slate-700 text-2xl mb-4 flex justify-center font-mono"
              sequence={[
                "Back-End Developer",
                1000,
                "Front-End Developer",
                1000,
                "Gamer",
                1000,
                "Mechanical Keyboard Enthusiast",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
          <h3 className="text-xl text-white font-semibold text-center mb-10">
            Welcome to my{" "}
            <span className="text-[#cbdceb] bg-[#133e87] rounded-full p-2">
              Website
            </span>
          </h3>
          {/* <Link href="#profile" className="flex justify-center">
            <button className="text-lg border-4 px-3 py-2 mb-3 rounded-full">About Me</button>
        </Link> */}
          <div className="flex justify-center">
            <a href="#profile">
              <RxDoubleArrowDown size={50} className="text-[#133e87]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
