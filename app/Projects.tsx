import React from "react";
import "./Projects.css";

const ProjectsElements = [
    {
        title: "HTML + CSS + JS",
        description: "also used React, Node.js, MongoDB"
    },
    {
        title: "C & C++",
        description: "Projects include linux shell, malloc, and more"
    },
    {
        title: "R",
        description: "Projects include graph analysis, data visualization, and more"
    },
    {
        title: "Java",
        description: "Projects are all from university courses"
    },
    {
        title: "Python",
        description: "Projects are all from university courses"
    },
    {
        title: "SQL",
        description: "Projects include simple database design, query, and more"
    },
    {
        title: "MISP & OCAML",
        description: "Projects are all from university courses"
    }
];

const ProjectCard:React.FC = () => {
    return(
        <div className="projects-container">
            {ProjectsElements.map((project,index) => 
            <div key = {index} className="project">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>)}
        </div>
    );
};

export default function Projects(){
    return(
        <div className="project-page">
            <h2>Noted:</h2>
            <p>
                <span className="tab"></span>Most of my projects are hosted on my <a href="https://github.com/Mishimazzz"><strong>GitHub</strong></a>, and they are university projects. According to university policy, <strong>I can't share the code here</strong>.<br></br>
                <span className="tab"></span>The list below includes work I have done independently. If you are interested, please check it out!<br></br>
                <span className="tab"></span>If you are interested in what I have done but is private, please contact me with email!
            </p>
            <ProjectCard />
        </div>
    );
}

