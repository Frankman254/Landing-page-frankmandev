import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import CoreExpertise from "@/components/core-expertise";
import SystemOwnership from "@/components/system-ownership";
import Experience from "@/components/experience";
import CaseStudy from "@/components/case-study";
import Portfolio from "@/components/portfolio";
import TechStack from "@/components/tech-stack";
import AboutMe from "@/components/about-me";
import Personal from "@/components/personal";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="pb-40">
      <ScrollProgress />
      <Navbar/>
      <div className="relative mt-[-55px] sm:mt-[-85px] md:mt-[-115px] lg:mt-[-145px] xl:mt-[-175px]">
        <Introduction/>
        <CoreExpertise/>
        <SystemOwnership/>
        <Experience/>
        <CaseStudy/>
        <Portfolio/>
        <TechStack/>
        <AboutMe/>
        <Personal/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
