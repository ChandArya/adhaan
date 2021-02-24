/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_16 } from '../../../Entryfile/imagepath'
import {addEducation} from './call'
import Moment from 'moment';
import { DatePicker } from 'antd';
var axios = require('axios');
var baseurl='https://aadhaan.ddns.net'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
// var FormData = require('form-data');
// var fs = require('fs');

export default class EmployeeProfile extends Component {
  constructor(...props){
    super(...props)
    this.setStartDate = this.setStartDate.bind(this);
    this.onFileChangeForDoc = this.onFileChangeForDoc.bind(this);
    this.setDocName = this.setDocName.bind(this);
    console.log("constructor",this.props.location)
    this.state={
      
      isLoaded: false,
      name:'',
      edulevel:'10',
      error:'',
      recruiter_name:'',
      recruiter_employee_id:'',
      other_details_id:'',
      profilepic:Avatar_02,
      alternate_mobile_no: '',
      designation: '',
      profilepic1:Avatar_02,
      client: null,
      father_name: '',
      department: '',
      job_location: '',
      zone: '',
      u_state: '',
      source: '',
      user: this.props.location.state.user,
      created_by: 1,
      isd: "91",
      mobile_no:'',
      user_type: '',
      c_country: '',
      c_state: '',
      c_city: '',
      c_house_no: '',
      c_full_address: '',
      c_mobile_no: '',
      c_email: '',
      c_pin_code:'',
      p_country: '',
      p_state: '',
      p_city: '',
      p_house_no: '',
      p_full_address: '',
      p_mobile_no: '',
      p_email: '',
      p_pin_code:'',
      dob:'',
      marital_status:'',
      marrage_date: '',
      gender: "",
      category: "",
      nationality: "",
      blood_group: "",
      mother_tongue: "",
      religion: "",
     
      branch_name:'',
      account_number:'',
      ifsc_code:'',
      bank_name:'',
      reference:[],
      family:[],
      ref_name:'',
      ref_relation:'',
      ref_no:'',
      ref_loc:'',
      candidate_other_data:{name:'',esic_address:'',esic_name:'',esic_no:'',uan:'',pf_no:'',aadhaar_no:'',eid_no:'',pan_card_no:'',vehicle_no:'',valid_up_to:'',place_of_issue:'',dl_no:''},
      education_data:{},
      candidate_work_history_data:[],
      candidate_documents_data:[],
      candidate_doc_list:['Resume/ Bio-DATA','Adhaar Card Front','Adhaar Card Back','Driving License Front','Driving License Back','Pan Card','Ration Card','Passport Size Photo','Rent Agreement','Passbook','Marriage Certificate','Signature','Thumb Impression'],
      isNomniee:false,
      family_adhar:'',
      family_name:'',
      family_relation:'',
      family_dob:'',
      exprienceDesignation:'',
      experienceOrgination:'',
      reasonforSep:'',
      startDate_emp:'',
      enddate_emp:'',
      degree:'',
      board:'',
      percentage:'',
      edu_location:'',
      passing_year:'',
      school:'',
      edutype:'',
      resume_file:'',
      docname:''
     


      
        
    }
   
    
  }
  isBlank=(data)=>
  {
    if(data=='' || data==""||data==null||data=='null')
    {
      return true
    }else{
      return false
    }
  }
  addBasicDetails=(e)=>{
    e.preventDefault();
    this.addProfileData(this,this.state)
   
  }
  addPersonalInfoData=(e)=>
  {
    e.preventDefault();
    console.log("clickfound")
    this.addpersonalInfo(this,this.state);
  }
  
  addBankDetails=(e)=>{
    
    e.preventDefault();
    console.log("clickfound")
    this.addBank(this,this.state.bank_name,this.state.branch_name,this.state.account_number,this.state.ifsc_code,this.state.user);
  }

  //add education data
  setDegree=(e)=>
  {
    const value = e.target.value;
    this.setState({degree:value});
  }
  setBoard=(e)=>
  {
    const value = e.target.value;
    this.setState({board:value});
  }
  setSchool=(e)=>
  {
    const value = e.target.value;
    this.setState({school:value});
  }
  setLocationEducation=(e)=>
  {
    const value = e.target.value;
    this.setState({location:value});
  }
  setPassingYear=(e)=>
  {
    const value = e.target.value;
    this.setState({passing_year:value});
  }
  setPercentage=(e)=>
  {
    const value = e.target.value;
    this.setState({percentage:value});
  }
  
