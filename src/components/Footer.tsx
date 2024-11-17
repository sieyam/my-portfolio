import React from 'react';
import { FaLinkedin, FaGithub,FaFacebook, FaEnvelope } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { FaInstagram } from "react-icons/fa";  // Instagram Icon
import { SiThreads } from "react-icons/si";   // Threads Icon
const Footer: React.FC = () => {
  const scrollToTop = () => {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const duration = 1000; // Duration in milliseconds for the scroll effect
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
  

  return (
    <footer className="bg-[#111111] text-white py-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-lg">&copy; 2024 Ghaffar Sieyam. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ghaffar-blender-3d-artist-020822229/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a
              href="https://github.com/sieyam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-transform duration-300"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61566960759688&_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform duration-300"
            >
              <FaFacebook className="h-8 w-8" />
            </a>
            <a
              href="https://www.instagram.com/sieyam3d?utm_source=qr&igsh=dHczYXdvMW4wZWxs#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform duration-300"
            >
              <FaInstagram className="h-8 w-8" />
            </a>
            <a
              href="https://www.threads.net/@sieyam3d_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-transform duration-300"
            >
              <SiThreads className="h-8 w-8" />
            </a>
            
            <a
              href="mailto:ghaffarsieyam@gmail.com"
              className="hover:text-blue-400 transition-transform duration-300"
            >
              <FaEnvelope className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200 transition duration-300"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
