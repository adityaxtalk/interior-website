import React from 'react'

const Commercial = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-white/[0.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8">
      <div
        className="lg:top-20 relative lg:col-span-1 col-span-2"
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        <h3 className="text-3xl md:text-4xl font-bold">Commercial</h3>
        <p className="leading-relaxed text-xl py-6">
          Discover how we redefine spaces to inspire creativity and elevate
          customer experiences, tailored uniquely to your business needs.
          Transforming commercial spaces into dynamic environments that not only
          enhance productivity but also embody your brand's essence. From
          cutting-edge office designs to immersive retail and hospitality
          settings, our approach integrates aesthetic finesse with functional
          brilliance.
        </p>
      </div>
      <div
        className="grid grid-cols-2 col-span-2 gap-2"
        data-aos="fade-up-left"
        data-aos-duration="3000"
      >
        <img
          className="object-contain w-full h-full p-2"
          src="https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/COMMERICAL/1.png"
          alt="commercial"
        />
        <img
          className="object-contain w-full h-full p-2"
          src="https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/COMMERICAL/3.png"
          alt="commercial"
        />
        <img
          className="object-contain w-full h-full p-2"
          src="https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/COMMERICAL/3.png"
          alt="commercial"
        />
        <img
          className="object-contain w-full h-full p-2"
          src="https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/COMMERICAL/4.png"
          alt="commercial"
        />
      </div>
    </div>
  );
}

export default Commercial