"use client";
import React, { useState } from "react";
import SiderBar from "./Sidebar";
import AboutMe from "./AboutMe";
import Projects from "./Projects"; 
// import Resume from "./Resume"; 
import "./page.css";

const TopBar: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({ activeTab, setActiveTab }) => {
  const tabs = ["About Me", "Projects", "Resume"];

  return (
    <div className="Topbar-container">
      <nav className="Topbar">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="page">
      <div className="left-section">
        <SiderBar />
      </div>
      <div className="right-section">
        <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content">
          {activeTab === "About Me" && <AboutMe />}
          {activeTab === "Projects" && <Projects />}
          {/* {activeTab === "Resume" && <Resume />} */}
        </div>
      </div>
    </div>
  );
}