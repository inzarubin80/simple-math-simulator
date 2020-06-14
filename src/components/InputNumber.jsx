import React from 'react'
import './Game.css'

const InputNumber = ({onChange, title, value}) => {

    return (

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{title}</span>
            </div>
            <input type="number" className="form-control" min={1} value={value}
                   onChange={(event)=>onChange(Number(event.target.value))} aria-describedby="basic-addon1"/>
        </div>


    );
}

export  default  InputNumber;
