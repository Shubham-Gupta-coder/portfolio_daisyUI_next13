import React from 'react'
import Headline from './Headline'

const About = () => {
  return (
    <section id="about">
      <Headline heading="About Me" paragraph="know me and start the journey" />

      <div className="w-[80vw] mx-auto">
        <h1 className="text-4xl text-warning mb-5 font-bold">
          Hi I'm Coder Shubham
        </h1>
        <div className="flex items-center flex-wrap">
          <kbd className="kbd m-1">Web Developer</kbd>
          <kbd className="kbd m-1">App Developer</kbd>
          <kbd className="kbd m-1">Youtuber</kbd>
        </div>

        <h3 className="text-accent font-semibold mt-12 mb-5">
          My Journey on Youtube
        </h3>
        <ul className="steps space-x-2">
          <li data-content="✓" className="step step-success">
            100
          </li>
          <li data-content="●" className="step step-warning">
            1k
          </li>
          <li data-content="x" className="step step-error">
            100k
          </li>
          <li data-content="x" className="step step-error">
            1M
          </li>
        </ul>
        <h3 className="text-secondary font-semibold mt-12 mb-5">
          My Journey in Coding
        </h3>
        <ul className="steps space-x-2">
          <li data-content="✓" className="step step-success">
            Web Dev
          </li>
          <li data-content="✓" className="step step-success">
            Additional
          </li>
          <li data-content="●" className="step step-warning">
            App Dev
          </li>
          <li data-content="?" className="step step-error">
            AI/ML
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About