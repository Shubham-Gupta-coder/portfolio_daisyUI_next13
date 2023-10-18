import React from 'react'
import Headline from './Headline'

const About = () => {
  return (
    <section id="about">
      <Headline heading="About Me" paragraph="know me and start the journey" />

      <div className="w-[80vw] mx-auto">
        <h1 className="text-4xl text-primary-content mb-5 font-bold">
          Hi I'm Coder Shubham
        </h1>
        <div className="flex items-center space-x-2">
          <kbd className="kbd">Web Developer</kbd>
          <kbd className="kbd">App Developer</kbd>
          <kbd className="kbd">Youtuber</kbd>
        </div>

        <h3 className="text-accent font-semibold mt-12 mb-5">
          My Journey on Youtube
        </h3>
        <ul className="steps">
          <li data-content="x" className="step step-error">
            Channel 1
          </li>
          <li data-content="x" className="step step-error">
            Channel 2
          </li>
          <li data-content="x" className="step step-error">
            Channel 3
          </li>
          <li data-content="x" className="step step-error">
            Channel 4
          </li>
          <li data-content="✓" className="step step-success">
            Coder Shubham
          </li>
        </ul>
        <h3 className="text-secondary font-semibold mt-12 mb-5">
          My Journey in Coding
        </h3>
        <ul className="steps">
          <li data-content="✓" className="step step-success">
            HTML CSS JS
          </li>
          <li data-content="✓" className="step step-success">
            React Js
          </li>
          <li data-content="✓" className="step step-success">
            Next Js
          </li>
          <li data-content="✓" className="step step-success">
            (Git, Tailwind etc)
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