/** @format */

import './internpage.css';
import { useRef, useState, useEffect } from 'react';
import PaginatedItems from '../../pagination';
import internshipsData from '../../../DB/DataBase.json'; // Importing the complete dataset
import Fuse from 'fuse.js'; // Importing fuse.js for fuzzy search

const InternPage = () => {
  const ref = useRef(null);

  // Initializing state variables
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState("");
  const [pageSummary, setPageSummary] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Fuse.js options for fuzzy search
  const options = {
    keys: ['company_name', 'internship_name'],
    threshold: 0.3, // Adjust threshold to control fuzziness
  };

  const fuse = new Fuse(internshipsData, options);

  // Function to filter data based on search query and filter mode
  const filterData = (query, mode) => {
    const normalizedSearchQuery = query.trim();
    let filteredItems = internshipsData;

    if (normalizedSearchQuery) {
      const searchResults = fuse.search(normalizedSearchQuery);
      filteredItems = searchResults.map(result => result.item);
    }

    // Further filter by mode
    return filteredItems.filter((item) => {
      const matchesFilterMode = mode === "" || item.mode.toLowerCase() === mode.toLowerCase();
      return matchesFilterMode;
    });
  };

  // useEffect hook to update filteredData when searchQuery or filterMode changes
  useEffect(() => {
    const filtered = filterData(searchQuery, filterMode);
    setFilteredData(filtered);
  }, [searchQuery, filterMode]);

  useEffect(() => {
    // Update the current page data whenever filteredData changes
    const itemsPerPage = 12;
    const newOffset = (currentPage * itemsPerPage) % filteredData.length;
    const endOffset = newOffset + itemsPerPage > filteredData.length ? filteredData.length : newOffset + itemsPerPage;

    setCurrentData(filteredData.slice(newOffset, endOffset));
    setPageSummary(`Showing ${newOffset + 1} to ${endOffset} results out of ${filteredData.length}`);
  }, [filteredData, currentPage]);

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
      {currentData.length > 0 && <p className='page-summary'>{pageSummary}</p>}

      {/* Rendering the list of internships */}
      <div className='internBox'>
        {currentData.length === 0 ? (
          <p className="no-results">Results Not Found</p>
        ) : (
          currentData.map((item, index) => (
            <div className="BoxContent" key={index}>
              <img className='ApiImg' src={item.image} alt="" />
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
          ))
        )}
      </div>

      {/* Rendering the PaginatedItems component */}
      {filteredData.length > 0 && (
        <PaginatedItems
          pageCount={Math.ceil(filteredData.length / 12)}
          onPageChange={(selectedPage) => setCurrentPage(selectedPage)}
        />
      )}
    </div>
  );
};

export default InternPage;
