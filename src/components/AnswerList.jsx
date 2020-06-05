import React from 'react'

const AnswerList = ({story}) => {
    const listItems = story.map((number, id) =>
        <li key={id} className = {number.itsTrue ? "list-group-item list-group-item-success" : "list-group-item list-group-item-danger"} >{number.task}</li>
    );
    return (

        <nav>
            <ul className="list-group">{listItems}</ul>
        </nav>


    );
}

export  default  AnswerList;
