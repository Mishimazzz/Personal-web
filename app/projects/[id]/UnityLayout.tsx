"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Footer";
import "./page.css";
import Sidebar from "../../Sidebar";

const UnityLayout = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        const UdemyProj = [
                {
                        title:"Unity-Car-Delivery",
                        url:"https://github.com/Mishimazzz/Unity-Car-Delivery",
                        desc:"Very easy 2D Car delivery game"
                },
                {
                        title: "Unity-Snow-Boarder-Game",
                        url: "https://github.com/Mishimazzz/Unity-Snow-Boarder-Game",
                        desc: "Very easy 2D snowboard Game, practice scene switch"
                }
                
        ]

        const mcGillProj = [
                {
                        title: "Interaction Game",
                        url: "/zip/A1.zip",
                        desc: "Downloadable ZIP of an interaction-based Unity project"
                },
                {
                        title: "Balloon And Harpoon",
                        url: "/zip/A2.zip",
                        desc: "Did not use rigidbody; focuses on hit detection and projectile logic"
                },
                {
                        title: "Robot And Shelf",
                        url: "/zip/A3.zip",
                        desc: "Practices AI pathfinding and dynamic obstacle avoidance"
                },
                {
                        title: "Frog And Road",
                        url: "/zip/A4.zip",
                        desc: "Frogger-like game; AI crossing logic and timing"
                }
        ];

        const mcGameJam = [
                {
                        title: "Rubi-Chess",
                        url: "https://mishimazzz.itch.io/rubichess",
                        desc: "Designed and developed by C#, Unity and crafted 2D scenes and 3D model. Awarded the “Most Technically Innovative” prize."
                }
        ]

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

                                        <h3> Udemy </h3>
                                        <div className="card-grid">
                                                {UdemyProj.map((project, index) => (
                                                        <div className="card" key={index}>
                                                                <div className="card-bg" />
                                                                <div className="card-content">
                                                                        <h4>{project.title}</h4>
                                                                        <p>{project.desc}</p>
                                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>

                                        <h3> Other Unity Projects(course in McGill) </h3>
                                        <div className="card-grid">
                                                {mcGillProj.map((project, index) => (
                                                        <div className="card" key={index}>
                                                                <div className="card-bg" />
                                                                <div className="card-content">
                                                                        <h4>{project.title}</h4>
                                                                        <p>{project.desc}</p>
                                                                        <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>

                                        <h3> McGameJam </h3>
                                        <div className="card-grid">
                                                {mcGameJam.map((project, index) => (
                                                        <div className="card" key={index}>
                                                                <div className="card-bg" />
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
                </div >
        );
};

export default UnityLayout;