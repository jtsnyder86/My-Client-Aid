import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReturnButton from '../ReturnButton/ReturnButton';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AudioList(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store.audio);
    const [heading, setHeading] = useState('Functional Component');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_AUDIO' });
    }, []);

    const handleDelete = (id) => {
        console.log(id);
        dispatch({ 
            type: 'DELETE_AUDIO',
            payload: id
        });
    }

    return (
        <>
            <div className='container'>
                <h2>All audio</h2>
                {store.map(audio => {
                    return (
                        <>
                            <table>
                                <tbody>
                                    <tr key={audio.id}>
                                        <td>{audio.description}</td>
                                        <td><button onClick={() => history.push('/audio')}>Playback</button></td>
                                        <td><button onClick={() => history.push(`/editAudio/${audio.id}`)}>Edit</button></td>
                                        <td><button onClick={() => handleDelete (audio.id)}>Delete</button></td>
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

export default AudioList;
