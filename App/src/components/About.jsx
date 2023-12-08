// // About.jsx
// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <p>Welcome to Luther CookBook, where food brings people together!</p>
//       {/* Add more content about your community cookbook */}
//     </div>
//   );
// }

// export default About;

import React from 'react';

const containerStyle = {
  maxWidth: '1200px',
  margin: 'auto',
  padding: '20px',
};

const aboutSectionStyles = {
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px',
};

const teamMemberStyles = {
  marginBottom: '30px',
};

const imageStyles = {
  width: '40%',
  maxHeight: '500px',
  borderRadius: '8px',
  marginBottom: '15px',
};

const titleStyles = {
  fontWeight: 'bold',
  color: '#7d4071'
};

const About = () => {
  return (
    <div style={containerStyle}>
      <div style={aboutSectionStyles}>
        <h1>About Us Page</h1>
        <p style={titleStyles}>Some words about who we are and what we do for this website.</p>
       
      </div>

      <h1 style={titleStyles} className="text-center">OUR TEAM</h1>

      <div className="row">
        <TeamMember
          name="Peter Toso"
          title="Back-end Master"
          description="Live laugh love."
          email="pete@harvard.edu"
          imageSrc="public/static/Peter.jpg"
        />
        <TeamMember
          name="Huy Nguyen"
          title="Front-end Wizard"
          description="Be kind and kindness will come back to you."
          email="huy@stanford.edu"
          imageSrc="public/static/Huy.jpg"
        />
      </div>
    </div>
  );
};

const TeamMember = ({ name, title, description, email, imageSrc }) => {
  return (
    <div className="col-lg-6 team-member" style={teamMemberStyles}>
      <img src={imageSrc} alt={name} style={imageStyles} />
      <div style={containerStyle}>
        <h2>{name}</h2>
        <p style={titleStyles}>{title}</p>
        <p>{description}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};


export default About;

