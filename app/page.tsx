"use client";
import Image from "next/image";
import React, { useState } from "react";
import SiderBar from "./Sidebar";
import AboutMe from "./AboutMe";
import "./page.css"

const TopBar: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("About");
  const tabs = ["About Me","Projects","Resume"];

  return(
    <div className="Topbar-container">
      <nav className="Topbar">
        {tabs.map((tab) => (
          <div key={tab} className={`tab-item ${activeTab === tab ? "active" : ""}`} onClick={() => setActiveTab(tab)}>
            {tab}
          </div>
        )
      )}
      </nav>
    </div>
  );

}

export default function Home() {
  return (
    <div className="page">
      <div className="left-section">
        <SiderBar />
      </div>
      <div className="right-section">
        <TopBar />
        <AboutMe />
      </div>
    </div>
    
  );
}
