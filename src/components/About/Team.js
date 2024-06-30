import React from 'react'
const Team = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-white/[.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-3xl md:text-4xl font-bold">
          Define your character; Decide you altitude
        </h3>
        <p className="leading-relaxed text-2xl py-6">
          We create environments that harmonize functionality, beauty, and
          sustainability. We strive to push the boundaries of conventional
          design, crafting spaces that are not only visually stunning but also
          serve the diverse needs of our clients. Our approach is rooted in a
          deep understanding of the relationship between space and its
          occupants, ensuring that each project resonates with a sense of
          purpose and delight.
        </p>
      </div>
      <div
        className="grid grid-cols-2 col-span-2 gap-2"
        data-aos="fade-up-left"
        data-aos-duration="3000"
      >
        <img 
          className="object-cover w-full h-full"
          alt="Anushka-Co Founder"
          src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/FOUNDER'S%20IMAGES/CO%20FOUNDER%20ANUSHKA.png"}
        />
        <img 
          className="object-cover w-full h-full"
          alt="Founder"
          src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-assets/main/FOUNDER'S%20IMAGES/FOUNDER.png"}
        />
      </div>
    </div>
  );
}

export default Team;