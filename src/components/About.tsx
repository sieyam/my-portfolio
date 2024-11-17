import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Ghaffar Sieyam" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hello! I'm Ghaffar Sieyam, a passionate Blender 3D artist with a keen eye for detail and a love for creating stunning visual experiences. With years of experience in the field, I specialize in bringing ideas to life through 3D modeling, texturing, and animation.
            </p>
            <p className="text-lg mb-4">
              My work spans across various industries, including entertainment, architecture, and product visualization. I'm constantly pushing the boundaries of what's possible with 3D art, always staying up-to-date with the latest techniques and technologies.
            </p>
            <p className="text-lg">
              When I'm not crafting 3D masterpieces, you can find me exploring new artistic styles, collaborating with fellow creatives, or sharing my knowledge through workshops and online tutorials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;