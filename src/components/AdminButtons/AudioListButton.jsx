import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function AudioListButton(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = () =>{
        // dispatch({
        //     type: 'FETCH_AUDIO'
        // })
    history.push('/audioList')
};

    return (
        <button
            // This button shows up in multiple locations and is styled differently
            // because it's styled differently depending on where it is used, the className
            // is passed to it from it's parents through React props
            className={props.className}
            onClick={onClick}
        >
            Audio List
        </button>
    );
}

export default AudioListButton;
