import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'
import $ from "jquery";

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


    }

    //
  }
  // componentDidMount=()=>
  // {
  // this.setState({f_otp:'' })
  // //

  // }
  onChange = (e) => {
    // e.preventDefault();

    constvalue = e.target.value;
    // alert("got data"+value)

    this.setState({ f_otp: this.state.f_otp + value });


  }
  onsubmit = (e) => {
    e.preventDefault();
    var_otp = this.state.a + this.state.b + this.state.c + this.state.d;
    console.log(_otp)
    // this.state.f_otp = _otp;
    if (_otp.length != 4) {
      // alert(""+this.state.f_otp)
      // error

      this.setState({ error: "Please Enter valid otp" })
    } else {

      varuser_id = this.props.location.state.userid
      varempid = this.props.location.state.empid
      varuser_type = this.props.location.state.usertype
      // var otp = this.state.f_otp
      this.setState({ mobileno: empid, id: user_id })
      vardata = JSON.stringify({
        "user_id": user_id,
        "OTP": _otp,
        "user_type": user_type
      });
      varself = this
      varconfig1 = {
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
          if (ee.data.is_kyc_verified == true) {
            letpath = '/app/profile/candidate-profile';
            self.props.history.push({
              pathname: path,
              state: self.state
            })
          } else {
            letpath = '/adhar';
            self.props.history.push({
              pathname: path,
              state: self.state
            })
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
    varisd = this.props.location.state.isd
    varmobile = this.props.location.state.empid
    console.log(this.props.location)
    vardata = JSON.stringify({ "isd": "" + isd, "mobile_no": "" + mobile });

    varself = this
    varconfig1 = {
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
        window.location.reload(false);
        console.log("resend otp", ee)
        // datareturn=ee


      })
      .catch(function (error) {
        console.log(error);
        // datareturn=error
      });

  }
  render() {

    return (
      <div className="main-wrapper" >
        <Helmet>
          <title>OTP - Adhan HRMS </title>
          < meta name="description" content="Login page" />
        </Helmet>
        <div className="account-content" >

          <div className="container" >
            <div className="center_box" >

              {/* Account Logo */}
              < div className="account-logo" >
                <a href="#" > <img src={Applogo} alt="Adhaan Solution Pvt. Ltd. " /></a >
              </div >
              {/* /Account Logo */}
              < div className="account-box" >
                <div className="account-wrapper" >
                  <p className="account-subtitle" > Continue to verify mobile number</p >
                  <h3 className="account-title" > OTP</h3 >

                  {/* Account Form */}
                  < form action="#" >
                    <div className="otp-wrap" >
                      {/* <input autoFocus type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
<input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
<input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
<input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} /> */}
                      < input
                        type="text"
                        name="ssn-1"
                        Auto
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

                    </div >
                    <div className="form-group text-center" >
                      <button className="btn btn-primary account-btn" type="submit" onClick={this.onsubmit} > Submit</button >
                    </div >
                    <div className="account-footer" >
                      <p>OTP Not Recieved? <a href="" onClick={this.resend}>Resend OTP</a></p >
                    </div>
                    <label className="text-danger" > {this.state.error}</label >
                  </form >
                  {/* /Account Form */}
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >

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
        constnextSibling = document.querySelector(
          `input[name=ssn-${parseInt(1, 10) + 1}]`)

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
        constnextSibling = document.querySelector(
          `input[name=ssn-${parseInt(2, 10) + 1}]`)
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
        console.log('this tis')
        constnextSibling = document.querySelector(
          `input[name=ssn-${parseInt(3, 10) + 1}]`)

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
        constnextSibling = document.querySelector(
          `input[name=ssn-${parseInt(8, 10) + 1}]`)

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        }
      }


    }


  }
}

export default OTPscreen;