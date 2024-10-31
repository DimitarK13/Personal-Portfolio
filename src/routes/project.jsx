import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Project() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    if (!id) {
      navigate('/work');
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.cosmicjs.com/v3/buckets/personal-portfolio-production/objects/${id}?read_key=0ciO1wztHQkfxVXbFkyFeJXKk2tkCPwBqcNvGVpNi9YiRf48Al&depth=1&props=slug,title,metadata`
        );

        const data = await response.json();

        setData(data.object);
      } catch (err) {
        setError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [id, navigate]);

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

  if (error)
    return (
      <div className="container container__padding-block">
        <p>Something went wrong... Please try again later</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="container container__padding-block">
        <p>Loading... Please wait</p>
      </div>
    );

  if (data) {
    return (
      <div data-scroll-section>
        <div className="container container__padding-block">
          <motion.header
            className="p__header"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'anticipate',
            }}
          >
            <h1 className="p__header-title">
              {data.metadata?.link ? (
                <a
                  href={data.metadata.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p__header-title-link"
                >
                  {data.title}
                </a>
              ) : (
                data.title
              )}
            </h1>
          </motion.header>

          <div className="p-content">
            <div className="p-content__description">
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: 'anticipate',
                }}
              >
                {data.metadata?.description}
              </motion.p>

              <motion.div
                className="p-content__description-info"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <motion.p
                  className="p-content__description-info__job-role"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Job Role:</span>{' '}
                  {data.metadata?.job_role}
                </motion.p>
                <motion.p
                  className="p-content__description-info__language"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Language:</span>{' '}
                  {data.metadata?.language}
                </motion.p>
                <motion.p
                  className="p-content__description-info__year"
                  variants={item}
                >
                  <span className="font-weight--semi-bold">Year:</span>{' '}
                  {data.metadata?.year}
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              className="p-content__technologies"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {data.metadata?.technologies.map(({ technology }, index) => (
                <motion.p
                  key={index}
                  className="p-content__technologies-tech"
                  variants={item}
                >
                  {technology}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <div className="p-showcase">
            {data.metadata?.gallery.length > 0 &&
              data.metadata?.gallery.map(({ image }, index) => (
                <motion.img
                  className="p-showcase__img"
                  key={index}
                  src={image.url}
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
}
