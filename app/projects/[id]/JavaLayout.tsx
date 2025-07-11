"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Footer";
import "./page.css";
import Sidebar from "../../Sidebar";

const JavaLayout = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        return (
                <div>
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
                                                <a href="/pdf/Comp409-assig1.pdf" target="_blank" rel="noopener noreferrer"> Java + Threads + Locking + Deadlock Avoidance [PDF]</a>
                                                <dd>- Simulated regular expression DFA traversal with speculative parallelism. Precomputed transitions per segment and resolved globally; achieved measurable speedup.</dd>
                                            </li>
                                            <li>
                                                <a href="/pdf/Comp409-assig2.pdf" target="_blank" rel="noopener noreferrer">  Java + Monitors + Condition Variables [PDF]</a>
                                                <dd>- Modeled complex thread coordination using condition variables. Enforced group-based access control and interruption logic with multiple thread roles (TAs, students, professor).</dd>
                                            </li>
                                            <li>
                                                <a href="/pdf/Comp409-assig3.pdf" target="_blank" rel="noopener noreferrer">   Java + CAS + Atomic Ops + Thread Pool + Divide & Conquer [PDF]</a>
                                                <dd>- Built both blocking and lock-free resizable array structures. Achieved safe concurrent access and dynamic resizing; benchmarked designs under mixed read/write workloads.</dd>
                                            </li>
                                        </ul>
                                        <button onClick={handleBackClick} className="custom-btn btn-5">
                                                Back to Projects
                                        </button>
                                </div>
                        </div>
                </div>
                <Footer />
                </div >
        );
};

export default JavaLayout;