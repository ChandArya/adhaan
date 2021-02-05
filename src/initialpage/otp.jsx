/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'

class OTPscreen extends Component {
    constructor(...props)
    {
      super(...props)
      this.state={
        
        f_otp:''
        
        
      }
    }
    onChange=(e)=>
    {
      e.preventDefault();
      
      const value = e.target.value;
      // alert("got data"+value)
    
      this.setState({f_otp:this.state.f_otp+value });
      

    }
    onsubmit=(e)=>{
      e.preventDefault();
      
      if(this.state.f_otp.length!=4)
      {
        alert("not valid otp"+this.state.f_otp)

      }else{
        let path='app/profile/candidate-profile';
        this.props.history.push(path)
      }
    }
    resend=(e)=>{
      e.preventDefault();
      alert("resend click")
    }
   render() {
     
      return ( 
      <div className="main-wrapper">
          <Helmet>
               <title>OTP - Adhan HRMS </title>
               <meta name="description" content="Login page"/>					
         </Helmet>
      <div className="account-content">
        {/* <a href="/blue/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}
        <div className="container">
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
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange} />
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                  <input type="text" placeholder={0} maxLength={1} className="otp-input" onChange={this.onChange}/>
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit" onClick={this.onsubmit}>Enter</button>
                </div>
                <div className="account-footer">
                  <p>Not yet received? <a href="" onClick={this.resend}>Resend OTP</a></p>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
           
      );
   }
}

export default OTPscreen;
