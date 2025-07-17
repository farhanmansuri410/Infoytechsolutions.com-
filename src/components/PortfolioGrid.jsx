import React, { useState } from 'react';
import { motion } from 'framer-motion';

const filters = ['All', 'Web Development', 'Mobile App', 'Software'];

const projects = [
  {
    id: 1,
    title: 'Dermalum- Baby Care',
    image: './Dermalum.webp',
    description: 'Developed a scalable online store using React, Node.js, and MongoDB.',
    tags: ['Web Development'],
    link: 'https://dermalum.in/',
  },
  {
    id: 2,
    title: 'New Star Service Centre',
    image: './NewStar.webp',
    description: 'Cross-platform food delivery app built with React Native and Firebase.',
    tags: ['Web Development'],
    link: 'https://newstarservicecentre.com/',
  },
  {
    id: 3,
    title: 'Bite-Club Pizza Delivery',
    image: './BiteClub.webp',
    description: 'Personal website designed using Next.js and Tailwind CSS.',
    tags: ['Web Development'],
    link: 'https://bite-club.netlify.app/',
  },
  
  {
    id: 4,
    title: 'Portfolio Website',
    image: '/projects/portfolio.png',
    description: 'Personal website designed using Next.js and Tailwind CSS.',
    tags: ['Mobile App'],
    link: 'https://example.com/portfolio',
  },
  {
    id: 5,
    title: 'School Management System',
    image: '/projects/schoolms.png',
    description: 'Admin and student portals using Django and Bootstrap.',
    tags: ['Software'],
    link: 'https://example.com/school',
  },
  
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border"
  >
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-2 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-blue-700 hover:underline"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Projects
      </h2>

      <div className="flex justify-center gap-3 flex-wrap mb-10">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm rounded-full border font-medium transition-all hover:bg-blue-100 hover:text-blue-700 ${
              activeFilter === filter
                ? 'bg-blue-700 text-white'
                : 'bg-white text-blue-700 border-blue-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
