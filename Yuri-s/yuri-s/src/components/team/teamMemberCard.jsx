// TeamMemberCard.js
import React from 'react';
import './Team.css';

function TeamMemberCard({ name, role, bio, imgSrc, linkedIN, insta, mail }) {
  return (
    <div className="col">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={name} />
        <div className="card-body">
          <h3 className="card-title glow_text">{name}</h3>
          <p className="glow_text">{role}</p>
          {/* <p className="card-text">{bio}</p> */}
        </div>
        <div className="d-flex justify-content-evenly ic">
          <a href={linkedIN}><i className="bi bi-linkedin"></i></a>
          <a href={insta}><i className="bi bi-instagram"></i></a>
          <a href={mail}><i className="bi bi bi-envelope-check-fill"></i></a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
