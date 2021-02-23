import React, { Component } from 'react';
import { Helmet } from "react-helmet";
var axios = require('axios');
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Upload_Photo, Sign, Applogo } from "../../../Entryfile/imagepath"
import "../../antdstyle.css"

class ApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state=this.props.location.state
        
        
        
    }
    componentDidMount=()=> 
    {
        console.log("thissssssss",this.state)
        // alert("user",this.state)
        // console.log(this.props.location.state,"thissssssss")
        // this.setState({user:this.props.location.state.id})
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
  
        
          var candidate_education_data_len=Object.keys(data.candidate_education_data).length
          if(candidate_education_data_len>0)
          {
            var candidate_education_data=data.candidate_education_data
            this.setState(
              {
                education_data:candidate_education_data
              }
            );
          }
       
        } catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
        try{
          var candidate_bank_data_len=Object.keys(data.candidate_bank_data).length
          if(candidate_bank_data_len>0)
          {
            var candidate_bank_data=data.candidate_bank_data
            this.setState({
              
             
              bank_name:candidate_bank_data.bank_name,
              branch_name: candidate_bank_data.branch_name,
              account_number: candidate_bank_data.account_number,
              ifsc_code: candidate_bank_data.ifsc_code,
             
             
              
            });
          }
        } catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
          
          try {
            var basic_details_len=Object.keys(data.candidate_personal_data.basic_details).length
            var basic_details=data.candidate_personal_data.basic_details
            if(basic_details_len>0 ){
              this.setState({
                isLoaded: true,
                name: basic_details.name,
                alternate_mobile_no: basic_details.alternate_mobile_no,
                designation: basic_details.designation,
                client:  basic_details.client,
                father_name:  basic_details.father_name,
                department:  basic_details.department,
                job_location:  basic_details.job_location,
                zone:  basic_details.zone,
                u_state: basic_details.u_state,
                source:  basic_details.source,
                user:  basic_details.user,
                created_by:  basic_details.created_by,
                isd:  basic_details.isd,
                mobile_no: basic_details.mobile_no,
                user_type:  basic_details.user_type
                
              });
            }
          }
          catch(err) {
            console.log("error",err)
            // document.getElementById("demo").innerHTML = err.message;
          }
        try{
          var current_address_data_len=Object.keys(data.candidate_personal_data.address_details.current_address_data).length
          var current_address_data=data.candidate_personal_data.address_details.current_address_data
          if(current_address_data_len>0)
          {
            this.setState({
              c_country: current_address_data.country,
              c_state: current_address_data.state,
              c_city: current_address_data.city,
              c_house_no: current_address_data.house_no,
              c_full_address: current_address_data.full_address,
              c_mobile_no: current_address_data.mobile_no,
              c_email: current_address_data.email,
              c_pin_code:current_address_data.pin_code
             
              
            });
          }
        }
        
        catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
        try{
          var permanent_address_data_len=Object.keys(data.candidate_personal_data.address_details.permanent_address_data).length
         
         
         
          var permanent_address_data=data.candidate_personal_data.address_details.permanent_address_data
         
          
         
         
  
          if(permanent_address_data_len>0)
          {
            this.setState({
              p_country: permanent_address_data.country,
              p_state: permanent_address_data.state,
              p_city: permanent_address_data.city,
              p_house_no: permanent_address_data.house_no,
              p_full_address: permanent_address_data.full_address,
              p_mobile_no: permanent_address_data.mobile_no,
              p_email: permanent_address_data.email,
              p_pin_code:permanent_address_data.pin_code
             
              
            });
          }
        }
  
        catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
        try{
          var other_details_len=Object.keys(data.candidate_personal_data.other_details).length
          if(other_details_len>0)
          {
            var other_details=data.candidate_personal_data.other_details
            this.setState({
  
              dob: other_details.dob,
             
              marital_status:other_details.marital_status,
              marrage_date: other_details.marrage_date,
              gender: other_details.gender,
              category: other_details.category,
              nationality: other_details.nationality,
              blood_group:other_details.blood_group,
              mother_tongue: other_details.mother_tongue,
              religion: other_details.religion
             
              
            });
          }
        } catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
        
       try{
        var candidate_reference_data=data.candidate_reference_data.reference.length
      
        if(candidate_reference_data>0)
        {
          var candidate_reference_data=data.candidate_reference_data.reference
         
          this.setState({
            
           reference:candidate_reference_data
             
          });
        }
       } catch(err) {
          console.log("error",err)
          // document.getElementById("demo").innerHTML = err.message;
        }
      try{
          var candidate_family_data=data.candidate_family_data.family.length
        if(candidate_family_data>0)
        {
          var candidate_family_data=data.candidate_family_data.family
          this.setState({
            family:candidate_family_data
           
        });
      }
      }catch(err) {
        console.log("error",err)
        // document.getElementById("demo").innerHTML = err.message;
      }
      try{
        console.log(data.candidate_other_data.id,"hgfkdshfgdhkgkfhgkhfjkjhfdjdgfhkjhffjkhdg",data.candidate_other_data)
          var candidate_other_data_len=Object.keys(data.candidate_other_data).length
        if(candidate_other_data_len>0)
        {
          var candidate_other_data=data.candidate_other_data
         
          this.setState({
            other_details_id:candidate_other_data.id,
            candidate_other_data:candidate_other_data
           
          });
        }
      }catch(err) {
        console.log("error",err)
        // document.getElementById("demo").innerHTML = err.message;
      }
      try{
            var candidate_work_history_data_len=data.candidate_work_history_data.work_experience.length
       
        if(candidate_work_history_data_len>0)
        {
          var candidate_work_history_data=data.candidate_work_history_data.work_experience
         
          this.setState({
            
            candidate_work_history_data:candidate_work_history_data
           
          });
        }
        var candidate_documents_data_len=data.candidate_documents_data.document.length
        if(candidate_documents_data_len>0){
          var candidate_documents_data=data.candidate_documents_data.document
          console.log("hgjdhjgfgjhjfhj",candidate_documents_data)
         
          this.setState({
            
            candidate_documents_data:candidate_documents_data
           
          });
        }
      }catch(err) {
        console.log("error",err)
        // document.getElementById("demo").innerHTML = err.message;
      }
      try{
        var candidate_documents_data_len=data.candidate_documents_data.document.length
        if(candidate_documents_data_len>0){
          var candidate_documents_data=data.candidate_documents_data.document
          console.log("hgjdhjgfgjhjfhj",candidate_documents_data)
         
          this.setState({
            
            candidate_documents_data:candidate_documents_data
           
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
    backClick=(e)=>
    {
        let path='./candidate-profile';
        var id=this.props.location.state.user
       // alert("iiiiid",id)
        console.log("hhhhhhhhh",id)
        this.setState({id:id });
              
              this.props.history.push({ 
                pathname: path,
                state:this.state
                
               })
    }
    render() {
        var _10thdata={"degree":'',"board_university":"","location":"",
        "percentage":"",
        "school":"","passing_year":""}
        try{
            _10thdata={"degree":this.state.education_data[10].degree,"board_university":this.state.education_data[10].board_university,"location":this.state.education_data[10].location,
            "percentage":this.state.education_data[10].percentage,
            "school":this.state.education_data[10].school,"passing_year":this.state.education_data[10].passing_year}
        }catch(err)
        {
            console.log("hjhj",err)
        }



        var _12thdata={"degree":'',"board_university":"","location":"",
        "percentage":"",
        "school":"","passing_year":""}
        try{
            _12thdata={"degree":this.state.education_data[12].degree,"board_university":this.state.education_data[12].board_university,"location":this.state.education_data[12].location,
            "percentage":this.state.education_data[12].percentage,
            "school":this.state.education_data[12].school,"passing_year":this.state.education_data[12].passing_year}
        }catch(err)
        {
            console.log("hjhj",err)
        }
        

        var graduate={"degree":'',"board_university":"","location":"",
        "percentage":"",
        "school":"","passing_year":""}
        try{
            graduate={"degree":this.state.education_data['graduate'].degree,"board_university":this.state.education_data['graduate'].board_university,"location":this.state.education_data['graduate'].location,
            "percentage":this.state.education_data['graduate'].percentage,
            "school":this.state.education_data['graduate'].school,"passing_year":this.state.education_data['graduate'].passing_year}
        }catch(err)
        {
            console.log("hjhj",err)
        }
        
        var post_graduate={"degree":'',"board_university":"","location":"",
        "percentage":"",
        "school":"","passing_year":""}
        try{
            post_graduate={"degree":this.state.education_data['post_graduate'].degree,"board_university":this.state.education_data['post_graduate'].board_university,"location":this.state.education_data['post_graduate'].location,
            "percentage":this.state.education_data['post_graduate'].percentage,
            "school":this.state.education_data['post_graduate'].school,"passing_year":this.state.education_data['post_graduate'].passing_year}
        }catch(err)
        {
            console.log("hjhj",err)
        }

        var other={"degree":'',"board_university":"","location":"",
        "percentage":"",
        "school":"","passing_year":""}
        try{
            other={"degree":this.state.education_data['other'].degree,"board_university":this.state.education_data['other'].board_university,"location":this.state.education_data['other'].location,
            "percentage":this.state.education_data['other'].percentage,
            "school":this.state.education_data['other'].school,"passing_year":this.state.education_data['other'].passing_year}
        }catch(err)
        {
            console.log("hjhj",err)
        }



   
        var otherdetails ={"name":'',"dl_no":"","place_of_issue":"","valid_up_to":"","vehicle_no":"",
        "pan_card_no":"","eid_no":"","aadhaar_no":"","pf_no":'',"uan":"","esic_no":"","esic_name":"","esic_address":""}

try{
    console.log(this.state)
    otherdetails={"name":this.state.candidate_other_data.name, "dl_no":this.state.candidate_other_data.dl_no,
    "place_of_issue":this.state.candidate_other_data.place_of_issue, "valid_up_to":this.state.candidate_other_data.valid_up_to,
    "vehicle_no":this.state.candidate_other_data.vehicle_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,
    "eid_no":this.state.candidate_other_data.eid_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,
    "pf_no":this.state.candidate_other_data.pf_no,"uan":this.state.candidate_other_data.uan,
    "esic_no":this.state.candidate_other_data.esic_no,"esic_name":this.state.candidate_other_data.esic_name,
    "esic_address":this.state.candidate_other_data.esic_address}
}
    
catch(err)
{
    console.log("hjhj",err);
}
        console.log("this previe=",otherdetails)
        return ( 
        <div className="page-wrapper">
            <Helmet>
                <title>Application Form - HRMS Admin Template</title>
                <meta name="description" content="Application Form page"/>					
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Application Form</h3>
                           
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <button className="btn add-btn" id="submit" onClick={this.backClick}>Back</button>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="canvas_div_pdf">
                            <form className="p-3 border bg-white border-dark">
                                <div className="row no-gutters mb-4">
                                    <div className="col-sm-4"> 
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0">Client Name:</label>
                                            </div>
                                            <input type="text" name="client-name" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4"> 
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0">Date of Joining:</label> 
                                            </div>
                                            <input type="text" name="doj" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4"> 
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0">Employee Code:</label>
                                            </div>
                                            <input type="text" name="employee-code" className="px-0 ml-2 py-1 form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters d-flex mb-4">
                                    <div className="col-sm-4">
                                         {/* <img src="logo.png" width="100" alt="logo" />  */}
                                         <img src={Applogo} width="100" alt="logo" />
                                    </div>
                                    <div className="col-sm-4 my-auto"> 
                                        <h2 className="text-center"><u>APPLICATION BLANK</u></h2>
                                    </div>
                                    <div className="col-sm-4 my-auto"> 
                                        <div className="float-right border border-dark small w-25 p-1 mr-4 text-center">
                                            <div className="image-upload">
                                                <label for="Uploadphoto" className="mb-0">
                                                {/* <img src="upload-photo.png" id="photo" alt="Upload Photo" className="img-fluid" /> */}
                                                <img alt="" src={Upload_Photo} id="photo" alt="Upload Photo" className="img-fluid" />
                                                </label>
                                                <input id="Uploadphoto" type="file" onchange="readURL(this);" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="col-sm-12">
                                        <p style={{lineHeight: "1"}}>1. Please answer reach column fully and neatly in your own handwriting. (Blue or Black pen)<br/>
                                        2. Please &#10004; in the <span style={{fontSize: "20px"}}>&#x25A1;</span> wherever applicable</p>
                                    </div>
                                </div>
                                <div className="row no-gutters border border-dark p-2">
                                    <div className="col-sm-12">
                                        <div className="mb-3"> 
                                            <label for="" className="mb-0 text-uppercase">* Name in Full (In block letters)[As per Aadhar Card]</label>
                                            <input type="text" name="name" defaultValue={this.state.name}className="px-0 py-1 form-control" /> 
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="mb-3"> 
                                            <label for="" className="mb-0 text-uppercase">* Father's Name in Full (In block letters)[As per Aadhar Card]</label> 
                                            <input defaultValue={this.state.father_name}type="text" name="father-name" className="px-0 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Designation:</label>
                                            </div>
                                            <input defaultValue={this.state.designation} type="text" name="designation" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Location</label> 
                                            </div>
                                            <input  defaultValue={this.state.job_location} type="text" name="location" className="px-0 mx-2 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto"> 
                                                <label className="m-0 text-uppercase">Department</label>
                                            </div>
                                            <input defaultValue={this.state.department} type="text" name="department" className="px-0 ml-2 py-1 form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters border border-dark p-2">
                                    <div className="col-sm-12">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Communication Address</label>
                                            </div>
                                            <input  defaultValue={this.state.c_country}  type="text" name="communication-address" className="px-0 ml-2 py-1 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Landmark:</label> 
                                            </div>
                                            <input  defaultValue={this.state.c_house_no} type="text" name="landmark" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">City:</label> 
                                            </div>
              
                                            <input defaultValue={this.state.c_city} type="text" name="city" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">State:</label>
                                            </div>
                                            <input defaultValue={this.state.c_state} type="text" name="state" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Pin Code:</label> 
                                            </div>
                                            <input defaultValue={this.state.c_pin_code} type="text" name="pincode" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Mobile Number:</label>
                                            </div>
                                            <input  defaultValue={this.state.c_mobile_no} type="text" name="mobile-number" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters border border-dark p-2">
                                    <div className="col-sm-12">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Parmement Address</label>
                                            </div>
                                            <input  defaultValue={this.state.p_country} type="text" name="parmement-address" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Landmark:</label> 
                                            </div>
                                            <input  defaultValue={this.state.p_house_no} type="text" name="landmark" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">City:</label>  
                                            </div>
                                            <input defaultValue={this.state.p_city}type="text" name="city" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">State:</label>
                                            </div>
                                            <input  defaultValue={this.state.p_state} type="text" name="state" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Pin Code:</label> 
                                            </div>
                                            <input defaultValue={this.state.p_pin_code} type="text" name="pincode" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label className="m-0 text-uppercase">Mobile Number:</label>
                                            </div>
                                            <input defaultValue={this.state.mobile_no} type="text" name="mobile-number2" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Emergency Mobile No.:</label> 
                                            </div>
                                            <input defaultValue={this.state. p_mobile_no} type="text" name="emergency-mobile" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Person Name:</label> 
                                            </div>
                                            <input defaultValue={this.state.name}type="text" name="person-name" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">E-Mail:</label>
                                            </div>
                                            <input  defaultValue={this.state.p_email} type="email" name="email" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row no-gutters border border-dark">
                                    <div className="col-sm-4 border-right border-dark p-2">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Date of Birth</label>
                                            </div>
                                            <input  defaultValue={this.state.dob} type="text" name="dob" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label className="text-uppercase d-block">*Marital Status:</label>
                                            <div className="row">
                                                <div className="col-sm-8 text-uppercase">Married</div>
                                                <div className="col-sm-4 text-right"><input type="radio" name="marital-status" value="Married"  defaultValue={this.state.marital_status}/></div>
                                                <div className="col-sm-8 text-uppercase">Unmarried</div>
                                                <div className="col-sm-4 text-right"><input type="radio" name="marital-status" value="Unmarried"  defaultValue={this.state.marital_status} /></div>
                                            </div>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Marriage Date</label>
                                            </div>
                                            <input  defaultValue={this.state.marrage_date} type="text" name="dom" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-2 border-right border-dark p-2">
                                        <div className="form-group">
                                            <label className="text-uppercase d-block">Sex:</label>              
                                            <div className="row">
                                                <div className="col-sm-8 text-uppercase">Male</div>
                                                <div className="col-sm-4 text-right"><input type="radio" name="gender" value="male" defaultValue={this.state.gender}/></div>
                                                <div className="col-sm-8 text-uppercase">Female</div>
                                                <div className="col-sm-4 text-right"><input type="radio" name="gender" value="female" defaultValue={this.state.gender}/></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 p-2">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Category:</label>
                                            </div> 
                                            <input type="checkbox" className="ml-4 mr-2 my-auto"  defaultValue={this.state.category}/> SC
                                            <input type="checkbox" className="ml-4 mr-2 my-auto" defaultValue={this.state.category}/> ST
                                            <input type="checkbox" className="ml-4 mr-2 my-auto"defaultValue={this.state.category} /> OBC
                                            <input type="checkbox" className="ml-4 mr-2 my-auto" defaultValue={this.state.category}/> OPEN
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Nationality</label> 
                                            </div>
                                            <input defaultValue={this.state.nationality} type="text" name="nationality" className="px-0 py-1 ml-2 form-control"  />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">*Blood Group</label> 
                                            </div>
                                            <input defaultValue={this.state.blood_group}type="text" name="blood-group" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Mother Tongue</label> 
                                            </div>
                                            <input defaultValue={this.state.mother_tongue} type="text" name="mother-tongue" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0 text-uppercase">Religion</label> 
                                            </div>
                                            <input defaultValue={this.state.religion} type="text" name="religion" className="px-0 py-1 ml-2 form-control" />
                                        </div>
                                    </div>
                                </div>
                                <table width="100%" className="table mb-4 border-dark table-bordered" cellspacing="0">
                                    <tr>
                                        <th width="15%" className="text-uppercase text-center">Education Level</th>
                                        <th width="10%" className="text-uppercase text-center">Degree</th>
                                        <th width="15%" className="text-uppercase text-center">Board/University</th>
                                        <th width="20%" className="text-uppercase text-center">School/College Name</th>
                                        <th width="12%" className="text-uppercase text-center">Location</th>
                                        <th width="15%" className="text-uppercase text-center">Year of Passing</th>
                                        <th width="13%" className="text-uppercase text-center">% Marks/CGPA</th>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">X Std(10<sup>th</sup>)</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.degree}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.dboard_university} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_10thdata.school} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.location}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_10thdata.passing_year} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.percentage}/></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">XII Std/Equiv.(12<sup>th</sup>)</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_12thdata.degree} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  defaultValue={_12thdata.dboard_university}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_12thdata.school} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_12thdata.location} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={_12thdata.passing_year} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.percentage} /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Graduate</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.degree}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.dboard_university}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.school}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={graduate.location} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={graduate.passing_year} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.percentage}/></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">P.G.</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={post_graduate.degree} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={post_graduate.dboard_university} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={post_graduate.school} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.location}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.passing_year}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.percentage}/></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Others</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.degree} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={other.dboard_university} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.school}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.location}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.passing_year}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.percentage}/></td>
                                    </tr>
                                </table>
                                <table width="100%" className="table mb-0 border-dark table-bordered" cellspacing="0">
                                    <tr>
                                        <td colspan="5"><h5 className="text-uppercase font-weight-bold">Work Experience</h5></td>
                                    </tr>
                                    <tr>
                                        <th width="30%" className="text-uppercase font-weight-bold text-center">Organisation</th>
                                        <th width="20%" colspan="2" className="text-uppercase font-weight-bold text-center">Period</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Designation at the Time of Leaving</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Reason for Separation</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="From" onfocus="(this.type='date')" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="To" onfocus="(this.type='date')" /></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="From" onfocus="(this.type='date')" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="To" onfocus="(this.type='date')" /></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="From" onfocus="(this.type='date')" /></td>
                                        <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control" placeholder="To" onfocus="(this.type='date')" /></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                        <td><textarea className="px-0 py-0 border-0 form-control"></textarea></td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" height="30"></td>
                                    </tr>
                                    <tr>
                                        <th className="text-uppercase font-weight-bold text-center">References</th>
                                        <th colspan="2" className="text-uppercase font-weight-bold small text-center">Name</th>
                                        <th className="text-uppercase font-weight-bold text-center">Mobile Number</th>
                                        <th className="text-uppercase font-weight-bold text-center">Location</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" placeholder="1." /></td>
                                        <td colspan="2"><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" placeholder="2." /></td>
                                        <td colspan="2"><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                </table>
                                <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Others Details:</h5>
                                <table width="100%" className="table mb-0 border-dark table-bordered" cellspacing="0">
                                    <tr>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Name (As Per Driving License)</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">*Driving License No.</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Place of Issue</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Valid Up To (MM-DD-YYYY)</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  defaultValue={otherdetails.name}  /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.dl_no} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  defaultValue={otherdetails.place_of_issue}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.valid_up_to}/></td>
                                    </tr>
                                    <tr>
                                        <th className="text-uppercase font-weight-bold text-center">Vehicle Number</th>
                                        <th className="text-uppercase font-weight-bold text-center">Pan Card Number</th>
                                        <th className="text-uppercase font-weight-bold text-center">Election Id Number</th>
                                        <th className="text-uppercase font-weight-bold text-center">*Aadhar Card No.</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={otherdetails.vehicle_no} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.pan_card_no}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.eid_no}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.aadhaar_no}/></td>
                                    </tr>
                                    <tr>
                                        <th className="text-uppercase font-weight-bold text-center">*Old PF No.</th>
                                        <th className="text-uppercase font-weight-bold text-center">*Old UAN No.</th>
                                        <th className="text-uppercase font-weight-bold text-center">*Old ESIC No.</th>
                                        <th className="text-uppercase font-weight-bold text-center">*Old ESIC Dispensory Name & Address</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.pf_no} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={otherdetails.uan} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={otherdetails.esic_no} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={otherdetails.esic_address} /></td>
                                    </tr>
                                </table>
                                <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Bank Details:</h5>
                                <table width="100%" className="table mb-0 border-dark table-bordered" cellspacing="0">
                                    <tr>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Bank Name</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Account No.</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">IFSC Code</th>
                                        <th width="25%" className="text-uppercase font-weight-bold text-center">Branch Name</th>
                                    </tr>
                                    <tr>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.bank_name} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.account_number}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.ifsc_code}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"defaultValue={this.state.branch_name} /></td>
                                    </tr>
                                </table>
                                <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Family Details:</h5>
                                <table width="100%" className="table mb-0 border-dark table-bordered" cellspacing="0">
                                    <tr>
                                        <th width="20%" className="text-uppercase text-center">Family Member (Relationship)</th>
                                        <th width="30%" className="text-uppercase text-center">Person Name as per Aadhar Card</th>
                                        <th width="15%" className="text-uppercase text-center">Date of Birth</th>
                                        <th width="20%" className="text-uppercase text-center">Aadhar Card Number</th>
                                        <th width="15%" className="text-uppercase text-center small font-weight-bold">Write "Yes" if add as Nominee</th>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Father</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.father_name}/></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={this.state.dob} /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  defaultValue={this.state.aadhaar_no}/></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Mother</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Husband</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Wife</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Daughter</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                    <tr>
                                        <td className="text-uppercase font-weight-bold">Son</td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                        <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                    </tr>
                                </table>
                                <div className="row no-gutters border border-dark p-2">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-8 py-2 text-uppercase font-weight-bold">Documents Checklist:</div>
                                            <div className="col-sm-4 py-2 text-center text-uppercase font-weight-bold">Tick</div>
                                            <div className="col-sm-8 py-1">1. Resume/Bio-Data</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">2. Aadhar Card</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">3. Driving License</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">4. Voter Card</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">5. Pan Card</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-8 py-2 text-uppercase font-weight-bold">Documents Checklist:</div>
                                            <div className="col-sm-4 py-2 text-center text-uppercase font-weight-bold">Tick</div>
                                            <div className="col-sm-8 py-1">6. Ration Card</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">7. Passport Size Photos</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">8. Rent Agreement</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">9. Passport/Cancelled Cheque</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                            <div className="col-sm-8 py-1">10. Marriage Certificate</div>
                                            <div className="col-sm-4 py-1 text-center"><input type="checkbox" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row no-gutters border border-dark p-2">
                                    <div className="col-sm-6 pt-4">            
                                        <div className="form-group mb-0 input-group">
                                            <div className="input-group-prepend my-auto">
                                                <label for="" className="m-0">Place</label>
                                            </div>
                                            <input type="text" name="place" className="px-0 py-1 mx-2 form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="border border-dark p-1 text-center">
                                            <div className="image-upload sign-upload">
                                                <label for="Uploadsign" className="mb-0">
                                                    {/* <img src="sign.png" id="sign" alt="Upload Sign" className="img-fluid" /> */}
                                                    <img src={Sign} id="sign" alt="Upload Sign" className="img-fluid" />
                                                </label>
                                                <input id="Uploadsign" type="file" onchange="readSign(this);" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>            
            {/* /Page Content */}
        </div>
        );
    }
}
export default ApplicationForm;