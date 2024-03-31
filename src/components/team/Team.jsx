// Team.js
import React from 'react';
import TeamMemberCard from './teamMemberCard';
import teamMembers from './teamMembersData';
import secyData from './Secy';
import convenorData from './Convenor';
import './Team.css';

function Team() {
  return (
    <div className="containerTeam text-center py-2">
      <h2 className="text-white">Secretary of Astronomy Club</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-2 cont">
        {secyData.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} imgSrc={member.imgSrc} linkedIN={member.linkedIN} insta={member.insta} mail={member.mail}/>
        ))}
      </div>
      <h2 className="text-white">Convenors of Yuri's Night</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-2 cont">
        {convenorData.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} imgSrc={member.imgSrc} linkedIN={member.linkedIN} insta={member.insta} mail={member.mail}/>
        ))}
      </div>
      <h2 className="text-white">Event Heads</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 py-2 cont">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} role={member.role} bio={member.bio} imgSrc={member.imgSrc} linkedIN={member.linkedIN} insta={member.insta} mail={member.mail}/>
        ))}
      </div>
    </div>
  );
}

export default Team;
