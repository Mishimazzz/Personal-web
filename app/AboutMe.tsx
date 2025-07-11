import React from "react";
import Image from 'next/image';
import "./AboutMe.css";

type AboutMeProps = {
  children: React.ReactNode;
};

const Aboutme: React.FC<AboutMeProps> = ({ children }) => {
  return (
    <div className="detailPage-content">
      {children}
    </div>
  );
};

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 90 },
  { name: "JS & TypeScript", level: 85 },
  { name: "Angular & RxJS", level: 80 },
  { name: "C#", level: 80 },
  { name: "R", level: 80 },
  { name: "SQL", level: 80 },
  { name: "Java", level: 80 },
  { name: "Python", level: 75 },
  { name: "Machine  Learning", level: 75 },
  { name: "Multithreading & Concurrent Prog.", level: 75 },
  { name: "C", level: 70 },
  { name: "C++", level: 70 },
  { name: "MISP", level: 60 },
  { name: "OCAML", level: 60 },
];

export default function AboutMe() {
  return (
    <div className="aboutme">
      <Aboutme>
        <p>
          <span className="tab"></span>Hello there! Thank you for visiting my website!
        </p>

        <p>
          <span className="tab"></span>I'm Yueyan Ying, a Computer Science undergraduate student at McGill University.
          I enjoy building things that are both useful and easy to use, whether it's a responsive website, a backend system,
          or a database setup. I've worked on full-stack projects that helped me grow comfortable with both front-end frameworks
          and backend logic. <b>Please visit my Projects!!!</b>
        </p>

        <h4>What I'm Good At</h4>
        <p>
          <span className="tab"></span>I have hands-on experience in web development, working with tools like HTML,
          CSS, JavaScript, and frameworks like React. On the backend, I've used Node.js, SQL, and Python to build data-driven
          features. I like writing clean, maintainable code and figuring out how to make systems work smoothly together.
        </p>

        <h4>Academic Interests</h4>
        <p>
          <span className="tab"></span>I'm interested in web development, data science, and software design.
          I like learning by doing, especially through projects or team collaboration.
          I'm always looking for ways to improve what I build.
        </p>

        <h4>Personal Passions</h4>
        <p>
          <span className="tab"></span>In my free time, I love exploring new places, and playing video games.
          Recently, I've become really into board games—I only wish I had discovered them earlier!
          As for video games, <span style={{ textDecoration: "underline" }}>Stardew Valley</span> is by far my all-time favorite. It's honestly hard to put into words how much I love this game.
          All I can say is: just play it. Seriously. You won't regret it!
        </p>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image src="/img/Junimo.gif" alt="junimo" width={60} height={60} />
          <Image src="/img/Junimo.gif" alt="junimo" width={60} height={60} />
          <Image src="/img/Junimo.gif" alt="junimo" width={60} height={60} />
        </div>

        <div className="skills-table">
          <h2>My Skills</h2>
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Aboutme>
    </div>
  );
}
