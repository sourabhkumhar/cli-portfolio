const basicDetails = {
  name: "Sourabh Kumhar",
  occupation: "Frontend Web Developer",
  location: "Udaipur, Rajasthan (India)",
  linkedIn: "https://linkedin.com/in/sourabhkumhar",
  github: "https://github.com/sourabhkumhar",
  "contact email": "mr.sourabhkumahr@gmail.com",
  "contact number": "+91 8560842664",
  "short description":
    "I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like Next.js, React.js, Tailwind, Bootstap and MUI. I'm a quick learner and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
};

const projects = [
  {
    name: "Sourabh Kumhar - Portfolio",
    tags: ["Next.js", "FramerMotion", "TailwindCSS"],
    description:
      "This is the current site you are currently visiting. It's my personal portfolio site where I showcase my skills and abilities. I've created this site to demonstrate my expertise and experience in my field, and to provide potential clients or employers with a comprehensive understanding of my capabilities. On this site, you can explore my past work, learn about the skills and tools I possess, and gain a better understanding of how I can add value to your projects or organization. Thank you for taking the time to explore my portfolio!",
    link: "https://sourabhportfolio.vercel.app",
  },
  {
    name: "BeatStore - Marketplace for Beats",
    link: "https://beatstore.in/",
    tags: ["Next.js", "TailwindCSS", "MongoDB"],
    description:
      "I have built Full Stack Website an online beats marketplace using Next.js and Tailwind CSS. This website incorporates various functionalities such as login, signup, reset password, and change account details, which are implemented using the built-in Node.js capabilities in Next.js. The data is stored using MongoDB Atlas, ensuring secure and efficient data management.",
  },
  {
    name: "Evfy Innovations",
    tags: ["Next.js", "Tailwind CSS"],
    description:
      "I crafted an enticing landing page for EV Scooty, your gateway to the future of urban mobility. Our revolutionary electric scooter harmonizes style and sustainability, promising a seamless ride through cityscapes. Experience emission-free commuting with our sleek, eco-friendly design, marrying technology and aesthetics. Powered by NextJS and adorned with the finesse of Tailwind CSS, our landing page reflects the elegance of our electric scooty. Embark on the journey to cleaner, smarter transportation, and be a part of the greener tomorrow we're building with EV Scooty!",
    link: "https://evfy.vercel.app",
    github: "https://github.com/sourabhkumhar/ev-landing-page",
  },
  {
    name: "Editors Chamber",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    description:
      "I created a captivating landing page for Editors Chamber, a service provider, which provide product listing and product shoots, etc services. The visually stunning and user-friendly design showcases their expertise, professionalism, and commitment to helping businesses effectively showcase their products online.",
    link: "https://editorschamber.com",
  },
  {
    name: "Sourabh Kumhar - Resume Site",
    tags: ["React.js", "CSS", "Bootstrap"],
    description:
      "I have created a personal resume website with the purpose of applying for jobs and showcasing my web development skills. The website provides information about my professional experience, education, and skills, along with a portfolio showcasing my past projects and achievements. Utilizing my strong background in web development, I have designed this website to highlight my expertise in creating user-friendly and visually appealing websites. I appreciate your consideration for any job opportunities.",
    link: "https://sourabhkumhar.vercel.app",
    github: "https://github.com/sourabhkumhar/myResume",
  },
  {
    name: "TextUtils",
    link: "https://text-utils-beta.vercel.app/",
    tags: ["React.js", "Bootstrap"],
    description:
      "I have developed a text utility website (For Learning Purpose) that enables users to modify text in various ways. This includes converting text to UPPERCASE, lowercase, or Capitalizing Each Word of a String. The website also offers features to remove extra spaces and reverse the text. While the primary goal of this project is for learning purposes, I have incorporated additional features such as Dynamic Theme and Dark mode for an enhanced user experience.",
    github: "https://github.com/sourabhkumhar/TextUtils",
  },
];

const skills = [
  "Next.js",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "MongoDB",
];

const experiences = [
  {
    designation: "React.js Developer",
    company_name: "Indivue Technologies",
    date: "October 2022 - March 2023",
    points: [
      "Developing and maintaining frontend of web applications using React.js and MUI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing/taking constructive feedback to/from other developers.",
    ],
  },
];

const profileCommands = [
  {
    cmd: "init profile",
    description:
      "Start accessing my profile from the home page. This is an essential command to get started.",
  },
  {
    cmd: "redirect --gui",
    description:
      "If you prefer a Graphical User Interface (GUI) over the Command Line Interface (CLI), use this command to switch to the GUI.",
  },
  {
    cmd: "get basic info",
    description:
      "Retrieve my basic details such as my name, address, occupation, and more.",
  },
  {
    cmd: "list projects",
    description:
      "View a list of links to deployed projects that were created by me.",
  },
  {
    cmd: "list projects --description",
    description: "List deployed projects along with their descriptions.",
  },
  {
    cmd: "retrieve skills",
    description: "Retrieve a comprehensive list of my skills and expertise.",
  },
  {
    cmd: "retrieve experience",
    description:
      "Access information about my past and current work experiences.",
  },
  {
    cmd: "contact --whatsapp",
    description: "Initiate a conversation with me on WhatsApp.",
  },
  {
    cmd: "contact --mail",
    description: "Send an email directly to my email address.",
  },
  {
    cmd: "visit --linkedin",
    description: "Visit my LinkedIn profile for professional networking.",
  },
  {
    cmd: "visit --github",
    description: "Explore my GitHub profile to see my code contributions.",
  },
];

const accessCommand = [
  {
    cmd: "reset",
    description: "Reset profile access and return to the home page.",
  },
  {
    cmd: "minimize",
    description: "Minimize the terminal for a clutter-free view.",
  },
  {
    cmd: "reload",
    description: "Reload the page to refresh content or settings.",
  },
  {
    cmd: "cls",
    description:
      "Clear the command history to start fresh. You can also use < clear >.",
  },
];

export {
  basicDetails,
  projects,
  skills,
  experiences,
  profileCommands,
  accessCommand,
};
