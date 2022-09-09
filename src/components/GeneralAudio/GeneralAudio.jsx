import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function GeneralAudio(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store.audio);
    const dispatch = useDispatch();
    const [heading, setHeading] = useState('Functional Component');

    useEffect(() => {
        dispatch({ type: 'FETCH_AUDIO' });
    }, []);

    return (
        <div className='container'>
            <h2>Welcome to some audio</h2>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/347777945&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            {store.map(audio => {
                return (
                    <>
                        <p>{audio.description}</p>
                        <audio controls key={audio.id}>

                            <source src={audio.link} />
                        </audio>
                        
                    </>
                )
            })}
        </div>
    );
}

export default GeneralAudio;