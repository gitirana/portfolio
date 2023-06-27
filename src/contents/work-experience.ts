interface RolesProps {
  role: string
  time: string
  technologies: string[]
  jobDescription: string[]
}

interface WorkExperienceProps {
  company: string
  roles: RolesProps[]
}

export const workExperience: WorkExperienceProps[] = [
  {
    company: 'Talent Academy',
    roles: [
      {
        role: 'UI/UX Design Intern',
        time: 'apr 2022 - now',
        technologies: ['Figma', 'Notion'],
        jobDescription: [
          'Development of efficient layouts and navigation flows for applications and websites, taking into consideration the best UI/UX practices.',
          'Creation of wireframes and interactive prototypes to validate concepts and functionalities before development.',
          'Design of attractive and responsive user interfaces, using Figma to create reusable components and ensure visual consistency throughout the project.',
          'Collaboration with developers to ensure the correct implementation of the design, providing detailed specifications and support during the development process.',
        ],
      },
      {
        role: 'Full Stack Development Intern',
        time: 'jan 2021 - apr 2022',
        technologies: [
          'Angular',
          'Node.JS',
          'MySQL',
          'Typescript',
          'Jira',
          'Git',
        ],
        jobDescription: [
          'Development and maintenance of web applications using Angular, Node, and Typescript, ensuring the delivery of high-quality and high-performance products.',
          'Implementation of best version control and collaboration practices, using Git for change tracking and working together with the development team.',
          'Implementation and optimization of MySQL database queries to ensure application performance and efficiency.',
          'Development of attractive and responsive user interfaces, using HTML and CSS to provide a pleasant and intuitive user experience.',
        ],
      },
    ],
  },
  {
    company: 'Locus Custom Software',
    roles: [
      {
        role: 'Full Stack Development Intern',
        time: 'sep 2020 - nov 2020',
        technologies: [
          'React',
          'Django',
          'React Native',
          'Docker',
          'Jira',
          'Git',
        ],
        jobDescription: [
          'Development of web applications using React as the front-end framework and Python with Django for business logic and back-end.',
          'Utilization of Git for version control, facilitating team collaboration and code change tracking.',
          'Utilization of Docker for creating development environments and deploying applications, ensuring system portability and scalability.',
          'Creation and maintenance of user interfaces using HTML, CSS, and React-compatible libraries/frameworks, ensuring proper and responsive user experience.',
          'Troubleshooting and debugging code, conducting tests, and identifying potential performance and software quality improvements.',
        ],
      },
    ],
  },
]
