import React from "react";
import { Row, Col } from "react-bootstrap";
import TechItem from "./TechItem";

export default function Techs(props) {
  // Python, Java, JavaScript, TypeScript, HTML, CSS, PHP, C#, AngularJS, REST,
  // GitHub, JIRA
  // VSCode, Eclipse, Intellij, Figma
  let technologies = [
    {
      name: "React.js",
      icon: "fab fa-react",
      link: "https://reactjs.org/",
      color: "97, 218, 251, 0.125",
      type: "development",
    },
    {
      name: "Node.js",
      icon: "fab fa-node-js",
      link: "https://nodejs.org/en/",
      color: "67, 181, 129, 0.125",
      type: "development",
    },
    {
      name: "Python",
      icon: "fab fa-python",
      link: "https://www.python.org/",
      color: "255, 209, 102, 0.125",
      type: "development",
    },
    {
      name: "Java",
      icon: "fab fa-java",
      link: "https://www.java.com/en/",
      color: "223, 74, 50, 0.125",
      type: "development",
    },
    {
      name: "TypeScript",
      icon: "fak fa-ts",
      link: "https://www.typescriptlang.org/",
      color: "97, 218, 251, 0.125",
      type: "development",
    },
    {
      name: "HTML5",
      icon: "fab fa-html5",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      color: "239, 108, 0, 0.125",
      type: "development",
    },
    {
      name: "CSS3",
      icon: "fab fa-css3-alt",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
      color: "61, 90, 254, 0.125",
      type: "development",
    },
    {
      name: "PHP",
      icon: "fab fa-php",
      link: "https://www.php.net/",
      color: "97, 218, 251, 0.125",
      type: "development",
    },
    {
      name: "C#",
      icon: "fak fa-csharp",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      color: "239, 108, 0, 0.125",
      type: "development",
    },
    {
      name: "Angular",
      icon: "fab fa-angular",
      link: "https://angular.io/",
      color: "223, 74, 50, 0.125",
      type: "development",
    },
    {
      name: "REST",
      icon: "fas fa-network-wired",
      link: "https://en.wikipedia.org/wiki/Representational_state_transfer",
      color: "61, 90, 254, 0.125",
      type: "development",
    },
    {
      name: "VSCode",
      icon: "fak fa-vs",
      link: "https://code.visualstudio.com/",
      color: "1, 101, 169, 0.125",
      type: "app",
    },
    {
      name: "Intellij",
      icon: "fak fa-intellij-idea",
      link: "https://www.jetbrains.com/idea/",
      color: "223, 74, 50, 0.125",
      type: "app",
    },
    {
      name: "Figma",
      icon: "fab fa-figma",
      link: "https://www.figma.com/",
      color: "242, 78, 30, 0.063",
      type: "app",
    },
    {
      name: "GitHub",
      icon: "fab fa-github",
      link: "https://github.com",
      color: "232, 234, 234, 0.063",
      type: "service",
    },
    {
      name: "JIRA",
      icon: "fab fa-jira",
      link: "https://www.atlassian.com/software/jira",
      color: "223, 74, 50, 0.125",
      type: "service",
    },
  ];

  return (
    <div className="techs">
      <div className="techSection">
        <h1 className="techTitle homeSeparator">Development</h1>
        <Row>
          {technologies.map((tech) => {
            if (tech.type === "development") {
              return <TechItem tech={tech} />;
            }
          })}
        </Row>
      </div>
      <div className="techSection">
        <h1 className="techTitle homeSeparator">Apps</h1>
        <Row>
          {technologies.map((tech) => {
            if (tech.type === "app") {
              return <TechItem tech={tech} />;
            }
          })}
        </Row>
      </div>
      <div className="techSection">
        <h1 className="techTitle homeSeparator">Services</h1>
        <Row>
          {technologies.map((tech) => {
            if (tech.type === "service") {
              return <TechItem tech={tech} />;
            }
          })}
        </Row>
      </div>
    </div>
  );
}
