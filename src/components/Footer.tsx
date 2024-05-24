import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
