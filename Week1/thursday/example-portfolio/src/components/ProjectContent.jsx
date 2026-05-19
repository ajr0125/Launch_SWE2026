import PropTypes from "prop-types";
import github from "../assets/icons/github.png";
import web from "../assets/icons/website.png";
import "../styles/projects.css";

function ProjectContent({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="heading">
            <h3 className="project-name">{project.name}</h3>
          </div>
          <div className="content">
            <img
              src={project.display_image}
              className="project-image"
              alt={project.name}
            ></img>
            <div className="project-info">
              <p className="project-description">{project.description}</p>
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link repo-link"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={github}
                    className="image github-image"
                    style={{ margin: "0" }}
                  ></img>
                  <strong style={{ marginLeft: "10px" }}>View the code</strong>{" "}
                </div>
              </a>
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src={web}
                      className="image web-image"
                      style={{ margin: "0" }}
                    ></img>
                    <strong style={{ marginLeft: "10px" }}>
                      See the site live
                    </strong>{" "}
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

ProjectContent.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      display_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      github_link: PropTypes.string.isRequired,
      live_link: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectContent;
