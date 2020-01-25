import React, { Component } from "react";
import axios from "axios";
import { Input, TextArea, Select, FormBtn } from "../components/DonationSubmissionForm";

class donate extends Component {
    state = {
        foodItemDescription: "",
        amount: "",
        donationComments: "",
        storageReqs: "",
        pickUpDeadline: "",
        dollarValue: "",
        isClaimed: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    donateFormSubmit = event => {
        event.preventDefault();
        axios.post('/api/inventory', {
            foodItemDescription: this.state.foodItemDescription,
            amount: this.state.amount,
            donationComments: this.state.donationComments,
            storageReqs: this.state.storageReqs,
            pickUpDeadline: this.state.pickUpDeadline,
            dollarValue: this.state.dollarValue,
            isClaimed: false
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
            <form>
                <Input
                    type="text"
                    label="FoodItemDescription"
                    defaultValue={this.state.foodItemDescription}
                    onChange={this.handleInputChange}
                    name="foodItemDescription"
                    placeholder="Food Item Description"
                />
                <Input
                    defaultValue={this.state.amount}
                    onChange={this.handleInputChange}
                    name="amount"
                    placeholder="Amount"
                />
                <Select
                    defaultValue={this.state.storageReqs}
                    onChange={this.handleInputChange}
                    name="storageReqs"
                    placeholder="Storage Requirements"
                />
                <Input
                    type="date"
                    defaultValue={this.state.pickUpDeadline}
                    onChange={this.handleInputChange}
                    name="pickUpDeadline"
                    placeholder="Pick Up Deadline"
                />
                <Input
                    type="currency"
                    pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                    defaultValue={this.state.dollarValue}
                    onChange={this.handleInputChange}
                    name="dollarValue"
                    placeholder="Dollar Value"
                />
                <TextArea
                    defaultValue={this.state.donationComments}
                    onChange={this.handleInputChange}
                    name="donationComments"
                    placeholder="Any comments about this donation?"
                />
                <FormBtn
                    // disabled={!(this.state.foodItemDescription && this.state.amount && this.state.pickUpDeadline)}
                    onClick={this.donateFormSubmit}
                >
                    Submit Donation
                </FormBtn>
            </form>
        );
    }

};

export default donate;