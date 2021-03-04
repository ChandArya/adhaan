/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
var axios = require('axios');
class Loginpage extends Component {
  constructor(...props){
    super(...props)
    this.state={
      currentpage:'/',
      isd:'91',
      empid:'',
      result:null,
      error:'',
      userid:0,
      usertype:'',
      
      
      
    }
    localStorage.clear();
  }


  updateInput=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    
    this.setState({empid: value });
    // alert('Please enter valid employee id: '+value  );
    
  }
  loginClick=(e)=>{
    e.preventDefault();
   
      
    if(this.state.empid !=undefined && this.state.empid.trim() != "" && this.state.empid.length == 10)
    {
      // candidate/full-information/32
      var data = JSON.stringify({"isd":""+this.state.isd,"mobile_no":""+this.state.empid});

      var config = {
        method: 'post',
        url: 'https://aadhaan.ddns.net/api/users/otp-generation',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      var self=this
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.data.message !='Otp generated successfully')
        {
          self.setState({error:response.data.message})
        }else{
          let path='/otp';
          self.setState({usertype:response.data.user_info.user_role_type,userid:response.data.user_info.user_id})
          localStorage.setItem("count",0)
          self.props.history.push({ 
            pathname: path,
            state:self.state
           })
        }
        
      })
      .catch(function (error) {
        console.log("ttt",error);
      });
     
    }else{
      this.setState({error:'Please enter valid mobile number ' })
      
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
               <title>Login - Adhaan HRMS </title>
               <meta name="description" content="Login page"/>					
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
                    <input className="form-control" type="text" maxLength="10" placeholder=" Linked Aadhar Mobile Number " onChange={this.updateInput}/>
                    <label className="text-danger">{this.state.error}</label>
                  </div>
                  
                  <div className="form-group text-center ">
                    <button onClick={this.loginClick}className="btn btn-primary account-btn" >
                    Submit to Continue</button>
                  </div>
                 
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

export default Loginpage;
