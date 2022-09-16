import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './ReturnButton.css'

function ReturnButton(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = () =>{
        // dispatch({
        //     type: 'FETCH_AUDIO'
        // })
    history.push('/home')
};

    return (
        <button
            // This button shows up in multiple locations and is styled differently
            // because it's styled differently depending on where it is used, the className
            // is passed to it from it's parents through React props
            className={props.className}
            onClick={onClick}
        >
            Return to Profile
        </button>
    );
}

export default ReturnButton;
