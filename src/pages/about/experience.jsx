import React from 'react'

const Experience = ({ experience }) => (
  <div className="section-container">
    <div className="title">{experience.title}</div>
    {experience &&
      experience.experience.reverse().map((item, index) => (
        <div className="experience" key={index}>
          <div className="role">{`${item.role} — ${item.time}`}</div>
          <div className="company-name">{item.companyName}</div>
          <div className="location">{item.location}</div>
          <div className="description">{item.description}</div>
        </div>
      ))}
  </div>
)

export default Experience
