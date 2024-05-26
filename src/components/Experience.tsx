import React from "react";
import { experiences } from "../constants/experiences";

const Experience: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-100 text-gray-800"
      aria-labelledby="experience"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          id="experience"
          tabIndex={-1}
        >
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
              <h4 className="text-xl text-gray-600 mb-1">
                {experience.company}
              </h4>
              <p className="text-gray-500 text-sm mb-4">{experience.period}</p>
              <h5 className="text-lg font-semibold mb-2">Projects:</h5>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {experience.projects.map((project, idx) => (
                  <li key={idx}>
                    <strong>{project.title}:</strong> {project.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
