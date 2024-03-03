import React from 'react';
// import Tilt from 'react-tilt';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import { SectionWrapper } from '../hoc';

const   About = () => {

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Daniel -</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am skilled in a myriad of programming languages and tools, such as HTML, CSS, JavaScript,
        React, React Native, Three, Next, Python and SQL.
        I am a motivated and driven team-player, who works well with teams, as well as my own initiative. I have strong problem-solving skills and have
        and have the ability to work effectively in any environment, be it remote, hybrid or on-site. I am committed to learning new skills and tricks to enhance my
        software development progress.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")