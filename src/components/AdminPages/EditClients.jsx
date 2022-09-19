import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import userReducer from '../../redux/reducers/user.reducer';
import ReturnButton from '../ReturnButton/ReturnButton';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditClients(props) {

  
  const audio = useSelector((store) => store.audio);
  const edit = useSelector((store) => store.edit);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const [first, setFirst] = useState(edit.first_name);
  const [last, setLast] = useState(edit.last_name);
  const [info, setInfo] = useState(edit.info);
  const [audioSelection, setAudioSelection] = useState('');

  useEffect(() => {
    // dispatch({type: 'SET_EDIT'});
    dispatch({ type: 'FETCH_AUDIO' });
  }, []);

  console.log('this is the edit store:', edit);

  const editClient = (event) => {
    event.preventDefault();
    console.log(first, info, audioSelection);

    dispatch({
      type: 'EDIT_CLIENT',
      payload: {
        id: edit.id,
        first_name: first,
        last_name: last,
        info: info,
        audio_id: audioSelection
      },
    });
    history.push('/clientList')
  }; // end addAudio

  return (
    <>
      <form className="formPanel" onSubmit={editClient}>
        <h2>Edit Client details</h2>
        {/* {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                </h3>
            )} */}
        <div>
          <label htmlFor="first_name">
            First Name:
            <input
              type="text"
              name="first_name"
              value={first}
              onChange={(event) => setFirst(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="last_name">
            Last Name:
            <input
              type="text"
              name="last_name"
              value={last}
              onChange={(event) => setLast(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="info">
            Key info:
            <input
              type="text"
              name="info"
              value={info}
              onChange={(event) => setInfo(event.target.value)}
            />
          </label>
        </div>
        <div>
          <ul>Choose audio:
            {audio.map(file => {
              return (
                <li style={{listStyleType: "none" }} key={file.id}>
                  <label>
                    <input                      
                      type='checkbox'
                      value={file.id}
                      id={file.id}
                      onChange={(event) => setAudioSelection(event.target.value)} />
                    {file.description}
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Submit" />
        </div>
      </form>
      <ReturnButton />
    </>
  );
}

export default EditClients;
