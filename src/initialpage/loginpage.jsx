/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'

class Loginpage extends Component {
  constructor(...props){
    super(...props)
    this.state={
      currentpage:'/',
      empid:''
      
    }
  }


  updateInput=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    
    this.setState({empid: value });
    // alert('Please enter valid employee id: '+value  );
    
  }
  loginClick=(e)=>{
    e.preventDefault();
    
    if(this.state.empid !=undefined && this.state.empid.trim() != "")
    {
      // alert('Your input value is: ' + this.state.empid);
      let path='/otp';
      this.props.history.push(path)
    }else{
      alert('Please enter valid Mobile Number: '  );
    }

    // 
    
    // alert("hhhhh")
    // this.props.history.push(path)
    //  this.setState={
    //   currentpage:e.target.href
    // }
    // this.props.history.push("/blue/app/main/dashboard")
    // localStorage.setItem("firstload","true")
   }


   render() {
     
      return (
         
         
         <div className="main-wrapper">
           <Helmet>
               <title>Login - Adhaan HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
         </Helmet>
        <div className="account-content">
          {/* <a href="/blue/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}
          <div className="container">
            {/* Account Logo */}
            <div className="account-logo">
              <a href="#"><img src={Applogo} alt="Adhaan" /></a>
            </div>
            {/* /Account Logo */}
            <div className="account-box">
              <div className="account-wrapper">
                {/* <h3 className="account-title">Submit</h3> */}
                {/* <p className="account-subtitle">Access to our dashboard</p> */}
                {/* Account Form */}
                <form action="">
                  <div className="form-group">
                    <label>Please Enter Your Mobile Number</label>
                    <input className="form-control" type="text" placeholder="Enter mobile number " onChange={this.updateInput}/>
                  </div>
                  {/* <div className="form-group">
                    <div className="row">
                      <div className="col">
                        <label>Password</label>
                      </div>
                      <div className="col-auto">
                        <a className="text-muted" href="/blue/forgotpassword">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <input className="form-control" type="password" />
                  </div> */}
                  <div className="form-group text-center">
                    <button onClick={this.loginClick}className="btn btn-primary account-btn" >
                    Submit</button>
                  </div>
                  {/* href="/blue/app/main/dashboard" */}
                  {/* <div className="account-footer">
                    <p>Don't have an account yet? <a href="/blue/register">Register</a></p>
                  </div> */}
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

export default Loginpage;
