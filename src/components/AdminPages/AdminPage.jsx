import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import GeneralAudioButton from '../GeneralAudioButton/GeneralAudioButton';
import ClientListButton from '../AdminButtons/ClientListButton';
import AddAudioButton from '../AdminButtons/AddAudioButton';
import AudioListButton from '../AdminButtons/AudioListButton';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AdminPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const user = useSelector((store) => store.user);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div className='container'>
      <h2>Welcome, {user.first_name}!</h2>
      <p>Your key notes: {user.info}</p>
      {/* <LogOutButton className="btn" /> */}
      <ClientListButton className="btn" />
      <AddAudioButton className="btn" />
      <AudioListButton className="btn" />
    </div>
  );
}

export default AdminPage;
