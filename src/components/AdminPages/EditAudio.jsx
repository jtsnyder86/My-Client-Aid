import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function EditAudio(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    
    const audio = useSelector((store) => store.audioEdit);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [description, setDescription] = useState(audio.description);
    const [link, setLink] = useState(audio.link);

    const editAudio = (event) => {
        event.preventDefault();

        dispatch({
            type: 'EDIT_AUDIO',
            payload: {
                id: audio.id,
                description: description,
                link: link,
            },
        });
        history.push('/audioList')
    }; // end editAudio

    return (
        <>
            <form className="formPanel" onSubmit={editAudio}>
                <h2>Edit audio details</h2>
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
                {/* <div>
                    <label htmlFor="general">
                        General Use:
                        <select
                            name='general'
                            id='general'
                            value={general}
                            onChange={(event) => setGeneral(event.target.value)}>
                            <option value='null'></option>
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </select>
                    </label>
                </div> */}
                <div>
                    <input className="btn" type="submit" name="submit" value="Submit" />
                </div>
            </form>
            <ReturnButton />
        </>
    );
}

export default EditAudio;
