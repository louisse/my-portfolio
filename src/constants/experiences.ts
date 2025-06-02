type Project = {
  title: string;
  description: string;
};

type Experience = {
  company:
    | "Ascendion"
    | "Quantrics Enterprises Inc."
    | "Cafe24 Philippines"
    | "Save22";
  role:
    | "Full Stack Engineer"
    | "Web Developer (Dev 3)"
    | "Web Developer (L2)"
    | "Web Developer (L1)"
    | "Software Engineer Intern";
  period: string;
  projects: Project[];
};

export const experiences: Experience[] = [
  {
    company: "Ascendion",
    role: "Full Stack Engineer",
    period: "Jul 2024 - Present",
    projects: [
      {
        title: "Custom API",
        description:
          "Designed and developed a custom API plugin for the ProcessMaker platform, enabling seamless integration with a third-party service provider.",
      },
      {
        title: "Enhancement - Loan Process",
        description:
          "Enhanced and optimized existing loan processing workflows based on evolving business requirements, improving operational efficiency and compliance.",
      },
      {
        title: "Initiative - Developer Tools",
        description:
          "Built internal developer tools to streamline development workflows and enhance the overall developer experience.",
      },
    ],
  },
  {
    company: "Quantrics Enterprises Inc.",
    role: "Web Developer (Dev 3)",
    period: "November 2022 - March 2024",
    projects: [
      {
        title: "Web Page - Billings Summary Page",
        description:
          "Developed an interactive bar chart widget with full screen reader accessibility, adhering to WCAG 2.2 guidelines to enhance usability for all users. Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
      {
        title: "Website - Brand re-styling",
        description:
          "Implemented a fully functional side navigation widget, ensuring it is fully accessible to screen readers and compliant with WCAG 2.2 standards. Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
      {
        title: "Web Page - Accessibility Concerns Contact page",
        description:
          "Translated designs from Figma and InVision into responsive and high-quality frontend code.",
      },
    ],
  },
  {
    company: "Cafe24 Philippines",
    role: "Web Developer (L2)",
    period: "June 2021 - October 2022",
    projects: [
      {
        title: "Web App - Product Review System",
        description:
          "Effectively resolved and fixed high-priority bugs in a timely manner, ensuring minimal disruption to the user experience. Additionally, developed a comprehensive logging system to gather and analyze metadata from product reviews, providing valuable insights for continuous improvement and decision-making.",
      },
      {
        title: "Web App - Inquiry Form App and Web App - Facebook Plugin",
        description:
          "Consistently maintained and enhanced multiple features and improvements, ensuring they aligned with company standards and best practices. This included optimizing performance, enhancing user experience, fixing bugs, and implementing new functionalities based on stakeholder feedback and evolving business requirements.",
      },
    ],
  },
  {
    company: "Cafe24 Philippines",
    role: "Web Developer (L1)",
    period: "September 2018 - June 2021",
    projects: [
      {
        title: "Web App - Inquiry Form App",
        description:
          "I developed an admin-facing web page dedicated to the customization of inquiry forms, allowing administrators to tailor forms to their specific needs. In addition, I implemented an SMTP client module, enabling seamless email reply functionality within the project. I also interfaced with AWS S3 services to facilitate the storage of image files uploaded by customers. Furthermore, I created a customer-facing inquiry form integrated with Google reCAPTCHA for enhanced security, and I ensured that the entire application was optimized for mobile devices to provide a user-friendly experience across all platforms.",
      },
      {
        title: "Web App - Photo Gallery App",
        description:
          "I spearheaded the creation of an admin-facing dashboard, empowering administrators to configure slides through comprehensive Create, Read, Update, and Delete (CRUD) transactions within galleries. Additionally, I crafted a customer-facing photo slider with customizable sliding configurations, enriching user engagement and visual appeal.",
      },
    ],
  },
  {
    company: "Save22",
    role: "Software Engineer Intern",
    period: "April 2017 - June 2017",
    projects: [
      {
        title: "Responsibilities",
        description:
          "Developed and maintained the backend of a mobile application using Python and the Ionic framework, ensuring robust and scalable performance. Integrated APIs and streamlined functionality to enhance the user experience. Utilized GIT for version control to manage codebase changes efficiently and VIM for coding and debugging, enhancing development productivity. Conducted regular code reviews and optimized backend processes to improve application responsiveness and reliability.",
      },
    ],
  },
  {
    company: "Save22",
    role: "Software Engineer Intern",
    period: "April 2016 - May 2016",
    projects: [
      {
        title: "Responsibilities",
        description:
          "Utilized Python with the Django framework to automate web scrapers and maintain the backend of the application. Employed GIT for version control to efficiently manage codebase changes and VIM for coding and debugging, enhancing development workflow. Conducted performance optimizations and ensured the reliability of backend processes.",
      },
    ],
  },
];
