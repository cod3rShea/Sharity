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
    );
}

export default Card;