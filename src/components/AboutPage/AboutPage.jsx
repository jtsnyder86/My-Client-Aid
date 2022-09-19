import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <p>Technolgies Used:
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Redux-Saga</li>
            <li>PostgreSQL</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Express-Fileupload</li>
            <li>CSS</li>
          </ul>
        </p>
        <p>
          Thank you to:
          <ul>
            <li>The Mitchison Cohort</li>
            <li>Dane and Kris</li>
            <li>Friends and Family</li>
          </ul>
        </p>
    </div>
  );
}

export default AboutPage;
