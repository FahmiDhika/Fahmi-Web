"use client";

import { IoArrowForwardOutline } from "react-icons/io5";

export const Box = ({
  namaProject,
  deskripsiProject,
  bahasa,
}: {
  namaProject: React.ReactNode;
  deskripsiProject: React.ReactNode;
  bahasa: React.ReactNode[];
}) => {
  return (
    <div className=" p-7 border rounded-lg box1-gradient flex flex-wrap justify-evenly mb-4">
      <div className="">
        <img
          src="report.png"
          width={250}
          alt="report jualan"
          className="xl:grayscale xl:hover:grayscale-0 scale-150 xl:scale-100 xl:hover:scale-150 cursor-pointer transition ease-out duration-1000"
        />
      </div>

      <div className="pt-10 items-center text-white">
        <h1 className="text-3xl font-bold mb-2">{namaProject}</h1>
        <p className="mb-2">{deskripsiProject}</p>
        <div className="gap-x-5 gap-y-3 flex flex-wrap">
          {bahasa.map((b, index) => (
            <h3 key={index} className="button-bahasa" id="bahasa">
              {b}
            </h3>
          ))}
        </div>
        <h2>
          Git Hub <IoArrowForwardOutline />
        </h2>
      </div>
    </div>
  );
};
