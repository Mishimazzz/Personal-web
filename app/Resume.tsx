'use client';
import React, { useState } from "react";
import Image from 'next/image';
import './Resume.css';

const Resume: React.FC = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleClick = () => setIsZoomed(!isZoomed);

    return (
        <div className={`resume-container`}>
            <div
                className={`resume`}
                onClick={handleClick}
            >
                <Image src="/img/yueyan-resume.jpg" alt="yueyan ying resume" width={1060} height={1060} />
            </div>
            <div className='resume-download'>
                <a
                    href="./pdf/YueyanYing-resume.pdf"
                    className="resume-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Résumé
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: '6px' }}
                    >
                        <path d="m13 3 3.293 3.293-7 7-1.414-1.414 7-7L21 11V3z"></path>
                        <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2 2v3z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Resume;
