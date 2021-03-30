/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

var axios = require('axios');
class Loginpage extends Component {
  constructor(...props) {
    super(...props)
    var url = window.location.href;
    var id = url.split("/");
    var mobileno = id[id.length - 3]
    var adharNo = id[id.length - 2]
    var candidateid = id[id.length - 1]
    localStorage.setItem("can", candidateid);
    localStorage.setItem("url", url);
    localStorage.setItem("adhar", adharNo);
    localStorage.setItem("mobile", mobileno);
    this.state = {
      currentpage: '/',
      isd: '91',
      empid: mobileno,
      result: null,
      error: '',
      userid: candidateid,
      usertype: '',
      adharNo: adharNo,
      mobileno: mobileno
    }

  }
  resend = (e) => {

    this.setState({ f_otp: '' });
    var isd = "91"
    var mobile = this.state.mobileno
    console.log(this.props.location)
    var data = JSON.stringify({ "isd": "" + isd, "mobile_no": "" + mobile });

    var self = this
    var config1 = {
      method: 'post',
      url: 'https://aadhaan.ddns.net/api/users/otp-generation',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };
    console.log("here", config1)

    axios(config1)
      .then(function (ee) {
        self.setState({ error: ee.data.message })
        window.location.reload(false);
        console.log("resend otp", ee)
      })
      .catch(function (error) {
        console.log(error);

      });

  }
  loginClick = (e) => {
    e.preventDefault();
    // 
    // return
    var id = this.state.mobileno
    // console.log("hhhhhhhhh", id)
    // this.setState({ user: id });
    if (this.state.adharNo.length == 12) {
      var data = JSON.stringify({
        "id_number": this.state.adharNo
      });
      console.log("adhariiiiiiii", this.props)
      var config = {
        method: 'post',
        url: ' https://kyc-api.aadhaarkyc.io/api/v1/aadhaar-validation/aadhaar-validation',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDIxOTA5MTksIm5iZiI6MTYwMjE5MDkxOSwianRpIjoiYmM4ZTNmZjktZWEwOC00YjY5LWI2ZTgtNGU4NzQxZjU1NjliIiwiZXhwIjoxOTE3NTUwOTE5LCJpZGVudGl0eSI6ImRldi5kaWdyYWpAYWFkaGFhcmFwaS5pbyIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InNjb3BlcyI6WyJyZWFkIl19fQ.Mks2UezaPADi4WWU4vqQw20guWm2SupnvSaalCWYAAw'
        },
        data: data
      };
      var self = this

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          var mobileno = self.state.mobileno
          // self.isVerfied({"id":self.user,"data":response.data,"adharno":''+self.state.adharno});
          var getno = mobileno.substring(mobileno.length - 3)

          if (response.data.data.last_digits == getno) {

            localStorage.setItem("kyc", 1);
            console.log(response.data.data.last_digits)
            self.setState({ error: "Kyc verified" })
            let path = '../../../sixotp';
            confirmAlert({
              title: ' Aadhar Verification',

              message: '  \n Congratulations! Your kyc is verified \u2713',

              buttons: [
                {
                  label: 'Continue',
                  onClick: () => {
                    self.props.history.push({
                      pathname: path,
                      state: self.state

                    })
                  }
                }
              ]
            })


          } else {
            localStorage.setItem("kyc", 0);
            self.setState({ kyc: "notverfied", error: "This aadhar no is not matched with this mobile number" + mobileno })

            confirmAlert({
              title: 'Aadhar Verification',
              message: 'The enter aadhar number does not match your Linked mobile number Continue to onboarding?',
              buttons: [
                {
                  label: 'Continue',
                  onClick: () => {
                    self.resend();
                    let path = '../../../otp';
                    self.props.history.push({
                      pathname: path,
                      state: self.state

                    })
                  }

                },
                {
                  label: 'Update no',
                  onClick: () => {
                    //$("#bank_contact_modal").modal("show");
                    let path = '../../../update';
                    self.props.history.push({
                      pathname: path,
                      state: self.state

                    })
                  }
                }
              ]
            })
          }

        })
        .catch(function (error) {
          localStorage.setItem("kyc", 0);
          self.setState({ kyc: "notverfied", error: "This aadhar no is not matched with this mobile number" })

          confirmAlert({
            title: 'Aadhar Verification',
            message: 'The enter aadhar number does not match your Linked mobile number Continue to onboarding?',
            buttons: [
              {
                label: 'Continue',
                onClick: () => {
                  self.resend();
                  let path = '../../../otp';
                  self.props.history.push({
                    pathname: path,
                    state: self.state

                  })
                }

              },
              {
                label: 'Update no',
                onClick: () => {
                  //$("#bank_contact_modal").modal("show");
                  let path = '../../../update';
                  self.props.history.push({
                    pathname: path,
                    state: self.state

                  })
                }
              }
            ]
          })

          console.log(error);

        });

    } else {
      console.log("fffff", this.state.error)
      this.setState({ error: "This is not valid link genreated." })
    }





  }

  updateInput = (e) => {
    e.preventDefault();
    const value = e.target.value;

    this.setState({ empid: value });

  }

  render() {

    return (


      <div className="main-wrapper">
        <Helmet>
          <title>Login - Adhaan HRMS </title>
          <meta name="description" content="Login page" />
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
                      <input className="form-control" type="text" maxLength="10" placeholder=" Linked Aadhar Mobile Number " readOnly onChange={this.updateInput} value={this.state.mobileno} />
                      {/* <label className="text-danger">{this.state.error}</label> */}
                      <label>Please Enter Aadhar Number</label>
                      <input className="form-control" type="text" maxLength="12" placeholder=" Aadhar Number " readOnly value={this.state.adharNo} onChange={this.updateInput} />
                      {/* <label className="text-danger">{this.state.error}</label> */}
                    </div>



                    <div className="form-group text-center ">
                      <button onClick={this.loginClick} className="btn btn-primary account-btn" >
                        Submit to Continue</button>
                    </div>
                    <label className="text-danger">{this.state.error}</label>
                  </form>
                  {/* /Account Form */}
                  {/* Bank Modal */}
                  <div id="bank_contact_modal" className="modal custom-modal " role="dialog" data-keyboard="false">
                    <div className="modal-dialog modal-dialog-centered modal-lg" >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Update Mobile  Number</h5>
                          <button type="button" className="close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="card">
                              <div className="card-body">
                                {/* <h3 className="card-title">1</h3> */}
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label>Mobile Number <span className="text-danger">*</span></label>
                                      <input type="text" className="form-control" maxLength="10" onChange={this.setBankName} />
                                    </div>




                                  </div>



                                </div>
                              </div>
                            </div>

                            <div className="submit-section">
                              <button onClick={this.addBankDetails} className="btn btn-primary submit-btn">Submit</button>
                            </div>

                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Bank Modal */}
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
