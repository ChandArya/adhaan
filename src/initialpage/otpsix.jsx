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
      a: '',
      b: '',
      c: '',
      d: '',
      e1:'',
      f:''


    }

    // 
  }
  componentDidMount=()=>
  {
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
    var _otp = this.state.a + this.state.b + this.state.c + this.state.d+this.state.e1+this .state.f;
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
        }else
        {
            self.setState({ error:response.data.message })
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
                        name="ssn-1"
                        autoFocus
                        className="otp-input"
                        maxLength={1} value={this.state.a}
                        onChange={this.rr} />
                      <input
                        type="text"
                        name="ssn-2"
                        className="otp-input"
                        maxLength={1} value={this.state.b}
                        onChange={this.rr1} />
                      <input
                        type="text"
                        name="ssn-3"
                        className="otp-input"
                        maxLength={1} value={this.state.c}
                        onChange={this.rr2} />
                      <input
                        type="text"
                        name="ssn-4"
                        className="otp-input"
                        maxLength={1} value={this.state.d}
                        onChange={this.rr3} />
                         <input
                        type="text"
                        name="ssn-5"
                        className="otp-input"
                        maxLength={1} value={this.state.e1}
                        onChange={this.rr4} />
                      <input
                        type="text"
                        name="ssn-6"
                        className="otp-input"
                        maxLength={1} value={this.state.f}
                        onChange={this.rr5} />

                    </div>
                    <div className="form-group text-center">
                      <button className="btn btn-primary account-btn" type="submit" onClick={this.onsubmit}>Submit</button>
                    </div>
                    <div className="account-footer">
                      <p>OTP Not Recieved? <a href="" onClick={this.resend}>Resend OTP</a></p>
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
    this.setState({ a: e.target.value })
    if (this.state.a.length <= 0) {
      // const { maxLength, value, name } = e.target;
      // this.setState({ a: e.target.value })

      // Check if they hit the max character length
      if (this.state.a.length > 0) {
        console.log('this tis')
        const nextSibling = document.querySelector(
          `input[name=ssn-2]`)

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
  rr1 = (e) => {
    e.preventDefault();
    this.setState({ b: e.target.value })
    if (this.state.b.length == 0) {
      // const { maxLength, value, name } = e.target;


      // Check if they hit the max character length
      if (this.state.b.length >= 0) {
        console.log('this tis')
        const nextSibling = document.querySelector(
          `input[name=ssn-3]`)
          return
        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
  rr2 = (e) => {
    e.preventDefault();
    this.setState({ c: e.target.value })
    if (this.state.c.length <= 0) {
      // const { maxLength, value, name } = e.target;


      // Check if they hit the max character length
      if (this.state.c.length >= 0) {
        // console.log('this tis')
        const nextSibling = document.querySelector(
          `input[name=ssn-4]`)
          return
        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
  rr3 = (e) => {
    e.preventDefault();
    this.setState({ d: e.target.value })
    if (this.state.d.length <= 0) {
      // const { maxLength, value, name } = e.target;


      // Check if they hit the max character length
      if (this.state.d.length >= 0) {
        console.log('this tis')
        const nextSibling = document.querySelector(
          `input[name=ssn-5]`)
          return
        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
  rr4 = (e) => {
    e.preventDefault();
    this.setState({ e1: e.target.value })
    if (this.state.e1.length <= 0) {
      // const { maxLength, value, name } = e.target;


      // Check if they hit the max character length
      if (this.state.e1.length >= 0) {
        console.log('this tis')
        const nextSibling = document.querySelector(
          `input[name=ssn-6]`)

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
  rr5 = (e) => {
    e.preventDefault();
    this.setState({ f: e.target.value })
    if (this.state.f.length <= 0) {
      // const { maxLength, value, name } = e.target;


      // Check if they hit the max character length
      if (this.state.f.length >= 0) {
        // console.log('this tis')
        // const nextSibling = document.querySelector(
        //   `input[name=ssn-8]`)

        // // If found, focus the next field
        // if (nextSibling !== null) {
        //   nextSibling.focus();
        // }
      }


    }


  }
}

export default OTPSix;