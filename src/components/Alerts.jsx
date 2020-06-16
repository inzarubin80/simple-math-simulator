import React from 'react'
import {setErrors} from "../redux/actions";

const Alert = ({text}) => {

    return (
        <div className="alert alert-danger" role="alert">
            {text}
        </div>
    );
}


export  default  Alert;
