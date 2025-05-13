import React from "react";
import Link from "next/link";
import "./Projects.css";
import GitHubContribution from "./GitHubComtribution";

const ProjectsElements = [
    {
        id: "html-css-js",
        title: "HTML + CSS + JS",
        description: "also used React, Node.js, MongoDB"
    },
    {
        id: "c-cpp",
        title: "C & C++",
        description: "Projects include linux shell, malloc, and more"
    },
    {
        id: "r",
        title: "R",
        description: "Projects include graph analysis, data visualization, and more"
    },
    {
        id: "java",
        title: "Java",
        description: "Projects are all from university courses"
    },
    {
        id: "python",
        title: "Python",
        description: "Projects are all from university courses"
    },
    {
        id: "sql",
        title: "SQL",
        description: "Projects include simple database design, query, and more"
    },
    {
        id: "misp-ocaml",
        title: "MISP & OCAML",
        description: "Projects are all from university courses"
    }, {
        id: "unity-csharp",
        title: "Unity || C#",
        description: "Projects are all from university courses and Udemy courses"
    }
];

const ProjectCard:React.FC = () => {
    return(
        <div className="projects-container">
            {ProjectsElements.map((project) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    legacyBehavior
                >
                    <a className="project project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </a>
                </Link>
            ))}
        </div>

    );
};

export default function Projects(){
    return(
        <div className="project-page">
            <h2>Noted:</h2>
            <p>
                <span className="tab"></span>Most of my projects are hosted on my <a href="https://github.com/Mishimazzz"><strong>GitHub</strong></a>, and they are university projects. According to university policy, <strong>I can&apos;t share the code here</strong>.<br></br>
                <span className="tab"></span>The list below includes work I have done independently. If you are interested, please check it out!<br></br>
                <span className="tab"></span>If you are interested in what I have done but is private, please contact me with email!
            </p>
            <h2>Contribution Graph:</h2>
            <GitHubContribution />
            <ProjectCard />
        </div>
    );
}

