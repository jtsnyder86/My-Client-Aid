import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

function MyAudioButton(props) {
  const dispatch = useDispatch();
    const history = useHistory();

    const audioClick = () =>{
        dispatch({
            type: 'FETCH_MY_AUDIO'
        })
    history.push('/audio')
};

    return (
        <button
            // This button shows up in multiple locations and is styled differently
            // because it's styled differently depending on where it is used, the className
            // is passed to it from it's parents through React props
            className={props.className}
            onClick={audioClick}
        >
            My Audio
        </button>
    );
}

export default MyAudioButton;
