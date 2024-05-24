import React from "react";
import resume from "../assets/Resume-Roger-Louisse-Eustaquio.pdf";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p>
              Phone:{" "}
              <a href="tel:+639943912870" className="text-blue-600">
                +63 994 391 2870
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:louisseeustaquio@gmail.com"
                className="text-blue-600"
              >
                louisseeustaquio@gmail.com
              </a>
            </p>
            <p>
              Resume:{" "}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
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
