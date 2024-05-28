import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [title, setTitle] = useState('Developer');

  useEffect(() => {
    const titles = ['Designer', 'Instructor', 'Developer'];
    let i = 0;

    setInterval(() => {
      setTitle(titles[i]);
      i = i === titles.length - 1 ? 0 : i + 1;
    }, 3000);
  }, []);

  return (
    <>
      <div className='container'>
        <div className='hero'>
          <motion.h1
            className='hero__heading'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'anticipate',
            }}>
            {title}
          </motion.h1>

          <div className='hero__line'></div>

          <div className='hero__info'>
            <motion.p
              className='hero__text'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: 'anticipate',
              }}>
              Hey there, I&apos;m Dimitar, a dedicated web developer with a
              passion to empower your business in the digital world. I
              specialize in designing and developing websites that elevate
              online presence.
            </motion.p>
            <motion.p
              className='hero__text'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.225,
                ease: 'anticipate',
              }}>
              Besides development, I&apos;m deeply passionate about guiding
              aspiring talents in mastering the art of web development.
              Let&apos;s collaborate to turn your digital aspirations into a
              vibrant reality.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
