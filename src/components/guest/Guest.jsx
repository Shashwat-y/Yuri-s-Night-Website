import React from 'react';
import GuestMemberCard from './guestMemberCard';
import './Guest.css';
import GuestData from './GuestData';

function Team() {
  return (
    <div className="contg text-center py-2 ">
      <h2 className="text-white ">Guest Lecture</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-2 cont">
        {GuestData.map((member, index) => (
          <GuestMemberCard key={index} firstname={member.firstname} lastname={member.lastname} role={member.role} bio={member.bio} imgSrc={member.imgSrc} />
        ))}
      </div>
      </div>
  );
}

export default Team;