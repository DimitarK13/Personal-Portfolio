import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Work() {
  const [image, setImage] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://api.cosmicjs.com/v3/buckets/personal-portfolio-production/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&read_key=0ciO1wztHQkfxVXbFkyFeJXKk2tkCPwBqcNvGVpNi9YiRf48Al&depth=1&props=slug,title,metadata,id'
        );

        const data = await response.json();

        setData(data.objects);
        setImage(data.objects[0].metadata.gallery[0].image.url);
      } catch (err) {
        setError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div data-scroll-section>
      <div className="container container__padding-block">
        <motion.h1
          className="projects-heading"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: 'anticipate',
          }}
        >
          Explore the fine selection of projects
        </motion.h1>

        <div className="project-container">
          <motion.ul
            className="projects"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {isLoading && <p>Loading... Please wait</p>}
            {data &&
              data.length > 0 &&
              [...data].reverse().map((project) => (
                <motion.li
                  key={project.id}
                  variants={item}
                  className="h2 projects__heading"
                >
                  <Link
                    to={project.slug}
                    state={{ id: project.id }}
                    onMouseOver={() =>
                      setImage(project.metadata.gallery[0].image.url)
                    }
                  >
                    {project.title}
                  </Link>
                </motion.li>
              ))}

            {error && <p>Something went wrong... Please try again later</p>}

            {image && (
              <motion.img
                className="projects__image-showcase"
                variants={item}
                src={image}
              />
            )}
          </motion.ul>
        </div>
      </div>
    </div>
  );
}
