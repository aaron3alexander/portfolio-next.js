import Education from "./components/Education";
import Home from "./components/home/Home";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Head from "next/head";
export default function Page() {
  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Sidebar />
      <section className="bg-black h-screen" id="home">
        <Home />
      </section>
      <section className=" h-fit lg:h-screen" id="about">
        <About />
      </section>
      <section className="unt-green h-fit lg:h-screen" id="education">
        <Education />
      </section>
      <section className="h-fit lg:h-screen" id="experience">
        <Experience />
      </section>
      {/* <section className="h-fit w-full lg:h-screen bg-black" id="contact">
        <Contact />
      </section> */}
    </div>
  );
}
