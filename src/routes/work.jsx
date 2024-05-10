import { Link } from 'react-router-dom';

export default function Work() {
  const projects = [
    {
      id: 'neotek-systems',
      heading: 'Neotek Systems',
      link: 'https://neotek.mk',
      description: `Neotek Systems, a company based in Strumica specializing in powder coatings. The website's aim was to enhance the company's online visibility and attract more customers to their services.`,
      year: '2024',
      language: 'Macedonian / Albanian',
      jobRole: 'Web Developer / UX/UI Designer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SwiperJS'],
      images: [
        '/src/assets/projects/project-neotek-1.png',
        '/src/assets/projects/project-neotek-2.png',
        '/src/assets/projects/project-neotek-3.png',
        '/src/assets/projects/project-neotek-4.png',
      ],
    },
    {
      id: 'youthcall',
      heading: 'YouthCall',
      link: 'https://youthcall.mk',
      description: `YouthCall aims to assist young individuals in discovering suitable projects, courses, activities, or volunteering opportunities. The initiative involved creating a platform and hosting two workshops that actively engaged young participants in designing and testing the platform. (Below is displayed the new, improved design)`,
      year: '2023',
      language: 'Macedonian',
      jobRole: 'Web Developer / UX/UI Designer',
      technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB', 'Figma'],
      images: [
        '/src/assets/projects/project-youthcall-1.png',
        '/src/assets/projects/project-youthcall-2.png',
        '/src/assets/projects/project-youthcall-3.png',
        '/src/assets/projects/project-youthcall-4.png',
        '/src/assets/projects/project-youthcall-5.png',
      ],
    },
    {
      id: 'personal-portfolio',
      heading: 'Personal Portfolio',
      description: `Personal portfolio for Dimitar Kalapocev (me) developed to showcase my skills in design & development. On this portfolio you can find information about me, my projects, my location (and some info about the location) and availability status. While this portfolio is still a work in progress, feel free to interrupt me for your project!`,
      year: '2024',
      language: 'English',
      jobRole: 'Web Developer / UX/UI Designer',
      technologies: ['React', 'Figma'],
      images: [
        '/src/assets/projects/project-personal-portfolio-1.png',
        '/src/assets/projects/project-personal-portfolio-2.png',
        '/src/assets/projects/project-personal-portfolio-3.png',
      ],
    },
    {
      id: 'strax-designs',
      heading: 'Strax Designs',
      description: `Strax Designs, co-founded by me, aimed to assist businesses in their digital shift. We leveraged our web development expertise to help businesses bring their products/services online, making them accessible to a wider audience.`,
      year: '2023',
      language: 'English',
      jobRole: 'Web Developer / UX/UI Designer / Co-Founder',
      technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'MongoDB', 'Figma'],
      images: [
        '/src/assets/projects/project-strax-designs-1.png',
        '/src/assets/projects/project-strax-designs-2.png',
        '/src/assets/projects/project-strax-designs-3.png',
        '/src/assets/projects/project-strax-designs-4.png',
        '/src/assets/projects/project-strax-designs-5.png',
        '/src/assets/projects/project-strax-designs-6.png',
        '/src/assets/projects/project-strax-designs-7.png',
        '/src/assets/projects/project-strax-designs-8.png',
      ],
    },
    {
      id: 'forkify',
      heading: 'Forkify',
      link: 'https://dk-forkify.netlify.app/',
      description: `Forkify, project from a JavaScript course by Jonas Schmedtmann, puts our learned skills to the test. It covers OOP JavaScript, asynchronous JavaScript, APIs, and various practical JavaScript methods. The app offers food recipes, allowing users to search, bookmark favorites, and add new recipes.`,
      year: '2022',
      language: 'English',
      jobRole: 'Web Developer',
      technologies: ['JavaScript'],
      images: [
        '/src/assets/projects/project-forkify-1.png',
        '/src/assets/projects/project-forkify-2.png',
        '/src/assets/projects/project-forkify-3.png',
        '/src/assets/projects/project-forkify-4.png',
        '/src/assets/projects/project-forkify-5.png',
      ],
    },
    {
      id: 'personal-web-app',
      heading: 'Personal Web App',
      description: `Personal Web App designed with modern simplistic UI aiming to help you with personal notes, reminders, money management and tracking your personal goals. The design includes login & register system, as well as customization for the color palette and currency. Disclaimer: this project is currently only design.`,
      year: '2024',
      language: 'English',
      jobRole: 'UX/UI Designer',
      technologies: ['Figma'],
      images: [
        '/src/assets/projects/project-personal-web-app-1.png',
        '/src/assets/projects/project-personal-web-app-2.png',
        '/src/assets/projects/project-personal-web-app-3.png',
        '/src/assets/projects/project-personal-web-app-4.png',
      ],
    },
  ];

  return (
    <>
      <div className='container container__padding-block'>
        <h1 className='projects-heading'>
          Explore the fine selection of projects
        </h1>

        <ul className='projects'>
          {projects.map((project) => (
            <li key={project.id} className='h2 projects__heading'>
              <Link to={`/work/${project.id}`} state={{ projectData: project }}>
                {project.heading}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
