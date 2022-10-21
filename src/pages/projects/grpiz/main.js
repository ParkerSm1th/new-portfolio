import React, { useEffect } from "react";

export function Groupiz() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>Grupiz</h1>
        <p className="titleLinks">
          <a
            href="https://github.com/parkersm1th/GroupizFront"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            Github Repo
          </a>
          &#x2022;
          <a
            href="https://grpiz.io"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            View Site
          </a>
        </p>
      </div>
      <div className="pageContent">
        <h2>
          Groupiz was a project that I worked on throughout the Covid-19
          pandemic, in class we were working together on a of quizzes as they
          were all group based and there was no easy way to do this. So I
          created Groupiz, an easy way to work together with your groupmates.
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/Grpiz-1.png"
        />
        <h2>
          I used{" "}
          <a
            href="https://ejs.net"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            EJS
          </a>{" "}
          to create this project and it made for a very nice looking Front End.
          I also used{" "}
          <a
            href="https://mongodb.com"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            MongoDB
          </a>{" "}
          for the data storage, this was not my first time using Mongo. However,
          it really taught me a lot more about it and I feel that it helped me
          master it.
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/Grpiz-2.png"
        />
        <h2>
          When working on this project I was also working with very limited
          resources, so I resorted to hosting it on a spare VPS I had which
          allowed me to serve the pages using an{" "}
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            ExpressJS
          </a>{" "}
          web server:
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/Grpiz-3.png"
        />
        <h2>
          While this project was very useful in these group projects and during
          the pandemic, I feel like it did an amazing job of teaching me about
          all of these new technologies and how to use them.
        </h2>
      </div>
    </div>
  );
}
