import ProjectContent from "../components/ProjectContent";
import { in_the_works_projects } from "../components/ProjectConstants";

export default function More() {
  return (
    <>
      <div className="page-content progress-page-content">
        <h3 className="page-title">Ongoing Projects</h3>
        <p className="intro-paragraph">
          {" "}
          On this page, I want to display some of my undertakings that don't fit
          as neatly in the other categories I have, as well as show the projects
          that I am currently working on.
        </p>
        <ProjectContent projects={in_the_works_projects} />
      </div>
    </>
  );
}
