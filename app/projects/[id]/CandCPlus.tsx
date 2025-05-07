"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";
import Sidebar from "../../Sidebar";

const CandCPlus = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        return (
                <div className="page">
                        <div className="left-section">
                                <Sidebar />
                        </div>
                        <div className="right-section">
                                <div className="Pcontent">
                                        <h2>Noted: </h2>
                                        <p>
                                                <span className="tab"></span>University code work is provided as a <strong>PDF</strong> because I cannot share the actual code due to university policy.
                                                Instead, I will briefly explain what I have done in the project.<br></br>
                                                <span className="tab"></span>Other code work is linked to my <strong>GitHub</strong>, where you can freely check it out and download it!
                                        </p>

                                        <h3> Concurrent Programming </h3>
                                        <ul>
                                                <li>
                                                        <a href="/pdf/Comp409-assig1.pdf" target="_blank" rel="noopener noreferrer">  C + OpenMP + Sparse Data Compression + Speculative Threads [PDF]</a>
                                                        <dd>- Simulated regular expression DFA traversal with speculative parallelism. Precomputed transitions per segment and resolved globally; achieved measurable speedup.</dd>
                                                </li>
                                        </ul>
                                        <button onClick={handleBackClick} className="back-button">
                                                Back to Projects
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default CandCPlus;