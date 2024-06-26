import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'

const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({loop: true}, [AutoPlay()]);
  return (
    <div className='max-w-[1256px] mx-auto w-full'>
        <div className="relative p-4">
            <div ref={emblaRef} className="overflow-hidden mt-40">
              <div className='flex'>
                <div className='flex-[0_0_100%] min-w-0'>
                    <img  className='md:w-[65%] h-screen object-contain' src="https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/slider/slider1.jpg" alt="slides"/>
                </div>
                <div className='flex-[0_0_100%] min-w-0'>
                    <img  className='md:w-[65%] h-screen object-contain' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/slider/slider2.jpg"} alt="slides"/>
                </div>
                <div className='flex-[0_0_100%] min-w-0'>
                    <img  className='md:w-[65%] h-screen object-contain' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/slider/slider3.jpg"} alt="slides"/>
                </div>
                <div className='flex-[0_0_100%] min-w-0'>
                    <img  className='md:w-[65%] h-screen object-contain' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/slider/slider4.jpg"} alt="slides"/>
                </div>
                <div className='flex-[0_0_100%] min-w-0'>
                    <img  className='md:w-[65%] h-screen object-contain' src={"https://raw.githubusercontent.com/adityaxtalk/interior-website-images/main/slider/slider5.jpg"} alt="slides"/>
                </div>
              </div>
            </div>
            <div className='w-full md:absolute z-10 top-[30%] left-[50%] max-w-[500px] leading-8 bg-[#252926]/[.66] p-8'>
                <h3 className='text-4xl font-bold md:mb-20 mb-12'>What we craft</h3>
                <h6 className='font-[fraunces] text-2xl italic font-bold mb-4'>01</h6>
                <h6 className='font-bold text-2xl mb-4'>Full Service Design</h6>
                <p className='text-2xl leading-relaxed py-6'>
                    Begin your design journey with us; this package empowers us to thoughtfully
                    interpret your passions and styles by providing innovative and exquisite
                    furniture, textiles, even art and antiques. Creating a space that is not only practcal but also
                    has a real identity, a place you can call home!
                </p>
            </div>
        </div>
    </div>
  )
}

export default EmblaCarousel;