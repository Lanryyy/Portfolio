import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experiencia from "@/components/Experiencia";
import Educacao from "@/components/Educacao";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import DataStats from "@/components/DataStats";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { navItems } from "@/Data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 overflow-clip">
      <ScrollProgress />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Main />
        <DataStats />
        <Grid />
        <Skills />
        <Projects />
        <Experiencia />
        <Educacao />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
