export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log(data);
  }
  return (
    <div className="flex flex-col items-center h-full p-4">
      <h1 className="text-6xl lg:text-8xl text-center mt-8 lg:mb-24 mb-12 text-white">
        contact me
      </h1>

      <form className="h-fit w-80 lg:w-fit text-white space-y-2 flex flex-col justify-center items-center rounded-lg p-4">
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
            required
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
