import Image from "next/image";
import zendesk from "../../public/zendesk.svg";
import childrens from "../../public/childrens.jpg";
import { BiLogoReact } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

import { BiLogoJavascript } from "react-icons/bi";

import Link from "next/link";

export default function Experience() {
  return (
    <div className="p-4 mb-4  h-full w-full">
      <h1 className="text-8xl text-center mt-8 mb-24 ">experience</h1>
      <div className="flex h-full w-full space-x-28 justify-center ">
        <div className="border-2 border-black h-1/2 w-1/4 rounded-lg shadow-2xl p-4 flex flex-col">
          <Link
            href={"https://www.zendesk.com/"}
            target="_blank"
            className="flex justify-center mb-5"
          >
            <Image
              className="w-200 h-200"
              src={zendesk}
              alt="Profile Photo"
              width="200"
              height="200"
            />
          </Link>
          <hr className="h-1 bg-black mb-4" />

          <div className="text-left">
            <h1>
              <b>Company:</b> Zendesk
            </h1>
            <h1>
              <b>Position:</b> Fullstack SWE Intern
            </h1>
            <h1>
              <b>Duration:</b> June 2023 - August 2023
            </h1>
            <h1>
              <b>Tech used:</b>
            </h1>
            <div className="flex items-center">
              <BiLogoReact className="w-12 h-12" />
              <AiFillHtml5 className="w-12 h-12" />
              <SiCss3 className="w-10 h-10" />
              <BiLogoJavascript className="w-12 h-12" />
              <SiTypescript className="w-9 h-9" />
              <SiDocker className="w-12 h-12" />
              <SiRubyonrails className="w-12 h-12" />
              <SiJest className="w-9 h-9" />
              <TbBrandCypress className="w-10 h-10" />
            </div>
          </div>
        </div>

        <div className="border-2 border-black h-1/2 w-1/4 rounded-lg shadow-2xl p-4 flex flex-col">
          <Link
            href={"https://www.zendesk.com/"}
            target="_blank"
            className="flex justify-center "
          >
            <Image
              className="w-350 h-350"
              src={childrens}
              alt="Profile Photo"
              width="full"
              height="190"
            />
          </Link>
          <hr className="h-1 bg-black mb-4" />

          <div className="text-left">
            <h1>
              <b>Position:</b> Volunter Developer
            </h1>
            <h1>
              <b>Duration:</b> October 2022 - December 2022
            </h1>
            <h1>
              <b>Tech used:</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
