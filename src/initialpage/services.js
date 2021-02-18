var axios = require('axios');

var baseurl='http://adhaan.eastus.cloudapp.azure.com:8000'
export const submitOtp=(otp,mobileno)=>{
    var response={}
    console.log("bankdetails",otp,mobileno)
    var data = JSON.stringify({
        "candidate": userid,
        "bank_name": bankname,
        "branch_name": branchname,
        "account_number": acountno,
        "ifsc_code": ifsc
    });
    console.log("called")
    var config1 = {
      method: 'post',
      url: 'http://137.117.103.65:8000/api/users/otp-generation',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config1)
    .then(function (response) {
        response=response.data
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
      response=error
    });
    return response
  }

  export const resendOtp=(isd,mobileno)=>{
    var datareturn={}
    var data = JSON.stringify({"isd":""+isd,"mobile_no":""+mobileno});
    
      var config1 = {
        method: 'post',
        url:'http://adhaan.eastus.cloudapp.azure.com:8000/api/users/otp-generation',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      console.log("here",config1)
      axios(config1)
      .then(function (ee) {
        console.log("resend otp",ee)
         datareturn=ee
        
        
      })
      .catch(function (error) {
        console.log(error);
        datareturn=error
      });
     
    console.log("lastdat",datareturn)
    return datareturn
  }