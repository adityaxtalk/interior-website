import React from 'react'
const Approach = () => {
  return (
    <>
      <div className="max-w-full m-auto px-4 py-16 grid lg:grid-cols-2 gap-4">
        <div
          className="md:mx-12 grid grid-cols-2 grid-rows-5 h-[80vh] gap-2"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img 
            className="object-cover w-full h-full p-2 row-span-4"
            src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/modoboard.png"}
            alt="about"
          />
          <img 
            className="object-cover w-full h-full p-2 row-start-2 row-span-4"
            src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/modoboard1.jpeg"}
            alt="about"
          />
        </div>
        <div
          className="flex flex-col h-full justify-center pl-6"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <h3 className="text-3xl md:text-4xl font-bold">
            Innovative Design Solutions
          </h3>
          <p className="w-4/5 leading-relaxed text-2xl py-6">
            We tackle each project with a fresh outlook, eagerly embracing its
            unique challenges and opportunities. Our design process is dynamic
            and adaptable, marked by a relentless pursuit of excellence and
            meticulous attention to detail. We are dedicated to listening to our
            clients, understanding their visions, and transforming them into
            inspiring and delightful built forms and interiors.
          </p>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 bg-white ">
        <div className="flex flex-col justify-center items-center rounded-lg p-8 shadow-lg transition duration-300 ease-in-out">
          <p className="font-bold text-[#A17A43] text-center">
            <span className="text-4xl md:text-5xl">50<super>+</super></span>{" "}
            <sup className="text-xs text-gray-900 block">
              Projects Completed
            </sup>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center rounded-lg p-8 shadow-lg transition duration-300 ease-in-out">
          <p className="font-bold text-[#A17A43] text-center">
            <span className="text-4xl md:text-5xl">200,000</span>{" "}
            <sup className="text-xs text-gray-900 block">
              Sqft Under Construction
            </sup>
          </p>
        </div>

        <div className="col-span-2 flex flex-col justify-center pl-6">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#A17A43]">
            Elevating Design, Enriching Lives
          </h3>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            With a focus on innovation and experimentation, we aim to elevate
            lifestyles through bespoke architectural and interior design
            solutions. Each project we undertake is a unique journey, driven by
            a collaborative process of brainstorming and ideation. Our team
            believes in a design aesthetic that balances timeless elegance with
            practical functionality, ensuring that every space we create is
            vibrant, enduring, and perfectly tailored to the needs of its users.
          </p>
        </div>
      </div>
    </>
  );
}

export default Approach