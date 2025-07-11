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

        const javaProjects = [
                {
                        title: "Java + Threads + Locking",
                        url: "/pdf/Comp409-assig1.pdf",
                        desc: "DFA traversal with speculative parallelism",
                        image: "/img/java1.jpg",
                },
                {
                        title: "Java + Monitors",
                        url: "/pdf/Comp409-assig2.pdf",
                        desc: "Group-based access with thread roles",
                        image: "/img/java2.jpg",
                },
                {
                        title: "Java + CAS + Thread Pool",
                        url: "/pdf/Comp409-assig3.pdf",
                        desc: "Blocking & lock-free dynamic arrays",
                        image: "/img/java3.jpg",
                },
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
                                                        <span className="tab"></span>University code work is provided as a <strong>PDF</strong> because I cannot share the actual code due to university policy.<br />
                                                        <span className="tab"></span>Other code work is linked to my <strong>GitHub</strong>, where you can freely check it out and download it!
                                                </p>

                                                <h3>Java Projects</h3>
                                                <div className="card-grid">
                                                        {javaProjects.map((project, index) => (
                                                                <div className="card" key={index}>
                                                                        <div className="card-bg" style={{ backgroundImage: `url(${project.image})` }} />
                                                                        <div className="card-content">
                                                                                <h4>{project.title}</h4>
                                                                                <p>{project.desc}</p>
                                                                                <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                                                                        </div>
                                                                </div>
                                                        ))}
                                                </div>

                                                <button onClick={handleBackClick} className="custom-btn btn-5">Back to Projects</button>
                                        </div>
                                </div>
                        </div>
                        <Footer />
                </div>
        );
};

export default JavaLayout;
