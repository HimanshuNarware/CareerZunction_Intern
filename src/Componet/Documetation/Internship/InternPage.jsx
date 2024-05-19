/** @format */

import './internpage.css';
import { useRef, useState, useEffect } from 'react';
import PaginatedItems from '../../pagination';
import internshipsData from '../../../DB/DataBase.json'; // Importing the complete dataset

const InternPage = () => {
  const ref = useRef(null);

  // Initializing state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState("");
  const [pageSummary, setPageSummary] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Function to filter data based on search query and filter mode
  const filterData = (data, query, mode) => {
    const normalizedSearchQuery = query.toLowerCase().trim();
    return data.filter((item) => {
      const matchesSearchQuery = item.company_name.toLowerCase().startsWith(normalizedSearchQuery) ||
                           item.internship_name.toLowerCase().startsWith(normalizedSearchQuery);

      const matchesFilterMode = mode === "" || item.mode.toLowerCase() === mode.toLowerCase();
      return matchesSearchQuery && matchesFilterMode;
    });
  };

  // useEffect hook to update filteredData when searchQuery or filterMode changes
  useEffect(() => {
    const filtered = filterData(internshipsData, searchQuery, filterMode);
    setFilteredData(filtered);
  }, [searchQuery, filterMode]);

  return (
    <div style={{ background: 'black', padding: '20px' }}>
      {/* Search and filter UI */}
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by Company or Internship name"
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

      {/* Displaying the page summary */}
      <p className='page-summary'>{pageSummary}</p>

      {/* Rendering the list of internships */}
      <div className='internBox'>
        {filteredData.map((item, index) => (
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
        ))}
      </div>

      {/* Rendering the PaginatedItems component */}
      <PaginatedItems setCurrentData={setFilteredData} setPageSummary={setPageSummary} />
    </div>
  );
};

export default InternPage;
