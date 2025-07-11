"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Footer";
import "./page.css";
import Sidebar from "../../Sidebar";

const SQLLayout = () => {
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

                                        <h3>Explanation🌞🌞🌞</h3>
                                        <p>
                                            <span className="tab"></span>I took COMP 421 at McGill University, all of which involved using SQL. However, it is not convenient to showcase the related coursework here.
                                        </p>
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

export default SQLLayout;