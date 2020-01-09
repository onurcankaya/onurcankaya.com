import React from 'react'

const Skills = ({ skills }) => (
  <div className="section-container">
    <div className="title">{skills.title}</div>
    {skills &&
      skills.skills.map((skill, index) => (
        <div key={index}>
          <div className="skill">{skill.description}</div>
        </div>
      ))}
  </div>
)

export default Skills
