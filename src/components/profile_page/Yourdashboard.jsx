import React from "react";
import Activity from "./Activity";
import Dashboardlist from "./Dashboardlist";
import Experience from "./Experience";

export default function Yourdashboard() {
  return (
    <>
      <div className="dashboard">
        <h4 className="dashboard_title">Your Dashboard</h4>
        <h5 className="dashboard_subtitle">Private to you</h5>
        <div className="viewed_section">
          <div className="viewed_section_1">
            <h3>24</h3>
            <h6>Who viewed your profile</h6>
          </div>
          <div className="viewed_section_2">
            <h3>24</h3>
            <h6>Post views</h6>
          </div>
          <div className="viewed_section_3">
            <h3>24</h3>
            <h6>Search appearances</h6>
          </div>
        </div>
        <Dashboardlist />
      </div>
    </>
  );
}
