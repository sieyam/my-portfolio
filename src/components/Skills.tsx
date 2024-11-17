import React from 'react';
import { Box, PenTool, Layers, Repeat, Code, CreditCard } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
}
const skills: Skill[] = [
  {
    icon: <Box size={40} />,
    name: "3D Modeling",
    description: "Create detailed and accurate 3D models using Blender. Bring complex ideas to life by crafting objects, environments, and intricate designs with precision and creativity."
  },
  {
    icon: <Layers size={40} />,
    name: "3D Rendering",
    description: "Produce high-quality, photorealistic renders that highlight details and textures. Translate concepts into visually stunning outputs for presentations and marketing."
  },
  {
    icon: <Box size={40} />,
    name: "3D Product Visualization",
    description: "Showcase products in stunning 3D for marketing and client presentations. Create lifelike renderings that help businesses visualize and promote their designs."
  },
  {
    icon: <PenTool size={40} />,
    name: "2D Artist",
    description: "Create compelling 2D artwork and illustrations tailored to your vision. Develop unique designs for branding, storytelling, or artistic expression."
  },
  {
    icon: <Repeat size={40} />,
    name: "UV Wrapping",
    description: "Expertly map 2D textures onto 3D models for seamless detailing. Ensure that materials and patterns align perfectly for professional-grade visuals."
  },
  {
    icon: <Layers size={40} />,
    name: "CGI",
    description: "Generate computer graphics for various applications, including film, gaming, and virtual reality. Deliver immersive visuals that captivate audiences."
  },
  {
    icon: <Box size={40} />,
    name: "2D to 3D Conversion",
    description: "Transform 2D designs into 3D models with accuracy and finesse. Elevate flat concepts into fully realized 3D forms ready for production or visualization."
  },
  {
    icon: <Code size={40} />,
    name: "Texture Painting",
    description: "Craft custom textures and hand-painted details for 3D models. Elevate realism and artistic flair in both game assets and CGI."
  },
  {
    icon: <CreditCard size={40} />,
    name: "Animation and Rigging",
    description: "Bring 3D models to life with smooth animations and rigging setups. Design dynamic, natural movements for characters and objects."
  },
  {
    icon: <PenTool size={40} />,
    name: "Compositing (Image, Video)",
    description: "Combine multiple assets, layers, and effects to produce seamless, polished visuals for both images and video projects."
  },
  {
    icon: <Layers size={40} />,
    name: "3D Scanning and Printing",
    description: "Digitally capture physical objects and prepare them for 3D printing with precision and accuracy."
  },
  {
    icon: <Repeat size={40} />,
    name: "Motion Graphics",
    description: "Design engaging animations and visual effects for multimedia, including titles, transitions, and logo animations."
  }
];



const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg border border-blue-600 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(32,_42,_69,_0.7),_0_0_25px_rgba(32,_42,_69,_0.6),_0_0_35px_rgba(32,_42,_69,_0.5)]"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
