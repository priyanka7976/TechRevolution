// Member.js

import React from 'react';
import './Member.css'; // Import CSS for Member component styling

function Member(props) {
  return (
    <div className="member-card">
      <img className="member-image" src={props.image} alt={props.name} />
      <div className="member-info">
        <h2 className="member-name">{props.name}</h2>
        <p className="member-position">{props.position}</p>
        <p></p>
        <div className="member-links">
          {props.github && (
            <a className="member-github" href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
          {<p></p>}

          {props.linkedin && (
            <a className="member-linkedin" href={props.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </div>
        <p className="member-details">{props.details}</p>
      </div>
    </div>
  );
}

export default Member;
