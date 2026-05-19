import ProjectContent from "../components/ProjectContent";
import { web_projects } from "../components/ProjectConstants";

export default function Web() {
  return (
    <>
      <div className="page-content web-page-content">
        <h3 className="page-title">Web Projects</h3>
        <p className="intro-paragraph">
          {" "}
          My first experience with web development came in January of 2023, when
          I took a class called Advanced Software Development where we spent the
          semester building a website, which is hosted live as the second
          project on this page. Since then, I have experimented with mulitple
          framworks (Django, React, Rails), hosting solutions (Heroku, AWS,
          Render), and languages (JS, TS, Python, Ruby). Below are a couple
          examples of those experiments.
        </p>
        <ProjectContent projects={web_projects} />
      </div>
    </>
  );
}
