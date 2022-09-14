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
    const [description, setDescription] = useState('');
    const [general, setGeneral] = useState('');
    const [link, setLink] = useState('');
    // const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const editAudio = (event) => {
        event.preventDefault();

        dispatch({
            type: 'EDIT_AUDIO',
            payload: {
                id: params.id,
                description: description,
                general: general,
                link: link,
            },
        });
        history.push('/audioList')
    }; // end addAudio

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
                <div>
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
                </div>
                <div>
                    <input className="btn" type="submit" name="submit" value="Submit" />
                </div>
            </form>
            <ReturnButton />
        </>
    );
}

export default EditAudio;