import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import logoImage from '../assets/tech/Bio-Watch logo.png'; // Import your logo image

const About = () => {

  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

  return (
    <>
      {/* Wrap the image and text inside a container */}
      <div className="flex flex-col items-center justify-center">
        {/* Apply CSS styling to the image */}
        <img src={logoImage} alt="Logo" className="w-125 h-125 mx-auto mt-4" /> {/* Add mx-auto and mt-4 classes */}

        <motion.div variants={textVariant()} className="text-center mt-4">
          {/* <p className={styles.sectionSubText}>Daniel -</p> */}
          {/* <h2 className={styles.sectionHeadText}>About</h2> */}
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          An environment themed web app which utilises a threat identifier created using an LLM in a JavaScript game , to help identify environmental threats affecting different animals and helping us implement solutions to save them.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");
