export const projects = [
  {
    id: 1,
    name: "Virtual BookShelf",
    image: "/images/project1.png", // Place your image in public/images
    technologies: ["React", "Node.js", "MongoDB"],
    description: "The Virtual-BookShelf-Client is a web application that allows users to search for books and manage a digital collection, mimicking the experience of a physical bookshelf.",
    liveLink: "https://bookshelf-faec8.web.app/",
    repoLink: "https://github.com/nitaisutradhar/Virtual-BookShelf-Client",
    challenges: "The main challenge was to design and implement a user-friendly interface that could efficiently display book data in a clear and intuitive way.",
    improvements: "To improve the project, you could add user profiles, allowing people to create accounts and save their favorite books to a personalized virtual bookshelf."
  },
  {
    id: 2,
    name: "Fresh Cart",
    image: "/images/project2.png",
    technologies: ["React.js", "Tailwind CSS", "Firebase"],
    description: "A full-stack web application that helps users track and compare local market prices in real-time. It includes vendor dashboards, admin panel, product comparisons, historical charts, and secure login.",
    liveLink: "https://my-projects-2c6eb.web.app/",
    repoLink: "https://github.com/your-username/project-two",
    challenges: "The main challenge was to design a responsive and intuitive user interface that could effectively handle real-time product data and user interactions like adding items to a cart.",
    improvements: "To improve the project, you could integrate a secure payment gateway and add a user authentication system, allowing for personalized shopping experiences and order history tracking."
  },
  {
    id: 3,
    name: "Plant Care Tracker",
    image: "/images/project3.png",
    technologies: ["JavaScript", "React", "Tailwind CSS", ],
    description: "A responsive and interactive plant management frontend built using React + Vite, styled with Tailwind CSS + DaisyUI, animated with Lottie, and powered by Firebase Auth. Users can add, update, view, and delete plant data, track watering schedules, and get reminders for care.",
    liveLink: "https://my-plant-care-tracker.web.app/",
    repoLink: "https://github.com/nitaisutradhar/Plant-Care-Tracker-Client",
    challenges: "The primary challenge was creating a seamless and engaging user experience that could effectively remind users about their plants' watering and care schedules",
    improvements: "To enhance the project, you could implement push notifications or email reminders and add a feature allowing users to share their plant collections with friends."
  },
];

export type Project = typeof projects[0];