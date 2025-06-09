import React, { useState, useEffect } from 'react';
// Keep only the Lucide icons used elsewhere (Navbar, Project links, Contact section)
import { Sun, Moon, Github, Linkedin, Mail, Code, User, Briefcase, Award, Phone, Home } from 'lucide-react';
import { motion } from 'framer-motion';

// Import components
import AnimatedText from './components/AnimatedText';
import Star from './components/Star';

// Navbar Component
const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 py-4 px-4 md:px-8 lg:px-16 shadow-lg bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative z-10">
        {/* h1 (PHOENIX) remains blue, as it's a branding element, not a general header */}
        <h1 className="text-2xl font-bold text-blue-500">PHOENIX</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-blue-400 transition-colors duration-300 flex items-center"
            >
              <link.icon size={18} className="mr-2" />
              {link.name}
            </a>
          ))}
          {/* Theme Toggle Button for Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 text-gray-200
                        hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 text-gray-200 mr-4
                        hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Open mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 bg-gray-800/90 rounded-md py-2`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)} // Close menu on link click
            className="block px-4 py-2 text-gray-200 hover:bg-gray-700 transition-colors duration-200 flex items-center"
          >
            <link.icon size={18} className="mr-2" />
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};


// Main App Component
const App = () => {
  // State for managing the theme mode (light or dark)
  const [theme, setTheme] = useState('light'); // Changed default to 'light'

  // Effect to apply the theme class to the document's root element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
  }, [theme]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Variants for section animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // --- Skill Icons as Image URLs ---
  // Replace these placeholder URLs with your actual image links!
  const skillIcons = {
    'HTML5': 'https://img.icons8.com/color/48/000000/html-5--v1.png', // Example HTML5 icon
    'CSS3': 'https://img.icons8.com/color/48/000000/css3.png', // Example CSS3 icon
    'JavaScript': 'https://img.icons8.com/color/48/000000/javascript--v1.png', // Example JavaScript icon
    'React.js': 'https://img.icons8.com/color/48/000000/react-native.png', // Example React.js icon
    'Next.js': 'https://img.icons8.com/color/48/000000/nextjs.png', // Example Next.js icon
    'Tailwind CSS': 'https://img.icons8.com/color/48/000000/tailwind_css.png', // Example Tailwind CSS icon
    'Sass': 'https://img.icons8.com/color/48/000000/sass.png', // Example Sass icon
    'Git': 'https://img.icons8.com/color/48/000000/git.png', // Example Git icon
    'Redux': 'https://img.icons8.com/color/48/000000/redux.png', // Example Redux icon
    'TypeScript': 'https://img.icons8.com/color/48/000000/typescript.png', // Example TypeScript icon
    'Responsive Design': 'https://img.icons8.com/plasticine/48/000000/responsive-design.png', // Example Responsive Design icon
    'RESTful APIs': 'https://img.icons8.com/ios-filled/48/000000/api-settings.png', // Example API icon
  };

  return (
    // Main container with theme-dependent background.
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50 text-gray-800'} transition-colors duration-500 font-inter`}>
      {/* Stars for galaxy effect - now full page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 150 }).map((_, i) => (
          <Star key={i} theme={theme} />
        ))}
      </div>

      {/* Navbar component */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      {/* Adjust padding for fixed navbar */}
      <div className="pt-20"> {/* This padding should roughly match the navbar's height */}
        {/* Hero Section */}
        <section id="hero" className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-blue-500"
          >
            {/* Profile picture with subtle hover effect */}
            <img
              src="https://res.cloudinary.com/dtxbyd8bj/image/upload/v1749456089/ik_k6vuck.jpg"
              alt="Profile Picture"
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/192x192/007bff/ffffff?text=DP"; }}
            />
          </motion.div>
          {/* h2 is white in dark mode as requested */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight dark:text-gray-100">
            <AnimatedText text="Hi, I'm Prince Akowe" className="text-center" />
          </h2>
          {/* Paragraph here is gray-300 in dark mode */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl dark:text-gray-300">
            <AnimatedText text="A passionate Frontend Developer building captivating and user-friendly web experiences." className="text-center" />
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex space-x-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700
                          transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg shadow-md
                          hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        >
          {/* h3 is white in dark mode as requested */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center dark:text-gray-100">
            <User className="mr-3 text-blue-500" size={32} /> About Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Placeholder image for about section */}
              <img
                src="https://res.cloudinary.com/dtxbyd8bj/image/upload/v1749456090/prince_yb7w5n.jpg"
                alt="About Me"
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/007bff/ffffff?text=About+Image"; }}
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* These paragraphs are now gray-300 in dark mode */}
              <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
                I'm a dedicated frontend developer with a passion for creating beautiful and functional web applications. My journey into web development began with a fascination for how user interfaces come to life, and I've been hooked ever since.
              </p>
              <p className="text-lg leading-relaxed mb-4 dark:text-gray-300">
                I specialize in React.js, bringing ideas from concept to reality with clean, efficient, and maintainable code. I enjoy the challenge of solving complex problems and continuously learning new technologies to stay at the forefront of web development.
              </p>
              <p className="text-lg leading-relaxed dark:text-gray-300">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good book.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        >
          {/* h3 is white in dark mode as requested */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center dark:text-gray-100">
            <Award className="mr-3 text-blue-500" size={32} /> My Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Sass', 'Git', 'Redux', 'TypeScript', 'Responsive Design', 'RESTful APIs'].map((skill, index) => {
              const iconSrc = skillIcons[skill] || 'https://placehold.co/40x40/000000/FFFFFF?text=?'; // Fallback image if URL not found
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md text-center
                              transform hover:scale-105 transition-transform duration-300
                              flex items-center justify-center flex-col group cursor-pointer"
                >
                  {/* Use img tag for external icon source */}
                  <img
                    src={iconSrc}
                    alt={`${skill} Icon`}
                    className="w-14 h-14 mb-3 object-contain group-hover:animate-bounce dark:invert"
                    // dark:invert will make the icon white in dark mode if it's originally black/dark
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/40x40/FF0000/FFFFFF?text=X"; }} // Fallback for broken image
                  />
                  {/* Skill name text will remain black in dark mode */}
                  <p className="font-semibold text-lg dark:text-black">{skill}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        >
          {/* h3 is white in dark mode as requested */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center dark:text-gray-100">
            <Briefcase className="mr-3 text-blue-500" size={32} /> My Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-6
                          transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src="https://res.cloudinary.com/dtxbyd8bj/image/upload/v1749464370/Screenshot_2025-06-09_111820_p4ffyq.png"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/007bff/ffffff?text=Project+1"; }}
              />
              {/* h4 is white in dark mode as requested */}
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">E-commerce Store</h4>
              {/* Project description text is gray-300 in dark mode */}
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A responsive e-commerce platform built with React and Redux, featuring product listings, shopping cart, and user authentication.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ikoyi1st/Morgan.git"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="https://morgan-one.vercel.app"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-6
                          transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src="https://res.cloudinary.com/dtxbyd8bj/image/upload/v1749463980/Screenshot_2025-06-09_111219_mweqeb.png"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/007bff/ffffff?text=Project+2"; }}
              />
              {/* h4 is white in dark mode as requested */}
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">Chat App</h4>
              {/* Project description text is gray-300 in dark mode */}
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A simple and intuitive real time chat app application with drag-and-drop functionality and local storage persistence.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/LSETF-COHORT2024/CHAT-APP.git"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="https://chat-app-seven-vert.vercel.app/Login"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-6
                          transform hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src="https://res.cloudinary.com/dtxbyd8bj/image/upload/v1749456102/Screenshot_2025-06-09_085432_f92qqh.png"
                alt="Project 3"
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/007bff/ffffff?text=Project+3"; }}
              />
              {/* h4 is white in dark mode as requested */}
              <h4 className="text-xl font-bold mb-2 dark:text-gray-100">Weather Dashboard</h4>
              {/* Project description text is gray-300 in dark mode */}
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                A dynamic weather dashboard fetching real-time weather data from an external API, with location search.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ikoyi1st/weather.git"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                <a
                  href="https://skyther.vercel.app/"
                  className="text-blue-600 hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={20} className="mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        >
          {/* h3 is white in dark mode as requested */}
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center dark:text-gray-100">
            <Phone className="mr-3 text-blue-500" size={32} /> Contact Me
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl p-8"
          >
            {/* Contact intro paragraph is gray-300 in dark mode */}
            <p className="text-center mb-8 text-lg dark:text-gray-300">
              Feel free to reach out if you have any questions or opportunities!
            </p>
         
            <form
              action="mailto:princeik.akowe@gmail.com?subject=Portfolio Contact Form Submission"
              method="post"
              encType="text/plain" // Important for mailto to correctly format inputs
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="Name" // 'Name' will appear in the email body
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email" // 'Email' will appear in the email body
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="Message" // 'Message' will appear in the email body
                  rows="5"
                  className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600
                                bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                                focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md
                                hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/Ikoyi1st"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={32} />
              </a>
              {/* Added Phone Dial Icon */}
              <a
                href="tel:+2348065789274" // Using +234 for Nigeria's country code
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Call Me"
              >
                <Phone size={32} />
              </a>
              <a
                href="mailto:princeik.akowe@gmail.com"
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email Me"
              >
                <Mail size={32} />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-4 md:px-8 lg:px-16 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Prince Akowe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;