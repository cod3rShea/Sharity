import React, { Component } from 'react'
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
                isClaimed: false
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
            <Card>
            </Card>
            // <div className="card text-center">
            //     <div className="card-header">
            //         <h2>{this.state.foodItemDescription}</h2>
            //     </div>
            //     <div className="card-body">{this.state.amount}
            //         <br></br>
            //         {this.state.storageReqs}
            //         <br></br>
            //         {this.state.donationComments}
            //         <ClaimBtn
            //             onClick={this.ClaimDonation}
            //         >
            //         </ClaimBtn>
            //     </div>
            // </div>




            //   <div className="container">
            //     <div className="jumbotron mt-5">
            //       <div className="col-sm-8 mx-auto">
            //         <h1 className="text-center">PROFILE</h1>
            //       </div>
            //       <table className="table col-md-6 mx-auto">
            //         <tbody>
            //           <tr>
            //             <td>Email</td>
            //             <td>{this.state.email}</td>
            //           </tr>
            //         </tbody>
            //       </table>
            //     </div>
            //   </div>
        )
    }
}


export default AvailableDonations;