import React from 'react'

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{props.heading}This is h2</h2>
            </div>
            <div className="card-body">{props.children}This is the body</div>
        </div>
    );
}
export default Card;