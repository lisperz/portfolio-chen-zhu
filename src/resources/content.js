import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Evan",
  lastName: "Z.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "",
  avatar: "/images/professional-headshot.jpg",
  email: "chenzhu4@illinois.edu",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese", "Spanish", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I write about machine learning, data science, and share insights on building scalable
      AI systems and data pipelines.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lisperz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chen-zhu-lisper",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/l1sperrr/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a Software Engineer`,
  headline: <>Building scalable systems and delivering impactful solutions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">AI Video Processing System</strong></>,
    href: "/work/ai-video-text-inpainting",
  },
  subline: (
    <>
      I&apos;m Evan, a Software Engineer with 4 years+ experience in full-stack development, distributed systems, and cloud infrastructure.
      <br /> Currently pursuing MS in Computer Information Science at UIUC.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, Software Engineer specializing in full-stack development and distributed systems`,
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
        Software engineer with 4 years+ experience in building and optimizing scalable web services and distributed systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Phraze",
        timeframe: "December 2025 - Present",
        role: "Software Engineer",
        location: "Champaign, IL, USA",
        achievements: [],
        images: [],
      },
      {
        company: "UIUC · DREAM Lab",
        timeframe: "December 2025 - Present",
        role: "Research Software Engineer",
        location: "Urbana, IL, USA",
        achievements: [],
        images: [],
      },
      {
        company: "MetaFrazo",
        timeframe: "August 2025 - December 2025",
        role: "Machine Learning Engineer - Full Stack Development",
        location: "Bloomington, IL, USA",
        url: "https://www.metafrazo.ai/",
        achievements: [],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/MetaFrazo.jpg",
            alt: "MetaFrazo AI Video Processing",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Syngenta",
        timeframe: "May 2025 - August 2025",
        role: "Applied Data Science Intern",
        location: "Durham, NC, USA",
        url: "https://www.syngenta.com/",
        achievements: [],
        images: [
          {
            src: "/images/Syngenta.jpg",
            alt: "Syngenta Genomic Data Pipeline",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "China Telecom Co., Ltd.",
        timeframe: "December 2023 - February 2024",
        role: "Software Engineer Intern",
        location: "Jiangxi, China",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Illinois at Urbana-Champaign",
        timeframe: "September 2024",
        location: "Urbana, USA",
        description: <>Master of Science in Computer Information Science (GPA: 3.92/4.0)</>,
      },
      {
        name: "Chongqing University of Posts and Telecommunications",
        timeframe: "September 2020",
        location: "Chongqing, China",
        description: <>Bachelor of Engineering in Information Security (GPA: 3.47/4.0)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Proficient in Java, Python, Golang, C/C++, JavaScript, CUDA, and Shell scripting for diverse application development and system programming.</>,
        images: [],
      },
      {
        title: "Machine Learning & Data Systems",
        description: <>Expert in PyTorch, TensorFlow, Transfer Learning, FastAPI, SageMaker for building and deploying ML models and data pipelines.</>,
        images: [],
      },
      {
        title: "Cloud & Infrastructure",
        description: <>Experienced with AWS (S3, Redshift), Docker, Kubernetes, Git, CI/CD, and Nginx for scalable cloud-native applications.</>,
        images: [],
      },
      {
        title: "Databases & Frameworks", 
        description: <>Skilled in MySQL, PostgreSQL, Redis, MongoDB, Kafka, Spring Boot, MyBatis, and RESTful APIs for full-stack development.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  display: false, // Disable blog section
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Machine Learning and Software Engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/UIUC.jpg",
      alt: "UIUC Campus",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/DukeChapel.jpg",
      alt: "Duke Chapel",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Ischool1.jpg",
      alt: "Information School",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Music2.jpg",
      alt: "Music 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/DukeChapel2.jpg",
      alt: "Duke Chapel 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/UIUC2.jpg",
      alt: "UIUC Campus 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Ischool2.jpg",
      alt: "Information School 2",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Music.jpg",
      alt: "Music",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo2.jpg",
      alt: "Photo 2",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/photo3.jpg",
      alt: "Photo 3",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/EnoRiverPark.jpg",
      alt: "Eno River Park",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
