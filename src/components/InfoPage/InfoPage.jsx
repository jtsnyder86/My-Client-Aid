import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Most challenging feature: file upload!</p>
      <p>Future challenge: upload the file to a cloud database!</p>
    </div>
  );
}

export default InfoPage;
