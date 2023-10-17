import React from 'react'

const Services = () => {
    return (
      <section>
        <div className="flex flex-col items-center justify-center p-10  m-5">
          <h1 className="text-3xl font-bold text-primary border-b-2 border-primary">
            Services
          </h1>
          <h3 className="text-xl mt-2 font-semibold">Here's what we offer</h3>
        </div>
        <div className="flex flex-wrap mx-auto m-10 mt-2 items-center justify-center">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
                alt="next js 13"
                className="rounded-xl h-[200px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-2">Next.Js 13 | Full Stack Website Development</h2>
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