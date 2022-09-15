import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ClientList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const clients = useSelector((store) => store.client);
  const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CLIENTS' });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: 'DELETE_CLIENT',
      payload: id
    });
  }

  return (
    <>
      <div className='container'>
        <h2>Client list</h2>
        {clients.map(user => {
          return (
            <>
              <table>
                <tbody>
                  <tr key={user.id}>
                    {!user.admin && <> <td>{user.first_name} {user.last_name}</td>
                    <td><button onClick={() => history.push(`/editClient/${user.id}`)}>Edit</button></td>
                    <td><button onClick={() => handleDelete(user.id)}>Delete</button></td></>}
                    {!user.approved && <td><button onClick={() => dispatch({ type: 'APPROVE' })}>Approve</button></td>}
                  </tr>
                </tbody>
              </table>
            </>
          )
        })}
      </div>
      <ReturnButton />
    </>
  );
}

export default ClientList;
