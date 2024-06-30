import React from 'react'
const Residential = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-white/[0.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8">
      <div
        className="lg:top-20 relative lg:col-span-1 col-span-2"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        <h3 className="text-3xl md:text-4xl font-bold">Residential</h3>
        <p className="leading-relaxed text-xl py-6">
          Specializing in residential architecture and interiors, we bring a
          tailored approach to every project. From conceptualizing dream homes
          to crafting functional spaces that embody comfort and style, our focus
          is on creating environments that resonate with your lifestyle and
          aspirations. Whether it's designing innovative floor plans, selecting
          exquisite materials, or integrating personalized details, we strive to
          exceed expectations and elevate your living experience through
          thoughtful design.
        </p>
      </div>
      <div
        className="grid grid-cols-2 col-span-2 gap-2"
        data-aos="fade-up-left"
        data-aos-duration="3000"
      >
        <img
          className="object-contain w-full h-full"
          alt="residential1"
          src={
            "https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/RESIDENTIAL%20PROJECT/01.png"
          }
        />
        <img
          className="object-contain w-full h-full"
          alt="residential2"
          src={
            "https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/RESIDENTIAL%20PROJECT/02.png"
          }
        />
        <img
          className="object-contain w-full h-full"
          alt="residential3"
          src={
            "https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/RESIDENTIAL%20PROJECT/03.png"
          }
        />
        <img
          className="object-contain w-full h-full"
          alt="residential4"
          src={
            "https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/RESIDENTIAL%20PROJECT/04.png"
          }
        />
      </div>
    </div>
  );
}

export default Residential