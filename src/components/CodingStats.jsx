import React, { forwardRef } from "react";
import "../styles/CodingStats.css";
import leet from "../assets/images/leetcode.svg";
import codeforces from "../assets/images/codeforces.svg";
import Leetcode from "./Leetcode";
import Codeforces from "./Codeforces";

const CodingStats = forwardRef((props, ref) => {
  return (
    <div className="section" ref={ref}>
      <h1>Coding Stats</h1>
      <div className="vertical-card-container codingstats">
        <Leetcode />
        <Codeforces />
      </div>
    </div>
  );
});

export default CodingStats;
