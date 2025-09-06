import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa"; 

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 150); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Wrapper onClick={goToTop}>
          <div className="icon-container">
            <FaChevronUp className="top-btn--icon" />
            <FaChevronUp className="top-btn--icon double" />
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 35px;
  right: 17px; 
  color: white;
  background: radial-gradient(circle, #8e2de2 0%, #4a00e0 100%); 
  width: 50px; 
  height: 50px; 
  z-index: 9997;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    background: radial-gradient(circle, #4a00e0 0%, #8e2de2 100%); 
    transform: scale(1.1); 
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .top-btn--icon {
    color: white; 
    transition: transform 0.3s ease;
  }

  .top-btn--icon.double {
    margin-top: -8px; 
  }

  &:hover .top-btn--icon {
    transform: translateY(-2px); 
  }
`;

export default GoToTop;
