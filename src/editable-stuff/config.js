// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Brisa",
  middleName: "",
  lastName: "Maneechotesuwan",
  message: "Multimodal/Vision-Language Models. Applied Research in Generative AI. Scalability & Robustness",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Brisabrin",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/",
    },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/brisa-manee/",
    },
    {
      image: "fa-twitter",
      url: "https://x.com/BrisaManee",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpg"),
  imageSize: 375,
  message:
    "Hello! I'm Brisa Maneechotesuwan a 3rd year student majoring in CS @Georgia Tech. I’m currently researching on robust finetuning methods for generative vision-language models towards out-of-distribution (OOD) shifts in RIPL Lab under Dr. Kira Zsolt",
  resume: "https://drive.google.com/file/d/1nskmQcEAG7G1xYf2gdlBZtg9wgnDAGje/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]


// SPOTLIGHT PROJECTS SECTION
const spotlightProjects = {
  show: true,
  heading: "Spotlight Projects",
  projects: [
    {
      title: " PLICA - Prompt Learning In Cross Attention masking (coming soon)",
      description: "Inspired by the research of Zhuowei Chen et al. in 'DreamIdentity', I am exploring innovative approaches to enhance facial identity preservation in text-guided image manipulation.\n Researching and experimenting with prompt learning for dynamic cross-attention masking in Stable Diffusion to preserve facial features and unique objects during text-guided image editing",
      image: require("../assets/img/plica.png"), // Replace with your image path,
      link: ""
    },
    {
      title: "CASCADE - Context-Aware Sarcasm Detection Model",
      link: "https://github.com/Brisabrin/cascade-sarcasm-detector",
      description: "Designed and developed a novel hybrid NLP model using a Dual-Channel BERT approach incorporating BERT, CNN and LDA topic modeling to enhance domain-specific sarcasm detection through static and contextual embedding fusion\nImplemented the custom model and applied layer-wise fine-tuning on Twitter and Reddit datasets using PyTorch, Hugging Face, and NLTK, achieving 50.75% performance—comparable to state-of-the-art—while reducing transfer learning time",
      image: require("../assets/img/cascade.png"), // Replace with your image path
    },
    // Add more projects as needed
  ],
};


const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "Brisabrin", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["CourseScheduler", "FallDetection"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",

  keySkills: [
    // Key Areas
    { name: "Multimodal Learning", value: 90 },
    { name: "Computer Vision", value: 85 },
    { name: "LLMs", value: 80 },
    { name: "Supervised Learning", value: 90 },
    { name: "Optimization Techniques", value: 85 },
    { name: "Statistical Analysis & Data Analytics", value: 75 },
    { name: "System Design", value: 80 },
    { name: "API Development", value: 75 },
    { name: "MLOps", value: 80 },
    { name: "Parallel Computing", value: 70 },
    { name: "CI/CD", value: 80 },
  ],
  languages: [
    // Languages
    { name: "Python", value: 95 },
    { name: "Java", value: 85 },
    { name: "C/C++", value: 80 },
    {name: "JavaScript", value: 85},
    { name: "SQL", value: 75 },
    { name: "Bash/Shell", value: 70 },
    { name: "Linux", value: 85 },
    { name: "Scala", value: 65 },
  ],
  libraries: [
    // Libraries/Frameworks
    { name: "PyTorch", value: 90 },
    { name: "TensorFlow", value: 85 },
    { name: "Pandas", value: 90 },
    { name: "NumPy", value: 85 },
    { name: "Scikit-learn", value: 80 },
    { name: "Git", value: 75 },
    { name: "Docker", value: 80 },
    { name: "AWS", value: 75 },
    { name: "Apache Spark", value: 70 },
    { name: "Node.js", value: 65 },
    { name: "React", value: 60 },
    { name: "Flask", value: 75 },
    { name: "FastAPI", value: 70 },
  ], 
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking internship opportunities in AI research, Machine Learning Engineering, or Software Engineering with a focus on AI. If you know of any positions available, have any questions, or just want to connect, please feel free to email me at",
  email: "bmaneech3@gatech.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'AI Undergraduate Researcher, Supervised by Dr. Kira Zsolt',// Here Add Company Name
      companylogo: require('../assets/img/ripl-sm.png'),
      company : "Robotics Perception and Learning(RIPL) lab",
      date: 'April 2024 - Present',
      description: "Research on robust vision-language representation learning towards diverse distribution shifts"
    },
    {
      role: 'Software Engineer Intern, Backend',
      company: "Agoda Services Co Ltd" ,
      companylogo: require('../assets/img/agoda.jpg'),
      date: 'May 2023 – Aug 2023',
      description: "FinTech team : Optimized CI/CD pipelines and developed logging systems to enhance software testing and operational efficiency."
    },
    {
      role: 'Deep Learning Undergraduate Researcher',
      company: "Emory Winship Cancer Institute" ,
      companylogo: require('../assets/img/gt-emory.png'),
      date: 'Jan 2023 - May 2023',
      description: "Built deep learning image models to improve diagnosis and automation in digital pathology"
    },
    {
      role: 'Machine Learning Research Assistant',
      company: "Vidyasirimedhi Institute of Science and Technology (VISTEC) Lab" ,
      companylogo: require('../assets/img/vistec.jpg'),
      date: 'Jul 2021 - Aug 2022',
      description: "Scalable machine learning algorithms for wearable fall detection systems"
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences,spotlightProjects };
