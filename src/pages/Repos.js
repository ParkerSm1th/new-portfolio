import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import RepoItem from "../components/RepoItem";

export function Repos() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  const getRepoInfo = () => {
    axios
      .get("https://api.github.com/users/parkersm1th/repos")
      .then((res) => {
        setRepos(
          res.data
            .filter((repo) => repo.fork === false && repo.desc !== null)
            .sort((a, b) => b?.size - a?.size)
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setRepos([]);
      });
  };

  useEffect(() => getRepoInfo(), []);

  return (
    <div>
      <div className="pageTitle">
        <h1>Repositories</h1>
        <h2>My public projects on GitHub.</h2>
      </div>
      <div>
        {loading ? (
          <Row className="homeJumbo">
            <Col xs={12} md={6}>
              <RepoItem type="loader" />
            </Col>
          </Row>
        ) : (
          <div className="repoList">
            <Row className="homeJumbo">
              {repos.map((repo) => (
                <Col xs={12} md={6}>
                  <RepoItem
                    link={repo.html_url}
                    title={repo.name}
                    desc={repo.description}
                    type="page"
                    language={repo.language}
                    license="MIT"
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </div>
  );
}
