import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Timer from "@/components/Timer";
import Features from "@/components/Features";

export default function Home() {
  return (
   <div className={"flex flex-col snap-y"}>
       <Navbar />
   <div className={"bg-[url('/hero-bg.png')] min-h-screen flex flex-col justify-center items-center"}>
            <Hero/>
   </div>
       <Problem/>
       <Solution/>
       {/*<Features/>*/}
       <Timer/>
      <Team/>
       <Contact/>
       <Footer/>
   </div>
  );
}
