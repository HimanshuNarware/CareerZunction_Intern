/** @format */

import "./internpage.css";
import { useRef, useState } from "react";
import PaginatedItems from "../../pagination";

let InternPage = () => {
  // Dispatch and Subscribe
  const button = document.querySelectorAll("viewMore");
  const ref = useRef(null);

  const [currentData, setCurrentData] = useState([]);
  const [pageSummary, setPageSummary] = useState("");
  // console.log(currentData)

  const monthAbbreviations = {
    january: "Jan",
    february: "Feb",
    march: "Mar",
    april: "Apr",
    may: "May",
    june: "Jun",
    july: "Jul",
    august: "Aug",
    september: "Sep",
    october: "Oct",
    november: "Nov",
    december: "Dec"
};

  function shortmonth(month) {
    let montharr;
    const dashRegex = /[\u2013\u2014\-]/;
    if (month.match(dashRegex)) {
      montharr = month.split(dashRegex).map(month => month.trim());
      
    }
    if (month.includes("/")) {
      montharr=month.split("/")
    }
    if (montharr) {
      let shortedmonth=montharr.map(months=>monthAbbreviations[(months.toLowerCase().trim())])
      if (shortedmonth[0] !== undefined) {
        return shortedmonth.join("/")
        
      }
    }
    return month
  }

  return (
    <div style={{ background: "black" }}>
      <p className="page-summary">{pageSummary}</p>

      <div className="internBox">
        {currentData.map((item, index) => {
          return (
            <div className="BoxContent" key={index}>
              <img className="ApiImg" key={index} src={item.image} alt="" />
              <h2 className="InternTitle" ref={ref}>
                {item.internship_name}
              </h2>
              <div className="time">
                <div className="mode">{item.mode}</div>
                <div className="duration">{shortmonth(item.duration)}</div>
              </div>
              <p className="desc">{item.description}</p>
              {/* ----------write logic for this */}
              {/* <div className="fullBox">
              <h5 className='company_name'>{item.company_name}</h5>
              <h5 className='Stipend'>{item.award}</h5>
              <h5 className='internship_type'>{item.internship_type}</h5>
              <button className='ApplyButton'>Apply Now ✅</button>
            </div> */}

              <button
                className="viewMore"
                id="btn"
                style={{ cursor: "pointer" }}
                ref={ref}
                onClick={() => {
                  window.open(item.link);
                }}>
                Apply Now
              </button>
            </div>
          );
        })}
      </div>

      <PaginatedItems
        setCurrentData={setCurrentData}
        setPageSummary={setPageSummary}
      />
    </div>
  );
};

export default InternPage;
