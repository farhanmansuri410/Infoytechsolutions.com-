import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can add form submission logic (e.g. API call)
  //   alert("Thank you for contacting Infoy Tech Solution!");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

   const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4pz4bwb",    // replace with your Service ID
        "template_83372b2",   // replace with your Template ID
        formData,
        "KkNovwtNTP153Ivkp"     // replace with your Public Key
      )
      .then(
        (result) => {
          alert("Thank you for contacting Infoy Tech Solution!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Oops! Something went wrong, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section
      className="bg-gradient-to-br from-blue-100 to-blue-200 py-20 px-4"
      id="contact"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        {/* Intro Text */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Get in Touch With Infoy Tech Solution
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-2">
            We’re here to help you bring your ideas to life. Whether you have a
            question, want to discuss a project, or need support, our team is
            ready to assist you.
          </p>
          <p className="text-gray-700 max-w-xl mx-auto">
            Reach out to us anytime — we’re committed to responding promptly and
            providing you with the best solutions.
          </p>
          <p className="text-blue-700 font-semibold mt-4">
            Let’s collaborate and create something exceptional together!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl max-w-xl mx-auto shadow-xl"
        >
          {/* Name Field */}
          <div className="relative z-0 w-full mb-8 group ">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="name"
              className="absolute top-0 -z-10 origin-[0] scale-100 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="email"
              className="absolute top-0 -z-10 origin-[0] scale-100 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Email
            </label>
          </div>

          {/* Subject Field */}
          <div className="relative z-0 w-full mb-8 group">
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="subject"
              className="absolute top-0 -z-10 origin-[0] scale-100 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Subject
            </label>
          </div>

          {/* Message Field */}
          <div className="relative z-0 w-full mb-8 group">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute top-0 -z-10 origin-[0] scale-100 transform text-gray-500 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
