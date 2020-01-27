import React, {Component} from 'react'
import Card from "../components/Card/index";
import axios from "axios"


class AvailableDonations extends Component {
    state = {
        // foodItemDescription: '',
        // amount: '',
        // donationComments: '',
        // storageReqs: '',
        // isClaimed: ''
        donationSubmission: []
    }

    componentDidMount() {
        axios.get('/api/inventory', {
            params: {
                isClaimed: null
            }
        })
            .then(res => {
                console.log(res.data[0]);
                console.log(res.data[0].foodItemDescription);

                this.setState({
                   donationSubmission:[
                        res.data[0].foodItemDescription,
                        res.data[0].amount,
                        res.data[0].donationComments,
                        res.data[0].storageReqs,
                        res.data[0].isClaimed
                   ]})
            })
        .catch(function (error) {
            console.log(error);
        });
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
                <h1>Claim a Donation</h1>
                <p>Take a look at the local donations and claim a donation you would like to pick up.</p>
                <Card ClaimDonation={this.ClaimDonation}
                // {this.state.donations.map((donation) => {
                //     return <div>{donation.foodItemDescription} {donation.amount} {donation.donationComments}
                // {donation.storageReqs} {donation.isClaimed}</div>
                // })}
                ></Card>
            </div>
        );
    }

}

export default AvailableDonations;