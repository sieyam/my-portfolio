import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (!isScrolling) {
      const sections = ['home', 'skills', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsScrolling(true);
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Add a pre-transition state
      const buttons = document.querySelectorAll('.nav-link');
      buttons.forEach(button => {
        button.classList.add('transition-transform', 'duration-300');
      });

      // Smooth scroll with easing
      const start = window.scrollY;
      const target = section.offsetTop - 70;
      const distance = target - start;
      const duration = 800; // 1 second duration
      let startTime: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo({
          top: start + distance * easeInOutCubic(progress),
          behavior: 'auto'
        });

        if (progress < 1) {
          requestAnimationFrame(animation);
        } else {
          // After scroll is complete
          setTimeout(() => {
            setActiveSection(sectionId);
            setIsScrolling(false);
          }, 100);
        }
      };

      requestAnimationFrame(animation);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')} 
          className={`
            text-2xl font-bold focus:outline-none
            transition-all duration-500 ease-in-out transform
            ${activeSection === 'home' 
              ? 'text-yellow-400 scale-105' 
              : 'text-white hover:text-gray-300 hover:scale-105'
            }
          `}
        >
          Ghaffar Sieyam
        </button>
        <nav className={`
          ${isMenuOpen ? 'flex bg-gray-900' : 'hidden'} 
          md:flex flex-col md:flex-row absolute md:relative 
          top-full left-0 w-full md:w-auto md:bg-transparent 
          z-50 shadow-md md:shadow-none
          transition-all duration-300 ease-in-out
        `}>
          {['home', 'skills', 'projects', 'services', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`
                nav-link block py-2 px-4 font-semibold 
                capitalize font-poppins
                transition-all duration-300 ease-in-out transform
                ${activeSection === section 
                  ? 'text-yellow-400 font-bold scale-105' 
                  : 'text-gray-300 hover:text-purple-200 hover:scale-105'
                }
                ${isScrolling ? 'pointer-events-none' : ''}
              `}
            >
              {section}
            </button>
          ))}
        </nav>
        <button 
          className="md:hidden z-50 transition-transform duration-300 ease-in-out hover:scale-110" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white transform transition-transform duration-300" />
          ) : (
            <Menu className="h-6 w-6 text-white transform transition-transform duration-300" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;