import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* Navbar */}
      <nav className="w-auto flex flex-wrap justify-between px-64 py-8">
        {/* Nama */}
        <Link href="#home">
          <h1 className="font-bold text-3xl italic text-[#133E87] hover:scale-125 
          transition ease-out duration-1000">Fahmi <span className="text-white not-italic text-2xl">Dhika</span></h1>
        </Link>

        {/* Button */}
        <div className="w-auto flex justify-between items-center gap-6 font-semibold">
          <Link href="#profile" className="text-xl">Profile</Link>
          <Link href="#profile" className="text-xl">Project</Link>
          <Link href="#profile" className="text-xl">Certificates</Link>
        </div>
      </nav>
    </>
  );
}
