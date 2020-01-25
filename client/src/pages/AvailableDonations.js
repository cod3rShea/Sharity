import React, {Component} from 'react'
import Card from "../components/Card/index";
import axios from "axios"


class AvailableDonations extends Component {
    state = {
        foodItemDescription: '',
        amount: '',
        donationComments: '',
        storageReqs: '',
        isClaimed: ''
    }

    componentDidMount() {
        axios.get('/api/inventory', {
            params: {
                isClaimed: null
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    foodItemDescription: res.data.foodItemDescription,
                    amount: res.amount,
                    donationComments: res.donationComments,
                    storageReqs: res.storageReqs,
                    isClaimed: res.isClaimed
                })
            })
        .then(function (response) {
            console.log(response);
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
                <Card ClaimDonation={this.ClaimDonation}></Card>
            </div>
        );
    }

}

export default AvailableDonations;