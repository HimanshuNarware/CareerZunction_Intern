import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributors.css';

function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    async function fetchContributors() {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/HimanshuNarware/CareerZunction_Intern/contributors'
        );
        setContributors(response.data);
      } catch (error) {
        console.error('Error in fetching contributors:', error);
      }
    }
    fetchContributors();
  }, []);

  return (
    <div className="contributors-container">
      <h1 className="contributors-title">Our Contributors</h1>
      <div className="contributors-grid">
        {contributors.map((contributor) => (
          <div key={contributor.id} className="contributor-card">
            <a
              href={contributor.html_url}
              className="contributor-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="contributor-avatar"
              />
            </a>
            <h2 className="contributor-name">{contributor.login}</h2>
            <p className="contributor-contributions">
              Contributions: {contributor.contributions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contributors;