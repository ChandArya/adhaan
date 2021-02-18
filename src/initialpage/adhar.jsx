/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
var axios = require('axios');
class Adhar extends Component {
  constructor(...props){
    super(...props)
    // console.log(this.props,"hhhhhhhhhhhhh")
    this.state={
      currentpage:'/',
      adharno:'',
      error:'',
      id:''
      
    }
    
  }


  updateInput=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    
    var id=this.props.location.state.id
    console.log("hhhhhhhhh",id)
    this.setState({adharno: value,id:id });

    
  }
  loginClick=(e)=>{
    e.preventDefault();
    
    if(this.state.adharno !=undefined && this.state.adharno.trim() != ""&& this.state.adharno.length == 12)
    {
      var data = JSON.stringify({
        "id_number": this.state.adharno
        });
        console.log("adhariiiiiiii",this.props)
      var config = {
        method: 'post',
        url: ' https://kyc-api.aadhaarkyc.io/api/v1/aadhaar-validation/aadhaar-validation',
        headers: { 
          'Content-Type': 'application/json',
          Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDIxOTA5MTksIm5iZiI6MTYwMjE5MDkxOSwianRpIjoiYmM4ZTNmZjktZWEwOC00YjY5LWI2ZTgtNGU4NzQxZjU1NjliIiwiZXhwIjoxOTE3NTUwOTE5LCJpZGVudGl0eSI6ImRldi5kaWdyYWpAYWFkaGFhcmFwaS5pbyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InNjb3BlcyI6WyJyZWFkIl19fQ.Mks2UezaPADi4WWU4vqQw20guWm2SupnvSaalCWYAAw'
        },
        data : data
      };
      var self=this
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var  mobileno=self.props.location.state.mobileno
        
        var getno=mobileno.substring(mobileno.length - 3)
        
        if(response.data.last_digits ==getno)
        {
          console.log(response.data.data.last_digits,)
          self.setState({error:response.data.message})
        }else{
          let path='app/profile/candidate-profile';
          // self.setState({usertype:response.data.user_info.user_role_type,userid:response.data.user_info.user_id})
          
          self.props.history.push({ 
            pathname: path,
            state:self.state
            
           })
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
      // let path='/otp';
      // this.props.history.push(path)
    }else{
     this.setState({error:"Please enter valid aadhar no"})
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
                    <input className="form-control" type="text" placeholder="Enter adhaar number " onChange={this.updateInput} maxLength="12" />
                    <label className="text-danger">{this.state.error}</label>
                    
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
