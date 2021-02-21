var axios = require('axios');

var baseurl='https://aadhaan.ddns.net'
  export const addBank=(bankname,branchname,acountno,ifsc,userid)=>{
    console.log("bankdetails",bankname,branchname,acountno,ifsc,userid)
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
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const addProfileData=(data)=>{
    console.log("addProfileData")
   
    let formData=new FormData();
    formData.append("name",""+data.name)
    formData.append("father_name",""+data.father_name)
    formData.append("desiganition",""+data.designation)
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
    formData.append("profile_picture",""+data.profilepic)
    
    console.log("profiledtat"+formData)
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
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const addOtherDetailsData=(data)=>{
    
    console.log("otherdetails",data)
   
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const addpersonalInfo=(data)=>{
    data.candidate=data.id
    console.log("addpersonalInfo"+JSON.stringify(data))
    var data = JSON.stringify({
      // "marital_status":data.marital_status.toLowerCase() ,
      "marital_status":"married",
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  export const addReference=(data)=>{
    
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
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  export const addFamily=(data)=>{
    
    console.log("Family"+JSON.stringify(data))
    
    console.log("called")
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const addExperience=(data)=>{
    
    console.log("Experience",data)
    
    console.log("called")
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const addEducation=(data)=>{
    
    console.log("Education"+JSON.stringify(data))
    
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
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const documentUpload=(self,data,document_type,candidate)=>{
    // console.log("dadsggshfdhgdsghffsd"+JSON.stringify(self.state))
    
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
    })
    .catch(function (error) {
      console.log(error);
    });
    
    
  }
  


  

  