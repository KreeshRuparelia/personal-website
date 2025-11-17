const projectData = [
  {
    id: "1",
    title: "CineCo",
    image: "cineco_website.jpg",
    fullDescription: `A modern iOS application that helps users discover, track, and manage their movie and TV show viewing experiences. Built with SwiftUI and Firebase, the app offers an intuitive swipe-based discovery interface with personalized recommendations and cloud synchronization. The backend integrates with TMDB's REST API for comprehensive content metadata and implements real-time data persistence through Firestore. Key features include:

                      • Swipe-based discovery with gesture-driven card interface
                      • Integration with TMDB API for comprehensive movie and TV show metadata
                      • Real-time data synchronization using Firebase Firestore
                      • Personalized recommendations with intelligent content filtering
                      • User authentication supporting registered accounts and guest access
                      • Advanced search with content type segmentation (Movies/TV Shows)
                      • Persistent tracking across watched, watchlist, and skipped collections
                      • Custom asynchronous image caching for optimized performance
                      • Pull-to-refresh and infinite scroll for seamless browsing
                      • Responsive SwiftUI design optimized for all iOS devices

                      This project showcases my ability to build native iOS applications using modern Swift patterns, implement real-time cloud synchronization, integrate external REST APIs, and deliver excellent user experience through thoughtful interface design and performance optimization.`,
    tech: ["Swift", "SwiftUI", "Firebase", "REST API", "MVVM Architecture"],
    github: "https://github.com/KreeshRuparelia/CineCo",
  },
  {
    id: "2",
    title: "RapidResponse AI",
    image:
      "firetruck2.jpg",
    fullDescription: `A comprehensive emergency response intelligence system that autonomously detects wildfires using NASA satellite data and generates complete response plans in under 60 seconds. Built with Python Flask, React, and multi-agent AI architecture, the platform provides emergency managers with critical decision-making support before the first 911 call arrives. The system integrates real-time satellite imagery, weather data, and geographic information to deliver actionable emergency plans with evacuation routes, resource allocation, and multi-language communication templates. Key features include:

                      • Proactive wildfire detection using NASA FIRMS satellite API integration
                      • Multi-agent AI system coordinating 5 specialized analysis agents in parallel
                      • Real-time fire spread prediction with physics-based modeling
                      • Automated emergency plan generation in 60 seconds (vs. 2-3 hour manual process)
                      • Interactive Mapbox GL visualization with danger zones and evacuation routes
                      • Population impact analysis identifying vulnerable groups and critical facilities
                      • Intelligent resource allocation optimizing deployment of emergency services
                      • Multi-language emergency alerts (English, Punjabi, Hindi) for diverse communities
                      • WebSocket-based real-time updates with automatic 15-minute refresh cycles
                      • Integration with OpenWeather, OpenStreetMap, and Brampton GeoHub APIs
                      • LLM synthesis via OpenRouter API for natural language plan generation
                      • Comprehensive test coverage with pytest and integration testing

                      This project demonstrates expertise in building production-scale emergency response systems using modern Python async patterns, RESTful API design, real-time data synchronization, geospatial analysis, and delivering mission-critical user experiences through thoughtful architecture and performance optimization.`,
    tech: ["Python", "React", "Flask", "Mapbox GL", "Multi-Agent AIs", "WebSocket", "REST APIs"],
    github: "https://github.com/KreeshRuparelia/RapidResponseAI",
  },
  {
    id: "3",
    title: "Weather Forecast Dashboard",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    fullDescription: `A comprehensive weather dashboard application that provides users with detailed weather information and forecasts for locations worldwide. The application integrates with multiple weather APIs to deliver accurate and up-to-date information.

• Integration with OpenWeatherMap API for real-time data
• 7-day weather forecast with hourly breakdowns
• Interactive charts using Recharts for data visualization
• Geolocation support for automatic location detection
• Location search with autocomplete functionality
• Weather alerts and severe weather warnings
• Save favorite locations for quick access
• Responsive design optimized for all devices
• Dark mode support for comfortable viewing

This project showcases my ability to work with external APIs, create dynamic data visualizations, implement responsive designs, and provide excellent user experience through thoughtful interface design.`,
    tech: ["React", "OpenWeatherMap API", "Recharts", "Tailwind CSS"],
    github: "https://github.com/yourusername/weather-dashboard",
  },
];

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalGithub = document.getElementById("modal-github");
const modalClose = document.getElementById("modal-close");

function closeModal() {
  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function openModal(projectId) {
  const project = projectData.find((item) => item.id === projectId);
  if (!project) return;
  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalDescription.textContent = project.fullDescription;
  modalTech.innerHTML = project.tech.map((tech) => `<span>${tech}</span>`).join("");
  modalGithub.href = project.github;
  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

document.querySelectorAll("[data-project-trigger]").forEach((element) => {
  element.addEventListener("click", () => openModal(element.dataset.projectId));
});

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.scrollTarget;
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth" });
    }
    history.replaceState(null, "", window.location.pathname);
  });
});

const THEME_KEY = "portfolio-theme";
const root = document.documentElement;
const storedTheme = localStorage.getItem(THEME_KEY);
if (storedTheme === "dark") {
  root.classList.add("dark");
} else if (storedTheme === "light") {
  root.classList.remove("dark");
}

const themeToggle = document.querySelector("[data-theme-toggle]");
themeToggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
});
