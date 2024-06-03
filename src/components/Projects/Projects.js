import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quiz Project"
              description="The Capstone project aimed to create a user-friendly and engaging front-end
                           interface for a quiz application. The primary challenges included designing an
                           using the React.js library that allows users to participate in quizzes or
                           trivia games. It typically includes a user interface where questions are
                           presented, answer choices are provided, and a scoring mechanism to
                           keep track of the user's performance.."
              ghLink="https://github.com/kushkumarkashyap/FrontendQuizProject"
              demoLink="https://quizappfrontend.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube Subscribers"
              description="This project serves as the backend for a YouTube-like platform, providing APIs for managing channels like adding, deleting, updating, subscribers, and subscriptions of a channe.Technologies used Node.js , Express.js , EJS ,Mongoose , MongoDB , HTML, CSS Tailwind CSS , javascript."
              ghLink="https://github.com/kushkumarkashyap/backend-project"
              demoLink="https://youtube-backend-anurag.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Full Stack Entertainment Application"
              description="The Movies Entertainment App is a full-stack movie and TV series entertainment application. The aim of this project was to practice full-stack development skills and to learn new interesting technologies. With this app, users can easily find a movie or TV series, watch a trailer, leave a comment, and add it to their bookmarks. They can also change the theme of the app."
              ghLink="https://github.com/kushkumarkashyap/full-stack-project-Entertainment-app"
              demoLink="https://movies-entertainment-app-three-triump.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Netflix Login Page"
              description=" The Netflix login page includes fields for entering an email or phone number and password, accompanied by a Sign In button. Users can also find links to recover forgotten passwords, start a new account, and access help resources. The page often features promotional content, such as a background image or video highlighting popular shows and movies, and emphasizes the ease of signing in across multiple devices."
              ghLink="https://github.com/kushkumarkashyap/Netflix-login-Page"
              demoLink="http://127.0.0.1:5500/dist/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Javascript"
              description="This Project is Related to basic of Computer Of programming It's Include Different types of javascript questions which was related to javascript helpful for growing our confidence and skills i am also attached a github link as well as youtube video  ."
              ghLink="https://gist.github.com/kushkumarkashyap/997a175d333ebbe27a2ca3db7432c1f9"
            // demoLink="https://www.loom.com/share/16b75c896a8246be97df614965134d94?sid=8af4e967-2424-4118-b381-438e2d0dc773" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Data Structure And Algorithm"
              description=" This project is Related to Data Structure and Algorithm Which was Consider a different diffucult types of questions which was helpful for our confidence and skills i attached a github link as well as youtube video link in which i explain all the questions ."
              ghLink="https://gist.github.com/kushkumarkashyap/92f1b3793d545229250588285ba2bcce"
            // demoLink="https://www.youtube.com/watch?v=Z32U5m74mFY"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
