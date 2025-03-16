import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Swalahu",
  lastName: "CV",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/salahu01",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/swalahu-cv-a98196230",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/hwak01",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:cvsalahu12@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} | Architecting Scalable & AI-Powered Solutions`,
  description: `Empowering businesses with cutting-edge software architecture, AI-driven automation, and cross-platform solutions.`,
  headline: <>Building Intelligent Systems & Scalable Architectures</>,
  subline: (
    <>
      Hi, I'm Muhammad Salahudeen— a software architect and full-stack developer with over 5 years of experience.
      <br /> I specialize in crafting seamless cross-platform applications, AI-powered automation, and future-proof scalable architectures.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Muhammad Salahudeen, a software architect and AI enthusiast with a passion for building
        high-performance applications. My expertise spans cross-platform development, AI-driven automation,
        and crafting scalable solutions that turn ideas into reality.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Fegno Technologies",
        timeframe: "2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Led cross-functional development teams, driving collaboration and innovation while ensuring the timely delivery
            of high-quality applications that met and exceeded client expectations.
          </>,
          <>
            Successfully released and maintained multiple Flutter applications, managing the entire lifecycle from concept to
            deployment, resulting in consistently high user engagement and satisfaction.
          </>,
          <>
            Architected and optimized CI/CD pipelines, revolutionizing automation for build, test, and deployment processes,
            which led to faster release cycles and minimized manual errors.
          </>,
          <>
            Seamlessly integrated a range of third-party services and APIs, expanding application capabilities and delivering
            enhanced user experiences through robust external connections.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/fegno/discipl/cover.jpg",
            alt: "Descipl Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/fegno/easy_care/cover.jpg",
            alt: "EasyCare Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/fegno/fims/cover.jpg",
            alt: "EasyCare Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/fegno/shopprix/cover.jpg",
            alt: "EasyCare Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/fegno/celestial/cover.png",
            alt: "Celestial Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/fegno/tezora/cover.png",
            alt: "EasyCare Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SciWiz Innovations",
        timeframe: "2021 - 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Executed flawless pixel-perfect UI conversions from intricate design mockups to fully functional Flutter
            applications, achieving superior visual fidelity and an exceptional user experience.
          </>,
          <>
            Engineered a comprehensive suite of testing strategies, including unit, integration, and widget testing, to ensure
            reliable, high-quality code and deliver robust, bug-free applications.
          </>,
          <>
            Mentored and guided junior developers, fostering a collaborative learning environment that accelerated skill
            development and improved overall team performance..
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Manipal University Jaipur",
        description: <>
          Earned a strong foundation in software engineering, focusing on
          full-stack development, system architecture, and modern programming paradigms.
        </>,
      },
      {
        name: "Ma'din Higher Secondary School",
        description: <>
          Completed higher secondary education with a specialization in software engineering,
          developing a passion for coding, problem-solving, and technology-driven innovation.
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Flutter Developer",
        description: (
          <>
            Experienced in building high-performance, cross-platform applications
            using Flutter. Proficient in crafting beautiful UIs, optimizing app
            performance, and integrating seamless animations.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Flutter App Showcase",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Flutter UI Design",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Figma",
        description: (
          <>
            Skilled in designing intuitive user interfaces with Figma.
            Expertise in creating prototypes, wireframes, and design systems for
            efficient development workflows.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Figma Design Example",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Figma Prototype",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>
            Proficient in developing scalable, SEO-friendly web applications
            using Next.js. Experienced in server-side rendering, API integrations,
            and optimizing performance for fast-loading websites.
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Next.js Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },

};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
