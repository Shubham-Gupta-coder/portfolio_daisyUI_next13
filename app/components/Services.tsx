import React from 'react'
import Headline from './Headline';

const Services = () => {
    return (
      <section id='services'>
        <Headline heading="Services" paragraph="Here's  we offer" />
        <div className="flex flex-wrap space-x-5 mx-auto items-center justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
                alt="next js 13"
                className="rounded-xl h-[200px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2">
                Next.Js 13 | Full Stack Website Development
              </h2>
              <div className="card-actions">
                <button className="btn btn-primary">Get Service</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://miro.medium.com/v2/resize:fit:1024/1*QY5S4senfFh-mIViSi5A_Q.png"
                alt="react native"
                className="rounded-xl h-[200px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2">
                React Natuve | Cross Platform App Development
              </h2>
              <div className="card-actions">
                <button className="btn btn-primary">Get Service</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Services