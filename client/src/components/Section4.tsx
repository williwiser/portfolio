import { useEffect, useState } from "react";
import "../sn4.css";
import Project from "./Project.tsx";

function Section4() {
  interface Project {
    title: string;
    tags: string;
    description: string;
    link: string;
    github: string;
    thumbnail: string;
  }
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/getProjects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjectList(data);
      });
  });

  return (
    <>
      <section id="sn-4">
        <div className="wrapper">
          <h1 className="sn-title lt">My Work</h1>
          <ul>
            {projectList.map((project: Project) => {
              const tagsList = project.tags.split(", ");
              return (
                <li>
                  <Project
                    title={project.title}
                    tags={tagsList}
                    description={project.description}
                    link={project.link}
                    github="#"
                    thumbnail={project.thumbnail}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Section4;
