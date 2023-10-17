import React from 'react'

const page = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold uppercase mb-2 px-20 py-5 rounded-full bg-primary text-primary-content">
          Projects
        </h1>
        <h3 className="text-2xl mt-2 font-semibold">See the difference!</h3>
      </div>
      <div className="flex flex-col space-y-10">
        <div className="w-[80vw] mx-[10vw] my-10 p-10 flex justify-center border-t border-primary-content">
          <img
            src="https://assets.materialup.com/uploads/c5178a69-59ff-46d7-b7b9-5cf31a989a9c/preview.png"
            className="border-primary border-2 rounded-xl h-[80vh]"
            alt=""
          />
        </div>
        <div className="w-[80vw] mx-[10vw] my-10 p-10 flex justify-center border-t border-primary-content">
          <img
            src="https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/clcdt727w05q0p6k42wwq7l14_1/public"
            className="border-primary border-2 rounded-xl h-[80vh]"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default page