"use client";

import { Box } from "./projectBox";

const project = () => {
  return (
    <section className="bg-[#31333B] px-12 xl:px-64 pt-36 pb-14 h-auto mb-12">
      <Box
        namaProject="Report Penjualan"
        deskripsiProject="dwabiudbwiaudwa"
        bahasa={['TypeScript', 'Prisma', 'NodeJs', 'MySQL']}
      />
    </section>
  );
};

export default project;
