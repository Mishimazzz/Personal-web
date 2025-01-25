"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SiderBar from "./Sidebar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
// import Resume from "./Resume"; 
import "./globalPage.css";

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
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("activeTab") || "About Me";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="page">
      <title>Yueyan Ying Personal Website</title>
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