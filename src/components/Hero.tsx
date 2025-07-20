import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-170"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm Farzad
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
        Software Engineer — I build web experiences with React, TypeScript, and Node.
      </p>

      <div className="flex gap-6 text-2xl text-gray-700 mb-12">
        <a href="https://github.com/farzad-r" target="_blank" rel="noopener noreferrer" className="hover:text-black">
          <FaGithub />
        </a>
        <a href="https://twitter.com/farzad_abdi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/farzad-abdi/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
      </div>

      <div className="animate-bounce text-gray-500 text-3xl">
        ↓
      </div>
    </section>
  );
};

export default Hero;
