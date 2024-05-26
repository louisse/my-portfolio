import customer_service_for_people_with_disabilities from "../assets/certificates/customer_service_for_people_with_disabilities.webp";
import IAAP_WAS_certification_preparation_curriculum from "../assets/certificates/IAAP_WAS_certification_preparation_curriculum.webp";
import web_accessibility_bootcamp_curriculum from "../assets/certificates/web_accessibility_bootcamp_curriculum.webp";
import web_accessibility_curriculum from "../assets/certificates/web_accessibility_curriculum.webp";

export type Certificate = {
  title: string;
  description: string;
  issued_by: string;
  date: string;
  imageUrl: string;
  alt_text: string;
};

export const certificates: Certificate[] = [
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
