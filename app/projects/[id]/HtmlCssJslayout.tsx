"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Footer";
import "./page.css";
import Sidebar from "../../Sidebar";

const HtmlCssJslayout = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        const fullStackProjects = [
                {
                        title: "McJam Web Dev",
                        url: "/pdf/McJam-Web-dev.pdf",
                        desc: "HTML + CSS + JS + React + Node.js + MongoDB"
                },
                {
                        title: "Register Web",
                        url: "/pdf/Register-web-HTML-CSS-PHP-JS.pdf",
                        desc: "HTML + CSS + PHP + JS"
                }
        ];

        const frontEndProjects = [
                {
                        title: "Yueyan Ying Personal Website",
                        url: "https://yueyan-ying-personal-web.onrender.com",
                        desc: "Live Link"
                },
                {
                        title: "WenKun Wu Personal Website",
                        url: "https://wenkun-wu-personal-web.onrender.com",
                        desc: "Live Link"
                },
                {
                        title: "HomeTown Website",
                        url: "/pdf/HomeTown-html-css.pdf",
                        desc: "HTML + CSS"
                },
                {
                        title: "MWIFI Web",
                        url: "/pdf/MWIFI-web-HTML-CSS-JS.pdf",
                        desc: "HTML + CSS + JS"
                },
                {
                        title: "YouTube Intro Page",
                        url: "/pdf/Youtube-intro-web-HTML-CSS-JS.pdf",
                        desc: "HTML + CSS + JS"
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
                                                        <span className="tab"></span>University code work is provided as a <strong>PDF</strong> because I cannot
                                                        share the actual code due to university policy. Instead, I will briefly explain what I have done in the project.<br />
                                                        <span className="tab"></span>Other code work is linked to my <strong>GitHub</strong>, where you can freely
                                                        check it out and download it!
                                                </p>

                                                <h3>Full-stack Projects</h3>
                                                <div className="card-grid">
                                                        {fullStackProjects.map((project, index) => (
                                                                <div className="card" key={index}>
                                                                        <h4>{project.title}</h4>
                                                                        <p>{project.desc}</p>
                                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                                                                </div>
                                                        ))}
                                                </div>

                                                <h3>Front-end Projects</h3>
                                                <div className="card-grid">
                                                        {frontEndProjects.map((project, index) => (
                                                                <div className="card" key={index}>
                                                                        <h4>{project.title}</h4>
                                                                        <p>{project.desc}</p>
                                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
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

export default HtmlCssJslayout;
