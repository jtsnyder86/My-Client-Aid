import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ClientList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch({ type: });
  // }, [dispatch]);

  return (
    <div className='container'>
      <h2>Client List</h2>
    </div>
  );
}

export default ClientList;
