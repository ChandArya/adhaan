import React, { Component } from 'react';
import { Helmet } from "react-helmet";
var axios = require('axios');
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Upload_Photo, Sign, Applogo } from "../../../Entryfile/imagepath"
import "../../antdstyle.css"
import Pdf from "react-to-pdf";


var baseurl = 'https://aadhaan.ddns.net';
const ref = React.createRef();
class ApplicationForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...this.props.location.state, pic: '', ispdf: true, error1: '' }
        document.documentElement.scrollTop = 0;
    }

    backClick = (e) => {

        let path = './candidate-profile';
        var id = this.props.location.state.user
        // alert("iiiiid",id)
        console.log("hhhhhhhhh", id)
        this.setState({ id: id, back: true });

        this.props.history.push({
            pathname: path,
            state: this.state

        })
        // this.props.history.go(-1)

    }
    generatePdf = (e) => {
        document.documentElement.scrollTop = 0;
        this.setState({ error1: "please wait file is uploading" })
        var pdf = new jsPDF('portrait');
        var pdfName = this.state.name + 'form.pdf';
        pdf.context2d.pageWrapY = pdf.internal.pageSize.height - 20;

        var options = {};

        var $divs = $('#uu')
        console.log("length", $divs.length)            //jQuery object of all the myDivClass divs
        var numRecursionsNeeded = 2 - 1;     //the number of times we need to call addHtml (once per div)
        var currentRecursion = 0;
        var self = this;
        //Found a trick for using addHtml more than once per pdf. Call addHtml in the callback function of addHtml recursively.
        function recursiveAddHtmlAndSave(currentRecursion, totalRecursions) {
            //Once we have done all the divs save the pdf
            if (currentRecursion == totalRecursions) {
                // pdf.save(pdfName);
                self.setState({ ispdf: false });
                self.savebtn(pdf.output('blob'));
            } else {
                currentRecursion++;
                window.scrollBy(0, 1800);
                pdf.addPage();
                //$('.myDivClass')[currentRecursion] selects one of the divs out of the jquery collection as a html element
                //addHtml requires an html element. Not a string like fromHtml.
                pdf.addHTML($('#uu')[currentRecursion], 15, 20, options, function () {
                    console.log(currentRecursion);
                    recursiveAddHtmlAndSave(currentRecursion, totalRecursions)

                });
            }
        }

        pdf.addHTML($('#uu')[currentRecursion], 15, 20, options, function () {
            recursiveAddHtmlAndSave(currentRecursion, numRecursionsNeeded);
        });

    }

    savebtn = (data) => {

        // if(this.state.ispdf){
        //     alert("Please genrate pdf first");
        //     return
        // }
        var self = this;
        var formData = new FormData();
        formData.append("candidate", "" + localStorage.getItem("can"))
        formData.append("pdf_document_1", new File([data], this.state.name + '_form.pdf'))

        var data = JSON.stringify({
            "candidate": localStorage.getItem("can"),

        });
        console.log("called")
        var config = {
            method: 'post',
            url: baseurl + '/api/v1/candidate-percentage',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));

                let path = './declaration-form';
                var id = self.props.location.state.user
                // alert("iiiiid",id)
                console.log("hhhhhhhhh", id)
                self.setState({ id: id, back: true });

                self.props.history.push({
                    pathname: path,
                    state: self.state

                })


                // }
            })
            .catch(function (error) {
                // console.log(error);
                // self.setState({ error: "network issue" })
            });


        // return
        // var pdf = new jsPDF('p', 'pt', 'a4');


        // pdf.addHTML($("#uu"), -1, 220, options, function() {
        //   pdf.save('new.pdf');
        // });
        // return




    }




    render() {

        var selectedDocumentList = [];
        var pic = ''

        try {
            for (var i = 0; i < this.state.candidate_documents_data.length; i++) {
                selectedDocumentList.push(this.state.candidate_documents_data[i].document_type)
                if (this.state.candidate_documents_data[i].document_type == "Passport Size Photo") {
                    // console.log("++++++++++++++++++++++++++++++++++",pic)
                    this.setState({ pic: "https://aadhaan.ddns.net" + this.state.candidate_documents_data[i].document })
                }
                if (this.state.candidate_documents_data[i].document_type == "Signature" || this.state.candidate_documents_data[i].document_type == "Thumb Impression") {
                    this.setState({ Sign: "https://aadhaan.ddns.net" + this.state.candidate_documents_data[i].document })
                }

            }
        }
        catch (error) {
            console.log(error)
        }



        try {
            console.log('wwww', this.state.candidate_doc_list)

            console.log('sssss', this.state.candidate_documents_data[1].document_type);
            console.log('sssss', this.state.candidate_documents_data[0].document_type)

            candidate_documents_data = { 'document_type': this.candidate_documents_data[0].document_type }



        }
        catch (err) {
            console.log(err)
        }

        var _10thdata = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            _10thdata = {
                "degree": this.state.education_data[10].degree, "board_university": this.state.education_data[10].board_university, "location": this.state.education_data[10].location,
                "percentage": this.state.education_data[10].percentage,
                "school": this.state.education_data[10].school, "passing_year": this.state.education_data[10].passing_year
            }
            console.log("hjhj", _10thdata);
        } catch (err) {
            console.log("hjhj", err)
        }



        var _12thdata = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            _12thdata = {
                "degree": this.state.education_data[12].degree, "board_university": this.state.education_data[12].board_university, "location": this.state.education_data[12].location,
                "percentage": this.state.education_data[12].percentage,
                "school": this.state.education_data[12].school, "passing_year": this.state.education_data[12].passing_year
            }
            console.log("hjhj", _12thdata);
        } catch (err) {
            console.log("hjhj", err)
        }


        var graduate = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            graduate = {
                "degree": this.state.education_data['graduate'].degree, "board_university": this.state.education_data['graduate'].board_university, "location": this.state.education_data['graduate'].location,
                "percentage": this.state.education_data['graduate'].percentage,
                "school": this.state.education_data['graduate'].school, "passing_year": this.state.education_data['graduate'].passing_year
            }
        } catch (err) {
            console.log("hjhj", err)
        }

        var post_graduate = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            post_graduate = {
                "degree": this.state.education_data['post_graduate'].degree, "board_university": this.state.education_data['post_graduate'].board_university, "location": this.state.education_data['post_graduate'].location,
                "percentage": this.state.education_data['post_graduate'].percentage,
                "school": this.state.education_data['post_graduate'].school, "passing_year": this.state.education_data['post_graduate'].passing_year
            }
            console.log("hjhj", post_graduate);
        } catch (err) {
            console.log("hjhj", err)
        }

        var other = {
            "degree": '', "board_university": "", "location": "",
            "percentage": "",
            "school": "", "passing_year": ""
        }
        try {
            other = {
                "degree": this.state.education_data['other'].degree, "board_university": this.state.education_data['other'].board_university, "location": this.state.education_data['other'].location,
                "percentage": this.state.education_data['other'].percentage,
                "school": this.state.education_data['other'].school, "passing_year": this.state.education_data['other'].passing_year
            }
        } catch (err) {
            console.log("hjhj", err)
        }




        var otherdetails = {
            "name": '', "dl_no": "", "place_of_issue": "", "valid_up_to": "", "vehicle_no": "",
            "pan_card_no": "", "eid_no": "", "aadhaar_no": "", "pf_no": '', "uan": "", "esic_no": "", "esic_name": "", "esic_address": ""
        }

        try {
            console.log(this.state)
            otherdetails = {
                "name": this.state.candidate_other_data.name, "dl_no": this.state.candidate_other_data.dl_no,
                "place_of_issue": this.state.candidate_other_data.place_of_issue, "valid_up_to": this.state.candidate_other_data.valid_up_to,
                "vehicle_no": this.state.candidate_other_data.vehicle_no, "pan_card_no": this.state.candidate_other_data.pan_card_no,
                "eid_no": this.state.candidate_other_data.eid_no, "aadhaar_no": this.state.candidate_other_data.aadhaar_no,
                "pf_no": this.state.candidate_other_data.pf_no, "uan": this.state.candidate_other_data.uan,
                "esic_no": this.state.candidate_other_data.esic_no, "esic_name": this.state.candidate_other_data.esic_name,
                "esic_address": this.state.candidate_other_data.esic_address
            }
        }

        catch (err) {
            console.log("hjhj", err);
        }

        var work_experience = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[0].organization);
            work_experience = {
                "organization": this.state.candidate_work_history_data[0].organization, "designation": this.state.candidate_work_history_data[0].designation,
                "end_date": this.state.candidate_work_history_data[0].end_date, "reason_for_leaving": this.state.candidate_work_history_data[0].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[0].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }

        var work_experience1 = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[1].organization);
            work_experience1 = {
                "organization": this.state.candidate_work_history_data[1].organization, "designation": this.state.candidate_work_history_data[1].designation,
                "end_date": this.state.candidate_work_history_data[1].end_date, "reason_for_leaving": this.state.candidate_work_history_data[1].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[1].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }
        var work_experience2 = { "organization": '', "designation": '', "end_date": '', "reason_for_leaving": '', 'start_date': '' }

        try {
            console.log("tttt", this.state.candidate_work_history_data[2].organization);
            work_experience2 = {
                "organization": this.state.candidate_work_history_data[2].organization, "designation": this.state.candidate_work_history_data[2].designation,
                "end_date": this.state.candidate_work_history_data[2].end_date, "reason_for_leaving": this.state.candidate_work_history_data[2].reason_for_leaving,
                "start_date": this.state.candidate_work_history_data[2].start_date
            }
        }
        catch (err) {
            console.log("ttt", err);
        }



        var emgencyNo = '';
        var emgencyrelation = '';
        var reference = { "name": '', "mobile_no": '', "location": '' }
        try {
            console.log('references', this.state)
            if (this.state.reference[0].relationship != "other") {
                emgencyNo = this.state.reference[0].mobile_no
                emgencyrelation = this.state.reference[0].relationship;
            }
            reference = {
                'name': this.state.reference[0].name, 'mobile_no': this.state.reference[0].mobile_no,
                'location': this.state.reference[0].location
            }
        }

        catch (err) {
            console.log("refrence", err);
        }



        var reference1 = { "name": '', "mobile_no": '', "location": '' }
        try {
            if (this.state.reference[1].relationship != "other") {
                emgencyNo = this.state.reference[1].mobile_no
                emgencyrelation = this.state.reference[1].relationship;
            }
            reference1 = {
                'name': this.state.reference[1].name, 'mobile_no': this.state.reference[1].mobile_no,
                'location': this.state.reference[1].location
            }
        }

        catch (err) {
            console.log("refrence1", err);
        }

        //family data
        var family = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            console.log('family1111', this.state.family)
            family = {
                'name': this.state.family[0].name, 'aadhaar_no': this.state.family[0].aadhaar_no,
                'dob': this.state.family[0].dob, 'is_nominee': this.state.family[0].is_nominee, 'relation': this.state.family[0].relation
            }
        }

        catch (err) {
            console.log("family111", err);
        }

        var family1 = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            console.log('family111', this.state.family)
            family1 = {
                'name': this.state.family[1].name, 'aadhaar_no': this.state.family[1].aadhaar_no,
                'dob': this.state.family[1].dob, 'is_nominee': this.state.family[1].is_nominee, 'relation': this.state.family[1].relation
            }
        }

        catch (err) {
            //console.log("family222",err);
        }
        var family2 = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            //console.log('family11',this.state.family)
            family2 = {
                'name': this.state.family[2].name, 'aadhaar_no': this.state.family[2].aadhaar_no,
                'dob': this.state.family[2].dob, 'is_nominee': this.state.family[2].is_nominee, 'relation': this.state.family[2].relation
            }
        }

        catch (err) {
            // console.log("family111",err);
        }
        var family3 = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            //console.log('family1111',this.state.family)
            family3 = {
                'name': this.state.family[3].name, 'aadhaar_no': this.state.family[3].aadhaar_no,
                'dob': this.state.family[3].dob, 'is_nominee': this.state.family[3].is_nominee, 'relation': this.state.family[3].relation
            }
        }

        catch (err) {
            // console.log("family111",err);
        }
        var family4 = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            console.log('family1111', this.state.family)
            family4 = {
                'name': this.state.family[4].name, 'aadhaar_no': this.state.family[4].aadhaar_no,
                'dob': this.state.family[4].dob, 'is_nominee': this.state.family[4].is_nominee, 'relation': this.state.family[4].relation
            }
        }

        catch (err) {
            //console.log("family111",err);
        }
        var family5 = { "name": '', "aadhaar_no": '', "dob": '', 'is_nominee': '', 'relation': '' }
        try {
            console.log('family1111', this.state.family)
            family5 = {
                'name': this.state.family[5].name, 'aadhaar_no': this.state.family[5].aadhaar_no,
                'dob': this.state.family[5].dob, 'is_nominee': this.state.family[5].is_nominee, 'relation': this.state.family[5].relation
            }
        }

        catch (err) {
            //console.log("family111",err);
        }




        console.log("this previe=", otherdetails)

        // console.log("++++++++++++++++++++++++++++++++++",pic)
        // console.log(this.state.candidate_documents_data)
        return (

            <div id="uu" className="page-wrapper">
                <Helmet>
                    <title>Application Form - HRMS Admin Template</title>
                    <meta name="description" content="Application Form page" />
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
                            {/* <div className="col-auto float-right ml-auto">
                                
                                <Pdf className="btn add-btn"targetRef={ref} filename="file.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
                            </div> */}
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row" ref={ref}>
                        <div className="col-sm-12">
                            <div className="canvas_div_pdf">
                                <form className="p-3 border bg-white border-dark">
                                    <div className="row no-gutters mb-4">
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0">Client Name:</label>
                                                </div>
                                                <input disabled="disabled" type="text" name="client-name" className=" mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0">Date of Joining:</label>
                                                </div>
                                                <input disabled="disabled" type="text" name="doj" className=" mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0">Employee Code:</label>
                                                </div>
                                                <input disabled="disabled" type="text" name="employee-code" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters d-flex mb-4">
                                        <div className="col-sm-4 application_logo">
                                            {/* <img src="logo.png" width="100" alt="logo" />  */}
                                            <img src={Applogo} width="100" alt="logo" />
                                        </div>
                                        <div className="col-sm-4 my-auto">
                                            <h2 className="text-center"><u>APPLICATION BLANK</u></h2>

                                        </div>

                                        <div className="col-sm-4 my-auto">
                                            <div className="float-right border border-dark small w-25 p-1 mr-4 text-center">
                                                <div className="image-upload">
                                                    <label htmlFor="Uploadphoto" className="mb-0">
                                                        {/* <img src="upload-photo.png" id="photo" alt="Upload Photo" className="img-fluid" /> */}
                                                        <img alt="" src={this.state.pic} id="photo" alt="Upload Photo" className="img-fluid" />
                                                    </label>
                                                    {/* <input id="Uploadphoto" type="file" onchange="readURL(this);" /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters mb-2">
                                        <div className="col-sm-12">
                                            <p style={{ lineHeight: "1" }}>1. Please answer each column fully and neatly in your own handwriting. (Blue or Black pen)<br />
                                        2. Please &#10004; in the <span style={{ fontSize: "20px" }}>&#x25A1;</span> wherever applicable</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters border border-dark p-2">
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="mb-0 text-uppercase">* Name in Full (In block letters)[As per Aadhar Card]</label>
                                                <input disabled="disabled" type="text" name="name" defaultValue={this.state.name} className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="mb-3">
                                                <label htmlFor="" className="mb-0 text-uppercase">* Father's Name in Full (In block letters)[As per Aadhar Card]</label>
                                                <input disabled="disabled" defaultValue={this.state.father_name} type="text" name="father-name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Designation:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.designation} type="text" name="designation" className=" mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Location</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.job_location} type="text" name="location" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Department</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.department} type="text" name="department" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters border border-dark p-2">
                                        <div className="col-sm-12">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Communication Address</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.c_house_no} type="text" name="communication-address" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Landmark:</label>
                                                </div>
                                                <input disabled="disabled" type="text" name="landmark" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">City:</label>
                                                </div>

                                                <input disabled="disabled" defaultValue={this.state.c_city} type="text" name="city" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">State:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.c_state} type="text" name="state" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Pin Code:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.c_pin_code} type="text" name="pincode" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Mobile Number:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.c_mobile_no} type="text" name="mobile-number" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters border border-dark p-2">
                                        <div className="col-sm-12">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Permament Address</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_house_no} type="text" name="parmement-address" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Landmark:</label>
                                                </div>
                                                <input disabled="disabled" type="text" name="landmark" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">City:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_city} type="text" name="city" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">State:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_state} type="text" name="state" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Pin Code:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_pin_code} type="text" name="pincode" className="mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label className="m-0 text-uppercase">Mobile Number:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_mobile_no} type="text" name="mobile-number2" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Emergency Mobile No.:</label>
                                                </div>

                                                <input disabled="disabled" defaultValue={this.state.emergencyNo} type="text" name="emergency-mobile" className="mx-2 form-control" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Emergency Person Name:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.contperson} type="text" name="person-name" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">E-Mail:</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.p_email} type="email" name="email" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row no-gutters border border-dark">
                                        <div className="col-sm-4 border-right border-dark p-2">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Date of Birth</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.dob} type="text" name="dob" className="ml-2 form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="text-uppercase d-block">*Marital Status:</label>
                                                <div className="row">
                                                    <div className="col-sm-8 text-uppercase">Married</div>
                                                    <div className="col-sm-4 text-right"><input type="radio" name="marital-status" value="Married" checked={this.state.marital_status === "married"} defaultValue={this.state.marital_status} /></div>
                                                    <div className="col-sm-8 text-uppercase">Unmarried</div>
                                                    <div className="col-sm-4 text-right"><input type="radio" checked={this.state.marital_status === "Single"} name="marital-status" value="Unmarried" /></div>
                                                </div>
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Marriage Date</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.marrage_date} type="text" name="dom" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-2 border-right border-dark p-2">
                                            <div className="form-group">
                                                <label className="text-uppercase d-block">Sex:</label>
                                                <div className="row">
                                                    <div className="col-sm-8 text-uppercase">Male</div>
                                                    <div className="col-sm-4 text-right"><input type="radio" checked={this.state.gender === "male"} name="gender" value="male" defaultValue={this.state.gender} /></div>
                                                    <div className="col-sm-8 text-uppercase">Female</div>
                                                    <div className="col-sm-4 text-right"><input type="radio" checked={this.state.gender === "female"} name="gender" value="female" defaultValue={this.state.gender} /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 p-2">
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Category:</label>
                                                </div>
                                                <input type="radio" className="ml-4 mr-2 my-auto" value="SC" checked={this.state.category === "SC"} /> SC
                                            <input type="radio" className="ml-4 mr-2 my-auto" value="ST" checked={this.state.category === "ST"} /> ST
                                            <input type="radio" className="ml-4 mr-2 my-auto" value="OBC" checked={this.state.category === "OBC"} /> OBC
                                            <input type="radio" className="ml-4 mr-2 my-auto" checked={this.state.category === "OPEN"} /> OPEN
                                        </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Nationality</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.nationality} type="text" name="nationality" className="ml-2 form-control" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">*Blood Group</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.blood_group} type="text" name="blood-group" className="ml-2 form-control" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Mother Tongue</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.mother_tongue} type="text" name="mother-tongue" className="ml-2 form-control" />
                                            </div>
                                            <div className="form-group input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0 text-uppercase">Religion</label>
                                                </div>
                                                <input disabled="disabled" defaultValue={this.state.religion} type="text" name="religion" className="ml-2 form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table width="100%" className="table mb-4 border-dark table-bordered" cellSpacing="0">
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
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.degree} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.board_university} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.school} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.location} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.passing_year} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_10thdata.percentage} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">XII Std/Equiv.(12<sup>th</sup>)</td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.degree} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.board_university} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.school} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.location} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.passing_year} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={_12thdata.percentage} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">Graduate</td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.degree} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.board_university} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.school} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.location} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.passing_year} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={graduate.percentage} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">P.G.</td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.degree} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.board_university} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.school} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.location} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.passing_year} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={post_graduate.percentage} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">Others</td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.degree} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.board_university} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.school} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.location} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.passing_year} /></td>
                                                <td><input type="text" disabled="disabled" name="" className="px-0 py-0 border-0 form-control" defaultValue={other.percentage} /></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="table-responsive">
                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <td colSpan="5"><h5 className="text-uppercase font-weight-bold">Work Experience</h5></td>
                                            </tr>
                                            <tr>
                                                <th width="30%" className="text-uppercase font-weight-bold text-center">Organisation</th>
                                                <th width="20%" colSpan="2" className="text-uppercase font-weight-bold text-center">Period</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Designation at the Time of Leaving</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Reason for Separation</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience.organization} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="From" onFocus="(this.type='date')" defaultValue={work_experience.start_date} /></td>
                                                <td className="text-center"><input type="text" name="" className="px-0 py-0 text-center border-0 form-control"

                                                    placeholder="To" onfocus="(this.type='date')" defaultValue={work_experience.end_date} /></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience.designation}></textarea></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience.reason_for_leaving}></textarea></td>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.organization} /></td>
                                                <td className="text-center"><input disabled="disabled" type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="From" onfocus="(this.type='date')" defaultValue={work_experience1.start_date} /></td>
                                                <td className="text-center"><input disabled="disabled" type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="To" onfocus="(this.type='date')" defaultValue={work_experience1.end_date} /></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.designation}></textarea></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience1.reason_for_leaving}></textarea></td>
                                            </tr>
                                            <tr>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.organization} /></td>
                                                <td className="text-center"><input disabled="disabled" type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="From" onfocus="(this.type='date')" defaultValue={work_experience2.start_date} /></td>
                                                <td className="text-center"><input disabled="disabled" type="text" name="" className="px-0 py-0 text-center border-0 form-control"
                                                    placeholder="To" onfocus="(this.type='date')" defaultValue={work_experience2.end_date} /></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.designation}></textarea></td>
                                                <td><textarea className="px-0 py-0 border-0 form-control" defaultValue={work_experience2.reason_for_leaving}></textarea></td>
                                            </tr>
                                            <tr>
                                                <td colSpan="5" height="30"></td>
                                            </tr>
                                            <tr>
                                                <th className="text-uppercase font-weight-bold text-center">References</th>
                                                <th colSpan="2" className="text-uppercase font-weight-bold small text-center">Name</th>
                                                <th className="text-uppercase font-weight-bold text-center">Mobile Number</th>
                                                <th className="text-uppercase font-weight-bold text-center">Location</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" placeholder="1." /></td>
                                                <td colSpan="2"><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference.name} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference.mobile_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference.location} /></td>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" placeholder="2." /></td>
                                                <td colSpan="2"><input type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference1.name} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference1.mobile_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={reference1.location} /></td>
                                            </tr>
                                        </table></div>

                                    <div className="table-responsive">
                                        <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Other Details:</h5>
                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Name (As Per Driving License)</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">*Driving License No.</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Place of Issue</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Valid Up To (MM-DD-YYYY)</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.name} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.dl_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.place_of_issue} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.valid_up_to} /></td>
                                            </tr>
                                            <tr>
                                                <th className="text-uppercase font-weight-bold text-center">Vehicle Number</th>
                                                <th className="text-uppercase font-weight-bold text-center">Pan Card Number</th>
                                                <th className="text-uppercase font-weight-bold text-center">Election Id Number</th>
                                                <th className="text-uppercase font-weight-bold text-center">*Aadhar Card No.</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.vehicle_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.pan_card_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.eid_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.aadhaar_no} /></td>
                                            </tr>
                                            <tr>
                                                <th className="text-uppercase font-weight-bold text-center">*Old PF No.</th>
                                                <th className="text-uppercase font-weight-bold text-center">*Old UAN No.</th>
                                                <th className="text-uppercase font-weight-bold text-center">*Old ESIC No.</th>
                                                <th className="text-uppercase font-weight-bold text-center">*Old ESIC Dispensory Name & Address</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.pf_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.uan} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.esic_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={otherdetails.esic_name ? otherdetails.esic_name : "" + "" + otherdetails.esic_address ? otherdetails.esic_address : ''} /></td>
                                            </tr>
                                        </table></div>
                                    <div className="table-responsive">
                                        <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Bank Details:</h5>

                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Bank Name</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Account No.</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">IFSC Code</th>
                                                <th width="25%" className="text-uppercase font-weight-bold text-center">Branch Name</th>
                                            </tr>
                                            <tr>
                                                <td><input disabled="disabled" disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.bank_name} /></td>
                                                <td><input disabled="disabled" disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.account_number} /></td>
                                                <td><input disabled="disabled" disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.ifsc_code} /></td>
                                                <td><input disabled="disabled" disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={this.state.branch_name} /></td>
                                            </tr>
                                        </table></div>
                                    <div className="table-responsive">
                                        <h5 className="text-uppercase font-weight-bold mt-2 mb-1">Family Details:</h5>
                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <th width="20%" className="text-uppercase text-center">Family Member (Relationship)</th>
                                                <th width="30%" className="text-uppercase text-center">Person Name as per Aadhar Card</th>
                                                <th width="15%" className="text-uppercase text-center">Date of Birth</th>
                                                <th width="20%" className="text-uppercase text-center">Aadhar Card Number</th>
                                                <th width="15%" className="text-uppercase text-center small font-weight-bold">Write "Yes" if add as Nominee</th>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family1.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family1.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family1.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family1.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family1.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family2.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family2.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family2.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family2.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family2.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family3.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family3.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family3.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family3.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family3.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family4.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family4.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family4.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family4.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family4.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold">{family5.relation}</td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family5.name} /></td>
                                                <td className="text-center"><input disabled="disabled" type="date" name="" className="px-0 py-0 text-center border-0 form-control" defaultValue={family5.dob} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family5.aadhaar_no} /></td>
                                                <td><input disabled="disabled" type="text" name="" className="px-0 py-0 border-0 form-control" defaultValue={family5.is_nominee ? "Yes" : "No"} /></td>
                                            </tr>
                                        </table></div>
                                    <div className="row no-gutters border border-dark p-2">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-8 py-2 text-uppercase font-weight-bold">Documents Checklist:</div>
                                                <div className="col-sm-4 py-2 text-center text-uppercase font-weight-bold">Tick</div>

                                                <div className="col-sm-8 py-1">1. Aadhar Card</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Adhaar Card Front", "Adhaar Card Back")} /></div>
                                                <div className="col-sm-8 py-1">2.  PanCard</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Pan Card")} /></div>
                                                <div className="col-sm-8 py-1">3.Voter ID Card</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Voter ID")} /></div>
                                                <div className="col-sm-8 py-1">4.Driving License </div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Driving License Front", "Driving License Back")} /></div>
                                                <div className="col-sm-8 py-1">5.Resume/Bio Data </div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Resume/ Bio-DATA")} /></div>




                                                {/* {candidate_documents_data.map(document => (
                              <div key={document.key} > */}

                                                {/* <ul className="personal-info">
                          {candidate_documents_data.map(document => (
                              <li key={document.key} >
                              <div className="title">{document.document_type}</div>
                              <div className="text"><input type="checkbox" className="" defaultChecked="true"/></div>
                              <a href="#" className="edit-icon" data-toggle="modal" data-target="#document_checklist"id={document.document_type}></a>
                            </li>
                          ))} */}

                                                {/* {candidate_doc_list.map(document => (
                              <li key={document.key} >
                              <div className="title">{document}</div>
                              <div className="text"><input type="checkbox" className="" />
                              <a href="#" className="edit-icon"  data-toggle="modal" data-target="#document_checklist"></a>
                              </div>
                            </li>
                          ))}
                          </ul> */}
                                            </div>

                                            {/* ) )}
                                             </div> */}
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                {/*  'Ration Card', 'Passport Size Photo', 'Rent Agreement', 'Passbook', 'Marriage Certificate', 'Signature', 'Thumb Impression'] */}

                                                <div className="col-sm-8 py-2 text-uppercase font-weight-bold">Documents Checklist:</div>
                                                <div className="col-sm-4 py-2 text-center text-uppercase font-weight-bold">Tick</div>
                                                <div className="col-sm-8 py-1">6. Ration Card</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Ration Card")} /></div>
                                                <div className="col-sm-8 py-1">7. Passport Size Photos</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Passport Size Photo")} /></div>
                                                <div className="col-sm-8 py-1">8. Rent Agreement</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Rent Agreement")} /></div>
                                                <div className="col-sm-8 py-1">9. Passport/Cancelled Cheque</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Passbook")} /></div>
                                                <div className="col-sm-8 py-1">10. Marriage Certificate</div>
                                                <div className="col-sm-4 py-1 text-center"><input type="checkbox" defaultChecked={selectedDocumentList.includes("Marriage Certificate")} /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters border border-dark p-2">
                                        <div className="col-sm-6 pt-4">
                                            <div className="form-group mb-0 input-group">
                                                <div className="input-group-prepend my-auto">
                                                    <label htmlFor="" className="m-0">Place</label>
                                                </div>

                                                <input disabled="disabled" type="text" name="place" className="px-0 py-1 mx-2 form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mt-2">
                                            <div className="border border-dark p-1 text-center">
                                                <div className="image-upload sign-upload">
                                                    <label htmlFor="Uploadsign" className="mb-0">
                                                        {/* <img src="sign.png" id="sign" alt="Upload Sign" className="img-fluid" /> */}
                                                        <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                                    </label>
                                                    {/* <input id="Uploadsign" type="file" onchange="readSign(this);" /> */}
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

                <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.generatePdf}>Continue</button>
                    <label className='text-danger'>{this.state.error1}</label>
                    {/* <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.generatePdf}>Generate Pdf</button> */}
                </div>

                <br />

            </div>

        );
    }
}
export default ApplicationForm;