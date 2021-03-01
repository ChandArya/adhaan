/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
import {submitOtp,resendOtp} from '../initialpage/services'
var axios = require('axios');

class OTPscreen extends Component {
    constructor(...props)
    {
      super(...props)
      this.state={
        
        f_otp:'',
        error:'',
        mobileno:'',
        id:''
        
        
      }
      // window.location.reload(false);
    }
    // componentDidMount=()=>
    // {
    //   this.setState({f_otp:'' })
    //   // 
  
    // }
    onChange=(e)=>
    {
      // e.preventDefault();
      
      const value = e.target.value;
      // alert("got data"+value)
     
      this.setState({f_otp:this.state.f_otp+value });
      

    }
    onsubmit=(e)=>{
      e.preventDefault();
      
      if(this.state.f_otp.length!=4)
      {
        // alert(""+this.state.f_otp)
        // error
        
        this.setState({error:"Please Enter valid otp"})
      }else{

        var user_id=this.props.location.state.userid
        var empid=this.props.location.state.empid
        var user_type=this.props.location.state.usertype
        var otp=this.state.f_otp
        this.setState({mobileno:empid,id:user_id})
        var data = JSON.stringify({"user_id": user_id,
        "OTP": otp,
        "user_type": user_type});
        var self=this
        var config1 = {
          method: 'post',
          url:'https://aadhaan.ddns.net/api/users/otp-verification',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        console.log("here",config1)
        axios(config1)
        .then(function (ee) {
          // mobileno=self.state.
          self.setState({error:ee.data.message})
          console.log("resend otp",ee)
          if(ee.data.is_kyc_verified==true)
          {
            let path='/app/profile/candidate-profile';
          self.props.history.push({pathname: path,
            state:self.state})
          }else
          {
            let path='/adhar';
            self.props.history.push({pathname: path,
              state:self.state})
          }
          
          
          
        })
        .catch(function (error) {
          console.log(error);
          // datareturn=error
        });
        
      }
    }

    resend=(e)=>{
      // e.preventDefault();
      // console.log(this.props)
      // console.log(this.props.location.state)
      this.setState({f_otp:'' });
      var isd=this.props.location.state.isd
      var mobile=this.props.location.state.empid
      console.log(this.props.location)
      var data = JSON.stringify({"isd":""+isd,"mobile_no":""+mobile});
      var self=this
      var config1 = {
        method: 'post',
        url:'https://aadhaan.ddns.net/api/users/otp-generation',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      console.log("here",config1)
      axios(config1)
      .then(function (ee) {
        self.setState({error:ee.data.message})
        // console.log("resend otp",ee)
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
               <meta name="description" content="Login page"/>					
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
                  <input autoFocus type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                  <input  type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
                  <input  type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                  <input  type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit" onClick={this.onsubmit}>Submit</button>
                </div>
                <div className="account-footer">
                  <p>Not yet received? <a href="" onClick={this.resend}>Resend OTP</a></p>
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
}

export default OTPscreen;
