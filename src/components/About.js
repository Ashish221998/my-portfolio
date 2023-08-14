import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from bg-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p
          className="text-xl mt-20 
        font-sans"
        >
          Hello! I am a highly skilled frontend developer with two years of
          invaluable experience, specializing in React, JavaScript, HTML, and
          CSS. I have been fortunate to work with a renowned multinational
          corporation (MNC), where I have honed my expertise in crafting
          exceptional user interfaces and delivering top-notch web applications.
          Throughout my career, I have contributed to a variety of projects,
          leveraging my strong proficiency in React to build dynamic and
          responsive interfaces that elevate the user experience. My deep
          understanding of JavaScript, combined with my expertise in HTML and
          CSS, allows me to create visually appealing and intuitive websites
          that meet both client and end-user expectations.
        </p>
        <br />
        <p className="text-xl">
          Working in a fast-paced and collaborative environment has equipped me
          with excellent problem-solving skills and the ability to thrive under
          pressure. I am passionate about staying up-to-date with the latest
          industry trends and best practices, ensuring that my work is always at
          the forefront of modern web development. As a frontend developer, I
          take great pride in my attention to detail, dedication to clean and
          maintainable code, and my commitment to delivering projects on time
          and within budget. I am excited to continue growing and contributing
          to innovative projects that challenge and inspire me.
        </p>
      </div>
    </div>
  );
};

export default About;
