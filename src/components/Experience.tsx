import React from "react";

type Project = {
  title: string;
  description: string;
};

type Experience = {
  company: "Cafe24 Philippines" | "Quantrics Enterprises Inc.";
  role: "Web Developer (L1)" | "Web Developer (L2)" | "Web Developer (Dev 3)";
  period: string;
  projects: Project[];
};

const experiences: Experience[] = [
  {
    company: "Quantrics Enterprises Inc.",
    role: "Web Developer (Dev 3)",
    period: "November 2022 - March 2024",
    projects: [
      {
        title: "Web Page - Accessibility Concerns Contact page",
        description:
          "Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
      {
        title: "Website - Brand re-styling",
        description:
          "Implemented a fully functional side navigation widget, ensuring it is fully accessible to screen readers and compliant with WCAG 2.2 standards. Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
      {
        title: "Web Page - Billings Summary Page",
        description:
          "Developed an interactive bar chart widget with full screen reader accessibility, adhering to WCAG 2.2 guidelines to enhance usability for all users. Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
    ],
  },
  {
    company: "Cafe24 Philippines",
    role: "Web Developer (L2)",
    period: "June 2021 - October 2022",
    projects: [
      {
        title: "Web App - Inquiry Form App and Web App - Facebook Plugin",
        description:
          "Consistently maintained and enhanced multiple features and improvements, ensuring they aligned with company standards and best practices. This included optimizing performance, enhancing user experience, fixing bugs, and implementing new functionalities based on stakeholder feedback and evolving business requirements.",
      },
      {
        title: "Web App - Product Review System",
        description:
          "Effectively resolved and fixed high-priority bugs in a timely manner, ensuring minimal disruption to the user experience. Additionally, developed a comprehensive logging system to gather and analyze metadata from product reviews, providing valuable insights for continuous improvement and decision-making.",
      },
    ],
  },
  {
    company: "Cafe24 Philippines",
    role: "Web Developer (L1)",
    period: "September 2018 - June 2021",
    projects: [
      {
        title: "Web App - Photo Gallery App",
        description:
          "I spearheaded the creation of an admin-facing dashboard, empowering administrators to configure slides through comprehensive Create, Read, Update, and Delete (CRUD) transactions within galleries. Additionally, I crafted a customer-facing photo slider with customizable sliding configurations, enriching user engagement and visual appeal.",
      },
      {
        title: "Web App - Inquiry Form App",
        description:
          "I developed an admin-facing web page dedicated to the customization of inquiry forms, allowing administrators to tailor forms to their specific needs. In addition, I implemented an SMTP client module, enabling seamless email reply functionality within the project. I also interfaced with AWS S3 services to facilitate the storage of image files uploaded by customers. Furthermore, I created a customer-facing inquiry form integrated with Google reCAPTCHA for enhanced security, and I ensured that the entire application was optimized for mobile devices to provide a user-friendly experience across all platforms.",
      },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2">{experience.role}</h3>
              <h4 className="text-xl text-gray-600 mb-4">
                {experience.company}
              </h4>
              <p className="text-gray-500 mb-4">{experience.period}</p>
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

export default Projects;
