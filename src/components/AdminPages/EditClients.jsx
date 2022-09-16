import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditClients(props) {

  const [description, setDescription] = useState('');
  const [general, setGeneral] = useState('');
  const [link, setLink] = useState('');
  const store = useSelector((store) => store.audio);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_AUDIO' });
  }, []);

  const editClient = (event) => {
    event.preventDefault();

    dispatch({
      type: 'EDIT_CLIENT',
      payload: {
        id: params.id,
        description: description,
        general: general,
        link: link,
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
          <label htmlFor="description">
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="link">
            Link:
            <input
              type="text"
              name="link"
              value={link}
              onChange={(event) => setLink(event.target.value)}
            />
          </label>
        </div>
        <div>
          <ul>Choose audio:
            {store.map(audio => {
              return (
                <li style={{listStyleType: "none" }} key={audio.id}>
                  <label htmlFor="general">
                    <input                      
                      type='checkbox'
                      name='general'
                      id='general'
                      value={audio.description}
                      onChange={(event) => setGeneral(event.target.value)} />
                    {audio.description}
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
