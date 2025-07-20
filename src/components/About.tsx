import React from 'react';

const About: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-regular text-gray-600 my-10 ml-16 mt-24 ">About Me</h1>
            <p className="text-14 text-gray-500 mb-4 mx-16 leading-relaxed tracking-wide">
                I am a software developer at the intersection of AI innovation and modern frontend engineering. My work blends intelligent systems with intuitive interfaces from building LLM powered chatbots and agents to crafting responsive, user focused web applications.

                I specialize in developing smart solutions using machine learning, deep learning, and large language models, with hands on experience in tools like BERT, GPT, RAG pipelines, and LLM agents. I enjoy working on systems that not only think, but also engage enabling better decision making, automation, and user interaction.
            </p>
            <p className="text-14 text-gray-500 mb-4 mx-16 leading-relaxed tracking-wide">
                But AI is only half the story.
            </p>
            <p className="text-14 text-gray-500 mb-4 mx-16 leading-relaxed tracking-wide">

                On the frontend, blending logic with design, I specialize in crafting engaging, responsive, and intuitive user interfaces with a strong command of React, Next.js, Tailwind CSS, and Figma, I transform complex ideas into elegant, high performing web apps. I focus on delivering interfaces that not only function flawlessly but leave a lasting impression.
            </p>
            <p className="text-14 text-gray-500 mb-6 mx-16 leading-relaxed tracking-wide">
                Outside of work, I enjoy learning new things, exploring creative ideas, and staying up to date with the latest in tech. I'm always open to new challenges and excited to build smart, user-friendly solutions that make a difference.
            </p>

            <div className="animate-bounce text-gray-400 text-5xl text-center my-20 ">
                ↓
            </div>
        </div>

    )
};

export default About;
