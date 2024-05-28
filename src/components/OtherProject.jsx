/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function OtherProject(props) {
  return (
    <motion.div
      className='project-s'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      }}>
      <h4 className='project-s__heading'>{props.heading}</h4>
      <p className='project-s__text'>{props.text}</p>
    </motion.div>
  );
}
