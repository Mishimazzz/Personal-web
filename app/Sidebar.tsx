import React from "react";
import Image from "next/image";
import "./Sidebar.css";

type SiderBarProps = {
  children: React.ReactNode;
}

const SiderBar: React.FC<SiderBarProps> = ({ children }) => {
  return (
    <div className="sidebar-content">
      {children}
    </div>
  );
}

export default function PersonalInfor() {
  return (
    <div className="sidebar">
      <SiderBar>
        <Image className="personal-photo" src="/img/yueyan.jpg" alt="Personal Photo"   />
        <hr className="divider" />
        <h2>Phone-num: <span style={{ fontSize: "20px" }}>438-526-1739</span></h2>
        <h2>Email: <span style={{ fontSize: "20px" }}>yueyan.ying0256@gmail.com</span></h2>
        <h2>GitHub: <a href="https://github.com/Mishimazzz" style={{ fontSize: "20px" }}>https://github.com/Mishimazzz</a></h2>
        <h2>LinkedIn: <a href="https://www.linkedin.com/in/yueyan-ying-17329b239" style={{ fontSize: "20px" }}>www.linkedin.com/in/yueyan-ying-17329b239</a></h2>
      </SiderBar>
    </div>
  );
}