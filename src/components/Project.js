import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";

export default function Project () {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      decription,
      projectType,
      link,
      tags
    }`).then((data) => setProjectData(data))
    .catch(console.error)
  }, []);


  return(
    <main className="bg-purple-500 min-h-screen p-12">
      <section className="conatainer mx-auto">
        <h1 className="text-5xl flex justify-center cursive mb-2">My Projects</h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">Welcome to my Projects Page</h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData && projectData.map((project, index) => (
          <article className="relative rounded-lg shadow-xl bg-black p-16">
            <h3 className="text-purple-800 text-3xl font-bold mb-2 hover:text-gray-800">
              <a
              href={project.link}
              alt={project.title}
              target="_blank"
              rel="noopener noreferrer"
              className="cursive"
              >{project.title}</a>
            </h3>
            <div className="text-white text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished On</strong>:{" "}{new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{" "}{project.place}
              </span>
              <span>
                <strong className="font-bold">Type</strong>:{" "}
                {project.projectType}
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">{project.description}</p>
              <a href={project.link} target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-bold hover:underline hover: text-purple-800">
                View The Project{" "}
                <span role="img" aria-label="right-pointer">
                  👉
                </span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}
