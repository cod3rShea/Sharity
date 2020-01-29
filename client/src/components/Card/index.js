import React from 'react'
import ClaimBtn from "../ClaimButton/index"
import item from "../../pages/AvailableDonations"

function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-header">
                <h2>{item.foodItemDescription}</h2>
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