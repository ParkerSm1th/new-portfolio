import React, { useEffect } from "react";

export function KeyFM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>KeyFM</h1>
        <p className="titleLinks">
          <a
            href="https://github.com/ParkerSm1th/KeyFM-API"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            Backend GitHub Repo
          </a>
          &#x2022;
          <a
            href="https://github.com/KeyFMRadio/PreV1"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            Frontend GitHub Repo
          </a>
        </p>
      </div>
      <div className="pageContent">
        <h2>
          KeyFM was a project to create an online radio station using PHP, HLS,
          and NodeJS. I worked to create the front end for the main website,
          staff panel, and API.
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/KeyFM-2.png"
        />
        <h2>
          I used{" "}
          <a
            href="https://php.net"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            PHP
          </a>{" "}
          to create this project along with HTML & CSS to create the front end
          for this project which is automatically updated from the NodeJS
          backend API that fed the front end stats. I also used{" "}
          <a
            href="https://mysql.net"
            target="_blank"
            rel="noreferrer"
            className="skillLink"
          >
            MySQL
          </a>{" "}
          for the data storage, which led to the creation of the staff panel,
          this panel allowed staff members to manage the radio and dynamically
          change things on the main website.
        </h2>
        <img
          className="projectImg"
          src="https://cdn.parkersmith.io/portfolio/v2/projects/images/KeyFM-1.png"
        />
      </div>
    </div>
  );
}
