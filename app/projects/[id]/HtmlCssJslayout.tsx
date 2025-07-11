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

                                        <h3> Full-stack projects: </h3>
                                        <ul>
                                                <li>
                                                        <a href="/pdf/McJam-Web-dev.pdf" target="_blank" rel="noopener noreferrer"> McJam Web dev HTML+CSS+JS+React+Node.js+MongoDB PDF</a>
                                                </li>
                                                <li>
                                                        <a href="/pdf/Register-web-HTML-CSS-PHP-JS.pdf" target="_blank" rel="noopener noreferrer"> Register web HTML+CSS+PHP+JS PDF</a>
                                                </li>
                                        </ul>

                                        <h3> Front-end projects: </h3>
                                        <ul>
                                                <li>
                                                        <a href="https://yueyan-ying-personal-web.onrender.com" target="_blank" rel="noopener noreferrer"> Yueyan Ying Personal website (Link, Please cilck)</a>
                                                </li>
                                                <li>
                                                        <a href="https://wenkun-wu-personal-web.onrender.com" target="_blank" rel="noopener noreferrer"> WenKun Wu Personal website (Link, Please cilck)</a>
                                                </li>
                                                <li>
                                                        <a href="/pdf/HomeTown-html-css.pdf" target="_blank" rel="noopener noreferrer"> HomeTown HTML+CSS PDF</a>
                                                </li>
                                                <li>
                                                        <a href="/pdf/MWIFI-web-HTML-CSS-JS.pdf" target="_blank" rel="noopener noreferrer"> MWIFI web HTML+CSS+JS PDF</a>
                                                </li>
                                                <li>
                                                        <a href="/pdf/Youtube-intro-web-HTML-CSS-JS.pdf" target="_blank" rel="noopener noreferrer"> Youtube intro web HTML+CSS+JS PDF</a>
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

export default HtmlCssJslayout;