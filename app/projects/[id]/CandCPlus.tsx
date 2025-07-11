"use client";
import React from "react";
import Footer from "../../Footer";
import { useRouter } from "next/navigation";
import "./page.css";
import Sidebar from "../../Sidebar";

const CandCPlus = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        const CandCplusProject = [
                {
                        title:'C + OpenMP + Sparse Data Compression + Speculative Threads [PDF]',
                        url:'/pdf/Comp409-assig1.pdf',
                        desc:'Simulated regular expression DFA traversal with speculative parallelism. Precomputed transitions per segment and resolved globally; achieved measurable speedup.'
                }

        ];

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
                                        <div className="card-grid">
                                                {CandCplusProject.map((project,index) => (
                                                        <div className="card" key={index}>
                                                                <div className="card-bg"/>
                                                                <div className="card-content">
                                                                        <h4>{project.title}</h4>
                                                                        <p>{project.desc}</p>
                                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                        <button onClick={handleBackClick} className="custom-btn btn-5">
                                        Back to Projects
                                        </button>
                                </div>
                        </div>
                </div>
                <Footer />
                </div>
        );
};

export default CandCPlus;