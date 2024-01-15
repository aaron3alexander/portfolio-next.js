"use client";

import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { MdDescription } from "react-icons/md";
import Link from "next/link";

const RESUME_LINK = "/aaron_alexander_resume.pdf";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Thanks reaching out! I'll reply to you soon :)");
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again later!");
    }
    document.getElementById("contact-form").reset();
  }

  return (
    <div className="flex flex-col items-center h-full p-4">
      <h1 className="text-6xl  lg:text-8xl text-center mt-8  mb-8 text-white">
        contact me
      </h1>
      <div className="w-fit h-fit flex space-x-4 px-2 py-1 bg-white rounded-lg justify-center items-center mb-2">
        <Link href={RESUME_LINK} title="Resume" target="_blank">
          <MdDescription title="Resume" className="w-7 h-7 lg:w-9 lg:h-9" />
        </Link>

        <Link
          target="_blank"
          title="LinkedIn"
          href="https://www.linkedin.com/in/aaron3alexander/"
        >
          <SiLinkedin title="LinkedIn" className="w-6 h-6 lg:w-8 lg:h-8" />
        </Link>

        <Link
          target="_blank"
          title="GitHub"
          href="https://github.com/aaron3alexander"
        >
          <SiGithub title="Github" className="w-6 h-6 lg:w-8 lg:h-8" />
        </Link>
        <Link
          target="_blank"
          title="Gmail"
          href="mailto:aaron.3alexander@gmail.com"
        >
          <SiGmail title="Gmail" className="w-6 h-6 lg:w-8 lg:h-8" />
        </Link>
      </div>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="h-fit w-80 lg:w-fit text-white space-y-2 flex flex-col justify-center items-center rounded-lg p-4"
      >
        <div className="flex w-full justify-between lg:space-x-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="frm-first">First</label>
            <input
              className="rounded-md p-2"
              id="frm-first"
              type="text"
              name="first"
              autoComplete="given-name"
              required
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="frm-last">Last</label>
            <input
              className="rounded-md p-2"
              id="frm-last"
              type="text"
              name="last"
              autoComplete="family-name"
              required
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="frm-email">Email</label>
          <input
            className="rounded-md p-2 "
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="frm-phone">Phone</label>
          <input
            className="rounded-md p-2"
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="frm-message">Message</label>
          <textarea
            className="rounded-md p-2 text-black"
            id="frm-message"
            rows="6"
            name="message"
          ></textarea>
        </div>

        <div className="bg-white rounded-md w-1/2 flex justify-center items-center">
          <button className="p-5 w-full text-black text-center" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
