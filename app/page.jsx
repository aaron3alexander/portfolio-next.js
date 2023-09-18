import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

export default function Page() {
  return (
    <div>
      <Sidebar />
      <section className="bg-black h-screen" id="home">
        <Home />
      </section>
      <section className="h-screen" id="about">
        <About />
      </section>
      <section className="unt-green h-screen" id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
}
