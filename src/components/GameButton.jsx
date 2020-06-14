import React from 'react'

const GameButton = ({by, incrementMethod}) => {

    return (
            <div>
                <button className="button"
                        onClick={()=>incrementMethod(by)}>{by}</button>
            </div>
        )
}

export default  GameButton;