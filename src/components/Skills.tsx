import React from "react";

interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
}

const skills: Skill[] = [
  { name: "PHP", level: "Advanced" },
  { name: "Laravel", level: "Advanced" },
  { name: "Redis", level: "Advanced" },
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "Javascript", level: "Advanced" },
  { name: "GIT", level: "Advanced" },
  { name: "Jira", level: "Advanced" },
  { name: "MariaDB", level: "Intermediate" },
  { name: "Bootstrap", level: "Advanced" },
  { name: "jQuery", level: "Advanced" },
  { name: "Postman", level: "Intermediate" },
  { name: "MongoDB", level: "Advanced" },
  { name: "JQuery", level: "Advanced" },
  { name: "ReactJS", level: "Advanced" },
  { name: "TFS", level: "Advanced" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
