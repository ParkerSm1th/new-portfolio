import React, { useEffect } from "react";

export function WZRanks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>WZ Ranks</h1>
        <p className="titleLinks">
          <a
            href="https://github.com/WarzoneRanks"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            Github Repo
          </a>
        </p>
      </div>
      <div className="pageContent">
        <h2>
          Warzone Ranks is one of the biggest projects I've ever worked on. It
          featured some new technologies that I had used in the past but had
          never really mastered.
        </h2>
        <h2>
          For example I mastered{" "}
          <a
            href="https://reactjs.net"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            React
          </a>
          :
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/WZRanks-1.png"
        />
        <h2>
          When working on this design for the new "Beta" version I wanted
          something that was modular and would allow me to reuse components that
          I wanted to keep using.
        </h2>
        <h2>
          The next technology that I really wanted to master was{" "}
          <a
            href="https://expressjs.com"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            ExpressJS
          </a>
          . I used it to create a RESTful API which was able to cache match data
          and run important data through a algorithim to rank matches.
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/WZRanks-2.png"
        />
        <h2>
          A big challenge that came up was the CallOfDuty API, it had a big
          problem with the rate limit. I was able to get around this by using
          the{" "}
          <a
            href="https://www.npmjs.com/package/express-rate-limit"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            express-rate-limiting
          </a>{" "}
          package to rate limit requests from people who tried to spam our site
          and in turn would get us rate limited from the COD API.
        </h2>
      </div>
    </div>
  );
}
