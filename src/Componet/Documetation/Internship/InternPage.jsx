/** @format */

import './internpage.css';
import { useRef, useState, useEffect } from 'react';
import PaginatedItems from '../../pagination';

const InternPage = () => {
  const ref = useRef(null);

  const [currentData, setCurrentData] = useState([]);
  const [pageSummary, setPageSummary] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterMode, setFilterMode] = useState("");

  useEffect(() => {
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    const filtered = currentData.filter((item) => {
      const matchesSearchQuery = item.company_name.toLowerCase().includes(normalizedSearchQuery) ||
                                 item.internship_name.toLowerCase().includes(normalizedSearchQuery);
      const matchesFilterMode = filterMode === "" || item.mode.toLowerCase() === filterMode.toLowerCase();
      return matchesSearchQuery && matchesFilterMode;
    });
    setFilteredData(filtered);
  }, [currentData, searchQuery, filterMode]);

  return (
    <div style={{ background: 'black', padding: '20px' }}>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by company or internship name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <select
          value={filterMode}
          onChange={(e) => setFilterMode(e.target.value)}
          className="filter-select"
        >
          <option value="">All Modes</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>

      <p className='page-summary'>{pageSummary}</p>

      <div className='internBox'>
        {filteredData.map((item, index) => {
          return (
            <div className="BoxContent" key={index}>
              <img className='ApiImg' key={index} src={item.image} alt="" />
              <h2 className='InternTitle' ref={ref}>{item.internship_name}</h2>
              <div className="time">
                <div className="mode">{item.mode}</div>
                <div className="duration">{item.duration}</div>
              </div>
              <p className='desc'>{item.description}</p>
              <button
                className='viewMore'
                id='btn'
                style={{ cursor: 'pointer' }}
                ref={ref}
                onClick={() => { window.open(item.link) }}
              >
                Apply Now
              </button>
            </div>
          )
        })}
      </div>

      <PaginatedItems setCurrentData={setCurrentData} setPageSummary={setPageSummary} />
    </div>
  );
};

export default InternPage;
