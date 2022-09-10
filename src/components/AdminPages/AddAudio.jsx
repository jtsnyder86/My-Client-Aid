import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReturnButton from '../ReturnButton/ReturnButton';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddAudio(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [description, setDescription] = useState('');
    const [general, setGeneral] = useState('');
    const [link, setLink] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const addAudio = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_AUDIO',
            payload: {
                description: description,
                general: general,
                link: link,
            },
        });
    }; // end registerUser

    return (
        <form className="formPanel" onSubmit={addAudio}>
            <h2>Add audio</h2>
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
                        required
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
                        required
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
                        onChange={(event) => setGeneral(event.target.value)}
                        required>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                </label>
            </div>
            <div>
                <input className="btn" type="submit" name="submit" value="Submit" />
            </div>
        </form>
    );
}

export default AddAudio;
