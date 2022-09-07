import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import MyAudioButton from '../MyAudioButton/MyAudioButton';
import GeneralAudioButton from '../GeneralAudioButton/GeneralAudioButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.first_name}! {user.admin}</h2>
      <p>Your key notes: {user.info}</p>
      {/* <LogOutButton className="btn" /> */}
      <GeneralAudioButton className="btn" />
      <MyAudioButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
