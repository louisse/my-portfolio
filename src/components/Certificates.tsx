import React from "react";
import customer_service_for_people_with_disabilities from "../assets/certificates/customer_service_for_people_with_disabilities.webp";
import IAAP_WAS_certification_preparation_curriculum from "../assets/certificates/IAAP_WAS_certification_preparation_curriculum.webp";
import web_accessibility_bootcamp_curriculum from "../assets/certificates/web_accessibility_bootcamp_curriculum.webp";
import web_accessibility_curriculum from "../assets/certificates/web_accessibility_curriculum.webp";

type Certificate = {
  title: string;
  description: string;
  issued_by: string;
  date: string;
  src: string;
};

const certificates: Certificate[] = [
  {
    title: "Certificate OF COMPLETION",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Customer Service for People with Disabilities Curriculum",
    issued_by: "Deque University",
    date: "25th of January, 2023 05:47pm (GMT)",
    src: customer_service_for_people_with_disabilities,
  },
  {
    title: "Certificate OF COMPLETION",
    description:
      "Roger Louisse Eustaquio has completed the courses in the IAAP WAS Certification Preparation Curriculum",
    issued_by: "Deque University",
    date: "20th of January, 2023 06:42pm (GMT)",
    src: IAAP_WAS_certification_preparation_curriculum,
  },
  {
    title: "Certificate OF COMPLETION",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Web Accessibility Bootcamp Curriculum",
    issued_by: "Deque University",
    date: "30th of January, 2023 03:02pm (GMT)",
    src: web_accessibility_bootcamp_curriculum,
  },
  {
    title: "Certificate OF COMPLETION",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Web Accessibility Curriculum",
    issued_by: "Deque University",
    date: "20th of January, 2023 06:42pm (GMT)",
    src: web_accessibility_curriculum,
  },
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p>{cert.description}</p>
              <img src={cert.src} alt="" />
              <p className="text-gray-600 mt-2">
                <span className="sr-only">issuing organization</span>
                {cert.issued_by} | <span className="sr-only">date:</span>
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
