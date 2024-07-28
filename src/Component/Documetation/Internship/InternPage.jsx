import "./internpage.css";
import { useRef, useState, useEffect } from "react";
import PaginatedItems from "../../pagination";
import internshipsData from "../../../DB/DataBase.json";

const InternPage = () => {
  const ref = useRef(null);

  // State for data and filters
  const [internships, setInternships] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [pageSummary, setPageSummary] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

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
    december: "Dec",
  };

  function shortMonth(month) {
    let monthArr;
    const dashRegex = /[\u2013\u2014\-]/;
    if (month.match(dashRegex)) {
      monthArr = month.split(dashRegex).map((month) => month.trim());
    }
    if (month.includes("/")) {
      monthArr = month.split("/");
    }
    if (monthArr) {
      let shortedMonth = monthArr.map(
        (months) => monthAbbreviations[months.toLowerCase().trim()]
      );
      if (shortedMonth[0] !== undefined) {
        return shortedMonth.join("/");
      }
    }
    return month;
  }

  useEffect(() => {
    // Set data from JSON
    setInternships(internshipsData);
    // Show some default internships initially
    const defaultData = internshipsData.slice(0, 5);
    setFilteredData(defaultData);
    setCurrentData(defaultData);
    setPageSummary(
      `Showing 1 to ${Math.min(12, defaultData.length)} results out of ${
        defaultData.length
      }`
    );
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
        (internship) => internship.role && internship.role.toLowerCase() === roleFilter.toLowerCase()
      );
      console.log("After role filter:", filtered);
    }

    if (industryFilter) {
      filtered = filtered.filter(
        (internship) => internship.industry && internship.industry.toLowerCase() === industryFilter.toLowerCase()
      );
      console.log("After industry filter:", filtered);
    }

    // Show some default internships even when filters are applied
    if (filtered.length === 0) {
      filtered = internships.slice(0, 5); // Adjust the number as needed
      console.log("Default internships shown due to no matches:", filtered);
    }

    setFilteredData(filtered);
    setCurrentData(filtered.slice(0, 12)); // Initially show first 12 items of filtered data
    setPageSummary(
      `Showing 1 to ${Math.min(12, filtered.length)} results out of ${filtered.length}`
    );
  }

  return (
    <div style={{ backgroundColor: "black", paddingBlock: "50px" }}>
      <h1 style={{ color: "rgb(220, 227, 238)" }}>My Internship Journey</h1>

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

        <button onClick={handleFilter} className="filterButton">
          Filter
        </button>
      </div>

      <div className="internBox" ref={ref}>
        {currentData.map((item) => (
          <div className="BoxContent" key={item.id}>
            <img src={item.image} alt="Internship" className="ApiImg" />
            <h2>{item.internship_name}</h2>
            <p>{item.company_name}</p>
            <div className="time">
              <span>{shortMonth(item.duration)}</span>
            </div>
            <button className="viewMore">View More</button>
          </div>
        ))}
      </div>

      <PaginatedItems
        setCurrentData={setCurrentData}
        setPageSummary={setPageSummary}
        filteredData={filteredData}
      />

      <div className="page-summary">{pageSummary}</div>
    </div>
  );
};

export default InternPage;
