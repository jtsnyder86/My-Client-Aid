import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';
import axios from 'axios';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddAudio(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState('');
    // const [link, setLink] = useState('');
    // const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();
    const history = useHistory();

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
    }

    const addAudio = async (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_AUDIO',
            payload: {
                description: description,
                // file: file,
                link: `/upload/${fileName}`,
            },
        });

        const formData = new FormData();
        formData.append('file', file);
        // formData.append("file", fileName);

        axios.post('/api/audio/uploaded', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                alert("File Upload success");
                const { fileName, filePath } = res.data;
                // setUploadedFile({ fileName, filePath });
            })
            .catch((err) => {
                alert("File Upload Error", err)
            });

        history.push('/admin')
    }; // end addAudio

    return (
        <>
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
                    <input
                        type="file"
                        id='customFile'
                        onChange={onChange}
                    />
                    {/* <label htmlFor='customFile'>
                        {fileName}
                    </label> */}
                </div>
                {/* <div>
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
                </div> */}
                {/* <div>
                    <label htmlFor="general">
                        General Use:
                        <select
                            name='general'
                            id='general'
                            value={general}
                            onChange={(event) => setGeneral(event.target.value)}
                            required>
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

export default AddAudio;
