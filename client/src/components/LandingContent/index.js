import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LandingContent extends Component {
  render() {
    return (
      <div className="Home">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome to Sharity!</h1>
            
            <Link to="/sign-in">
            <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
              </button>
            </Link>
            
            <Link to="/user-registration">
            <button

                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Create an Account
              </button>
            </Link>
              
        </div>
        </div>
      </div>
    )
  }
}

export default LandingContent;