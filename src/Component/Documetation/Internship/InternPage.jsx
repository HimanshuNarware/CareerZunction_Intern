/** @format */

import "./internpage.css";
import { useRef, useState, useEffect } from "react";
import PaginatedItems from "../../pagination";
import internshipsData from "../../../DB/DataBase.json";

let InternPage = () => {
  // Dispatch and Subscribe
  const button = document.querySelectorAll("viewMore");
  const ref = useRef(null);

  const [internships, setInternships] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [pageSummary, setPageSummary] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  // console.log(currentData)
  useEffect(()=>{
    if (currentData.length === 0 || !roleFilter && !industryFilter) {
      setCurrentData( internshipsData.slice(0, 12));  // Adjust the number as needed
      console.log("Default internships shown due to no matches:", currentData);
    }
  },[currentData])

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
  useEffect(() => {
    console.log("Initial internships data:", internshipsData);
    if (internshipsData && internshipsData.length > 0) {
      setInternships(internshipsData);
      const defaultData = internshipsData.slice(0, 12); // Show 12 items initially
      console.log("Default Data:", defaultData);
      setFilteredData(defaultData);
      setCurrentData(defaultData);
      setPageSummary(
        `Showing 1 to ${Math.min(12, defaultData.length)} results out of ${internshipsData.length}`
      );
    } else {
      console.error("Internships data is empty or not loaded correctly");
    }
  }, []);

  useEffect(() => {
    handleFilter();
  }, [roleFilter, industryFilter]);

  function handleFilter() {
    console.log("Applying filters...");
    console.log("Role Filter:", roleFilter);
    console.log("Industry Filter:", industryFilter);

    let filtered = internships;

    if (roleFilter) {
      filtered = filtered.filter(
        (internship) =>
          internship.role && internship.role.toLowerCase() === roleFilter.toLowerCase()
      );
      console.log("After role filter:", filtered);
    }

    if (industryFilter) {
      filtered = filtered.filter(
        (internship) =>
          internship.industry && internship.industry.toLowerCase() === industryFilter.toLowerCase()
      );
      console.log("After industry filter:", filtered);
    }
     setFilteredData(filtered);
    setCurrentData(filtered.slice(0, 6)); // Initially show first 12 items of filtered data
    setPageSummary(
      `Showing 1 to ${Math.min(12, filtered.length)} results out of ${filtered.length}`
    );
  }

  return (
    <div style={{ background: "black" }}>
      <p className="page-summary">{pageSummary}</p>
      <div className="filterContainer">
        <select
          className="filterSelect"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Java Developer">Java Developer</option>
          <option value="Software Developer">Software Developer</option>
          <option value="Sales">Sales</option>
          <option value="Mentor">Mentor</option>
          <option value="Other">Other</option>
          {/* Add more options as needed */}
        </select>

        <select
          className="filterSelect"
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
        >
          <option value="">Select Industry/Sector</option>
          <option value="Education">Education</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Others">Others</option>
          {/* Add more options as needed */}
        </select>
      </div>

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
                style={{ cursor: "none" }}
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
