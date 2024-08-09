import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contributors.css';
import Preloader from './Preloader';

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributors() {
      let allContributors = [];
      let page = 1;

      try {
        while (true) {
          const response = await axios.get(
            `https://api.github.com/repos/HimanshuNarware/CareerZunction_Intern/contributors`,
            {
              params: {
                per_page: 100,
                page,
              },
            }
          );
          const data = response.data;
          if (data.length === 0) {
            break;
          }
          allContributors = [...allContributors, ...data];
          page++;
        }
        setContributors(allContributors);
      } catch (error) {
        console.error('Error in fetching contributors:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchContributors();
  }, []);

  if (loading) {
    return <Preloader />;
  }

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
