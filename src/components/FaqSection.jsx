import React, { useState } from "react";

const faqs = [
  {
    question: "What services does InfoyTech Solutions offer?",
    answer:
      "We provide complete IT solutions including web development, mobile app development, UI/UX design, digital marketing, SEO, and custom software solutions tailored to your business needs.",
  },
  {
    question: "Do you build mobile-friendly websites and apps?",
    answer:
      "Yes, all our websites and applications are fully responsive and optimized for mobile, tablet, and desktop devices using modern frameworks like React, Flutter, and Tailwind CSS.",
  },
  {
    question: "How long does it take to complete a website or app?",
    answer:
      "Project timelines depend on complexity, but basic websites take 1–2 weeks, while custom applications may take 4–6 weeks. We ensure fast delivery without compromising quality.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We specialize in modern redesigns using latest technologies to improve speed, UI/UX, SEO score, and user experience.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Yes, we follow SEO best practices like fast load speed, mobile-first design, proper meta tags, and structured content to help your site rank on search engines like Google.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes. We provide post-launch support and maintenance for bug fixes, performance updates, and feature enhancements based on your package.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with modern stacks like React.js, Node.js, MongoDB, Tailwind CSS, Flutter, Firebase, and AWS for scalable, high-performance solutions.",
  },
  {
    question: "How do I get a quote for my project?",
    answer:
      "You can fill out our Contact Form or reach out to us directly via email or WhatsApp. We'll review your requirements and send a customized quote within 24 hours.",
  },
  {
    question: "Is InfoyTech Solutions suitable for startups and small businesses?",
    answer:
      "Definitely! We offer scalable and budget-friendly IT solutions tailored for startups, small businesses, and growing enterprises.",
  },
  {
    question: "Can I track the progress of my project?",
    answer:
      "Yes, we provide transparent project tracking using tools like Trello, WhatsApp, or email updates—so you're always in the loop.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" id="faqs">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm transition-all"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <span className="text-blue-600 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
