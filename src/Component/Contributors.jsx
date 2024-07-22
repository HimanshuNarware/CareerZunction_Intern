import React, { useEffect, useState } from 'react';
import './Contributors.css';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await fetch('https://api.github.com/repos/HimanshuNarware/CareerZunction_Intern/contributors');
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    }

    fetchContributors();
  }, []);

  return (
      <div className="content">
          <h1 className="title">Our Contributors</h1>
        <div id="contributors" className="contributors">
          {contributors.map(contributor => (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="contributor-card"
            >
              <img src={contributor.avatar_url} alt={contributor.login} />
              <h2 className="contributor-name">{contributor.login}</h2>
              <p className="contributions">Contributions: {contributor.contributions}</p>
              <p className="github-profile">
                <i className="fab fa-github"></i> GitHub Profile
              </p>
            </a>
          ))}
        </div>
      </div>
  );
};

export default Contributors;