import Link from "next/link";
import Header from "./components/header";
import Hero from "./components/hero";
import Profile from "./components/profile"
import Project from "./components/project"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Profile />
      <Project />
    </>
  )
}