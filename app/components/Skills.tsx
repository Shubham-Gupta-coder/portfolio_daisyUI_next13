import React from "react";
import Headline from "./Headline";

const Skills = () => {
  return (
    <section id="skills">
      <Headline heading="Skills" paragraph="Here's what we know" />
      <div className="flex flex-wrap space-x-5 mx-auto items-center justify-center">
        <div className="carousel carousel-center p-4 space-x-4 bg-primary bg-opacity-10 border-8 border-primary rounded-box w-[80vw]">
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
              className="w-full object-cover rounded-box"
            />
          </div>
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png"
              className="w-full object-cover rounded-box"
            />
          </div>
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://blog.boot.dev/img/800/HTML-vs-CSS-vs-JavaScript-min.webp"
              className="w-full object-cover rounded-box"
            />
          </div>
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png"
              className="w-full object-cover rounded-box"
            />
          </div>
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://buglelab.io/images/sanity.webp"
              className="w-full object-cover rounded-box"
            />
          </div>
          <div className="carousel-item w-1/3 h-[300px]">
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
              className="w-full object-cover rounded-box"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
