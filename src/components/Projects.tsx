import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

import projectImage3 from '../assets/images/proj_3_milky-bottle.png';
import projectImage4 from '../assets/images/proj_4_perfume.png';
import projectImage5 from '../assets/images/proj_5_jell.png';
import projectImage6 from '../assets/images/proj_6_creature.png';
import projectImage7 from '../assets/images/proj_7_whisky.png';
import projectImage8 from '../assets/images/proj_2_2d.png';
import projectVideo1 from '../assets/images/projectvideo1-car.mp4';
import projectVideo2 from '../assets/images/projectvideo2-robot.mp4';
import projectVideo3 from '../assets/images/projectvideo3-vfx.mp4';
import './Projects.css';

// Updated Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  mediaUrl: string; // Updated to support both images and videos
  isVideo: boolean; // Flag to distinguish media type
  githubLink: string;
  deployedLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Kinetic Energy: A 3D Animation of Power and Precision',
    description:
      "This project demonstrates our ability to create visually stunning and technically challenging 3D animations. The intricate details of the robot's design, combined with the realistic physics simulations of the breaking cubes, create a mesmerizing and captivating visual experience.",
    tools: ['Blender', '3Ds Max(Autodesk)'],
    mediaUrl: projectVideo2, // Image file
    isVideo: true, // Mark as image
    githubLink: 'https://github.com/sieyam/Kinetic-Energy-3D-Animation-Power-Precision',
    deployedLink: 'https://github.com/sieyam/Kinetic-Energy-3D-Animation-Power-Precision',
  },
  {
    id: 2,
    title: 'Cinematic Car Animation: A Visual Feast',
    description:
      'This project demonstrates our ability to create photorealistic car animations that push the boundaries of 3D rendering. Every detail, from the intricate bodywork to the reflective surfaces, has been meticulously modeled and textured to achieve a hyper-realistic look. The smooth animation and dynamic camera work further enhance the overall impact.',
    tools: ['Blender', 'Substance Painter', '3Ds Max(Autodesk)'],
    mediaUrl: projectVideo1, // Video file
    isVideo: true, // Mark as video
    githubLink: 'https://github.com/sieyam/Cinematic-Car-Animation-Visual-Feast',
    deployedLink: 'https://github.com/sieyam/Cinematic-Car-Animation-Visual-Feast',
  },
  {
    id: 3,
    title: 'Cityscape and Supplementation: A Visual Fusion',
    description:
      'Elevate your fitness journey to new heights with our premium casein protein. Immerse yourself in the dynamic energy of the city as you fuel your body and mind. This captivating visual, enhanced by cutting-edge VFX, seamlessly blends the urban landscape with the power of our supplement. Experience the perfect fusion of style and substance.',
    tools: ['Blender','Adobe After Effects','Chainner', 'Substance Painter', 'VFX'],
    mediaUrl: projectVideo3, // Video file
    isVideo: true, // Mark as video
    githubLink: 'https://github.com/sieyam/Cityscape-and-Supplementation-Visual-Fusion',
    deployedLink: 'https://github.com/sieyam/Cityscape-and-Supplementation-Visual-Fusion',
  },
  {
    id: 4,
    title: 'Photorealistic Milk Bottle Render in Blender',
    description:
      'This 3D render demonstrates our ability to create visually striking compositions. The minimalist background and focused lighting draw attention to the product, while the realistic rendering techniques make the bottle appear tangible. This project showcases our skills in both artistic direction and technical execution.',
    tools: ['Blender', 'Substance Painter (for texturing)', 'Photoshop (for post-processing)'],
    mediaUrl: projectImage3,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/Photorealistic-Milk-Bottle-Render-Blender',
    deployedLink: 'https://github.com/sieyam/Photorealistic-Milk-Bottle-Render-Blender',
  },
  {
    id: 5,
    title: 'Luxurious Product Visualization: The Valentino Donna Perfume Bottle',
    description:
      'This project demonstrates our ability to create photorealistic product visualizations that push the boundaries of 3D rendering. Every detail, from the crystal-like texture of the bottle to the reflective surface of the liquid, has been carefully crafted to achieve a hyper-realistic look.',
    tools: ['Blender', '3Ds Max(Autodesk)', 'Cinema4D', 'Chainner'],
    mediaUrl: projectImage4,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/Luxurious-Product-Visualization-Valentino-Donna-Perfum-Bottle',
    deployedLink: 'https://github.com/sieyam/Luxurious-Product-Visualization-Valentino-Donna-Perfum-Bottle',
  },
  {
    id: 6,
    title: 'Softness, Captured: A 3D Product Visualization',
    description:
      'This 3D render captures the essence of softness, showcasing the luxurious texture of the hand cream. The gentle flow of the cream, combined with the elegant packaging, creates a visually appealing and inviting image.',
    tools: ['Blender', '3Ds Max(Autodesk)', 'Cinema4D', 'Chainner'],
    mediaUrl: projectImage5,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/Softness-Captured-3D-Product-Visualization',
    deployedLink: 'https://github.com/sieyam/Softness-Captured-3D-Product-Visualization',
  },
  {
    id: 7,
    title: 'The Art of 3D: A Mechanical Masterpiece',
    description:
      'This 3D render is a testament to the power of 3D art to bring ideas to life. The intricate details and dynamic pose create a visually striking and memorable image.',
    tools: ['Blender', '3Ds Max(Autodesk)', 'Cinema4D', 'Chainner'],
    mediaUrl: projectImage6,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/The-Art-3D-Mechanical-Masterpiece',
    deployedLink: 'https://github.com/sieyam/The-Art-3D-Mechanical-Masterpiece',
  },
  {
    id: 8,
    title: 'A Luxurious Indulgence: A 3D Whisky Visualization',
    description:
      'This 3D render captures the opulence and sophistication of this premium whisky. The rich, dark color of the liquid, combined with the elegant bottle design, creates a visually stunning and captivating image.',
    tools: ['Blender', '3Ds Max(Autodesk)', 'Cinema4D'],
    mediaUrl: projectImage7,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/Luxurious-Indulgence-3D-Whisky-Visualization',
    deployedLink: 'https://github.com/sieyam/Luxurious-Indulgence-3D-Whisky-Visualization',
  },
  {
    id: 9,
    title: 'Concept of 2D Charactor Animation',
    description:
      "This 2D project demonstrates my ability to translate a creative concept into a compelling animation. From initial character design to final rendering, I have utilized Blender's versatile tools to create a visually engaging and dynamic piece.",
    tools: ["Blender (2D animation capabilities)",
      "OpenToonz",
     "Pencil2D","Krita"],
    mediaUrl: projectImage8,
    isVideo: false,
    githubLink: 'https://github.com/sieyam/2d-charactor-animation',
    deployedLink: 'https://github.com/sieyam/2d-charactor-animation',
  },
];

