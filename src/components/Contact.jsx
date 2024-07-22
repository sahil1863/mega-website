import React from "react";
import appwriteService from "../appwrite/config"
export default function Contact() {
  const [result, setResult] = React.useState("");
  const [n, setn] = React.useState("");
const formSubmit=(e)=>{
  e.preventDefault()
  setResult("Sending....");
  // console.log(e.target.name.value)
  appwriteService.addFeedback({
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value
  });
  setTimeout(() => {
    console.log("Hello, World!");
    e.target.reset();
    setResult("Submitted Successfully! Thank you for your feedback  ");
  }, 2000);
  setTimeout(() => {
    console.log("Hello, World!");
    e.target.reset();
    setResult("");
  }, 5000);
  // console.log(e.target.name.value,e.target.email.value,e.target.message.value);
}
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#02AABD] to-[#00CEAC] p-6">
      {/* Centered Section - Contact Form */}
      <div className="w-1/3 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-4xl font-sans mb-6 text-center">Share Your Feedback</h2>
        <form onSubmit={formSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e)=>{
                setn(e.target.value);
              }}
              required
              className="mt-1 block w-full md:w-50 lg:w-70 h-10 bg-gray-800 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
             className="mt-1 block w-full md:w-50 lg:w-70 h-10 bg-gray-800 text-white rounded-md  sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8" // Increased rows for larger textarea
              required
              className="mt-1 block w-full bg-gray-800 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="block mt-4 text-center">
  {result}

  {result =="Submitted Successfully! Thank you for your feedback  "  && (n)}
  
</div>

      </div>
    </div>
  );
}