  addEducationData=(e)=>{
    e.preventDefault();
   
    var data={"degree":this.state.degree,"board_university":this.state.board,"school":this.state.school,"location":this.state.edu_location,"passing_year":this.state.passing_year,"percentage":this.state.percentage,"candidate":this.state.user,"education_level": this.state.edulevel}
    var data1={'candidate':this.state.user}
    let final = {
      ...data,
      ...data1
    };
    if(this.state.edulevel=='0')
    {

      this.setState({error:"Please select education level"})
      // console.log("valuee")
    }else{
      this.addEducation(this,final);
    }
   
  }
  //end education data
  //experience data
  setExperienceOrgination=(e)=>
  {
    const value = e.target.value;
    this.setState({experienceOrgination:value});
  }
  setExprienceDesignation=(e)=>
  {
    const value = e.target.value;
    this.setState({exprienceDesignation:value});
  }
  setReason=(e)=>
  {
    const value = e.target.value;
    this.setState({reasonforSep:value});
  }
  setStartDate(e)
  {
    // alert("change",e)
    const value = e.format();
    this.setState({startDate_emp:Moment(value).format('YYYY-MM-DD')});
  }
  setEndDate=(e)=>
  {
    const value = e.format();
    
    this.setState({enddate_emp:Moment(value).format('YYYY-MM-DD')});
  }
  addExperienceData=(e)=>{
    e.preventDefault();
    var data={"organization":this.state.experienceOrgination,"designation":this.state.exprienceDesignation,"reason_for_leaving":this.state.reasonforSep,"candidate":this.state.user,"start_date":this.state.startDate_emp,"end_date":this.state.enddate_emp }
    
    var data1={'candidate':this.state.user}
    let final = {
      ...data,
      ...data1
    };
    this.addExperience(this,final);
  }
  //end experience data
  addOtherDetails=(e)=>
  {
    e.preventDefault();
    var data=this.state.candidate_other_data
    var data1={'candidate':this.state.user,'other_detail_id':this.state.other_details_id}
    let final = {
      ...data,
      ...data1
    };
  
    this.addOtherDetailsData(this,final)
  }
  setNameAsDl=(e)=>
  {
   
    e.preventDefault();
    const value = e.target.value;
    var data={"name":value,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setNameAsDlNo=(e)=>
  {
   
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":value}
    this.setState({candidate_other_data:data});
  }
  setplaceOfIssue=(e)=>
  {
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":value,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});

  }
  setValidUpto=(e)=>
  {
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":value,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});

  }
  setVehicleNo=(e)=>
  {
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":value,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setPanNo=(e)=>
  {
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":value,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setEidNo=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":value,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setAdharNo=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":value,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setEsicAdd=(e)=>
  {
   
    
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":value,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setEsicName=(e)=>
  {
   
    
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":value,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setEsicNo=(e)=>
  {
   
    
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":value,"uan":this.state.candidate_other_data.uan,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setUan=(e)=>
  {
   
    
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":value,"pf_no":this.state.candidate_other_data.pf_no,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setPf=(e)=>
  {
   
    
    const value = e.target.value;
    var data={"name":this.state.candidate_other_data.name,"esic_address":this.state.candidate_other_data.esic_address,"esic_name":this.state.candidate_other_data.esic_name,"esic_no":this.state.candidate_other_data.esic_no,"uan":this.state.candidate_other_data.uan,"pf_no":value,"aadhaar_no":this.state.candidate_other_data.aadhaar_no,"eid_no":this.state.candidate_other_data.eid_no,"pan_card_no":this.state.candidate_other_data.pan_card_no,"vehicle_no":this.state.candidate_other_data.vehicle_no,"valid_up_to":this.state.candidate_other_data.valid_up_to,"place_of_issue":this.state.candidate_other_data.place_of_issue,"dl_no":this.state.candidate_other_data.dl_no}
    this.setState({candidate_other_data:data});
  }
  setBankName=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({bank_name:value });
  }
  setBranchName=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({branch_name:value });
  }
  setIfsc_Code=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({ifsc_code:value });
  }
  setAccountNo=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({account_number:value });
  }
  setName=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({name:value });
    
  }
  
  
  setFat_Name=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({father_name:value });
    
  }
   setDob=(e)=>{
    const value = e.format();
    
    this.setState({dob:Moment(value).format('YYYY-MM-DD')});
    
  }
  setgender=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({gender:value });
    
  }
  setcurrentFullAdd=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_full_address:value });
    
  }
  setcurrentState=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_state:value,job_location:value });
    
  }
  setcurrentCity=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_city:value,job_location:value });
    
  }
  setPermnanetCity=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_city:value,job_location:value });
    
  }
  onFileChange=(e)=>{

    // const value = e.target.file[0];
//  var files = e.target.files;
      // console.log("files",value)
      console.log("files",e.target.files)
      var files = e.target.files;
      console.log("files",JSON.stringify(files))
      const value = files[0];
      // alert("got data"+value)
      
      // this.setState({resume_file:value });
      // const value = files[0];
    // alert("got data"+value)
    
    this.setState({profilepic:URL.createObjectURL(value) });
    this.setState({profilepic1:value });
  }
    onFileChangeForDoc(e){
    try{
      console.log("files",e.target.files)
      var files = e.target.files;
      console.log("files",JSON.stringify(files))
      const value = files[0];
      // alert("got data"+value)
      
      this.setState({resume_file:value });
    }catch(err) {
      console.log("error",err)
      // document.getElementById("demo").innerHTML = err.message;
    }
   
  }
  setcurrentCountry=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_country:value });
    
  }
  setcurrentPin=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_pin_code:value });
    
  }
  setcurrentPhone=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({c_mobile_no:value });
    
  }
  setPermanentFullAdd=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_full_address:value });
    
  }
  setPermanentState=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_state:value });
    
  }
  setPermanentPin=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_pin_code:value });
    
  }
  setPermanentMobile=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_mobile_no:value });
    
  }
  setDepartment=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({department:value });
    
  }
  setDesigination=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({designation:value });
    
  }
  setReferBy=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({created_by:value });
    
  }
  setPermanentCountry=(e)=>{
    const value = e.target.value;
    // alert("got data"+value)
    
    this.setState({p_country:value });
    
  }
  setEmail=(e)=>
  {
    const value = e.target.value;
    this.setState({c_email:value})
  }
 
  addEducationForm=()=>{
      //   var data={"10": {
      //     "id": '',
      //     "level": "",
      //     "degree": "",
      //     "board_university": "",
      //     "school": "",
      //     "location": "",
      //     "passing_year": '',
      //     "percentage": ''
      // }}
      // this.setState(
      //   {
      //     education_data:data
      //   });
  }
  setCategory=(e)=>{
    const value = e.target.value;
    // if(this.state.category.includes(value)){
    //   this.setState({category:this.state.category.replace(value,'')})
    // }else{
      this.setState({category:value})
    
    

  }
  setBloodGroup=(e)=>{
    const value = e.target.value;
    this.setState({blood_group:value.toUpperCase()})

  }
  setMothertounge=(e)=>{
    const value = e.target.value;
    this.setState({mother_tongue:value})

  }
  setMarriageDate=(e)=>{
    const value = e.format();
    
    this.setState({marrage_date:Moment(value).format('YYYY-MM-DD')});
    

  }
  setMarriageStatus=(e)=>{
    const value = e.target.value;
    this.setState({marital_status:value})

  }
  setReligion=(e)=>{
    const value = e.target.value;
    this.setState({religion:value})

  }
  setNationility=(e)=>{
    const value = e.target.value;
    this.setState({nationality:value})

  }
  //refrerence data
  setReferencename=(e)=>
  {
    const value = e.target.value;
    this.setState({ref_name:value})
  }
  setReferencerleation=(e)=>
  {
    const value = e.target.value;
    this.setState({ref_loc:value})
  }
  setReferenceNumber=(e)=>
  {
    const value = e.target.value;
    this.setState({ref_no:value})
  }
  setReferenceLocation=(e)=>
  {
    const value = e.target.value;
    this.setState({ref_loc:value})
  }
  addRef=(e)=>
  {
    e.preventDefault();
    var data={"name":this.state.ref_name,"location":this.state.ref_loc,"mobile_no":this.state.ref_no,"candidate":this.state.user,"relationship":this.state.ref_relation }
    this.addReference(this,data);
  }
  //end reference
  //family data
  setIsNominee=(e)=>
  {
    const value = e.target.value;
    this.setState({isNomniee:value})
  }
  setFamilyName=(e)=>
  {
    const value = e.target.value;
    this.setState({family_name:value})
  }
  setFamilyRelation=(e)=>
  {
    const value = e.target.value;
    this.setState({family_relation:value})
  }
  setFamilyDob=(e)=>
  {
    const value = e.format();
    this.setState({family_dob:Moment(value).format('YYYY-MM-DD')});
   
  }
  setDocName(value)
  {
    // let val = e.target.dataset.value;
    console.log(value);
    
    this.setState({docname:value})
  }
  setFamilyAdhar=(e)=>
  {
    const value = e.target.value;
    this.setState({family_adhar:value})
  }
  addFamilyData=(e)=>
  {
    e.preventDefault();
    var data={"relation":this.state.family_relation,"name":this.state.family_name,"aadhaar_no":this.state.family_adhar,"dob":this.state.family_dob,"is_nominee":this.state.isNomniee,"candidate":this.state.user }
    console.log("dayyaya",data)
    this.addFamily(this,data);
  }
  previewClick=(e)=>
  {
    let path='./applcation-form';
    // var id=this.props.location.state.id
   // alert("iiiiid",id)
    // console.log("hhhhhhhhh",id)
    // this.setState({id:id });
          
          this.props.history.push({ 
            pathname: path,
            state:this.state
            
           })

  }
  //endfamily data
  componentDidMount=()=> 
  {
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
      //   else{
      //   //   var data={"10": {
      //   //     "id": '',
      //   //     "level": "",
      //   //     "degree": "",
      //   //     "board_university": "",
      //   //     "school": "",
      //   //     "location": "",
      //   //     "passing_year": '',
      //   //     "percentage": ''
      //   // }
      // // }
      //   this.setState(
      //     {
      //       education_data:data
      //     });
      //   }
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
              user_type:  basic_details.user_type,
              recruiter_name:basic_details.recruiter_name,
              created_by:basic_details.recruiter_id,
              recruiter_employee_id:basic_details.recruiter_employee_id,
              // profile_picture
              profilepic:"https://aadhaan.ddns.net"+basic_details.profile_picture
              
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
  educationChane=(e)=>{
    // alert("click")
    var val=e.target.value;
   
    this.setState({edulevel:val})
    console.log("click",val)
    
    
  }
  uploadDoc=(e)=>
  {
    e.preventDefault();
    console.log("click")
    var datat=this.state.resume_file
    console.log("datat",datat)
    // var d='Resume/ Bio-DATA'
    var d=this.state.docname
    this.documentUpload(this,datat,d,this.state.user);
    
  }
 
  render() {
    const can_reference = this.state.reference;
    const family_data = this.state.family;
    const work_history_data=this.state.candidate_work_history_data
    const education_list=Object.keys(this.state.education_data)
    const edu_data=this.state.education_data
    var candidate_documents_data= this.state.candidate_documents_data
    // alert("ddd",candidate_documents_data,"ggg",candidate_doc_list)
    var candidate_doc_list=this.state.candidate_doc_list
    // console.log(candidate_doc_list,"chandan kumar",candidate_documents_data)
    for(var i=0;i<candidate_documents_data.length;i++)
    {
      var ff=candidate_documents_data[i].document_type
      
      var index=candidate_doc_list.indexOf(ff)
      // console.log(ff,"fffff",index)
      if (index > -1) {
        candidate_doc_list.splice(index, 1);
      }
    }
        

      
  

    return (
      

        
        <div className="page-wrapper">
            <Helmet>
              <title>Candidate Profile - Adhaan</title>
              <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
             
              {/* /Page Header */}
              <div className="card mb-0">
              <div className="col-auto float-right ml-auto">
                            <button className="btn add-btn" onClick={this.previewClick} id="submit">Preview</button>
                        </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-view">
                      
                        <div className="profile-img-wrap">
                          <div className="profile-img">
                            <a href="#"><img alt="" src={this.state.profilepic} ></img></a>
                          </div>
                        </div>
                       
                        <div className="profile-basic">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="profile-info-left">
                                <h3 className="user-name m-t-0 mb-0">{this.state.name}</h3>
                                <h6 className="text-muted">Father Name {this.state.father_name}</h6>
                                <small className="text-muted">{this.state.designation}</small>
                                <ul className="personal-info">
                                  <li>
                                    <div className="title">Location: </div>
                                    <div className="text">{this.state.job_location}</div>
                                  </li>
                                  <br></br>
                                  <li>
                                    <div className="title">Dept: </div>
                                    <div className="text">{this.state.department}</div>
                                  </li>
                                  <br></br>
                                  <li>
                                    <div className="title">Current Address: </div>
                                    <div className="text">{this.state.c_full_address}</div>
                                  </li>
                                  <br></br>
                                  <li>
                                  <br></br>
                                    <div className="title">Email: </div>
                                    <div className="text">{this.state.c_email}</div>
                                  </li>
                                  <br></br>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <ul className="personal-info">
                                <li>
                                  <div className="title">Phone:</div>
                                  <div className="text">{this.state.c_mobile_no}</div>
                                </li>
                                <br></br>
                                <li>
                                  <div className="title">Birthday:</div>
                                  <div className="text">{this.state.dob}</div>
                                </li>
                                <br></br>
                                <li>
                                  <div className="title">Permanent Address:</div>
                                  <div className="text">{this.state.p_full_address}</div>
                                </li>
                                <br></br>
                                <li>
                                <br></br>
                                  <div className="title">Gender:</div>
                                  <div className="text">{this.state.gender}</div>
                                </li>
                                <br></br>
                                <li>
                                  <div className="title">Refer By:</div>
                                  <div className="text">
                                    <div className="avatar-box">
                                      <div className="avatar avatar-xs">
                                        <img src={Avatar_16} alt="" />
                                      </div>
                                    </div>
                                    <a href="#">
                                    {this.state.created_by}
                                    </a>
                                  </div>
                                </li>
                                <br></br>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="pro-edit"><a data-target="#profile_info" data-toggle="modal" className="edit-icon" href="#"><i className="fa fa-pencil" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card tab-box">
                <div className="row user-tabs">
                  <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                    <ul className="nav nav-tabs nav-tabs-bottom">
                      <li className="nav-item"><a href="#emp_profile" data-toggle="tab" className="nav-link active">Profile</a></li>
                      {/* <li className="nav-item"><a href="#emp_projects" data-toggle="tab" className="nav-link">PF</a></li>
                      <li className="nav-item"><a href="#bank_statutory" data-toggle="tab" className="nav-link">ESIC</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                {/* Profile Info Tab */}
                <div id="emp_profile" className="pro-overview tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Personal  Details <a href="#" className="edit-icon" data-toggle="modal" data-target="#personal_info_modal"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Category.</div>
                              <div className="text" >{this.state.category}</div>
                            </li>
                            <li>
                              <div className="title">Blood Group</div>
                              <div className="text">{this.state.blood_group}</div>
                            </li>
                            <li>
                              <div className="title">Mother Tongue</div>
                              <div className="text">{this.state.mother_tongue}</div>
                            </li>
                            <li>
                              <div className="title">Nationality</div>
                              <div className="text">{this.state.nationality}</div>
                            </li>
                            <li>
                              <div className="title">Religion</div>
                              <div className="text">{this.state.religion}</div>
                            </li>
                            <li>
                              <div className="title">Marital status</div>
                              <div className="text">{this.state.marital_status}</div>
                            </li>
                            <li>
                              <div className="title">Marriage Date</div>
                              <div className="text">{this.state.marrage_date}</div>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">References<a href="#" className="edit-icon" data-toggle="modal" data-target="#emergency_contact_modal"><i className="fa fa-pencil" /></a></h3>
                          {can_reference.map(reference => (
                            <ul className="personal-info" key={reference.key}>
                            <li>
                              <div className="title">Name</div>
                              <div className="text">{reference.name}</div>
                            </li>
                            
                            <li>
                              <div className="title">Phone </div>
                          <div className="text">{reference.mobile_no}</div>
                            </li>
                            <li>
                              <div className="title">Location </div>
                              <div className="text">{reference.location}</div>
                            </li>

                            <hr />
                          </ul>
                          
                           
                          ))}
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                        
                          <h3 className="card-title">Bank information <a href="#" className="edit-icon" data-toggle="modal" data-target="#bank_contact_modal"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Bank name</div>
                              <div className="text">{this.state.bank_name}</div>
                            </li>
                            <li>
                              <div className="title">Bank account No.</div>
                          <div className="text">{this.state.account_number}</div>
                            </li>
                            <li>
                              <div className="title">IFSC Code</div>
                          <div className="text">{this.state.ifsc_code}</div>
                            </li>
                            <li>
                              <div className="title">Branch</div>
                              <div className="text">{this.state.branch_name}</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Family Informations <a href="#" className="edit-icon" data-toggle="modal" data-target="#family_info_modal"><i className="fa fa-pencil" /></a></h3>
                          <div className="table-responsive">
                            <table className="table table-nowrap">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Relationship</th>
                                  <th>Date of Birth</th>
                                  <th>Aadhar No</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                              {family_data.map(family => (
                                <tr key={family.key}>
                                <td>{family.name}</td>
                                <td>{family.relation}</td>
                                <td>{family.dob}</td>
                                <td>{family.aadhaar_no}</td>
                                <td className="text-right">
                                  <div className="dropdown dropdown-action">
                                    <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                      {/* <a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                      <a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a> */}
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              ))}
                                
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Education Informations <a href="#" className="edit-icon" data-toggle="modal" data-target="#education_info"><i className="fa fa-pencil" /></a></h3>
                          <div className="experience-box">
                            <ul className="experience-list">
                            {education_list.map(education => (
                              <li key={education.key}>
                              <div className="experience-user">
                                <div className="before-circle" />
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                            <a href="" className="name">{education} from {edu_data[''+education].board_university}</a>
                                  <div>{edu_data[''+education].school}</div>
                                  <span className="time">{edu_data[''+education].passing_year}</span>
                                </div>
                              </div>
                            </li>
                            ))}

                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Experience <a href="#" className="edit-icon" data-toggle="modal" data-target="#experience_info"><i className="fa fa-pencil" /></a></h3>
                          
                          
                          <div className="experience-box">
                       
                            <ul className="experience-list">
                            {work_history_data.map(work => (
                              <li key={work.key}>
                              <div className="experience-user">
                                <div className="before-circle" />
                              </div>
                              <div className="experience-content">
                                <div className="timeline-content">
                            <a href="" className="name">{work.designation}  at {work.organization}</a>
                                  <span className="time">{work.start_date}-{work.end_date}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                              
                             
                              
                            </ul>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Other Details<a href="#" className="edit-icon" data-toggle="modal" data-target="#other_details"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                          <li>
                              <div className="title">Aadhar Card</div>
                              <div className="text">{this.state.candidate_other_data.aadhaar_no}</div>
                            </li>
                            <li>
                              <div className="title">Name (As per Driving License)</div>
                              <div className="text">{this.state.candidate_other_data.name}</div>
                            </li>
                            <li>
                              <div className="title">Driving License No.</div>
                              <div className="text">{this.state.candidate_other_data.dl_no}</div>
                            </li>
                            <li>
                              <div className="title">Place of Issue</div>
                              <div className="text">{this.state.candidate_other_data.place_of_issue}</div>
                            </li>
                            <li>
                              <div className="title">Valid Upto (YYYY-MM-DD)</div>
                              <div className="text">{this.state.candidate_other_data.valid_up_to}</div>
                            </li>
                            <li>
                              <div className="title">Vehicle No.</div>
                              <div className="text">{this.state.candidate_other_data.vehicle_no}</div>
                            </li>
                            <li>
                              <div className="title">PAN Card Number</div>
                              <div className="text">{this.state.candidate_other_data.pan_card_no}</div>
                            </li>
                            <li>
                              <div className="title">Election ID Number</div>
                              <div className="text">{this.state.candidate_other_data.eid_no}</div>
                            </li>
                            
                            <li>
                              <div className="title"></div>
                              <div className="text">{this.state.candidate_other_data.pf_no}</div>
                            </li>
                            <li>
                              <div className="title">Old UAN No.</div>
                              <div className="text">{this.state.candidate_other_data.uan}</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC No.</div>
                              <div className="text">{this.state.candidate_other_data.esic_no}</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC Dispensory Name</div>
                              <div className="text">{this.state.candidate_other_data.esic_name}</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC Dispensory Address</div>
                              <div className="text">{this.state.candidate_other_data.esic_address}</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Document Checklist</h3>
                          <ul className="personal-info">
                          {candidate_documents_data.map(document => (
                              <li key={document.key} >
                              <div className="title">{document.document_type}</div>
                              <div className="text"><input type="checkbox" className="" defaultChecked="true"/></div>
                              <a href="#" className="edit-icon" data-toggle="modal" data-target="#document_checklist"id={document.document_type}><i className="fa fa-upload" onClick={() => this.setDocName(document.document_type)}/></a>
                            </li>
                          ))}
                         
                         {candidate_doc_list.map(document => (
                              <li key={document.key} >
                              <div className="title">{document}</div>
                              <div className="text"><input type="checkbox" className="" />
                              <a href="#" className="edit-icon"  data-toggle="modal" data-target="#document_checklist"><i className="fa fa-upload"  onClick={() => this.setDocName(document)}/></a>
                              </div>
                            </li>
                          ))}
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Profile Info Tab */}
                {/* Projects Tab */}
                <div className="tab-pane fade" id="emp_projects">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Office Management</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Project Management</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Video Calling App</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Hospital Administration</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Projects Tab */}
                {/* Bank Statutory Tab */}
                <div className="tab-pane fade" id="bank_statutory">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title"> Basic Salary Information</h3>
                      <form>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Salary basis <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select salary basis type</option>
                                <option>Hourly</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Salary amount <small className="text-muted">per month</small></label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Type your salary amount" defaultValue={0.00} />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Payment type</label>
                              <select className="select">
                                <option>Select payment type</option>
                                <option>Bank transfer</option>
                                <option>Check</option>
                                <option>Cash</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h3 className="card-title"> PF Information</h3>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">PF contribution</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">PF No. <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee PF rate</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee PF rate</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h3 className="card-title"> ESI Information</h3>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">ESI contribution</label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">ESI No. <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee ESI rate</label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn" type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Bank Statutory Tab */}
              </div>
            </div>
            {/* /Page Content */}
            {/* Profile Modal */}
            <div id="profile_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-img-wrap edit-img">
                            <img className="inline-block" src={this.state.profilepic} alt="user" />
                            <div className="fileupload btn">
                              <span className="btn-text">edit</span>
                              <input className="upload" type="file" accept="image/*" onChange={this.onFileChange}/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name<span className="text-danger">*</span></label>
                                <input type="text" className="form-control"  onChange={this.setName}defaultValue={this.state.name}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Father Name<span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={this.setFat_Name} defaultValue={this.state.father_name}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Birth Date<DatePicker  className="form-control floating datetimepicker" onChange={(e)=>this.setDob(e)}defaultValue={this.state.dob}></DatePicker> </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender<span className="text-danger">*</span></label>
                                <select defaultValue={this.state.gender}className=" form-control" onChange={this.setgender}>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Current Address<span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.c_full_address} className="form-control"  onChange={this.setcurrentFullAdd}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.c_state}className="form-control" onChange={this.setcurrentCity}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.c_state}className="form-control" onChange={this.setcurrentState} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country<span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.c_country} className="form-control" onChange={this.setcurrentCountry}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pin Code<span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.c_pin_code} className="form-control" onChange={this.setcurrentPin} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.c_mobile_no}className="form-control" onChange={this.setcurrentPhone} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Permanent Address<span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.p_full_address} className="form-control" onChange={this.setPermanentFullAdd} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>City<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.p_city}className="form-control" onChange={this.setPermnanetCity} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.p_state}className="form-control" onChange={this.setPermanentState} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.p_country}className="form-control" onChange={this.setPermanentCountry} />
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pin Code<span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.p_pin_code}className="form-control" onChange={this.setPermanentPin} />
                          </div>
                        </div>





                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number<span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.p_mobile_no} className="form-control" onChange={this.setPermanentMobile} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Email</label>
                            <input type="text" defaultValue={this.state.c_email}className="form-control" onChange={this.setEmail} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Department <span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.department}className="form-control" onChange={this.setDepartment} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Designation <span className="text-danger">*</span></label>
                            <input type="text"defaultValue={this.state.designation} className="form-control" onChange={this.setDesigination} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Refer By  <span className="text-danger">*</span></label>
                            <input type="text" defaultValue={this.state.created_by} readOnly className="form-control" onChange={this.setReferBy} />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addBasicDetails}>Submit</button>
                      </div>
                         <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Profile Modal */}
            {/* Personal Info Modal */}
            <div id="personal_info_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Personal Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                       
                        <div className="col-md-6">
                       
                          <div className="form-group">
                            <label>Category <span className="text-danger">*</span></label>
                            <div className='clearfix'></div>
                            <div className="row">
                              <div className="col">
                                <input type="radio" id="vehicle13" name="vehicle1" value="SC" onChange={this.setCategory}/>
                                <label htmlFor="vehicle" className="ml-2" >SC</label>
                              </div>
                              <div className="col">
                                <input type="radio" id="vehicle14" name="vehicle1" value="ST"onChange={this.setCategory}/>
                                <label htmlFor="vehicle1" className="ml-2">ST</label>
                              </div>
                              <div className="col">
                                <input type="radio" id="vehicle2" name="vehicle1" value="OBC" onChange={this.setCategory}/>
                                <label htmlFor="radio" className="ml-2">OBC</label>
                              </div>
                              <div className="col">
                                <input type="radio" id="vehicle3" name="vehicle1" value="OPEN" onChange={this.setCategory}/>
                                <label htmlFor="vehicle3" className="ml-2">OPEN</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Nationality <span className="text-danger" >*</span></label>
                            <input defaultValue={this.state.nationality}className="form-control" type="text" onChange={this.setNationility}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blood group <span className="text-danger">*</span></label>
                     
                         <select  className=" form-control" onChange={this.setBloodGroup}>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>A-</option>
                          <option>O-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                            {/* <input className="form-control" Style="text-transform:uppercase" defaultValue={this.state.blood_group}type="text" onChange={this.} /> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Mother Tongue <span className="text-danger">*</span></label>
                            <input className="form-control"defaultValue={this.state.mother_tongue} type="text" onChange={this.setMothertounge}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Marriage Date<DatePicker  defaultValue={this.state.marrage_date}className="form-control floating datetimepicker" onChange={(e)=>this.setMarriageDate(e)}></DatePicker> </label>
                            {/* // <div className="cal-icon">
                            //   <input className="form-control" type="text"onChange={this.setMarriageDate} />
                            </div> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Marital status <span className="text-danger">*</span></label>
                            <select defaultValue={this.state.marital_status} className=" form-control" onChange={this.setMarriageStatus}>
                              
                              <option>Single</option>
                              <option>Married</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Religion</label>
                            <input defaultValue={this.state.religion}className="form-control" type="text" onChange={this.setReligion} />
                          </div>
                        </div>
                       
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addPersonalInfoData}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Personal Info Modal */}
            {/* Other Details Modal */}
            <div id="other_details" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Other Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                       
                          <div className="form-group">
                            <label>Name <span className="text-danger">*</span></label>
                            
                            <input defaultValue={this.state.candidate_other_data.name}className="form-control" type="text" onChange={this.setNameAsDl} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Driving License No.<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.dl_no}className="form-control" type="text" onChange={this.setNameAsDlNo}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Place of Issue<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.place_of_issue}className="form-control" type="text" onChange={this.setplaceOfIssue}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Valid Upto (YYYY-MM-DD)<span className="text-danger">*</span></label>
                            
                            <input defaultValue={this.state.candidate_other_data.valid_up_to}className="form-control" type="date" onChange={this.setValidUpto} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Vehicle Number</label>
                            
                            <input defaultValue={this.state.candidate_other_data.vehicle_no}className="form-control" type="text" onChange={this.setVehicleNo} />
                          </div>
                        </div>
                        
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>PAN Card Number<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.pan_card_no}className="form-control" type="text" onChange={this.setPanNo}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Election ID Number</label>
                            <input defaultValue={this.state.candidate_other_data.eid_no} className="form-control" type="text" onChange={this.setEidNo}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Aadhar card<span className="text-danger">*</span></label>
                            
                            <input className="form-control" type="text" readOnly defaultValue={this.state.candidate_other_data.aadhaar_no} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old PF No.<span className="text-danger">*</span></label>
                            
                            <input defaultValue={this.state.candidate_other_data.pf_no}className="form-control" type="text" onChange={this.setPF}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old UAN No.<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.uan}className="form-control" type="text" onChange={this.setUan}/>
                          </div>
                        </div>
                       
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC No.<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.esic_no}className="form-control" type="text" onChange={this.setEsicNo}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC Dispensory Name.<span className="text-danger">*</span></label>
                            <input defaultValue={this.state.candidate_other_data.esic_name}className="form-control" type="text" onChange={this.setEsicName}/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC Dispensory Address<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" onChange={this.setEsicAdd}/>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addOtherDetails}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Other Details Modal */}
            {/* Document Checklist Modal */}
            <div id="document_checklist" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Document Checklist</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group row">
                            <label className="col my-auto">{this.state.docname}</label>
                            <input type="file" className="form-control col" onChange={(event)=>this.onFileChangeForDoc(event)}/>
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Aadhar Card <span className="text-danger">*</span></label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Driving License</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Voter ID</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">PAN Card <span className="text-danger">*</span></label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Ration Card</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Passport Size Photos</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Passbook / Cancelled Cheque</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Marriage Certificate</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Signature</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Thumb Impression</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>*/}
                      </div> 
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.uploadDoc}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Document Checklist Modal */}
            {/* Family Info Modal */}
            <div id="family_info_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Family Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Family Member
                             {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                             </h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Name <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text"  onChange={this.setFamilyName} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Relationship <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text"  onChange={this.setFamilyRelation}/>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Date of birth <DatePicker  className="form-control floating datetimepicker" onChange={(e)=>this.setFamilyDob(e)}></DatePicker> </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Aadhar Number <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text"  onChange={this.setFamilyAdhar} />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="checkbox" id="vehicle10" name="vehicle1" value="1"  onChange={this.setIsNominee}/>
                                  <label className="ml-2">Is Nominee</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn"onClick={this.addFamilyData      }>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Family Info Modal */}
            {/* Emergency Contact Modal */}
            <div id="emergency_contact_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">References</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">1</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={this.setReferencename}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Relationship <span className="text-danger">*</span></label>
                                <input className="form-control" type="text"onChange={this.setReferencerleation} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Phone <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" onChange={this.setReferenceNumber}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Location</label>
                                <input className="form-control" type="text"onChange={this.setReferenceLocation} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">2</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Relationship <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Phone <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Location</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addRef}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Emergency Contact Modal */}

          {/* Bank Modal */}
          <div id="bank_contact_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Bank Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="card">
                        <div className="card-body">
                          {/* <h3 className="card-title">1</h3> */}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Bank Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" onChange={this.setBankName} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Account number <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" onChange={this.setAccountNo} />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Ifsc code <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" onChange={this.setIfsc_Code}/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Branch</label>
                                <input className="form-control" type="text" onChange={this.setBranchName} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="submit-section">
                        <button onClick={this.addBankDetails}className="btn btn-primary submit-btn">Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Bank Modal */}



            {/* Education Modal */}
            <div id="education_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Education Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                      {/* {education_list.map(education => ( */}
                               <div className="card" >
                               <div className="card-body">
                                 {/* <h3 className="card-title">10   */}
                                 {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                                 {/* </h3> */}
                                 <div className="row">
                                 <div className="col-md-6">
                                 {/* <label>Education-Level</label> */}

                                  <select  className=" form-control" onChange={this.educationChane} >
                                  {/* <option value='0'>Select Education Level </option> */}
                                    
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="graduate">Graduate</option>
                                    <option value="post_graduate">Post Graduate</option>
                                    <option value="other">Other</option>
                                  </select>
                                  </div>
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <input type="text"  className="form-control floating" onChange={this.setSchool} />
                                       <label className="focus-label">School/Univercity<span className="text-danger">*</span></label>
                                     </div>
                                   </div>
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <input type="text"   className="form-control floating" onChange={this.setLocationEducation} />
                                       <label className="focus-label">Location</label>
                                     </div>
                                   </div>
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <div className="cal-icon">
                                         <input type="text"  className="form-control floating datetimepicker" onChange={this.setPassingYear} />
                                       </div>
                                       <label className="focus-label">Year of passing<span className="text-danger">*</span></label>
                                     </div>
                                   </div>
                                   
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <input type="text"  className="form-control floating" onChange={this.setBoard}  />
                                       <label className="focus-label">Board/Univercity<span className="text-danger">*</span></label>
                                     </div>
                                   </div>
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <input type="text" className="form-control floating" onChange={this.setDegree} />
                                       <label className="focus-label">Degree<span className="text-danger">*</span></label>
                                     </div>
                                   </div>
                                   <div className="col-md-6">
                                     <div className="form-group form-focus focused">
                                       <input type="text" className="form-control floating" onChange={this.setPercentage}/>
                                       <label className="focus-label">% Marks/Cgpa<span className="text-danger">*</span></label>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                         
                       
                        
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addEducationData}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Education Modal */}
            {/* Experience Modal */}
            <div id="experience_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Experience Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Experience Informations
                             {/* <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a> */}
                            </h3>
                            <div className="row">
                              <div className="col-md-6">
                              <label className="focus-label">Organisation<span className="text-danger">*</span></label>
                                <div className="form-group form-focus">
                                  <input type="text"placeholder="Organisation" className="form-control floating" onChange={this.setExperienceOrgination} />
                                 
                                </div>
                                
                              </div>
                              <div className="col-md-6">
                              <label className="focus-label">Reason for sepration</label>
                                <div className="form-group form-focus">
                                  <input placeholder="Reason for sepration"type="text" className="form-control floating"  onChange={this.setReason}/>
                                  
                                </div>
                               
                              </div>
                              <div className="col-md-6">
                              <label className="focus-label">Designation<span className="text-danger">*</span></label>
                                <div className="form-group form-focus">
                                  <input type="text" placeholder="Designation"className="form-control floating" onChange={this.setExprienceDesignation} />
                                 
                                </div>
                               
                              </div>
                              <div className="col-md-6">
                              <label className="focus-label">Period From<span className="text-danger">*</span></label>
                                <div className="form-group form-focus">
                                  <div className="">
                                  
                                    <DatePicker  className="form-control floating datetimepicker" onChange={(e)=>this.setStartDate(e)}></DatePicker>
                                  </div>
                                  
                                </div>
                              </div>
                              <div className="col-md-6">
                              <label className="focus-label">Period To<span className="text-danger">*</span></label>
                                <div className="form-group form-focus">
                                  <div className="">
                                  <DatePicker  className="form-control floating datetimepicker" onChange={(e)=>this.setEndDate(e)}></DatePicker>
                                    {/* <input type="text" className="form-control floating datetimepicker" onChange={this.} /> */}
                                  </div>
                                 
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn" onClick={this.addExperienceData}>Submit</button>
                      </div>
                      <label className="text-danger">{this.state.error}</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Experience Modal */}
          </div>
                          
                          
       
    );
    
  }
  //upload bank
  addBank=(self,bankname,branchname,acountno,ifsc,userid)=>{
    console.log("bankdetails",bankname,branchname,acountno,ifsc,userid)
    if(this.isBlank(bankname) || this.isBlank(acountno)||
  this.isBlank(ifsc) ){
    self.setState({error:"Please fill all required details"})
  }else{
    var data = JSON.stringify({
        "candidate": userid,
        "bank_name": bankname,
        "branch_name": branchname,
        "account_number": acountno,
        "ifsc_code": ifsc
    });
    console.log("called")
    var config = {
      method: 'post',
      url: baseurl+'/api/candidate/bank-details',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      self.setState({error:response.data.message})
      if(response.data.status==true)
      {
        //let path='app/profile/candidate-profile';
        alert('Bank details successfully submitted ✅')
        window.location.reload(false);
  
        
      }
    })
    .catch(function (error) {
      console.log(error);
      self.setState({error:"network issue"})
    });
  }
  }
  //upload profile
 addProfileData=(self,data)=>{
    console.log("addProfileData",data.profilepic)
    // this.isBlank(data.name)
    if(this.isBlank(data.name) || this.isBlank(data.father_name)||
    this.isBlank(data.designation) || this.isBlank(data.job_location)||
    this.isBlank(data.department) || this.isBlank(data.c_country)||
    this.isBlank(data.c_state) || this.isBlank(data.c_city)||
    this.isBlank(data.c_full_address) || this.isBlank(data.c_mobile_no)||
   this.isBlank(data.c_pin_code)||
    this.isBlank(data.p_country) || this.isBlank(data.p_state)||
    this.isBlank(data.p_city) || this.isBlank(data.p_mobile_no)||
    this.isBlank(data.p_full_address) || this.isBlank(data.p_pin_code)||
    this.isBlank(data.gender)||
    this.isBlank(data.dob)
    
    )
    {
      self.setState({error:"Please fill all required fields."})
      // return
    }else{
    self.setState({error:"Please wait profile is updating"})
    let formData=new FormData();
    formData.append("name",""+data.name)
    formData.append("father_name",""+data.father_name)
    formData.append("designation",""+data.designation)
    formData.append("job_location",""+data.job_location)
    formData.append("department",""+data.department)
    formData.append("communication_country",""+data.c_country)
    formData.append("communication_state",""+data.c_state)
    formData.append("communication_city",""+data.c_city)
    formData.append("communication_landmark",""+data.c_full_address)
    formData.append("communication_address",""+data.c_full_address)
    formData.append("communication_mobile_no",""+data.c_mobile_no)
    formData.append("communication_email",""+data.c_email)
    formData.append("communication_pin_code",""+data.c_pin_code)
    formData.append("permanenet_country",""+data.p_country)
    formData.append("permanenet_state",""+data.p_state)
    formData.append("permanenet_city",""+data.p_city)
    formData.append("permanenet_landmark",""+data.p_full_address)
     formData.append("permanenet_address",""+data.p_full_address)
    formData.append("permanenet_mobile_no",""+data.p_mobile_no)
    formData.append("permanenet_email",""+data.c_email)
    formData.append("permanenet_pin_code",""+data.p_pin_code)
     formData.append("dob",""+data.dob)
    // formData.append("marital_status",""+data.marital_status)
    // formData.append("marrage_date",""+data.marrage_date)
    formData.append("gender",""+data.gender)
     formData.append("category",""+data.category)
    // formData.append("nationality",""+data.nationality)
    // formData.append("blood_group",""+data.blood_group)
    // formData.append("mother_tongue",""+data.mother_tongue)
    //  formData.append("religion",""+data.religion)
    formData.append("candidate",""+data.user)
    formData.append("recruiter_id",""+data.created_by)
    formData.append("profile_picture",data.profilepic1)
    // const aa = [...formData.entries()];
    // console.log("profiledtat"+aa)
    var config = {
      method: 'post',
      url: baseurl+'/api/candidate/personal-details',
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      data : formData
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if(response.data.status==true)
      {
        //let path='app/profile/candidate-profile';
        alert('Personl details successfully submitted ✅')
        window.location.reload(false);
  
        
      }
       
      self.setState({error:response.data.message})
    })
    .catch(function (error) {
      console.log(error);
      self.setState({error:"Network issue"})
    });
  }
  }
