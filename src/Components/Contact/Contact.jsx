import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <h2 className="text-2xl text-center text-emerald-400 font-bold md:text-4xl">
               Contact Me
            </h2>
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className=" p-6 mr-2 bg-gray-100 sm:rounded-lg flex flex-col justify-center items-center">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>
                        </div>

                        <form action="https://formspree.io/f/myzkjqjk" method="POST" className="p-6 flex flex-col justify-center">
                          <div className="flex flex-col">
                              <input
                                  type="text"
                                  name="name"
                                  placeholder="Full Name"
                                  required
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-emerald-400 focus:outline-none"
                              />
                          </div>

                          <div className="flex flex-col mt-2">
                              <input
                                  type="email"
                                  name="email"
                                  placeholder="Email"
                                  required
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-emerald-400 focus:outline-none"
                              />
                          </div>

                          <div className="flex flex-col mt-2">
                              <textarea
                                  name="message"
                                  placeholder="Your Message"
                                  required
                                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-emerald-400 focus:outline-none"
                              ></textarea>
                          </div>

                          <button type="submit" className="md:w-32 bg-orange-700 text-white font-bold py-3 px-6 rounded-lg mt-3 focus:border-emerald-400 transition ease-in-out duration-300">
                              Submit
                          </button>
                      </form>

                    </div>
                </div>
            </div>
        </div>
    );
}