const Projects: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const projectId = parseInt(event.target.value, 10) - 1;
    setCurrentProjectIndex(projectId);
  };

  const currentProject = projects[currentProjectIndex];

  const formatProjectNumber = (id: number) => {
    return id < 10 ? `0${id}` : `${id}`;
  };

  return (
    <section id="projects" className="py-20 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-purple-500 mb-4">
              {formatProjectNumber(currentProject.id)}
            </div>
            <h2 className="text-[30px] font-bold mb-2">{currentProject.title}</h2>
            <p className="text-white/60 mb-4">{currentProject.description}</p>
            <h4 className="font-semibold text-lg mb-2">Tools/Technologies:</h4>
            <ul className="mb-4 flex flex-wrap items-center space-x-2 text-neon-green font-mono">
              {currentProject.tools.map((tool, index) => (
                <React.Fragment key={index}>
                  <li className="text-xl">{tool}</li>
                  {/* Add a pipe separator except for the last item */}
                  {index < currentProject.tools.length - 1 && (
                    <span className="text-xl text-white/60">|</span>
                  )}
                </React.Fragment>
              ))}
            </ul>

            <hr className="border-t border-gray-500 mb-4" />
            <div className="flex space-x-4 items-center">
              <a
                href={currentProject.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded inline-flex items-center"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded inline-flex items-center"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
  <div className="h-96 flex items-center justify-center overflow-hidden mb-4 rounded-lg">
    {currentProject.isVideo ? (
      <video
        src={currentProject.mediaUrl}
        controls
        className="w-full h-full object-contain rounded-lg border-4 border-transparent hover:border-neon focus:border-neon"
      />
    ) : (
      <img
        src={currentProject.mediaUrl}
        alt={currentProject.title}
        className="w-full h-full object-contain rounded-lg border-4 border-transparent hover:border-neon focus:border-neon"
      />
    )}
  </div>
  <div className="flex justify-center mt-4 space-x-4">
    <button
      onClick={handlePrev}
      className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
    >
      <ChevronLeft size={24} />
    </button>
    <button
      onClick={handleNext}
      className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full"
    >
      <ChevronRight size={24} />
    </button>
  </div>
  <div className="flex justify-center mt-6">
    <input
      type="range"
      min="1"
      max={projects.length}
      value={currentProjectIndex + 1}
      onChange={handleSliderChange}
      className="w-full cursor-pointer"
    />
  </div>
</div>



        </div>
      </div>
    </section>
  );
};

export default Projects;
