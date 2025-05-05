'use client';
import React, { useState } from "react";
import './Resume.css';

const Resume1: React.FC = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleClick = () => setIsZoomed(!isZoomed);

    return (
        <div className="resume-container">
            <div
                className={`resume ${isZoomed ? "zoomed" : ""}`}
                onClick={handleClick}
            >
                <img src="/img/yueyan-resume.jpg" alt="yueyan ying resume" />
            </div>
            {/* <p>(Click the image to {isZoomed ? "zoom out" : "zoom in"})</p> */}
        </div>
    );
};

export default function Resume() {
    return (
        <div>
            <Resume1 />
        </div>
    );
}