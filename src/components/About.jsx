import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // <Tilt className='xs:w-[250px] w-full'>
  //   <motion.div
  //     variants={fadeIn("right", "spring", index * 0.1, 0.2)}
  //     className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  //   >
  //     <div
  //       options={{
  //         max: 45,
  //         scale: 1,
  //         speed: 350,
  //       }}
  //       className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
  //     >
  //       <img
  //         src={icon}
  //         alt='web-development'
  //         className='w-16 h-16 object-contain'
  //       />

  //       <h3 className='text-white text-[20px] font-bold text-center'>
  //         {title}
  //       </h3>
  //     </div>
  //   </motion.div>
  // </Tilt>

  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: 50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.75,
            type: "spring",
            delay: index * 0.5,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
        />

        <motion.h3
          className="text-white text-[20px] font-bold text-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
  </Tilt>

);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript and expertise in frameworks like React, Node.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
