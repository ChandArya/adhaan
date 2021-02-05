/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'

class Adhar extends Component {
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
    
    
  }
  loginClick=(e)=>{
    e.preventDefault();
    
    if(this.state.empid !=undefined && this.state.empid.trim() != "")
    {
      
      let path='/otp';
      this.props.history.push(path)
    }else{
      alert('Please enter valid Adhar Number: '  );
    }

   
   }


   render() {
     
      return (
         
         
         <div className="main-wrapper">
           <Helmet>
               <title>Adhaar - Adhaan HRMS Admin Template</title>
               <meta name="description" content="Login page"/>					
         </Helmet>
        <div className="account-content">
         
          <div className="container">
           
            <div className="account-logo">
              <a href="#"><img src={Applogo} alt="Adhaan" /></a>
            </div>
           
            <div className="account-box">
              <div className="account-wrapper">
               <div></div>
                <form action="">
                  <div className="form-group">
                    <label>Please Enter Your Adhar Number</label>
                    <input className="form-control" type="text" placeholder="Enter adhaar number " onChange={this.updateInput}/>
                  </div>
                 
                  <div className="form-group text-center">
                    <button onClick={this.loginClick}className="btn btn-primary account-btn" >
                    Submit</button>
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

export default Adhar;
