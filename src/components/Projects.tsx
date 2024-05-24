import React from "react";

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
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
  {
    title:
      "Web Page - Accessibility Concerns Contact page Website - Brand re-styling Web Page - Billings Summary Page",
    description:
      "Translated designs from Figma and InVision into responsive and high-quality frontend code. Implemented a fully functional side navigation widget, ensuring it is fully accessible to screen readers and compliant with WCAG 2.2 standards. Additionally, developed an interactive bar chart widget with full screen reader accessibility, adhering to WCAG 2.2 guidelines to enhance usability for all users.",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
