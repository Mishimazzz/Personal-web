import Image from "next/image";
import SiderBar from "./Sidebar";
import AboutMe from "./AboutMe";
import "./page.css"

export default function Home() {
  return (
    <div className="page">
      <div className="left-section">
        <SiderBar />
      </div>
      <div className="right-section">
        <AboutMe />
      </div>
    </div>
    
  );
}
