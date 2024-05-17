/** @format */

import './internpage.css';
import DataDB from '../../../DB/DataBase.json';
import { useState } from 'react';

let InternPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DataDB);

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

      <div className='internBox'>
        {filteredData.map((item, index) => {
          return (
            <div className="BoxContent" key={index}>
              <img className='ApiImg' src={item.image} alt="" />
              <h2 className='InternTitle'>{item.internship_name}</h2>
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
          );
        })}
      </div>
    </div>
  );
};

export default InternPage;
