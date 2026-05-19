import spotifySocialImage from "../assets/project_previews/spotify_socal.png";
import hazingReportImage from "../assets/project_previews/hazing_reporter.png";
import dataParserImage from "../assets/project_previews/oh_data_parser.png";
import searingChartGeneratorImage from "../assets/project_previews/seating_chart_generator.png";
import compilerImage from "../assets/project_previews/compiler_image.png";
import toyHttpImage from "../assets/project_previews/toy_http.png";

export const web_projects = [
  {
    id: "spotify_social",
    name: "Spotify Social",
    description:
      "This project was created to practice using React, APIs, Express.js, and Firebase. After a user logs in to Spotify, they can view information about their listening habits, as well as message other users.",
    github_link: "https://github.com/jamesdaniel3/spotify-social",
    display_image: spotifySocialImage,
  },
  {
    id: "hazing_reporter",
    name: "UVA Hazing Reporter",
    description:
      "This project was my first experience with web-development, where I learned to use Django, Heroku, and PostgreSQl, among other things. I built it with a team for my Advanced Software Development course and it is a take on a hazing whistleblower system for the University of Virginia.",
    github_link: "https://github.com/jamesdaniel3/hazing-reporter-simulator",
    live_link: "https://hazing-reporter-simulator-4777047cf362.herokuapp.com/",
    display_image: hazingReportImage,
  },
];

export const cli_projects = [
  {
    id: "oh_data_parser",
    name: "Office Hours Data Parser",
    description:
      "This project was created to help our staff of TA's more effectively help our students. The website that we run office hours through keeps track of all kinds of data surrounding interactions, but it is all simply stored in files (CSV and JSON) that are thousands of lines long with no way to easily digest it. I built this project to give us access to all kinds of useful information quickly and in a readable format. I'm especially proud of the documentation on this project!",
    github_link: "https://github.com/jamesdaniel3/MDH-Reader",
    display_image: dataParserImage,
  },
  {
    id: "seating_chart_generator",
    name: "Seating Chart Generator",
    description:
      "This project was created to fufill our need for fresh seating charts every week in labs. It was built to be able to run with many of the different room configurations in the Computer Science department and can easily have more added. I have included test data in this Github Repository, so you should be able to test out the project yourself!",
    github_link: "https://github.com/jamesdaniel3/seating-chart-generator",
    display_image: searingChartGeneratorImage,
  },
];

export const in_the_works_projects = [
  {
    id: "compiler",
    name: "SIP Compiler",
    description:
      "Last semester, as a part of my favorite programming class of all time, myself and a partner built a compiler for a small language called Simple Imperative Langauge. We worked through all the stages of modern compilers, from creating a grammar to adding optimization passes, and finished with a compiler that can fully support the langauge that we were targeting. We started off with a working compiler for a much smaller language called Tiny Imperative Language and added the following: booleans, boolean operators, >, >=, <=, arrays, for loops, ternary operators, and the modulo operator. ",
    github_link: "https://github.com/jamesdaniel3/sipc-daniel_opperman",
    display_image: compilerImage,
  },
  {
    id: "toy_http",
    name: "Toy HTTP",
    description:
      "The newest project I am working on is rolling my own HTTP server using C. I am working through this in an effort to gain a better understanding of how exactly HTTP protocol works and how servers work and writing the project in C to gain more practive with the langauge and to work at a more granular level than other languages may provide. This project has already taught me a ton about how servers and HTTP works and forced me to think through these concepts in ways that I had not previously. ",
    github_link: "https://github.com/jamesdaniel3/toy-http",
    display_image: toyHttpImage,
  },
];
