import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/solid";
import resume from "../assets/Resume-Roger-Louisse-Eustaquio.pdf";

const Contact: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-100 text-gray-800"
      aria-labelledby="contact"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          id="contact"
          tabIndex={-1}
        >
          Contact
        </h2>
        <div className="max-w-lg mx-auto bg-white p-4 sm:p-8 rounded shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3">Contact Information</h3>
            <p className="flex mb-2">
              <DevicePhoneMobileIcon className="w-6 h-6 inline mr-1" />
              <a
                href="tel:+639943912870"
                className="text-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black focus:rounded-sm"
              >
                <span className="sr-only">Phone: </span>
                +63 994 391 2870
              </a>
            </p>
            <p className="flex mb-2">
              <EnvelopeIcon className="w-6 h-6 inline mr-1" />
              <a
                href="mailto:louisseeustaquio@gmail.com"
                className="text-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black focus:rounded-sm"
              >
                <span className="sr-only">Email: </span>
                louisseeustaquio@gmail.com
              </a>
            </p>
            <p className="flex mb-2">
              <AtSymbolIcon className="w-6 h-6 inline mr-1" />
              <a
                href="https://linkedin.com/in/roger-louisse-eustaquio-281325204"
                className="text-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black focus:rounded-sm"
              >
                <span className="sr-only">Linkedin: </span>
                LinkedIn profile
              </a>
            </p>
            <p className="flex mb-2">
              <AtSymbolIcon className="w-6 h-6 inline mr-1" />
              <a
                href="https://www.jobstreet.com.ph/profile/rogerlouisse-eustaquio-5tcdG1bkYR"
                className="text-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black focus:rounded-sm"
              >
                <span className="sr-only">Jobstreet: </span>
                Jobstreet profile
              </a>
            </p>
            <p className="flex mb-2">
              <DocumentTextIcon className="w-6 h-6 inline mr-1" />
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black focus:rounded-sm"
              >
                <span className="sr-only">Resume: </span>
                Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
