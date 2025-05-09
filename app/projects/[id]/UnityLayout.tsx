"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./page.css";
import Sidebar from "../../Sidebar";

const UnityLayout = () => {
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

                                        <h3> Udemy </h3>
                                        <ul>
                                            <li>
                                                <a href="https://github.com/Mishimazzz/Unity-Car-Delivery" target="_blank" rel="noopener noreferrer"> Unity-Car-Delivery</a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/Mishimazzz/Unity-Snow-Boarder-Game" target="_blank" rel="noopener noreferrer">  Unity-Snow-Boarder-Game</a>
                                            </li>
                                        </ul>

                                        <h3> Other Unity Projects(course in McGill) </h3>
                                        <ul>
                                                <li>
                                                        <a href="/zip/A1.zip" target="_blank" rel="noopener noreferrer" download> Interaction Game</a>
                                                </li>
                                                <li>
                                                        <a href="/zip/A2.zip" target="_blank" rel="noopener noreferrer" download> Ballon And Harpoon (did not use rigid body to write the assignment)</a>
                                                </li>
                                                <li>
                                                        <a href="/zip/A3.zip" target="_blank" rel="noopener noreferrer" download> Robot And Shelf (practice AI pathfinding and dynamic obstacle avoidance)</a>
                                                </li>
                                                <li>
                                                        <a href="/zip/A4.zip" target="_blank" rel="noopener noreferrer" download> Frog And Road (like Frogger, practice AI)</a>
                                                </li>
                                        </ul>

                                        <h3> McGameJam </h3>
                                        <ul>
                                                <li>
                                                        <a href="https://mishimazzz.itch.io/rubichess"> Rubi-Chess</a>     
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

export default UnityLayout;