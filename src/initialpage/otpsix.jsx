import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'
import $ from "jquery";

var axios = require('axios');

class OTPSix extends Component {
  constructor(...props) {
    super(...props)
    if (localStorage.getItem("count") == 0) {
      window.location.reload(false);
      localStorage.setItem("count", 1);
    }
    console.log("debug", "", localStorage.getItem("count"))
    this.state = {

      f_otp: '',
      error: '',
      mobileno: '',
      id: '',
      ll: '',
      firstValue: '',
      secondValue: '',
      thirdValue: '',
      fourthValue: '',
      fifthValue: '',
      sixthValue: ''
    }

    // 
  }
  componentDidMount = () => {
    var self = this
    var data = JSON.stringify({
      "candidate_id": localStorage.getItem("can"),
      "given_aadhaar_number": localStorage.getItem("adhar")
    });
    var config1 = {
      method: 'post',
      url: 'https://aadhaan.ddns.net/api/v1/aadhaar-validation-otp-generation',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    console.log("here", config1)
    axios(config1)
      .then(function (ee) {




      })
      .catch(function (error) {
        console.log(error);

      });

  }
  onChange = (e) => {
    // e.preventDefault();

    const value = e.target.value;
    // alert("got data"+value)

    this.setState({ f_otp: this.state.f_otp + value });


  }
  onsubmit = (e) => {
    e.preventDefault();
    var _otp = this.state.firstValue + this.state.secondValue + this.state.thirdValue + this.state.fourthValue + this.state.fifthValue + this.state.sixthValue;
    console.log(_otp)

    localStorage.setItem("count", 2);

    // this.state.f_otp = _otp;
    if (_otp.length != 6) {
      // alert(""+this.state.f_otp)
      // error

      this.setState({ error: "Please Enter valid otp" })
    } else {

      var user_id = this.props.location.state.userid
      var empid = this.props.location.state.empid
      var user_type = this.props.location.state.usertype
      // var otp = this.state.f_otp
      this.setState({ mobileno: empid, id: user_id })
      var data = JSON.stringify({

        "otp": _otp,
        "candidate_id": localStorage.getItem("can"),
        "mobile_no": localStorage.getItem("mobile")
      });
      var self = this
      var config1 = {
        method: 'post',
        url: 'https://aadhaan.ddns.net/api/v1/aadhaar-otp-verification',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      console.log("here", config1)
      axios(config1)
        .then(function (ee) {
          // mobileno=self.state.
          self.setState({ error: ee.data.message })
          console.log("resend otp", ee)
          if (ee.data.status == true) {
            let path = '/app/profile/candidate-profile';
            self.props.history.push({
              pathname: path,
              state: self.state
            })
          } else {
            self.setState({ error: response.data.message })
          }

        })
        .catch(function (error) {
          console.log(error);
          // datareturn=error
        });

    }
  }

  resend = (e) => {
    e.preventDefault();
    // console.log(this.props)
    // console.log(this.props.location.state)
    this.setState({ f_otp: '' });
    var isd = this.props.location.state.isd
    var mobile = this.props.location.state.empid
    console.log(this.props.location)
    var data = JSON.stringify({ "isd": "" + isd, "mobile_no": "" + mobile });

    var self = this
    var config1 = {
      method: 'post',
      url: 'https://aadhaan.ddns.net/api/v1/adhaar-validation-otp-generation',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    console.log("here", config1)

    axios(config1)
      .then(function (ee) {
        self.setState({ error: ee.data.message })
        window.location.reload(false);
        console.log("resend otp", ee)
        //  datareturn=ee


      })
      .catch(function (error) {
        console.log(error);
        // datareturn=error
      });

  }
  render() {

    return (
      <div className="main-wrapper">
        <Helmet>
          <title>OTP - Adhan HRMS </title>
          <meta name="description" content="Login page" />
        </Helmet>
        <div className="account-content">

          <div className="container">
            <div className="center_box">

              {/* Account Logo */}
              <div className="account-logo">
                <a href="#"><img src={Applogo} alt="Adhaan Solution Pvt. Ltd. " /></a>
              </div>
              {/* /Account Logo */}
              <div className="account-box">
                <div className="account-wrapper">
                  <p className="account-subtitle">Continue to verify mobile number</p>
                  <h3 className="account-title">OTP</h3>

                  {/* Account Form */}
                  <form action="#">
                    <div className="otp-wrap">
                      {/* <input autoFocus type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
                      <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
                      <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
                      <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} /> */}
                      <input
                        type="text"
                        name="ssna"
                        autoFocus
                        className="custom-otp-input"
                        maxLength={1} value={this.state.firstValue}
                        onChange={this.rr} />
                      <input
                        type="text"
                        name="ssnb"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.secondValue}
                        onChange={this.rr1} />
                      <input
                        type="text"
                        name="ssnc"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.thirdValue}
                        onChange={this.rr2} />
                      <input
                        type="text"
                        name="ssnd"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.fourthValue}
                        onChange={this.rr3} />
                      <input
                        type="text"
                        name="ssne"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.fifthValue}
                        onChange={this.rr4} />
                      <input
                        type="text"
                        name="ssnf"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.sixthValue}
                        onChange={this.rr5} />

                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit" onClick={this.onsubmit}>Submit</button>
                    </div>
                    <div className="account-footer">
                      <p>OTP Not Received? <a href="" onClick={this.resend}>Resend OTP</a></p>
                    </div>
                    <label className="text-danger">{this.state.error}</label>
                  </form>
                  {/* /Account Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }


  rr = (e) => {
    e.preventDefault();
    this.setState({ firstValue: e.target.value })
    if (e.target.value.length > 0) {
      const nextSibling = document.querySelector('input[name="ssnb"]')
      $(".custom-otp-input").keyup(function (event) {
        if (event.which == 8) {
          $(event.target).prev('.custom-otp-input').focus();
          $(event.target).prev('.custom-otp-input').select();
        }
      });
      if (nextSibling != null) {
        nextSibling.focus();
      }
    }
  }
  rr1 = (e) => {
    e.preventDefault();
    this.setState({ secondValue: e.target.value })
    if (e.target.value.length > 0) {
      const nextSibling = document.querySelector('input[name="ssnc"]')
      $(".custom-otp-input").keyup(function (event) {
        if (event.which == 8) {
          $(event.target).prev('.custom-otp-input').focus();
          $(event.target).prev('.custom-otp-input').select();
        }
      });
      if (nextSibling != null) {
        nextSibling.focus();
      }
    }
  }
  rr2 = (e) => {
    e.preventDefault();
    this.setState({ thirdValue: e.target.value })
    if (e.target.value.length > 0) {
      const nextSibling = document.querySelector('input[name="ssnd"]')
      $(".custom-otp-input").keyup(function (event) {
        if (event.which == 8) {
          $(event.target).prev('.custom-otp-input').focus();
          $(event.target).prev('.custom-otp-input').select();
        }
      });
      if (nextSibling != null) {
        nextSibling.focus();
      }
    }

  }
  rr3 = (e) => {
    e.preventDefault();
    this.setState({ fourthValue: e.target.value })
    if (e.target.value.length > 0) {
      const nextSibling = document.querySelector('input[name="ssne"]')
      $(".custom-otp-input").keyup(function (event) {
        if (event.which == 8) {
          $(event.target).prev('.custom-otp-input').focus();
          $(event.target).prev('.custom-otp-input').select();

        }
      });
      if (nextSibling != null) {
        nextSibling.focus();
      }
    }
  }
  rr4 = (e) => {
    e.preventDefault();
    this.setState({ fifthValue: e.target.value })
    if (e.target.value.length > 0) {
      const nextSibling = document.querySelector('input[name="ssnf"]')
      $(".custom-otp-input").keyup(function (event) {
        if (event.which == 8) {
          $(event.target).prev('.custom-otp-input').focus();
          $(event.target).prev('.custom-otp-input').select();
        }
      });
      if (nextSibling != null) {
        nextSibling.focus();
      }
    }
  }
  rr5 = (e) => {
    e.preventDefault();
    this.setState({ sixthValue: e.target.value })
    $(".custom-otp-input").keyup(function (event) {
      if (event.which == 8) {
        $(event.target).prev('.custom-otp-input').focus();
        $(event.target).prev('.custom-otp-input').select();
      }
    });
  }
}

export default OTPSix;