import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { ChevronDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";  // Instagram Icon
import { SiThreads } from "react-icons/si";   // Threads Icon
import './Home.css';
import profileImage from '../assets/images/profile-pic.png';

const sectionColors = {
  light: {
    icons: "text-gray-800",
    background: "",
    hover: {
      linkedin: "hover:text-blue-600",
      github: "hover:text-gray-900",
      kaggle: "hover:text-blue-400",
      facebook: "hover:text-blue-700",
      email: "hover:text-red-600"
    }
  },
  dark: {
    icons: "text-white",
    background: "bg-black/10 backdrop-blur-sm rounded-full",
    hover: {
      linkedin: "hover:text-blue-300",
      github: "hover:text-gray-300",
      kaggle: "hover:text-blue-200",
      facebook: "hover:text-blue-300",
      email: "hover:text-red-300"
    }
  },
  white: {
    icons: "text-black",
    background: "",
    hover: {
      linkedin: "hover:text-blue-600",
      github: "hover:text-gray-700",
      kaggle: "hover:text-blue-500",
      facebook: "hover:text-blue-600",
      email: "hover:text-red-500"
    }
  }
};

const Home: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'white'>('light');
  const [showPopup, setShowPopup] = useState(false);

  const scrollToBottom = () => {
    const targetPosition = document.documentElement.scrollHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime: number | null = null;

    function animationScroll(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
  };

  useEffect(() => {
    const options = {
      strings: ["3D Generalist", "3D Animator", "3D Product Visualization Specialist", "VFX Artist"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typedRef.current!, options);

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const backgroundColor = window.getComputedStyle(entry.target).backgroundColor;
          const theme = determineTheme(backgroundColor);
          setCurrentTheme(theme);
        }
      });
    }, {
      threshold: 0.6
    });

    sections.forEach(section => observer.observe(section));

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      typed.destroy();
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const determineTheme = (backgroundColor: string): 'light' | 'dark' | 'white' => {
    const rgb = backgroundColor.match(/\d+/g);
    if (!rgb) return 'light';

    const [r, g, b] = rgb.map(Number);
    if (r > 250 && g > 250 && b > 250) {
      return 'white';
    }

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5 ? 'dark' : 'light';
  };

  const SocialIcons = () => (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-2 space-y-1 hidden lg:flex flex-col">
      <a href="https://www.linkedin.com/in/ghaffar-blender-3d-artist-020822229/" target="_blank" rel="noopener noreferrer" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.linkedin}`}>
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/sieyam" target="_blank" rel="noopener noreferrer" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.github}`}>
        <FaGithub size={30} />
      </a>
      <a href="https://www.instagram.com/sieyam3d?utm_source=qr&igsh=dHczYXdvMW4wZWxs" target="_blank" rel="noopener noreferrer" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.kaggle}`}>
        <FaInstagram size={30} />
      </a>
      <a href="https://www.threads.net/@sieyam3d_" target="_blank" rel="noopener noreferrer" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.kaggle}`}>
        <SiThreads size={30} />
      </a>
      <a href="https://web.facebook.com/profile.php?id=61566960759688&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.facebook}`}>
        <FaFacebook size={30} />
      </a>
      <a href="mailto:ghaffarsieyam@gmail.com" className={`block p-2 transition duration-300 ${sectionColors[currentTheme].icons} ${sectionColors[currentTheme].background} ${sectionColors[currentTheme].hover.email}`}>
        <FaEnvelope size={30} />
      </a>
    </div>
  );

  return (
    <>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-[#E9F1F8] text-black relative text-center px-4">
        <h1 className="text-3xl font-semibold mb-2">Hi, I am</h1>
        <h2 className="text-6xl font-bold text-purple-600 mb-4">Ghaffar Sieyam</h2>
        <h3 className="text-3xl mb-6">
          <span ref={typedRef} className="text-4xl font-medium text-blue-600"></span>
        </h3>
        <p className="text-xl mt-6 mb-8 max-w-2xl mx-auto">
        I’m a passionate 3D artist with a deep love for creating across various software and tools.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:-translate-y-1" onClick={() => setShowPopup(true)}>
    About Me
  </button>
  <a href="Resume.pdf" download="public/Resume.pdf" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:-translate-y-1">
    Download CV
  </a>
  <a href="https://www.fiverr.com/ghaffarsieyam/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:-translate-y-1">
    Hire Me
  </a>
</div>


        <button onClick={scrollToBottom} className="absolute bottom-8 transition duration-300 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 mb-4">
          <ChevronDown size={32} />
        </button>
        <SocialIcons />
      </section>

      {/* Popup for About Me */}
{showPopup && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row relative max-h-[90vh] overflow-y-auto">
      {/* Close Button (Cross Sign) */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition duration-300 text-2xl z-10"
        onClick={() => setShowPopup(false)}
      >
        &times; {/* Cross sign */}
      </button>

      {/* Left Column: Image */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:w-1/2 overflow-hidden">
        <img
          src={profileImage} // Update this to your image path if different
          alt="Profile"
          className="rounded-lg w-full h-full object-contain"
        />
      </div>

      {/* Right Column: About Me Text */}
      <div className="md:w-1/2 md:pl-4">
        <h2 className="text-2xl font-bold mb-4 text-black">About Me</h2>
        <p className="text-gray-700 mb-4 font-medium text-base md:text-lg" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
        Hello! I'm Ghaffar Sieyam, a passionate 3D artist with a keen eye for detail and a dedication to creating captivating visual experiences. With years of experience in the field, I specialize in transforming ideas into reality through precise 3D modeling, texturing, and animation.
        </p>
      </div>
    </div>
  </div>
)}


    </>
  );
};

export default Home;
