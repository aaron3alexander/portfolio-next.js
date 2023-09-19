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
    <div className="p-4 mb-4 flex flex-col h-full w-full">
      <h1 className="text-6xl lg:text-8xl text-center mt-8 mb-12 lg:mb-24">
        experience
      </h1>

      <div className="flex flex-col h-full w-full space-y-4 items-center justify-evenly lg:flex-row lg:justify-center lg:items-start lg:space-x-28 lg:space-y-0">
        <div className="border-2 border-black w-full h-2/3 lg:h-96 lg:w-96 lg:shadow-2xl rounded-lg">
          <div className="w-full h-full px-4 py-1 flex flex-col">
            <div className="w-full flex justify-center item-center mb-1 lg:mb-0 ">
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
              <div className="items-center hidden lg:flex">
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
        </div>

        <div className="border-2 border-black w-full h-2/3 lg:h-96 lg:w-96 rounded-lg lg:shadow-2xl">
          <div className="w-full h-full px-4 flex flex-col">
            <div className="w-full flex justify-center item-center">
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
    </div>
  );
}
