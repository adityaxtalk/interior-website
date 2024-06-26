import React from 'react'
import Heading from '../components/Home/Heading';
import Gallery from '../components/Home/Gallery';
import MiddleSection from "../components/Home/MiddleSection";
import Portfolio from "../components/Home/Portfolio";
const Home = () => {
  return (
    <>
      <Heading/>
      <Portfolio/>
      <MiddleSection/>
      <Gallery/>
    </>
  )
}

export default Home