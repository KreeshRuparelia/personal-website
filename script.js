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
    site: "https://rapid-response-ai.vercel.app/",
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
    title: "PomoTask",
    image: "pomodoro.jpg",
    site: "https://pomotask-eta.vercel.app/",
    fullDescription: `PomoTask is an interactive web application that helps you focus by following the Pomodoro technique, segmenting work time into focus sessions, short breaks, and long breaks. The Pomodoro technique has been scientifically shown to boost productivity and offer mood benefits. Built with React, the platform features Pomodoro timers that automatically transition between focus and break phases. The system tracks the completed focus sessions and schedules long breaks after every fourth session as per the technique. Key features include:

                      • An integrated task queue with CRUD operations for the task list that includes completion tracking.
                      • Customizable timer phases.
                      • Visual tracking through completion dots to monitor how many sessions until a long break.
                      • A complete task management system to plan your focus sessions.

                      This project demonstrates expertise in building, and deploying interactive React webpages that offer an intuitive user experiences.`,
    tech: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/KreeshRuparelia/PomoTask.git",
  },
];

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalTech = document.getElementById("modal-tech");
const modalGithub = document.getElementById("modal-github");
const modalSite = document.getElementById("modal-site");
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
  if (modalSite) {
    if (project.site) {
      modalSite.href = project.site;
      modalSite.hidden = false;
    } else {
      modalSite.hidden = true;
    }
  }
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

const particleField = initParticleField();

const themeToggle = document.querySelector("[data-theme-toggle]");
themeToggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  particleField?.updatePalette();
});

function initParticleField() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return null;

  class ParticleField {
    constructor(canvasElement) {
      this.canvas = canvasElement;
      this.ctx = this.canvas.getContext("2d");
      this.particles = [];
      this.config = {
        maxParticles: 140,
        density: 11000,
        speed: 0.35,
        linkDistance: 140,
        size: { min: 0.6, max: 2.4 },
      };
      this.resize = this.resize.bind(this);
      window.addEventListener("resize", this.resize);
      this.resize();
      this.updatePalette();
      this.animate();
    }

    updatePalette() {
      const styles = getComputedStyle(document.documentElement);
      this.palette = {
        particle: normalizeColor(styles.getPropertyValue("--text"), 0.18),
        link: normalizeColor(styles.getPropertyValue("--accent"), 0.35),
      };
    }

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.createParticles();
    }

    createParticles() {
      const area = this.canvas.width * this.canvas.height;
      const targetCount = Math.min(
        this.config.maxParticles,
        Math.floor(area / this.config.density)
      );
      this.particles = Array.from({ length: targetCount }, () =>
        this.spawnParticle()
      );
    }

    spawnParticle() {
      return {
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.speed,
        vy: (Math.random() - 0.5) * this.config.speed,
        size:
          Math.random() * (this.config.size.max - this.config.size.min) +
          this.config.size.min,
      };
    }

    updateParticle(particle) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -50) particle.x = this.canvas.width + 50;
      if (particle.x > this.canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = this.canvas.height + 50;
      if (particle.y > this.canvas.height + 50) particle.y = -50;
    }

    drawParticle(particle) {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.palette.particle;
      this.ctx.fill();
    }

    connectParticle(particle, index) {
      for (let i = index + 1; i < this.particles.length; i += 1) {
        const other = this.particles[i];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance > this.config.linkDistance) continue;

        const opacity =
          0.5 - (distance / this.config.linkDistance) * 0.5 + 0.05;
        this.ctx.globalAlpha = Math.max(0.08, Math.min(0.45, opacity));
        this.ctx.strokeStyle = this.palette.link;
        this.ctx.lineWidth = 0.8;
        this.ctx.beginPath();
        this.ctx.moveTo(particle.x, particle.y);
        this.ctx.lineTo(other.x, other.y);
        this.ctx.stroke();
      }
      this.ctx.globalAlpha = 1;
    }

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach((particle, index) => {
        this.updateParticle(particle);
        this.drawParticle(particle);
        this.connectParticle(particle, index);
      });
      requestAnimationFrame(() => this.animate());
    }
  }

  function normalizeColor(value, alpha) {
    const color = value ? value.trim() : "";
    if (!color) {
      return `rgba(255, 255, 255, ${alpha})`;
    }

    if (color.startsWith("#")) {
      return hexToRgba(color, alpha);
    }

    if (color.startsWith("rgb")) {
      const numericValues = color
        .replace(/[^\d.,]/g, "")
        .split(",")
        .map((num) => Number(num.trim()));
      const [r = 255, g = 255, b = 255] = numericValues;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return color;
  }

  function hexToRgba(hex, alpha) {
    let processed = hex.replace("#", "");
    if (processed.length === 3) {
      processed = processed
        .split("")
        .map((char) => char + char)
        .join("");
    }
    const intValue = parseInt(processed, 16);
    if (Number.isNaN(intValue)) {
      return `rgba(255, 255, 255, ${alpha})`;
    }
    const r = (intValue >> 16) & 255;
    const g = (intValue >> 8) & 255;
    const b = intValue & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return new ParticleField(canvas);
}
