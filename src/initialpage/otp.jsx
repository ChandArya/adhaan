import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'
import $ from "jquery";
import OtpInput from 'react-otp-input';

var axios = require('axios');

class OTPscreen extends Component {
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
      temp: '',

    }

    // 
  }
  // componentDidMount=()=>
  // {
  //   this.setState({f_otp:'' })
  //   // 

  // }
  onChange = (e) => {
    // e.preventDefault();

    const value = e.target.value;
    // alert("got data"+value)

    this.setState({ f_otp: this.state.f_otp + value });


  }

  onsubmit = (e) => {
    e.preventDefault();
    var _otp = this.state.a + this.state.b + this.state.c + this.state.d;
    console.log(_otp)
    if (_otp.length != 4) {
      this.setState({ error: "Please Enter valid otp" })
    } else {
      localStorage.setItem("count", 2);
      var user_id = this.props.location.state.userid
      var empid = this.props.location.state.empid
      var user_type = this.props.location.state.usertype
      console.log(data)
      // var otp = this.state.f_otp
      this.setState({ mobileno: empid, id: user_id })
      var data = JSON.stringify({
        "user_id": user_id,
        "OTP": _otp,
        "user_type": user_type
      });
      var self = this
      var config1 = {
        method: 'post',
        url: 'https://aadhaan.ddns.net/api/users/otp-verification',
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
          // if (ee.data.is_kyc_verified == true) {
          let path = '/app/profile/candidate-profile';
          self.props.history.push({
            pathname: path,
            state: self.state
          })
          // } else {
          //   let path = '/adhar';
          //   self.props.history.push({
          //     pathname: path,
          //     state: self.state
          //   })
          // }



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
    var mobile = this.props.location.state.mobileno
    console.log(this.props.location)
    var data = JSON.stringify({ "isd": "" + isd, "mobile_no": "" + mobile });

    var self = this
    var config1 = {
      method: 'post',
      url: 'https://aadhaan.ddns.net/api/users/otp-generation',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    console.log("here", config1)

    axios(config1)
      .then(function (ee) {
        self.setState({ error: ee.data.message })
        // window.location.reload(false);
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
                        maxLength={1} value={this.state.a}
                        onChange={this.onChangeFirst} />
                      <input
                        type="text"
                        name="ssnb"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.b}
                        onChange={this.onChangeSecond} />
                      <input
                        type="text"
                        name="ssnc"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.c}
                        onChange={this.onChangeThird} />
                      <input
                        type="text"
                        name="ssnd"
                        className="custom-otp-input"
                        maxLength={1} value={this.state.d}
                        onChange={this.onChangeFourth} />

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


  onChangeFirst = (e) => {
    e.preventDefault();
    this.setState({ a: e.target.value })
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
  onChangeSecond = (e) => {
    e.preventDefault();
    this.setState({ b: e.target.value })
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
  onChangeThird = (e) => {
    e.preventDefault();
    this.setState({ c: e.target.value })
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
  onChangeFourth = (e) => {
    e.preventDefault();
    this.setState({ d: e.target.value })
    $(".custom-otp-input").keyup(function (event) {
      if (event.which == 8) {
        $(event.target).prev('.custom-otp-input').focus();
        $(event.target).prev('.custom-otp-input').select();
      }
    });
  }
}

export default OTPscreen;