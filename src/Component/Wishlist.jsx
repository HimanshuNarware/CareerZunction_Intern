import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.Wishlist.wishlist);

  const ans = wishlist.map((key, index) => (
    <div className="BoxContent" key={index}>
      <div className='wishlist-icon'>
        <Link to="/wishlist">
          <FaHeart  />
        </Link>
      </div>
      <img className='ApiImg' src={key.image} alt="" />
      <h2 className='InternTitle'>{key.internship_name}</h2>
      <div className="time">
        <div className="mode">{key.mode}</div>
        <div className="duration">{key.duration}</div>
      </div>
      <p className='desc'>{key.description}</p>
      <button className='viewMore' style={{ cursor: 'pointer' }} onClick={() => { window.open(key.link) }}>Apply Now</button>
    </div>
  ));

  return (
    <div>
      {ans}
    </div>
  );
};

export default Wishlist;
