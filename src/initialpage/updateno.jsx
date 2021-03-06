/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import $ from 'jquery';
var axios = require('axios');
class Updateno extends Component {
  constructor(...props) {
    super(...props)
    
    this.state = {
      currentpage: '/',
      isd: '91',
      empid: '',
      result: null,
      error: '',
      userid: '',
      usertype: '',
      adharNo:'',
      mobileno:''

    }
    
  }
  loginClick = (e) => {
    e.preventDefault();
    let path = '../sixotp';
        

      var data = {
        "mobile_no": this.state.mobileno,
        "custom_candidate_id":localStorage.getItem("can")
      }
      
      var config = {
        method: 'post',
        url: 'https://aadhaan.ddns.net/api/v1/aadhaar-mobile-update',
       
        data: data
      };
      var self = this

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          var mobileno = self.state.mobileno
          let path = '../sixotp';
          if (response.data.status == true) {
            self.props.history.push({
                pathname: path,
                state: self.state

            })
        }else
        {
            self.setState({ error:response.data.message })
        }

        })
        .catch(function (error) {
          console.log(error);
          self.setState({ error: "enter valid mobile number" })
        });

  }

  updateInput = (e) => {
    const re = /^[0-9]+$/;
    const value = e.target.value;
    // alert("got data"+value)
    if (value === '' || value.match(re)) {
      this.setState({ mobileno: value });
    }

   

  }
  
  render() {

    return (


      <div className="main-wrapper">
        <Helmet>
          <title>Login - Adhaan HRMS </title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="account-content">
          {/* <a href="/blue/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}

          <div className="container">
            <div className="center_box">


              <div>{this.state.result}</div>
              {/* Account Logo */}
              <div className="account-logo">
                <a href="#"><img src={Applogo} alt="Adhaan" /></a>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  <h2>Candidate Onboarding</h2>
                  <form action="">
                    <div className="form-group">
                      <label>Please Enter Mobile Number</label>
                      <input className="form-control" type="text" maxLength="10" placeholder=" Linked Aadhar Mobile Number "  onChange={this.updateInput}value={this.state.mobileno} />
                     </div>

                    <div className="form-group text-center ">
                      <button onClick={this.loginClick} className="btn btn-primary account-btn" >
                        Update Number</button>
                    </div>
                    <label className="text-danger">{this.state.error}</label>
                  </form>
                 
        
        {/* /Bank Modal */}
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Updateno;
