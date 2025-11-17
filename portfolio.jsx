import React, { useState } from 'react';
import { Moon, Sun, Mail, Github, Linkedin, X } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      id: 1,
      title: "CineCo",
      image: "cineco.jpg",
      shortDescription: "CineCo is a modern iOS application that helps users discover, track, and manage their movie and TV show viewing experiences.",
      fullDescription: "A comprehensive e-commerce platform that demonstrates full-stack development capabilities. The frontend is built with React and Tailwind CSS, providing a responsive and intuitive user interface. The backend uses Node.js and Express with MongoDB for data persistence. Key features include:\n\n• User authentication and authorization with JWT\n• Product catalog with search and filtering\n• Shopping cart functionality with real-time updates\n• Secure payment processing with Stripe integration\n• Admin dashboard for inventory management\n• RESTful API design\n• Responsive design for mobile and desktop\n\nThis project showcases my ability to build scalable web applications, implement secure authentication, integrate third-party services, and create seamless user experiences.",
      tech: ["Swift", "SwiftUI", "Firebase", "REST API", "MVVM"],
      github: "https://github.com/KreeshRuparelia/CineCo"
    },
    {
      id: 2,
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      shortDescription: "A collaborative task management application with real-time updates. Built using React, Firebase, and Material-UI for a modern, responsive experience.",
      fullDescription: "A real-time collaborative task management application designed for teams to organize and track their work efficiently. The application leverages Firebase for backend services, providing real-time synchronization across all connected clients.\n\n• Real-time task updates using Firebase Realtime Database\n• User authentication with Google and email/password options\n• Drag-and-drop interface for task organization\n• Team collaboration features with role-based permissions\n• Task assignment and deadline tracking\n• Activity timeline and notifications\n• Responsive design with Material-UI components\n• Progressive Web App (PWA) capabilities\n\nThis project demonstrates my proficiency in building real-time applications, implementing complex state management, creating intuitive user interfaces, and deploying cloud-based solutions.",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/yourusername/task-manager"
    },
    {
      id: 3,
      title: "Weather Forecast Dashboard",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      shortDescription: "An interactive weather dashboard that provides real-time weather data and forecasts. Features include location search, data visualization, and weather alerts.",
      fullDescription: "A comprehensive weather dashboard application that provides users with detailed weather information and forecasts for locations worldwide. The application integrates with multiple weather APIs to deliver accurate and up-to-date information.\n\n• Integration with OpenWeatherMap API for real-time data\n• 7-day weather forecast with hourly breakdowns\n• Interactive charts using Recharts for data visualization\n• Geolocation support for automatic location detection\n• Location search with autocomplete functionality\n• Weather alerts and severe weather warnings\n• Save favorite locations for quick access\n• Responsive design optimized for all devices\n• Dark mode support for comfortable viewing\n\nThis project showcases my ability to work with external APIs, create dynamic data visualizations, implement responsive designs, and provide excellent user experience through thoughtful interface design.",
      tech: ["React", "OpenWeatherMap API", "Recharts", "Tailwind CSS"],
      github: "https://github.com/yourusername/weather-dashboard"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${darkMode ? 'bg-black border-b border-gray-800' : 'bg-white border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Your Name</div>
          <div className="flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#FFBF00] transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#FFBF00] transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-[#FFBF00] transition-colors">Projects</button>
            <button onClick={() => scrollToSection('resume')} className="hover:text-[#FFBF00] transition-colors">Resume</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#FFBF00] transition-colors">Contact</button>
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-lg hover:bg-[#FFBF00] hover:bg-opacity-20 transition-all"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Kreesh Ruparelia</h1>
          <p className="text-2xl mb-2">Full-Stack Developer</p>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Building modern web and mobile applications</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-4">
              I'm a passionate full-stack developer with a love for creating elegant solutions to complex problems. 
              With expertise in both front-end and back-end technologies, I build scalable and user-friendly applications.
            </p>
            <p className="text-lg mb-6">
              My journey in software development started with a curiosity about how things work, and has evolved into 
              a career dedicated to crafting exceptional digital experiences.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-3">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map(skill => (
                  <span 
                    key={skill}
                    className={`px-4 py-2 rounded-lg border-2 transition-all hover:border-[#FFBF00] hover:shadow-lg ${
                      darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={`w-80 h-80 rounded-lg overflow-hidden border-4 border-[#FFBF00] shadow-2xl`}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-lg shadow-xl border-2 border-transparent hover:border-[#FFBF00] transition-all cursor-pointer"
                    onClick={() => openModal(project)}
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 text-sm rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(project)}
                    className="text-[#FFBF00] hover:underline font-semibold"
                  >
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6" onClick={closeModal}>
          <div 
            className={`max-w-3xl w-full max-h-[80vh] overflow-y-auto rounded-lg p-8 relative ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-[#FFBF00] hover:bg-opacity-20 rounded-lg transition-all"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="whitespace-pre-line mb-6 text-lg leading-relaxed">
              {selectedProject.fullDescription}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map(tech => (
                <span 
                  key={tech}
                  className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFBF00] text-black rounded-lg hover:bg-opacity-90 transition-all font-semibold"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      )}

      {/* Resume Section */}
      <section id="resume" className={`min-h-screen px-6 py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Resume</h2>
          <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-2xl border-4 border-[#FFBF00]">
            <iframe
              src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Feel free to reach out to me through any of these platforms
          </p>
          <div className="flex gap-8 justify-center items-center">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg hover:bg-[#FFBF00] hover:bg-opacity-20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={48} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg hover:bg-[#FFBF00] hover:bg-opacity-20 transition-all"
              aria-label="GitHub"
            >
              <Github size={48} />
            </a>
            <a
              href="mailto:your.email@example.com?subject=Hello!&body=Hi, I'd like to get in touch with you."
              className="p-4 rounded-lg hover:bg-[#FFBF00] hover:bg-opacity-20 transition-all"
              aria-label="Email"
            >
              <Mail size={48} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 text-center border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2024 Your Name. Built with React.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
