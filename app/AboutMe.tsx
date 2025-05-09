import React from "react";
import "./AboutMe.css";

type AboutMeProps = {
  children: React.ReactNode;
}

const Aboutme: React.FC<AboutMeProps> = ({ children }) => {
  return (
    <div className="detailPage-content">
      {children}
    </div>
  );
}

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

export default function AboutMe(){
  return(
    <div className="aboutme">
      <Aboutme>
        <p>
          <span className="tab"></span>Hello👋! My name is Yueyan Ying, and I am a graduate student in Computer Science student at McGill University.
          I am passionate about front-end and back-end development as well as databases. I am always eager to learn new technologies and enhance my skills.
        </p>
          

        <h4>Academic Interests</h4>
        <p>
          <span className="tab"></span>I am particularly interested in web development, data science, software development, and artificial intelligence.
          My academic journey is fueled by curiosity and hands-on experiences. I am always looking for opportunities to grow and tackle new challenges.
        </p>

        <h4>Personal Passions</h4>
        <p>
          <span className="tab"></span>Outside of work, I love traveling, playing video games, and spending time with family and friends. 
          Additionally, my faviourite game is stardew Valley, and I am a huge fan of this game!!!👩‍🌾🌻
        </p>

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
  )
}