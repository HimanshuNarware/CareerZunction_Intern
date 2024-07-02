/** @format */


import React from 'react';
import './Doc.css';
import img1 from '../../image/Contribution/1.png';
import img2 from '../../image/Contribution/2.png';
import img3 from '../../image/Contribution/3.png';
import img4 from '../../image/Contribution/45.png';
import img5 from '../../image/Contribution/5.png';
import img6 from '../../image/Contribution/6.png';
import img7 from '../../image/Contribution/7.png';
import img8 from '../../image/Contribution/8.png';
import video1 from '../../image/Contribution/CareerZunction_Docs.mp4';
import Detail from './Detail';

function Doc() {
  return (
    <div
      className="document"
      style={{ backgroundColor: "black", overflow: "hidden" }}
    >
      <div class="page_0">
        {/* <img src={background} alt="" className="docImg" /> */}
      </div>
      <div className="contribution">
        <h1 className="headLine">
          GitHub. || Git. || Open-Source. || Contribution.{" "}
        </h1>
      </div>
      <div className="TitleDoc">Make Your First Contribution !</div>
      <div className="video_Doc">
        <h1 style={{ fontWeight: '500', }}>Video Tutorial</h1>
        <video controls>
          <source src={video1} type="video/mp4" />
          your browser does not support this tag.
        </video>
      </div>

      <div className="ContributionImg">
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 1 :
            </span>{" "}
            Fork this repository
          </p>
          <img className="conImg" src={img1} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 2 :
            </span>{" "}
            Copy the link of repository.
          </p>

          <img className="conImg" src={img2} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 3 :
            </span>{" "}
            Open CMD Prompt and clone the repo using git commands.
          </p>
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 3.1 :
            </span>{" "}
            Install given depencies.
          </p>

          <img className="conImg" src={img3} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 4 :
            </span>{" "}
            Create new branch.
          </p>

          <img className="conImg" src={img4} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 5 :
            </span>{" "}
            Make changes and add file by using git add command.
          </p>

          <img className="conImg" src={img5} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 6 :
            </span>{" "}
            Now Commit changes.
          </p>

          <img className="conImg" src={img6} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 7 :
            </span>{" "}
            Now Push Changes{" "}
          </p>

          <img className="conImg" src={img7} alt="" />
        </div>
        <div className="bx-1 conImg">
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              lineHeight: "-2px",
              margin: "10px",
            }}
          >
            <span style={{ color: "#6741d9", fontWeight: "500" }}>
              Step 8 :
            </span>{" "}
            To create a pull request click on compare and pull request{" "}
          </p>

          <img className="conImg" src={img8} alt="" />
          <h2
            style={{ color: "green", textAlign: "center", marginTop: "10px" }}
          >
            Congratulation you have make you first contribution
          </h2>
        </div>
      </div>
      <p className="line"></p>
      <Detail />
    </div>
  );
}

export default Doc;
