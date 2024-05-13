import "../project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  tags: string[];
  description: string;
  link: string;
  github: string;
  thumbnail: string;
}

function Project(props: Props) {
  return (
    <>
      <div className="project">
        <img src={props.thumbnail} alt="project"></img>
        <div>
          <div className="hd">
            <h1>{props.title}</h1>
            <a href={props.github} className="git-link">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <ul>
            {props.tags.map((tag) => {
              return <li>{tag.toUpperCase()}</li>;
            })}
          </ul>
          <p className="des">{props.description}</p>
          <a href={props.link} className="demo-btn" target="_blank">
            <FontAwesomeIcon icon={faExternalLink} /> Live Demo
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;
