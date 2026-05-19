import ProjectContent from "../components/ProjectContent";
import { cli_projects } from "../components/ProjectConstants";

export default function CLI() {
  return (
    <>
      <div className="page-content cli-page-content">
        <h3 className="page-title">Command Line Projects</h3>
        <p className="intro-paragraph">
          {" "}
          I spend a large portion of my time during the school year working as a
          teaching assistant for UVA's Introduction to Python course and Data
          Structures and Algorithms II course. There have been a few tasks that
          take lots of our time as TAs that I thought could be optimized. To
          solve for this, I have created a couple of scripts that run from the
          command line to improve the experience of our TAs and Students. They
          can be found below.{" "}
        </p>
        <ProjectContent projects={cli_projects} />
      </div>
    </>
  );
}
