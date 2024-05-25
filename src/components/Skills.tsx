import React from "react";

interface Skill {
  name: string;
  proficiency: number;
}

const skills: Skill[] = [
  { name: "HTML", proficiency: 95 },
  { name: "GIT", proficiency: 95 },
  { name: "Javascript", proficiency: 90 },
  { name: "jQuery", proficiency: 90 },
  { name: "Bootstrap", proficiency: 90 },
  { name: "Redis", proficiency: 90 },
  { name: "PHP", proficiency: 85 },
  { name: "CSS", proficiency: 85 },
  { name: "TFS", proficiency: 85 },
  { name: "Laravel", proficiency: 80 },
  { name: "ReactJS", proficiency: 80 },
  { name: "MongoDB", proficiency: 80 },
  { name: "Jira", proficiency: 80 },
  { name: "Postman", proficiency: 75 },
  { name: "MariaDB", proficiency: 70 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-lg font-semibold">
                  {skill.proficiency}%
                </span>
              </div>
              <div
                role="meter"
                aria-label={skill.name}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.proficiency}
                className="w-full bg-gray-300 rounded-full h-4"
              >
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
