import React, { useRef, useState } from "react";
import { certificates, type Certificate } from "../constants/certificates";

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
    <section
      className="py-20 bg-gray-100 text-gray-800"
      aria-labelledby="certificates"
    >
      <div className="container mx-auto  px-4">
        <h2
          className="text-3xl font-bold text-center mb-12"
          id="certificates"
          tabIndex={-1}
        >
          Certificates
        </h2>
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
                className="mb-2 aspect-[842/595]"
              />
              <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
              <p>{certificate.description}</p>
              <p className="text-gray-500 text-sm mt-2">
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
