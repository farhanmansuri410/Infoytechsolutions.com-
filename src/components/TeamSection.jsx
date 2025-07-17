import React from "react";
import { motion } from "framer-motion";

// Sample team data (replace image URLs with real images or /assets)
const teamMembers = [
  {
    name: "Farhan Mansuri",
    role: "Founder & CEO",
    image: "/team/farhan.jpg",
  },
 
  {
    name: "Ajay Sharma",
    role: "Front-end Developer",
    image: "/team/Ajay.jpg",
  },
  {
    name: "Aftab Salmani",
    role: "Team Leader",
    image: "/team/rohit.jpg",
  },
  {
    name: "Ronish Mansuri",
    role: "Marketing Manager",
    image: "/team/ronish.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white" id="team">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-blue-900"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-gray-600 mt-2">
            The minds driving innovation and excellence at Infoy Tech Solution
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-blue-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
