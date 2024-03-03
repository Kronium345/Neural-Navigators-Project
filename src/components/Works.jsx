import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { github } from '../assets';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  const ProjectCard = ({ index, name, description, tags, image, source_code_link, github_code_link }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="mr-7">
        <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(github_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-3">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
              <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <img src={image} alt="project" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Upcoming Updates</h2>
      </motion.div>

      <div className="w-full mt-3 overflow-x-auto">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="text-secondary text-[17px] max-w-3xl leading-[30px]">
          For this demo, to implement it in a larger scale, it requires several updates and further development. <br />
          Which we will pursue in the future. We have developed a Contact Us Form, through which we will receive feedback from <br />
          our users to design accurate and user-friendly updates.
        </motion.p>
      </div>

      <div className="mt-20 flex gap-7 overflow-x-auto">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");
