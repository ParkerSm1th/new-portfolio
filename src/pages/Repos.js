import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

// Components
import RepoItem from "../components/RepoItem";

export function Repos() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const fakeList = [1, 2, 3, 4, 6, 7, 8];

  const getRepoInfo = () => {
    window.scrollTo(0, 0);
    axios
      .get("https://api.github.com/users/parkersm1th/repos")
      .then((res) => {
        setRepos(
          res.data
            .filter((repo) => repo.fork === false && repo.desc !== null)
            .sort((a, b) => b?.stargazers_count - a?.stargazers_count)
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
          <div>
            <Row className="homeJumbo">
              {fakeList.map((item) => (
                <Col xs={12} md={6}>
                  <RepoItem type="loader" />
                </Col>
              ))}
            </Row>
          </div>
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
