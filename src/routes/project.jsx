import { useLocation, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Project() {
  const { projectId } = useParams();
  const location = useLocation();
  const { projectData } = location.state || {};

  if (!projectData || projectData.id !== projectId) {
    return <Navigate to='/work' />;
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div data-scroll-section>
      <div className='container container__padding-block'>
        <motion.header
          className='p__header'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'anticipate',
          }}>
          <h1 className='p__header-title'>
            {projectData.link ? (
              <a
                href={projectData.link}
                target='_blank'
                rel='noopener noreferrer'
                className='p__header-title-link'>
                {projectData.heading}
              </a>
            ) : (
              projectData.heading
            )}
          </h1>
        </motion.header>

        <div className='p-content'>
          <div className='p-content__description'>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: 'anticipate',
              }}>
              {projectData.description}
            </motion.p>

            <motion.div
              className='p-content__description-info'
              variants={container}
              initial='hidden'
              animate='visible'>
              <motion.p
                className='p-content__description-info__job-role'
                variants={item}>
                <span className='font-weight--semi-bold'>Job Role:</span>{' '}
                {projectData.jobRole}
              </motion.p>
              <motion.p
                className='p-content__description-info__language'
                variants={item}>
                <span className='font-weight--semi-bold'>Language:</span>{' '}
                {projectData.language}
              </motion.p>
              <motion.p
                className='p-content__description-info__year'
                variants={item}>
                <span className='font-weight--semi-bold'>Year:</span>{' '}
                {projectData.year}
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className='p-content__technologies'
            variants={container}
            initial='hidden'
            animate='visible'>
            {projectData.technologies.map((technology, index) => (
              <motion.p
                key={index}
                className='p-content__technologies-tech'
                variants={item}>
                {technology}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <div className='p-showcase'>
          {projectData.images &&
            projectData.images.map((image, index) => (
              <motion.img
                className='p-showcase__img'
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 1,
                  ease: 'anticipate',
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
