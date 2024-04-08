import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";

const GetMentor = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async() => {
    if (!title || !email || !message) {
      alert("Please fill in all fields.");
    } else {
      alert(
        "Your request is submitted and will be reviewed soon by one of our mentors."
      );
      setTitle("");
      setEmail("");
      setMessage("");
      const response = await fetch(`${BASE_URL}/requests`, {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({ title : title, body : message})
      }) 
      const data = await response.json();
      alert(
        `${data.message}`
      );
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
      <section className="body-font h-full relative bg-black text-gray-400">
        {/* <div
          class="visme_d"
          data-title="mentor form"
          data-url="vdnmjeo3-mentor-form"
          data-domain="forms"
          data-full-page="false"
          data-min-height="1000px"
          data-form-id="48186"
        ></div> */}

         <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">
              Get your Customize Roadmap by Mentor
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Fill the form, share the email details and description of what you
              want to learn to connect with our mentor.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-pink-500"
                  >
                    Title
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-pink-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-900"
                    placeholder="Message"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-pink-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  onClick={handleSubmit}
                  className="mx-auto flex rounded border-0 bg-pink-600 py-2 px-8 text-lg text-white hover:bg-pink-500 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
};

export default GetMentor;
