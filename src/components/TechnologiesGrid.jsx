import React from 'react';
import { motion } from 'framer-motion';

// ICON IMPORTS
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaPhp, FaLaravel, FaDatabase, FaAws, FaGitAlt, FaFigma, FaJira, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiFlutter, SiKotlin, SiSwift, SiFirebase, SiHeroku, SiDigitalocean, SiGithubactions, SiGitlab, SiPostman, SiStripe, SiRazorpay, SiReact } from 'react-icons/si';

const techCategories = [
  {
    title: 'Frontend Technologies',
    items: [
      { name: 'React.js', icon: <FaReact className="text-blue-500 text-3xl" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black text-3xl" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600 text-3xl" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-500 text-3xl" /> },
    ],
  },
  {
    title: 'Backend Technologies',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-3xl" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-3xl" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400 text-3xl" /> },
      { name: 'Django', icon: <SiDjango className="text-green-800 text-3xl" /> },
      { name: 'PHP', icon: <FaPhp className="text-indigo-700 text-3xl" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-red-600 text-3xl" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700 text-3xl" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800 text-3xl" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-3xl" /> },
    ],
  },
  {
    title: 'Mobile App Technologies',
    items: [
      { name: 'Flutter', icon: <SiFlutter className="text-blue-400 text-3xl" /> },
      { name: 'React Native', icon: <SiReact className="text-sky-500 text-3xl" /> },
      { name: 'Kotlin', icon: <SiKotlin className="text-purple-500 text-3xl" /> },
      { name: 'Swift', icon: <SiSwift className="text-orange-400 text-3xl" /> },
    ],
  },
  {
    title: 'DevOps & Cloud Platforms',
    items: [
      { name: 'AWS', icon: <FaAws className="text-orange-400 text-3xl" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 text-3xl" /> },
      { name: 'Heroku', icon: <SiHeroku className="text-purple-500 text-3xl" /> },
      { name: 'DigitalOcean', icon: <SiDigitalocean className="text-sky-700 text-3xl" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-black text-3xl" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-600 text-3xl" /> },
      { name: 'GitLab CI', icon: <SiGitlab className="text-orange-500 text-3xl" /> },
    ],
  },
  {
    title: 'Tools & Integrations',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500 text-3xl" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500 text-3xl" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500 text-3xl" /> },
      { name: 'Jira', icon: <FaJira className="text-blue-500 text-3xl" /> },
      { name: 'Stripe', icon: <SiStripe className="text-indigo-500 text-3xl" /> },
      { name: 'Razorpay', icon: <SiRazorpay className="text-blue-500 text-3xl" /> },
    ],
  },
];

const TechnologiesGrid = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
        Technologies That Drive Our Solutions
      </h2>
      {techCategories.map((category) => (
        <div key={category.title} className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.items.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center text-center bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-700">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesGrid;
