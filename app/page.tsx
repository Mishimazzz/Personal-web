import Image from "next/image";
import SiderBar from "./Sidebar";
import "./page.css"

export default function Home() {
  return (
    <div className="page">
      <div className="left-section">
        <SiderBar />
      </div>
      <div className="right-section">
        <h1>Home Page</h1>
      </div>
    </div>
    
  );
}
