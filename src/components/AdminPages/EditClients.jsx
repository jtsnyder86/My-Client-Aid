import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import ReturnButton from '../ReturnButton/ReturnButton';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditClients(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <>
    <div className='container'>
      <h2>Edit Clients</h2>
    </div>
    <ReturnButton />
    </>
  );
}

export default EditClients;
