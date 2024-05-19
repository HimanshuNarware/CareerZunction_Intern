/** @format */

import './internpage.css';
import DataDB from '../../../DB/DataBase.json';
import { useState, useRef, useEffect } from 'react';
import PaginatedItems from '../../pagination';

const InternPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DataDB);
  const [currentData, setCurrentData] = useState([]);
  const [pageSummary, setPageSummary] = useState('');

  const ref = useRef(null);

  useEffect(() => {
    setFilteredData(DataDB);
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = DataDB.filter((item) =>
      item.internship_name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.company_name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  return (
    <div style={{ background: 'black' }}>
      <div className='searchBar'>
        <div className='searchInputWrapper'>
          <span className='searchIcon'>&#128269;</span>
          <input
            type='text'
            placeholder='Search internships...'
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>

      <p className='page-summary'>{pageSummary}</p>

      <div className='internBox'>
        {filteredData.length === 0 ? (
          <div className="notFound">No internships found</div>
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
                style={{ cursor: 'pointer' }}
                onClick={() => { window.open(item.link) }}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>

      <PaginatedItems 
        setCurrentData={setCurrentData} 
        setPageSummary={setPageSummary} 
        filteredData={filteredData}
      />
    </div>
  );
};

export default InternPage;
