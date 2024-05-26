import React from "react";

const Welcome: React.FC = () => {
  return (
    <section
      className="py-20 bg-gray-100 text-gray-800"
      aria-labelledby="welcome"
    >
      <div className="container mx-auto px-4">
        <h1
          className="text-4xl font-bold text-center mb-4"
          id="welcome"
          tabIndex={-1}
        >
          Welcome to My Portfolio!
        </h1>
        <p className="text-lg text-center mb-8">
          Welcome to my portfolio! I'm Roger Louisse Eustaquio, a dedicated Web
          Developer specializing in accessible and responsive digital
          experiences. My work focuses on creating visually appealing,
          user-friendly websites for all, including those with disabilities.
          Explore my projects to see my skills in front-end and back-end
          development and my commitment to web accessibility.
        </p>
        <p className="text-lg text-center">
          Feel free to explore my work, learn more about me, and reach out if
          you have any questions or opportunities for collaboration.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