//add experiences
 addExperience=(self,data)=>{
    
  console.log("Experience",data)
  
  console.log("called")
  
  if(this.isBlank(data.organization) || this.isBlank(data.designation)||
  this.isBlank(data.start_date) || this.isBlank(data.end_date)){
    self.setState({error:"Please fill all required details"})
  }else{

  
  var config = {
    method: 'post',
    url: baseurl+'/api/candidate/work-experience',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    self.setState({error:response.data.message})
    console.log(JSON.stringify(response.data));
    if(response.data.status==true)
    {
      //let path='app/profile/candidate-profile';
      alert('Work experience details successfully submitted ✅')
      window.location.reload(false);

      
    }
  })
  .catch(function (error) {
    console.log(error);
    self.setState({error:"Network issue"})
  });
}
}
//add family
addFamily=(self,data)=>{
    
  console.log("Family"+JSON.stringify(data))
  
  console.log("called")
  if( this.isBlank(data.name)||this.isBlank(data.relation)||
  this.isBlank(data.aadhaar_no) ){
    self.setState({error:"Please fill all required details"})
  }else{

  var config = {
    method: 'post',
    url: 'https://aadhaan.ddns.net/api/candidate/family-details',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    self.setState({error:response.data.message})
    console.log(JSON.stringify(response.data));
    if(response.data.status==true)
    {
      //let path='app/profile/candidate-profile';
      alert('Family details successfully submitted ✅')
      window.location.reload(false);

      
    }
  })
  .catch(function (error) {
    console.log(error);
    self.setState({error:"Network issue"})
  });
}
}
addOtherDetailsData=(self,data)=>{
  
  if( this.isBlank(data.dl_no)||this.isBlank(data.pan_card_no)||
  this.isBlank(data.aadhaar_no)||this.isBlank(data.pf_no)||this.isBlank(data.uan)||
  this.isBlank(data.place_of_issue)||
  this.isBlank(data.valid_up_to)||
  this.isBlank(data.esic_no) ){
    self.setState({error:"Please fill all required details"})
  }else{
  console.log("called")
  var config = {
    method: 'PUT',
    url: 'https://aadhaan.ddns.net/api/candidate/miscellaneous-other-details',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data)
  };

  axios(config)
  .then(function (response) {
    self.setState({error:response.data.message})
    console.log(JSON.stringify(response.data));
    if(response.data.status==true)
    {
      //let path='app/profile/candidate-profile';
      alert('Other presonal details successfully submitted ✅')
      window.location.reload(false);

      
    }
  })
  .catch(function (error) {
    self.setState({error:"Network isuue"})
    console.log(error);
  });
}
}
//add personal info
addpersonalInfo=(self,data)=>{
  data.candidate=data.id
  if(this.isBlank(data.nationality) || this.isBlank(data.blood_group)||
  this.isBlank(data.mother_tongue)||this.isBlank(data.category)){
    self.setState({error:"Please fill all required details"})
  }else{
    let statusm='';
    if(data.marital_status.toLowerCase()=="single")
    {
      statusm="un_married"
    }else{
      statusm="married"
    }
  console.log("addpersonalInfo"+JSON.stringify(data))
  var data = JSON.stringify({
    // "marital_status":data.marital_status.toLowerCase() ,
    
    "marital_status":statusm,
    "marrage_date": data.marrage_date,
    "gender": data.gender,
    "category": data.category,
    "nationality": data.nationality,
    "blood_group": data.blood_group,
    "mother_tongue": data.mother_tongue,
    "religion": data.religion,
    "candidate": data.user,
    
});
  console.log("called",data)
  var config = {
    method: 'PUT',
    url: 'https://aadhaan.ddns.net/api/candidate/personal-information',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    self.setState({error:response.data.message})
    console.log(JSON.stringify(response.data));
    if(response.data.status==true)
    {
      //let path='app/profile/candidate-profile';
      alert('Personal details successfully submitted ✅')
      window.location.reload(false);

      
    }
  })
  .catch(function (error) {
    self.setState({error:"Network isuue"})
    console.log(error);
  });
}
}
  //upload doc
  documentUpload=(self,data,document_type,candidate)=>{
    // console.log("dadsggshfdhgdsghffsd"+JSON.stringify(self.state))
    self.setState({error:"Please wait file is uploading"})
    let formData=new FormData();
    formData.append("document_type",""+document_type)
    formData.append("document",data)
    formData.append("candidate",""+candidate)
   
    console.log("documentData"+formData)
    var config = {
      method: 'post',
      url: baseurl+'/api/candidate/documents-upload',
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      data : formData
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      self.setState({error:response.data.message})
      if(response.data.status==true)
      {
        //let path='app/profile/candidate-profile';
        alert(document_type+' uploaded successfully  ✅')
        window.location.reload(false);

        
      }
    })
    .catch(function (error) {
      console.log(error);
      self.setState({error:"File not found"})
    });
    
    
  }
  //add education
addEducation=(self,data)=>{
    
    console.log("Education"+JSON.stringify(data))
    
    if(this.isBlank(data.degree) || this.isBlank(data.percentage)||
  this.isBlank(data.school)||this.isBlank(data.passing_year)){
    self.setState({error:"Please fill all required details"})
  }else{
    console.log("called")
    var config = {
      method: 'post',
      url: 'https://aadhaan.ddns.net/api/candidate/education-data',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      self.setState({error:response.data.message})
      if(response.data.status==true)
      {
        //let path='app/profile/candidate-profile';
        alert('Education details successfully submitted ✅')
        window.location.reload(false);

        
      }
     
    })
    .catch(function (error) {
      console.log(error);
      self.setState({error:"Nework issue"})
    });
  }
  }
  //add references
 addReference=(self,data)=>{
    
    console.log("refrences"+JSON.stringify(data))
   
    console.log("called")
    var config = {
      method: 'post',
      url: baseurl+'/api/candidate/reference-details',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      self.setState({error:response.data.message})
      alert('References details successfully submitted ✅')
        window.location.reload(false);
    })
    .catch(function (error) {
      console.log(error);
      self.setState({error:"Nework issue"})
    });
  }
}
