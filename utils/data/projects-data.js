import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "AIG Application",
    description:
      "Worked on an internal enterprise application focused on building scalable and high-performance web solutions. Responsible for developing frontend features and managing application databases across multiple systems.",
    tools: [
      "Next.js",
      "Html",
      "React",
      "Tailwind CSS",
      "NodeJs",
      "MongoDB",
      "Mongoose",
      "RESTapi",
    ],
    role: "Frontend Developer & Database Handler",
    code: "Click Here",
    demo1: "Live Preview",
    image: crefin,
  },
  
{
  id: 2,
  name: "Personal Portfolio App",
  description:
    "I developed my personal portfolio app to showcase my skills. This app built with reactjs and tailwind and some portion of the app uses nextjs(a framework of reactjs). I also implemented Emailjs in contact form for a better communication via gmail. This app is fully responsive and covers almost all type of devices. The app is deployed on vercel.com(a cloud based hosting provider ) ",
  tools: [
    "ReactJS",
    "Tailwind CSS",
    "NextJS",
    "EmailJS",
    "VS Code",
    "Canva",
  ],
  role: "Frontend Developer",
  code: "",
  demo2: "Live Preview",
  image: travel,
},
{
  id: 3,
  name: "Telangana State Dental Council Website",
  description:
    "Developed a role-based web application for the Telangana State Dental Council with separate user and admin portals to manage registrations, workflows, and administrative operations.",
  tools: [
    "HTML",
    "CSS",
    "JavaScript",
    "GoogleSheet",
    "Canva",
    "VS Code",
  ],
  code: "",
  role: "Frontend Developer",
  demo3: "Live Preview",
  image: realEstate,
},
// {
//   id: 4,
//   name: "Speech Text Reader App",
//   description:
//     "I developed a speech text reader app using javascript, and a feature to listen your own text. The App basically deals javascript DOM manipulation",
//   tools: ["HTML", "CSS", "Javascript", "cloudinary", "VS Code"],
//   code: "",
//   demo4: "Live Preview",
//   image: ayla,
//   role: "Frontend Developer",
// },
]