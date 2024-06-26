import React from 'react'
import Heading from "../components/About/Heading";
import Motto from "../components/About/Motto";
import Approach from "../components/About/Approach";
import Team from "../components/About/Team";
import 'aos/dist/aos.css';
const About = () => {
  return (
    <>
      <Heading/>
      <Motto/>
      <Approach/>
      <Team/>
    </>
  )
}

export default About