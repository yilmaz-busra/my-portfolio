import React from "react";

function Projectss() {
  const projects = [
    {
      title: "Movie Search App",
      description:
        "This Movie App project is a simple movie application developed using React. The application fetches movie data from the Open Movie Database (OMDb) API and provides users with functionalities such as searching for movies, adding them to favorites, and accessing movie details. This project is written in React and utilizes the , useEffect and useSatate hooks, react icons and react-router-dom packages.",
      url: "https://filmsearchapp.netlify.app/",
      imageUrl: "movie-S-project.png",
    },
    {
      title: "TrendyStore-App",
      description:
        "This e-commerce application is built using Next.js and React, with a sleek and modern interface designed with Tailwind CSS. It leverages the Context API to manage state dynamically and enhance user experience. The app's functionality and data flow are powered by a fake API, simulating real-world interactions.",
      url: "https://store-next-liart.vercel.app",
      imageUrl: "trendy-store.png",
    },
    {
      title: " X-Clone",
      description:
        "In this project, I created a Twitter clone using Next.js, Tailwind CSS, and Firebase. I used Next.js version 12, Tailwind CSS version 3, and Firebase version 9 in the project.",
      url: "https://x-next-beta.vercel.app",
      imageUrl: "x-clone.png",
    },
    {
      title: "eStoreApp",
      description:
        "It is a basic-level e-shop application made with React. eStoreApp final project for the Patika.dev React Bootcamp. The project is a simple e-commerce application that allows users to add products to their cart, remove them, and view the total price of the items in the cart.",
      url: "https://github.com/yilmaz-busra/eStoreApp",
      imageUrl: "eStore.png",
    },
  ];

  return (
    <div className="px-3 py-12 mx-auto rounded-xl shadow-xl overflow-hidden md:max-w-2xl bg-white">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="mb-6">Here are some of the projects I have worked on:</p>
      <div className="projects-container ">
        {projects.map((project, index) => (
          <a
            href={project.url}
            key={index}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projectss;
