import React from "react";
import {
  Cloud,
  Database,
  Server,
  Atom,
  Code2,
  Globe,
  Settings,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    name: "React.js",
    icon: <Atom className="w-16 h-16 text-blue-600 mb-3" />,
  },
  {
    name: "Node.js",
    icon: <Server className="w-16 h-16 text-green-600 mb-3" />,
  },
  {
    name: "Express.js",
    icon: <Code2 className="w-16 h-16 text-gray-700 mb-3" />,
  },
  {
    name: "MongoDB",
    icon: <Database className="w-16 h-16 text-green-700 mb-3" />,
  },
  {
    name: "JavaScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="w-16 h-16 mb-3"
      />
    ),
  },
  {
    name: "Java",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        className="w-16 h-16 mb-3"
      />
    ),
  },
  {
    name: "Python",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-16 h-16 mb-3"
      />
    ),
  },
  {
    name: "Cloud Services",
    icon: <Cloud className="w-16 h-16 text-blue-500 mb-3" />,
  },

  {
    name: "REST APIs",
    icon: <Globe className="w-16 h-16 text-indigo-600 mb-3" />,
  },
   {
    name: "DevOps",
    icon: <Settings className="w-16 h-16 text-purple-600 mb-3" />,
  },
   {
    name: "Cybersecurity",
    icon: <ShieldCheck className="w-16 h-16 text-red-600 mb-3" />,
  },
  {
    name: "Git & GitHub",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="GitHub"
        className="w-16 h-16 mb-3"
      />
    ),
  },
];

const Techno_Section = () => {
  return (
    <section className="bg-white py-20" id="technologies">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Technologies We Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-50 p-6 rounded-xl shadow hover:shadow-blue-200 transition"
            >
              {tech.icon}
              <span className="text-sm font-medium text-blue-800">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techno_Section;
