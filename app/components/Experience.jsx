import Image from "next/image";
import zendesk from "../../public/zendesk.svg";
import childrens from "../../public/childrens.jpg";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { BiLogoAws } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";

import Link from "next/link";

export default function Experience() {
  return (
    <div className="p-4 mb-4 flex flex-col w-full h-fit">
      <h1 className="text-6xl lg:text-8xl text-center mt-8 mb-12">
        experience
      </h1>

      <div className="flex flex-col h-full w-full space-y-4 items-center justify-evenly lg:flex-row lg:justify-center lg:items-start lg:space-x-28 lg:space-y-0">
        <div className="border-2 py-2 border-black w-full max-w-lg lg:max-w-none h-fit lg:w-96 lg:shadow-2xl rounded-lg">
          <div className="w-full h-full px-4 py-1 flex flex-col">
            <div className="w-full flex justify-center items-center mb-1 lg:mb-0 ">
              <Link href={"https://www.zendesk.com/"} target="_blank">
                <Image
                  className="w-24 h-16 lg:w-40 lg:h-32"
                  src={zendesk}
                  alt="Zendesk"
                  width="full"
                  height="full"
                />
              </Link>
            </div>

            <hr className="h-1 bg-black mb-4" />

            <div className="text-left lg:text-base text-sm">
              <h1>
                <b>Company:</b> Zendesk
              </h1>
              <h1>
                <b>Position:</b> Fullstack SWE Intern
              </h1>
              <h1>
                <b>Duration:</b> Jun. 2023 - Aug. 2023
              </h1>
              <div className="hidden lg:inline">
                <h1>
                  <b>Tech used:</b>
                </h1>
                <div className="items-center flex">
                  <div className="tooltip">
                    <SiReact className="w-10 h-10" />
                    <span className="tooltiptext">React.js</span>
                  </div>

                  <div className="tooltip w-fit">
                    <SiHtml5 className="w-9 h-9" />
                    <span className="tooltiptext">HTML</span>
                  </div>

                  <div className="tooltip mr-1">
                    <SiCss3 className="w-9 h-9" />
                    <span className="tooltiptext">CSS</span>
                  </div>

                  <div className="tooltip ml-px mr-1.5">
                    <SiTypescript className="w-9 h-9" />
                    <span className="tooltiptext">TypeScript</span>
                  </div>

                  <div className="tooltip">
                    <SiDocker className="w-12 h-12" />
                    <span className="tooltiptext">Docker</span>
                  </div>

                  <div className="tooltip mr-1">
                    <SiRubyonrails className="w-12 h-12" />
                    <span className="tooltiptext">Ruby on Rails</span>
                  </div>

                  <div className="tooltip">
                    <SiJest className="w-9 h-9" />
                    <span className="tooltiptext">Jest.js</span>
                  </div>

                  <div className="tooltip">
                    <TbBrandCypress className="w-10 h-10" />
                    <span className="tooltiptext">Cypress.js</span>
                  </div>
                </div>
              </div>

              <hr className="h-px border-black m-1" />

              <div className="">
                <ul className="list-disc text-xs lg:text-sm ml-4">
                  <li>
                    Developed responsive frontend interfaces using
                    <b> React.js</b> and <b>TypeScript</b>
                  </li>
                  <li>
                    Deployed code changes to production, adding new unit tests
                    as needed
                  </li>
                  <li>
                    Integrated <b>REST APIs</b> through <b>GraphQL</b> queries
                    and utilized Postman for testing/debugging
                  </li>
                  <li>
                    Collaborated in an agile Scrum team, resolving
                    client-reported tickets and development issues within
                    two-week sprints
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 py-2 border-black w-full max-w-lg lg:max-w-none h-fit lg:w-96 lg:shadow-2xl rounded-lg">
          <div className="w-full h-full px-4 flex flex-col">
            <div className="w-full flex justify-center items-center">
              <Link href={"https://www.childrens.com/"} target="_blank">
                <Image
                  className="w-48 h-20 lg:w-80 lg:h-32 lg:mb-1"
                  src={childrens}
                  alt="Childrens Health"
                  width="full"
                  height="full"
                />
              </Link>
            </div>

            <hr className="h-1 bg-black mb-4" />

            <div className="text-left lg:text-base text-sm">
              <h1>
                <b>Company:</b> {"Children's Health"}
              </h1>
              <h1>
                <b>Position:</b> React Native Volunter Developer
              </h1>
              <h1>
                <b>Duration:</b> Oct. 2022 - Dec. 2022
              </h1>
              <div className="hidden lg:inline">
                <h1>
                  <b>Tech used:</b>
                </h1>
                <div className="items-center flex">
                  <div className="tooltip">
                    <SiReact className="w-10 h-10" />
                    <span className="tooltiptext">React</span>
                  </div>

                  <div className="tooltip">
                    <BiLogoJavascript className="w-12 h-12" />
                    <span className="tooltiptext">JavaScript</span>
                  </div>

                  <div className="tooltip">
                    <BiLogoAws className="w-12 h-12" />
                    <span className="tooltiptext">AWS Amplify</span>
                  </div>

                  <div className="tooltip">
                    <BiLogoFigma className="w-10 h-10" />
                    <span className="tooltiptext">Figma</span>
                  </div>

                  <div className="tooltip">
                    <AiFillAndroid className="w-11 h-11" />
                    <span className="tooltiptext">Android</span>
                  </div>
                </div>
              </div>
              <hr className="h-px border-black m-1" />
              <div className="mb-1">
                <ul className="list-disc text-xs lg:text-sm ml-4">
                  <li>
                    Worked on Gamify Parks, a digitally immersive app for kids
                    with the goal of lowering obesity rates in children through
                    physical activity
                  </li>
                  <li>
                    Collaborated with a team of ~12 developers to create{" "}
                    <b>React Native</b> code and incorporate Figma designs
                  </li>
                  <li>
                    Programmed account creation flow and linked components to
                    AWS Amplify
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
