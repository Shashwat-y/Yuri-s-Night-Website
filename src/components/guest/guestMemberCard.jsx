import React from 'react';
import './Guest.css';

function GuestMemberCard({ firstname,lastname, role,  imgSrc, bio }) {
  return (
    <div className="col">
      <div className="cardG">
        <img src={imgSrc} className="card-img-top-g" alt={name} />
        <div className="card-body">
          <h3 className="card-title glow_text">{firstname}</h3>
          <h3 className="card-title glow_text">{lastname}</h3>
          <p className="glow_text_bio">{bio}</p>
        </div>
      </div>
    </div>
  );
}

export default GuestMemberCard;