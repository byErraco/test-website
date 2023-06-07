import React from "react";
const AboutUs: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-white py-20 text-3xl md:text-4xl h-screen`}
    >
      <div className="container mx-auto px-11">
        <p className="max-w-5xl mx-auto text-4xl leading-tight tracking-tight">
          <strong>We will help you ship better apps, faster</strong> Our team of
          expert engineers has created the best user experiences in some of the
          most popular apps worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
