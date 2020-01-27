import React, { Component } from 'react'
import Card from "../components/Card/index";
import CardHolder from "../components/CardHolder/index"
import ClaimBtn from "../components/ClaimButton/index"
import axios from "axios"


class AvailableDonations extends Component {
    state = {
        donationSubmission: []
            // foodItemDescription,
            // amount,
            // donationComments,
            // storageReqs,
            // isClaimed
    }

    componentDidMount() {
        axios.get('/api/inventory', {
            params: {
                isClaimed: null
            }
        })
            .then(res => {
                // console.log(res.data[0]);
                // console.log(res.data[0].foodItemDescription);

                this.setState(
                    this.donationSubmission = [
                        res.data[0].foodItemDescription,
                        res.data[0].amount,
                        res.data[0].donationComments,
                        res.data[0].storageReqs,
                        res.data[0].isClaimed,
                        res.data[0].id
                    ]
                )
                // console.log(this.donationSubmission);
                this.CreateCard();
            })
            .catch(function (error) {
                console.log(error);
            });
        
    }

    CreateCard() {
        console.log(this.donationSubmission)
        // const donationSubmission = this.donationSubmission;
        // const info = donationSubmission.map((donationSubmission) =>
        //     <li key={donationSubmission.id}>{donationSubmission}</li>
        // );
        // return (
        //     <ul>{info}</ul>
        // )
        const submission = this.donationSubmission

        return (
            <div>
                <div>
                    <p>test</p>
                </div>
                <div>
                    <ul>
                        {submission.map(item => (
                            <li key={item.id}>
                                {item.foodItemDescription}
                            </li>
                        ))}
                    </ul>
                
                </div>
            </div>
        )

        // this.donationSubmission.map(({donationSubmission}) =>
        //     <Card >
        //         <p>Title</p>
        //         <div>{donationSubmission.foodItemDescription} {donationSubmission.amount} 
        //             {donationSubmission.donationComments} {donationSubmission.storageReqs} 
        //             {donationSubmission.isClaimed}
        //         </div>
        //         <ClaimBtn ClaimDonation={this.ClaimDonation} ></ClaimBtn>
        //     </Card>)
    }

    ClaimDonation = event => {
        event.preventDefault();
        axios.put('/api/inventory', {
            isClaimed: true
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div>
                <div>
                    <h1>Claim a Donation</h1>
                    <p>Take a look at the local donations and claim a donation you would like to pick up.</p>
                </div>
                <div>
                    <CardHolder {...this.CreateCard}></CardHolder>
                </div>
            </div>
        )
    }

}

export default AvailableDonations;