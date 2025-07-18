"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Footer";
import "./page.css";
import Sidebar from "../../Sidebar";

const PythonLayout = () => {
        const router = useRouter();

        const handleBackClick = () => {
                router.push("/?activeTab=Projects#projects");
        };

        const PythonProj = [
                {
                        title: "Python + KNN + Decision Tree + ROC Analysis [PDF]",
                        url: "/pdf/COMP_551_Winter_2025_Assignment_1.pdf",
                        desc: "Implemented KNN and Decision Tree classifiers from scratch; compared performance on health datasets using AUROC and accuracy."
                },
                {
                        title: "Python + Linear & Logistic Regression + Gradient Check [PDF]",
                        url: "/pdf/COMP_551_Winter_2025_Assignment_2.pdf",
                        desc: "Built linear and logistic regression models; analyzed feature importance and verified gradients with perturbation checks."
                },
                {
                        title: "Python + MLP from Scratch + CNN + Regularization [PDF]",
                        url: "/pdf/COMP_551_Winter_2025_Assignment_3.pdf",
                        desc: "Trained multilayer perceptrons on image data with custom implementation; compared accuracy with CNN using PyTorch/Keras."
                },
                {
                        title: "BERT + Probing + Fine-tuning + Attention Visualization [PDF]",
                        url: "/pdf/COMP_551_Winter_2025_Assignment_4.pdf",
                        desc: "Evaluated BERT on AG News via probing (KNN/logistic regression) and full fine-tuning; visualized attention for prediction insights."
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

                                        <h3> Machine Learning </h3>
                                        <div className="card-grid">
                                                {PythonProj.map((project, index) => (
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

export default PythonLayout;