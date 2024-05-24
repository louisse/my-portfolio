import React from "react";

const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Welcome to My Portfolio!
        </h2>
        <p className="text-lg text-center mb-8">
          Welcome to my portfolio! I'm Roger Louisse Eustaquio, a dedicated Web
          Developer specializing in crafting digital experiences. Here, I
          present my projects and offer insights into my journey in the field.
        </p>
        <p className="text-lg text-center">
          Feel free to explore my work, learn more about me, and don't hesitate
          to reach out if you have any questions or opportunities for
          collaboration.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
