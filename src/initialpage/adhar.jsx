/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Applogo} from '../Entryfile/imagepath.jsx'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css' 
var axios = require('axios');
class Adhar extends Component {
  constructor(...props){
    super(...props)
    console.log(this.props,"hhhhhhhhhhhhh")
    this.state={
      currentpage:'/',
      adharno:'',
      error:'',
      user:this.props.location.state.id,
      kyc:''
      
    }
    
  }
  componentDidMount=()=> 
  {
    // alert("this.props.location.state.id",this.props.location.state.id)
      console.log(this.props.location.state,"thissssssss")
      this.setState({user:this.props.location.state.id})
      var config = {
        method: 'get',
        url: 'https://aadhaan.ddns.net/api/candidate/full-information/'+this.state.user,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : ''
      };
     
      axios(config)
      .then( (response)=> {
        var data=response.data;
        console.log(data)
     
       
    try{
      console.log(data.candidate_other_data.id,"hgfkdshfgdhkgkfhgkhfjkjhfdjdgfhkjhffjkhdg",data.candidate_other_data)
        var candidate_other_data_len=Object.keys(data.candidate_other_data).length
      if(candidate_other_data_len>0)
      {
        var candidate_other_data=data.candidate_other_data
       
        this.setState({
          // other_details_id:candidate_other_data.id,
          adharno:candidate_other_data.aadhaar_no
         
        });
      }
    }catch(err) {
      console.log("error",err)
      // document.getElementById("demo").innerHTML = err.message;
    }
    
  
      })
      .catch( (error)=> {
        this.setState({
          isLoaded: true,
          error
        });
        console.log("error");
      });
      
  }

  updateInput=(e)=>{
    e.preventDefault();
    
    const value = e.target.value;
    
    var id=this.props.location.state.id
    console.log("hhhhhhhhh",id)
    this.setState({adharno: value,user:id });

    
  }
  notverified=(e)=>
  {
    let path='app/profile/candidate-profile';
    var id=this.props.location.state.id
   // alert("iiiiid",id)
    console.log("hhhhhhhhh",id)
    this.setState({user:id });
          
          this.props.history.push({ 
            pathname: path,
            state:this.state
            
           })
  }
  isVerfied=(data)=>{
   
    // /api/candidate/aadhaar-verification
      var data1 = JSON.stringify({"candidate":""+data.id,"kyc_id":data.adharno,"aadhaar_response_data":data.data});
      console.log("data",data1)
      var config = {
        method: 'post',
        url: "https://aadhaan.ddns.net/api/recruiter/aadhaar-verification",
        headers: { 
          'Content-Type': 'application/json',
          'cache-control':"no-cache"
        },
        data : data1
      };
      var self=this
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
       
        
      })
      .catch(function (error) {
        console.log("ttt",error);
      });
     
   

   }
  loginClick=(e)=>{
    e.preventDefault();
    // 
    // return
    var id=this.props.location.state.id
    console.log("hhhhhhhhh",id)
    this.setState({user:id });
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
        // self.isVerfied({"id":self.user,"data":response.data,"adharno":''+self.state.adharno});
        var getno=mobileno.substring(mobileno.length - 3)
        
        if(response.data.data.last_digits ==getno)
        {
          

          console.log(response.data.data.last_digits)
          self.setState({error:"Kyc verified"})
          let path='app/profile/candidate-profile';
          confirmAlert({
            title: 'Aadhar Verification \n Congratulation Your kyc  verified \u2713',
            message: '',
            buttons: [
              {
                label: 'Continue',
                onClick: () => { self.props.history.push({ 
                  pathname: path,
                  state:self.state
                  
                 })}
              }
            ]
          })
          
         
        }else{
         
          self.setState({kyc:"notverfied",error:"This aadhar no is not matched with this mobile number"+mobileno})
        
        confirmAlert({
          title: 'Aadhar Verification',
          message: 'The enter aadhar number does not match your Linked mobile number Continue to onboarding?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => { 
                let path='app/profile/candidate-profile';
                self.props.history.push({ 
                pathname: path,
                state:self.state
                
               })}
               
            },
            {
              label: 'No',
                onClick: () => { 
                  let path='login';
                  self.props.history.push({ 
                  pathname: path,
                  state:self.state
                  
                })}
            }
          ]
        })
        }
        
      })
      .catch(function (error) {
       
        console.log(error);
        self.setState({error:"this is not a valid aadhar no"})
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
               <title>Adhaar - Adhaan HRMS </title>
               <meta name="description" content="Login page"/>					
         </Helmet>
        <div className="account-content">
         
          <div className="container">
          <div className="center_box">

            <div className="account-logo">
              <a href="#"><img src={Applogo} alt="Adhaan" /></a>
            </div>
           
            <div className="account-box">
              <div className="account-wrapper">
                <h3>Please Re-confirm your aadhar number </h3>
               <div></div>
                <form action="">
                  <div className="form-group">
                   
                    <input className="form-control" type="text" placeholder="Enter adhaar number " defaultValue={this.state.adharno}onChange={this.updateInput} maxLength="12" />
                    
                    <label className="text-danger">{this.state.error}</label>
                    
                  </div>
                 
                  <div className="form-group text-center">
                    <button onClick={this.loginClick}className="btn btn-primary account-btn" >
                    Verify</button>
                    
                  </div>
                  {/* <button type="button" className="btn btn-primary account-btn" disabled={!this.state.kyc} onClick={this.notverified}>Skip</button> */}
                 
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

export default Adhar;
