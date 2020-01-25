
import React, { Component } from 'react'


class DonationSubmissionForm extends Component {
    render() {
        return (
            <div className="donationSubmission">
                <h1>Tell Us About Your Donation</h1>
                <form>
                    <div className="form-group">
                        <label>
                            Food Item Description:
                    <input type="text" name="foodDescription" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Amount:
                    <input type="text" name="amount" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Any comments about this donation?:
                        <input type="text" name="comments" />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            Storage Requirements:
                            <select>
                                <option value="yes">Freezer</option>
                                <option value="no">Refrigerator</option>
                                <option value="no">Dry</option>
                                <option value="no">Canned</option>
                                <option value="no">Fresh Produce</option>
                                <option value="no">Prepared Food</option>
                            </select>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form >
            </div>
        );
    }
}
export default DonationSubmissionForm;
