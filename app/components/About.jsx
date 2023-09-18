import Image from "next/image";
import mypic from "../../public/linkedinpfp.jpg";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

export default function About() {
  const RESUME_LINK =
    "https://drive.google.com/file/d/14Z2AnaXS2PXQtQA7x8Z2E18ig0bX2un6/view?usp=sharing";

  return (
    <div className="bg-white h-full flex flex-col justify-center space-y-4 sm:py-0">
      <h1 className="text-6xl sm:text-8xl text-center mt-8">about me</h1>

      <div className="flex flex-col sm:flex-row space-y-12 sm:justify-center items-center sm:transform sm:-translate-y-12 sm:h-full">
        <div className="sm:mr-24 justify-center items-center flex flex-col h-1/2 space-y-2 sm:space-y-8">
          <div className="w-48 h-48 border-4 border-black sm:w-96 sm:h-96 rounded-full">
            <Image
              className="rounded-full"
              src={mypic}
              alt="Profile Photo"
              width="full"
              height="full"
              id="img"
            />
          </div>

          <div className="justify-center items-center flex rounded-lg border-black border-2 w-5/6 space-x-4 sm:space-x-8">
            <Link href={RESUME_LINK} target="_blank">
              <DescriptionIcon className="w-7 h-7 sm:w-9 sm:h-9" />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/aaron3alexander/"
            >
              <SiLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link target="_blank" href="https://github.com/aaron3alexander">
              <SiGithub className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
            <Link target="_blank" href="mailto:aaron.3alexander@gmail.com">
              <SiGmail className="w-6 h-6 sm:w-8 sm:h-8" />
            </Link>
          </div>
        </div>

        <div className="h-full sm:h-1/3 px-8 sm:w-1/3 space-y-8 transform -translate-y-8">
          <div className="text-xs sm:text-base h-fit">
            <h1 className="text-2xl sm:text-6xl sm:mb-2">{"I'm Aaron"}</h1>
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
              <span className="rounded-lg px-1 bg-black text-white text-green-700">
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
