import React from 'react'

type headline = {
    heading: string,
    paragraph: string
}

const Headline = ({heading, paragraph}: headline) => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-3xl font-bold text-primary border-b-2 border-primary">
        {heading}
      </h1>
      <h3 className="text-xl mt-2 font-semibold">{paragraph}</h3>
    </div>
  );
}

export default Headline