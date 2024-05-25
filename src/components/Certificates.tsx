import React, { useEffect, useRef, useState } from "react";
import customer_service_for_people_with_disabilities from "../assets/certificates/customer_service_for_people_with_disabilities.webp";
import IAAP_WAS_certification_preparation_curriculum from "../assets/certificates/IAAP_WAS_certification_preparation_curriculum.webp";
import web_accessibility_bootcamp_curriculum from "../assets/certificates/web_accessibility_bootcamp_curriculum.webp";
import web_accessibility_curriculum from "../assets/certificates/web_accessibility_curriculum.webp";

type Certificate = {
  title: string;
  description: string;
  issued_by: string;
  date: string;
  imageUrl: string;
  alt_text: string;
};

const certificates: Certificate[] = [
  {
    title: "Web Accessibility Bootcamp Curriculum",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Web Accessibility Bootcamp Curriculum",
    issued_by: "Deque University",
    date: "30th of January, 2023 03:02pm (GMT)",
    imageUrl: web_accessibility_bootcamp_curriculum,
    alt_text:
      "image of certificate of completion in the web accessibility bootcamp curriculum",
  },
  {
    title: "Web Accessibility Curriculum",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Web Accessibility Curriculum",
    issued_by: "Deque University",
    date: "20th of January, 2023 06:42pm (GMT)",
    imageUrl: web_accessibility_curriculum,
    alt_text:
      "image of certificate of completion in the web accessibility curriculum",
  },
  {
    title: "IAAP WAS Certification Preparation Curriculum",
    description:
      "Roger Louisse Eustaquio has completed the courses in the IAAP WAS Certification Preparation Curriculum",
    issued_by: "Deque University",
    date: "20th of January, 2023 06:42pm (GMT)",
    imageUrl: IAAP_WAS_certification_preparation_curriculum,
    alt_text:
      "image of certificate of completion in the IAAP WAS certification preparation curriculumm",
  },
  {
    title: "Customer Service for People with Disabilities Curriculum",
    description:
      "Roger Louisse Eustaquio has completed the courses in the Customer Service for People with Disabilities Curriculum",
    issued_by: "Deque University",
    date: "25th of January, 2023 05:47pm (GMT)",
    imageUrl: customer_service_for_people_with_disabilities,
    alt_text:
      "image of certificate of completion in the customer service for people with disabilities curriculum",
  },
];

const Certificates: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCertificate, setcurrentCertificate] =
    useState<Certificate | null>(null);
  const triggerDiv = useRef<HTMLDivElement | null>(null);
  const firstFocusable = useRef<HTMLButtonElement | null>(null);
  const lastFocusable = useRef<HTMLButtonElement | null>(null);
  const openModal = (certificate: Certificate) => {
    setcurrentCertificate(certificate);
    setIsOpen(true);
  };

  const closeModal = () => {
    setcurrentCertificate(null);
    setIsOpen(false);
    triggerDiv.current?.focus();
  };

  return (
    <section id="certificates" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto  px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              tabIndex={0}
              className="bg-white p-4 rounded shadow-md cursor-pointer focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black"
              ref={
                isOpen && certificate.title === currentCertificate?.title
                  ? triggerDiv
                  : undefined
              }
              onClick={() => openModal(certificate)}
              onKeyDown={(event) => {
                if (!(event.key === "Enter" || event.key === " ")) return;
                event.preventDefault();
                openModal(certificate);
              }}
            >
              <img
                src={certificate.imageUrl}
                alt={certificate.alt_text}
                className="mb-2"
              />
              <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
              <p>{certificate.description}</p>
              <p className="text-gray-600 mt-2">
                <span className="sr-only">issuing organization</span>
                {certificate.issued_by} | <span className="sr-only">date:</span>
                {certificate.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            tabIndex={0}
            onFocus={() => {
              lastFocusable.current?.focus();
            }}
          ></div>
          <div
            role="dialog"
            aria-labelledby=""
            aria-modal={isOpen}
            className="bg-white p-4 rounded shadow-md max-w-3xl mx-auto"
          >
            <img
              src={currentCertificate!.imageUrl}
              alt={currentCertificate!.alt_text}
              className="w-full h-auto"
            />
            <button
              autoFocus
              ref={(el: HTMLButtonElement) => {
                firstFocusable.current = el;
                lastFocusable.current = el;
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
          <div
            tabIndex={0}
            onFocus={() => {
              firstFocusable.current?.focus();
            }}
          ></div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
