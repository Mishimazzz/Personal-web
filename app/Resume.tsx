'use client';
import React, { useState } from "react";
import './Resume.css';

const Resume: React.FC = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleClick = () => setIsZoomed(!isZoomed);

    return (
        <div className={`resume-container ${isZoomed ? "zoomed" : ""}`}>
            <div
                className={`resume ${isZoomed ? "zoomed" : ""}`}
                onClick={handleClick}
            >
                <img src="/img/yueyan-resume.jpg" alt="yueyan ying resume" />
            </div>
        </div>
    );
};

export default Resume;
