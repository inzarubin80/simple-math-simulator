import React from 'react'
import InputNumber from "./InputNumber";


const InputRange = ({onChangeMin, onChangeMax, minValue, maxValue, title}) => {



    return (

            <div  style={{"display": "flex", "flexDirection": "row", "flexWrap": "nowrap"}}>

                <div >
                    <label> {title} </label>
                </div>

                <div style={{"padding": "10px", "marginRight": "5px"}}>
                    <InputNumber onChange={onChangeMin} title={"Min"} value={minValue}/>
                </div>

                <div style={{"padding": "10px", "marginRight": "5px"}}>
                    <InputNumber onChange={onChangeMax} title={"Max"} value={maxValue}/>
                </div>

            </div>

    );
}

export  default  InputRange;
