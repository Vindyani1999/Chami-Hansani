import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import avatar from '../assets/avatar.jpg'; // Adjust the path as necessary

const LeftSidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">

       <div className="w-64 h-64 mb-4 overflow-hidden rounded-full shadow-lg ">
         <img
            src={avatar}
          alt="Chami Hansani"
          className="h-full w-full object-cover "
        />
      </div>

      <h1 className="text-3xl md:text-2xl font-bold text-gray-100 mb-1"> Hi, I'm Chami Hansani</h1>
      <p className="text-md text-gray-200 mb-6">Software Engineer</p>

      <div className="flex space-x-4 text-xl text-gray-400">
        <a href="https://github.com/Vindyani1999" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/chami-hansani" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/chami_hansani" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default LeftSidebar;
