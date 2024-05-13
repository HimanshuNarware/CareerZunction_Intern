/** @format */

import './internpage.css';
import DataDB from '../../../DB/DataBase.json'
import { useRef } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../../Redux/Slice/WishlistSlice';
// import { useState } from 'react';
const InternPage = () => {

    const dispatch = useDispatch();
  
    const handleAddToWishlist = (item) => {
      dispatch(addToWishlist(item));
      
    };

  // Dispatch and Subscribe
  const button = document.querySelectorAll('viewMore');
  const ref = useRef(null);

  //
  // function handleClick(){

  //   // console.log(ref.current.className + ' ' +"MoreDetails");
  //   // console.log(ref.current)
  //   let see=ref.current.parentElement.classList.toggle('MoreDetails');
  //   // console.log(see)
  //   // btn.parentElement.classList.toggle
  //   // see.classList.toggle('MoreDetails');


  // }
  // for(let btn in button){
  // btn.parentElement.classList.toggle('MoreDetails');
  // }







  return (
    <div style={{ background: 'black' }}>

      <div className='internBox'>


        {DataDB.map((item, index) => {
          return (
            <div className="BoxContent">
              <div className='wishlist-icon' >
                <Link to="/wishlist">
                  <FaHeart onClick={() => handleAddToWishlist(item)}  />
                </Link>
              </div>
              <img className='ApiImg' key={index} src={item.image} alt="" />
              <h2 className='InternTitle' ref={ref}>{item.internship_name}</h2>
              <div className="time">
                <div className="mode">{item.mode}</div>
                <div className="duration">{item.duration}</div>
              </div>
              <p className='desc'>{item.description}</p>
              {/* ----------write logic for this */}
              {/* <div className="fullBox">
              <h5 className='company_name'>{item.company_name}</h5>
              <h5 className='Stipend'>{item.award}</h5>
              <h5 className='internship_type'>{item.internship_type}</h5>
              <button className='ApplyButton'>Apply Now ✅</button>
            </div> */}

              <button className='viewMore' id='btn' style={{ cursor: 'pointer' }} ref={ref} onClick={() => { window.open(item.link) }} >Apply Now</button>

            </div>

          )
        })}

      </div>

    </div>
  );
};

export default InternPage;