import React from 'react'
import ClaimBtn from "../ClaimButton/index"

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{props.foodItemDescription}</h2>
            </div>
            <div className="card-body">{props.amount}
                <br></br>
                {props.storageReqs}
                <br></br>
                {props.donationComments}
                <ClaimBtn
                    onClick={props.ClaimDonation}
                >
                </ClaimBtn>
            </div>
        </div>

        // <div className="card text-center">
        //     <div className="card-header">
        //         <h2>{props.heading}This is h2</h2>
        //     </div>
        //     <div className="card-body">{props.children}This is the body</div>
        // </div>
    );
}

export default Card;