import { useLocation, useParams, Navigate } from 'react-router-dom';

export default function Project() {
  const { projectId } = useParams();
  const location = useLocation();
  const { projectData } = location.state || {};

  if (!projectData || projectData.id !== projectId) {
    return <Navigate to='/work' />;
  }

  return (
    <div data-scroll-section>
      <div className='container container__padding-block'>
        <header className='p__header'>
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
        </header>

        <div className='p-content'>
          <div className='p-content__description'>
            <p>{projectData.description}</p>

            <div className='p-content__description-info'>
              <p className='p-content__description-info__job-role'>
                <span className='font-weight--semi-bold'>Job Role:</span>{' '}
                {projectData.jobRole}
              </p>
              <p className='p-content__description-info__language'>
                <span className='font-weight--semi-bold'>Language:</span>{' '}
                {projectData.language}
              </p>
              <p className='p-content__description-info__year'>
                <span className='font-weight--semi-bold'>Year:</span>{' '}
                {projectData.year}
              </p>
            </div>
          </div>

          <div className='p-content__technologies'>
            {projectData.technologies.map((technology, index) => (
              <p key={index} className='p-content__technologies-tech'>
                {technology}
              </p>
            ))}
          </div>
        </div>

        <div className='p-showcase'>
          {projectData.images &&
            projectData.images.map((image, index) => (
              <img
                className='p-showcase__img'
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
