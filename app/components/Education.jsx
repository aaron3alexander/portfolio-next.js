import Image from "next/image";
import unt from "../../public/unt.jpeg";

export default function Education() {
  return (
    <div className="p-4 unt-green h-1/2 sm:h-full text-white mb-4">
      <h1 className="text-4xl sm:text-8xl text-center mt-8 mb-24">education</h1>

      <div className="mb-2 flex w-full items-center justify-center space-x-12">
        <div className="hidden sm:inline">
          <Image
            className="rounded-lg "
            src={unt}
            alt="Profile Photo"
            width="full"
            height="400"
          />
        </div>

        <div className="bg-white text-black rounded-lg p-4 h-fit w-fit ">
          <h3 className="text-xl font-semibold">University of North Texas</h3>
          <hr className="h-0.5 bg-black mb-2" />
          <p>B.S. - Computer Science, B.A. - Chemistry</p>
          <p></p>
          <li>Minors in Math & Biology</li>
          <li>GPA: 3.98 | Full Ride Merit Scholarship</li>
          <li>Public Relations Officer @ UNT CS Club</li>
          <li>
            Expected <u>May 2024</u>
          </li>
        </div>
      </div>
    </div>
  );
}
