// import Image from "next/image";
import AboutMe from "@/components/about-me";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
// import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/experience";
import Personal from "@/components/personal";
export default function Home() {
  return (
    <main className="pb-40">
      <Navbar/>
      <div className="relative mt-[-55px] sm:mt-[-85px] md:mt-[-115px] lg:mt-[-145px] xl:mt-[-175px]">
      <Introduction/>
      <AboutMe/>
      <Skills />
      <Services/>
      <Experience />
      <Portfolio/>
      <Personal/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
      </div>
    </main>
  );
}
