import Education from "./components/Education";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";

export default function Page() {
  return (
    <div className="section_container">
      <Sidebar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
}
