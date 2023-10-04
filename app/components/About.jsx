import Image from "next/image";
import mypic from "../../public/linkedinpfp.jpg";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdDescription } from "react-icons/md";
import Link from "next/link";
const RESUME_LINK = "/files/aaron_alexander_resume.pdf";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

export default function About() {
  return (
    <div className="bg-white h-full flex flex-col">
      <h1 className="text-6xl lg:text-8xl text-center mt-8 mb-12 lg:mb-0">
        about me
      </h1>

      <div className="flex flex-col lg:flex-row space-y-12 lg:justify-center items-center lg:transform lg:-translate-y-12 lg:h-full">
        <div className="lg:mr-24 justify-center items-center flex flex-col h-1/2 space-y-2 lg:space-y-8">
          <div className="w-48 h-48 border-4 border-black lg:w-96 lg:h-96 rounded-full">
            <Image
              className="rounded-full"
              src={mypic}
              alt="Profile Photo"
              width="full"
              height="full"
              id="img"
            />
          </div>

          <div className="justify-center items-center flex rounded-lg border-black border-2 w-5/6 space-x-4 lg:space-x-8">
            <Link href={RESUME_LINK} title="Resume" target="_blank">
              <MdDescription className="w-7 h-7 lg:w-9 lg:h-9" />
            </Link>
            <Link
              target="_blank"
              title="LinkedIn"
              href="https://www.linkedin.com/in/aaron3alexander/"
            >
              <SiLinkedin className="w-6 h-6 lg:w-8 lg:h-8" />
            </Link>

            <Link
              target="_blank"
              title="GitHub"
              href="https://github.com/aaron3alexander"
            >
              <SiGithub className="w-6 h-6 lg:w-8 lg:h-8" />
            </Link>
            <Link
              target="_blank"
              title="Gmail"
              href="mailto:aaron.3alexander@gmail.com"
            >
              <SiGmail className="w-6 h-6 lg:w-8 lg:h-8" />
            </Link>
          </div>
        </div>

        <div className="h-full lg:h-1/3 px-8 w-fit max-w-xl  space-y-8 transform -translate-y-8">
          <div className="text-xs lg:text-base h-fit">
            <h1 className="text-2xl lg:text-6xl lg:mb-2">{"I'm Aaron"}</h1>
            <hr className="h-0.5 bg-black mb-4" />
            <p>
              I am a <b>senior</b> at the University of North Texas who is
              double-majoring in Computer Science and Chemistry, with minors in
              Math and Biology. Feel free to download my resume{" "}
              <a className="text-blue-600" target="_blank" href={RESUME_LINK}>
                here
              </a>{" "}
              if you want to take a look at my past!
            </p>
            <br />
            <p>
              {"I'm "} currently learning Next.js{" "}
              <span className="rounded-lg px-1 bg-black text-white">
                {"(this website was built using it actually!)"}
              </span>
              , Typescript, and Node.js. {"I've "} done mainly frontend work in
              the past, but I would love to do fullstack stuff in the future!
            </p>
            <br />
            <p>
              My hobbies include cooking, video editing, playing the piano, and
              of course, programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
