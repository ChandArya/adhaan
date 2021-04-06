import React, { Component } from 'react';
import { Table } from 'react-table';
import { epfs, Sign } from '../../../Entryfile/imagepath.jsx'
// var axios = require('axios');
var axios = require('axios');
var baseurl = 'https://aadhaan.ddns.net';
import { CompnySign, CompnyThum } from '../../../Entryfile/imagepath.jsx'
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
class EsicdeclrationForm extends Component {


    constructor(props) {
        super(props);
        this.state = { ...this.props.location.state, error1: '' }
        document.documentElement.scrollTop = 0;
    }


    generatePdf = (e) => {
        this.setState({ error1: "please wait file is uploading" })
        document.documentElement.scrollTop = 0;
        var pdf = new jsPDF('portrait');
        var pdfName = this.state.name + 'esic.pdf';

        var options = { background: '#fff', };

        var $divs = $('#uu')
        console.log("length", $divs.length)            //jQuery object of all the myDivClass divs
        var numRecursionsNeeded = 3 - 1;     //the number of times we need to call addHtml (once per div)
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
                pdf.addPage();
                window.scrollBy(0, 1800);
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

        var self = this;
        var formData = new FormData();
        formData.append("candidate", "" + localStorage.getItem("can"))
        // formData.append("pdf_document_3", new File([data], this.state.name + '_eic.pdf'))
        formData.append("pdf_document_3", null)
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
                // self.setState({ error: response.data.message })
                // if (response.data.status == true) {
                let path = './Gratituty-form';
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




    }







    render() {
        const candidate_doc_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        const candidate_dob_list = [1, 2, 3, 4, 5, 6, 7, 8]
        const candidate_name_list = [1, 2, 3]
        const candidate_fname_list = [1, 2]
        const candidate_gender_list = [1, 2, 3]
        const candidate_mobile_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const candidate_email_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
        const candidate_uan_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const member_id_date = [1, 2, 3, 4, 5, 6, 7, 8]
        const passport_valid_from = [1, 2, 3, 4, 5, 6, 7, 8]
        const passport_valid_till = [1, 2, 3, 4, 5, 6, 7, 8]
        const emp_code_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


        try {
            console.log('wwww', this.state.candidate_doc_list)
            console.log('twinkle', this.state)

            console.log('sssss', this.state.candidate_documents_data[1].document_type);
            console.log('print', this.state.candidate_documents_data[0].document_type);
            console.log('nominee print', this.state.isNomnieeList);

            candidate_documents_data = { 'document_type': this.candidate_documents_data[0].document_type }



        }
        catch (err) {
            console.log(err)
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

        var isNomnieeList = this.state.family.filter(function (data) {
            return data.is_nominee
        })
        console.log('nominee print', this.state.isNomnieeList);
        console.log('nominee print', this.state.is_nominee);
        console.log('nominee print111', this.state);






        const pin_code = [1, 2, 3, 4, 5, 6]
        return (

            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>









                {/*Esic-declrationForm page */}


                <div id='#uu' className="border" >
                    < div className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
                        <div className="col-md-12">

                            <div className="float-right">
                                <p>Employee Code :_______________________</p>
                                <p>Mobile No. :{this.state.mobile_no}</p>

                            </div></div>





                        <div className="col-md-12">

                            <div className="border border-dark bg-white" style={{ overflowX: 'hidden' }} >

                                <div className=" font-weight-bold text-right mt-2 mr-2 "> (FORM - 1)</div>
                                <div className="  mt-2 text-center font-weight-bold d-flex">

                                    <div className="account-logo  ">
                                        <a href="#"><
                                            img src={epfs} alt="Adhaan" /></a>
                                    </div>

                                    <h1 style={{ margin: 'auto' }}>
                                        घोषणा पत्र / ESIC DECLARATION FORM
                                           </h1>

                                </div>
                                <p className="text-center" style={{}}>To be filled in by the employee after reading instructions overleaf. Two Postcard
                                        size photographs are to be attached with this form.This form if free of cost.</p><br />




                                <div className="row row-no-gutter" style={{ boder: '1px solid' }}>

                                    <div className="col-md-6 pr-0">
                                        <div className='table-responsive' style={{ overflow: 'inherit' }}>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td colspan="4" scope="col">(क)बीमाकृत व्यक्ति  का विवरण
                                                            <br />(A) INSURED PERSON'S PARTICULARS</td>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1. Insurance No.
                                                                <br />
                                                                बीमा संख्या

                                                            </td>
                                                        <td colSpan="3"><input className="form-control" type="text" name="" /></td>

                                                    </tr>
                                                    <tr>
                                                        <td> 2. नाम स्पष्ट अक्षर में
                                                                <br />
                                                             Name (in block letters)</td>
                                                        <td colSpan="3"><input className="form-control" disabled="disabled" defaultValue={this.state.name} autoFocus type="text" name="" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>पिता/ पति का नाम <br />
                                                             3. Father / Husbands Name</td>
                                                        <td colSpan="3"><input defaultValue={this.state.father_name} disabled="disabled" type="text" name="" className="form-control" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td> 4. जन्म तिथि  / Date of Birth<br />
                                                            {/* {candidate_dob_list.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                                                ))} */}
                                                            <input className="form-control" disabled="disabled" defaultValue={this.state.dob} type="text" ></input>
                                                        </td>
                                                        <td colSpan="3">
                                                            4.वैवाहिक स्तर <br />
                                                                  Marital Status
                                                               {/* <p className="text-right">  वि/अ/वि<br/>
                                                                M/U/W</p> */}
                                                            <input className=" text-uppercase form-control" disabled="disabled" defaultValue={this.state.marital_status} />
                                                            {/* <div className=" row border "></div> */}
                                                            लिंग /Sex
                                                               {/* <p className="text-right"> /Male / Female</p> */}
                                                            {/* <p className="text-right text-uppercase" disabled="disabled">{this.state.gender} </p> */}
                                                            <input className=" text-uppercase form-control" disabled="disabled" defaultValue={this.state.gender} />

                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td colSpan="1">स्थायी पता
                                                        /Current Address
                                                                <hr />
                                                            <input defaultValue={this.state.c_full_address} disabled="disabled" type="text" className="form-control text-uppercase"></input>

                                                            <hr />
                                                            <input disabled="disabled" defaultValue={this.state.c_country} type="text" className="form-control text-uppercase"></input>
                                                            <br />
                                                            <hr />
                                                            <div className="d-flex">पिन कोड<br />
                                                            Pin Code &nbsp; &nbsp; &nbsp; &nbsp;

                                                                    {/* {pin_code.map(document => (
                                                                        <input key={document.key} type="text" style={{ width: '10%' }}></input>
                                                                       
                                                                    ))} */}
                                                                <input disabled="disabled" defaultValue={this.state.c_pin_code} style={{ width: '40%', height: 'auto' }} type="text" className="form-control" ></input>
                                                            </div>
                                                            <div className="text-center">
                                                                टेलीफोन नंबर /इ-मेल
                                                                / E-mail Address
                                                                  </div>
                                                            <input disabled="disabled" defaultValue={this.state.p_email} type="text" className="form-control"></input>

                                                        </td>


                                                        <td colSpan="3">वर्तमान पता
                                                        /Present Address
                                                             <hr />
                                                            <input disabled="disabled" defaultValue={this.state.p_full_address} type="text" className="form-control text-uppercase"></input>
                                                            <hr />
                                                            <input disabled="disabled" defaultValue={this.state.p_country} type="text" className="form-control text-uppercase"></input>
                                                            <br />
                                                            <hr />
                                                            <div className="d-flex">पिन कोड<br />
                                                                    Pin Code &nbsp; &nbsp; &nbsp; &nbsp;

                                                                    {/* {pin_code.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '10%' }}></input>

                                                                ))} */}
                                                                <input disabled="disabled"  defaultValue={this.state.p_pin_code} type="text" className="form-control"></input>
                                                            </div>
                                                            <div className="text-center">
                                                                टेलीफोन नंबर /इ-मेल / E-mail Address
                                                                  </div>
                                                            <input disabled="disabled" defaultValue={this.state.p_email} type="text" className="form-control"></input>

                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td colSpan="2" style={{ height: '10%' }}>
                                                            शाखा कार्यालय<br />
                                                            Branch Office
                                                                {/* <input defaultValue={this.state.branch_name} type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input> */}
                                                            <input disabled="disabled" defaultValue={this.state.branch_name} type="text" className="form-control"></input>

                                                        </td>
                                                        <td colSpan="2">
                                                            औषधालय<br />
                                                            Dispensary

                                                            <input disabled="disabled" defaultValue={this.state.candidate_other_data.esic_name} type="text" className="form-control"></input><br />

                                                        </td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>

                                    </div>

                                    <div className="col-md-6 pl-0">
                                        <div className='table-responsive' style={{ overflow: 'inherit' }} >
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td colspan="4" scope="col">(ब)  नियोजक का विवरण
 <br />
                                                            (B) EMPLOYER'S PARTICULARS</td>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> नियोजक का कूट संख्या
                                                                <br />9.Employer's Code No.</td>
                                                        <td colSpan="3" >
                                                            {/* {emp_code_no.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '5%' }}></input>

                                                                ))} */}
                                                            <input  className="form-control" type="text"></input>
                                                        </td>

                                                    </tr>
                                                    <tr>

                                                        <td colSpan="3"> नियुक्ति कि तिथि  <br />
                                                            10.Date of Appointment</td>
                                                        <td className="text-center">
                                                            {/* <div className="text-center " style={{ display: 'inline-flex' }}>
                                                                <div className='border border-dark' style={{ width: '60px', hight: '20px' }}>दिन <br/>Day</div>
                                                                <div className='border border-dark' style={{ width: '60px', hight: '20px' }}> महीना<br/>Month</div>
                                                                <div className='border border-dark' style={{ width: '60px', hight: '20px' }}> वर्ष <br/>Year</div>
                                                                </div>
                                                                <div className="" >

                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                </div> */}
                                                            <input className="form-control" type="text" ></input>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4" scope="col">11. नियोजक का नाम और पता /Name & Address of the Employer<br />
                                                            Times Square Arcade, Office No-712/712<br></br>
                                           A,Opp-Rambaug,NR Ravija Plaza,<br></br>
                                           Thaltej-shila Road<br></br>
                                            Ahmedabad-380059 <br />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan="4">
                                                            12.यदि पहले नियोजन में रहे हैं, तो निम्नलिखित विवरण दीजिये।
                                                            /In case of any previous employment please fill up the detail as under.
                                                            </td>

                                                    </tr>


                                                    <tr>
                                                        <td colSpan="4"><br />(क)बीमा संख्या<br />
                                                                a) Previous Ins. No.
                                                             <input type="text" name="" className="form-control" /><br />
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td colSpan="4">
                                                            (ख)नियोजक का कूट संख्या<br />
                                                                b) Emplr's Code No.

                                                             <input type="text" name="" className="form-control" /><br />
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td colspan="4" scope="col">(ग) नियोजक का नाम  और पता  <br />
                                                            <b>Name & Address of the Employer</b><br /><br />
                                                            Times Square Arcade, Office No-712/712<br></br>
                                           A,Opp-Rambaug,NR Ravija Plaza,<br></br>
                                           Thaltej-shila Road<br></br>
                                            Ahmedabad-380059 <br />    <br />
                                                            {/* <input defaultValue={otherdetails.esic_name + "" + otherdetails.esic_address} type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br /> */}

                                                           
                                                            <div className="float-left d-flex ">
                                                                इ-मेल / E-mail Address
                                                              
                                                        
                                                            </div>

                                                            <br />
                                                       
                                                            <input disabled="disabled" defaultValue={this.state.c_email}  style= {{height:'52px'}} type="text" name="" className="form-control" />

                                                       
                                                       
                                                          
                                                        </td>


                                                    </tr>



                                                </tbody>

                                            </table>

                                        </div>
                                    </div>


                                </div>

                                <div className="col-md-12 pl-0 pr-0">

                                    <div className='table-responsive twinkle' style={{ overflowX:'auto'}}>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td colSpan="6" >(ग)मृत्यु की स्थिति में हितलाभ के भुगतान के लिए क रा वी अधिनियम 1984 की धारा  /टेलीफोन नंबर इ-मेल/ क रा वी (केंद्रीय) नियम 1950 के अंतर्गत नियमों के ब्योरे
  <br />
                                                        (C) Details of Nominee u/s 71 of ESI Act 1948/Rile 56(2) of ESI (Central) Rules, 1950 for payment of cash benefit in the event of death.</td>

                                                </tr>


                                                <tr>
                                                    <td colSpan="2">
                                                        नाम /Name
                                                       


                                                    </td>
                                                    <td>
                                                        सम्बन्ध/ Relationship
                                                      

                                                    </td>
                                                    <td colSpan="4">
                                                        पता /Address
                                                        

                                                    </td>
                                                
                                                </tr>
                                                    {isNomnieeList.map(document => (

                                                        <tr>
                                                            <td colSpan="2"><input disabled="disabled"  type="text" name="" defaultValue={document.name} className="form-control" /></td>
                                                            <td className="text-center" ><input disabled="disabled" type="text" name="" defaultValue={document.relation}
                                                                placeholder="" onFocus="(this.type='date')" className="form-control" /></td>
                                                            <td colSpan="4" className="text-center"><input disabled="disabled" type="text" name="" defaultValue={document.address}
                                                                placeholder="" onFocus="(this.type='date')"  className="form-control"/></td>
                                                           
                                                        </tr>

                                                    ))}

                                               


                                                <tr className="text-center">
                                                    <td colSpan="6" >बीमाकृत व्यक्ति के परिजनों विवरण/टेलीफोन नंबर/इ-मेल / (D) FAMILY PARTICULARS OF INSURED PERSON</td>


                                                </tr>
                                                <tr>
                                                    <td >
                                                        क्रम संख्या <br />Sl. No
                                                            </td>
                                                    <td >
                                                        नाम / Name
                                                            </td>
                                                    <td >फॉर्म भरने तारिख /आयु
                                                            <br />
                                                            Date of Birth / Age as on
                                                            date of filling form
                                                            </td>
                                                    <td >कर्मचारी के साथ  सम्बन्ध

                                                            <br />
                                                            Relationship with the
                                                            Employee
                                                            </td>
                                                    <td >
                                                        क्या उनके साथ रह रहे हैं

                                                            <br />
                                                            Whether residing with
                                                            him / her ?
                                                            <div className="text-center">
                                                            <td scope="col" >
                                                                हाँ/YES
                                                            </td>
                                                            <td scope="col">
                                                                नहीं/ No
                                                            </td>
                                                        </div>
                                                    </td>
                                                    <td >
                                                        यदि  नहीं तो स्थान आवास दर्शाये

                                                            <br />

                                                            If No, State place of residence
                                                             <div className="d-flex">
                                                            उप नगर /TOWN &nbsp;&nbsp;
                                                            राज्य/STATE
                                                                </div>
                                                    </td>
                                                </tr>


                                                <tr>

                                                    <td>
                                                        <input  disabled="disabled" type="text" name="" className="form-control" placeholder="1" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family.name} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family.dob} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family.relation} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} type="text" name="" className="form-control" />

                                                    </td>
                                                </tr>

                                                <tr>

                                                    <td>
                                                        <input  disabled="disabled" type="text" name="" className="form-control" placeholder="2" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family1.name} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family1.dob} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family1.relation} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />
                                                    </td>
                                                    <td>
                                                        {/* <input style={{width:'auto'}} defaultValue={this.state.c_city}type="text" name="" className="form-control" /> */}
                                                        <input style={{width:'auto'}} type="text" name="" className="form-control" />
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <input  disabled="disabled"  type="text" name="" className="form-control" placeholder="3" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family2.name} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family2.dob} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled" defaultValue={family2.relation} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />
                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} type="text" name="" className="form-control" />

                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td>
                                                        <input  disabled="disabled"  type="text" name="" className="form-control" placeholder="4" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled"  defaultValue={family3.name} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled"  defaultValue={family3.dob} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} disabled="disabled"  defaultValue={family3.relation} type="text" name="" className="form-control" />

                                                    </td>
                                                    <td>
                                                        <input  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />

                                                    </td>
                                                    <td>
                                                        <input style={{width:'auto'}} type="text" name="" className="form-control" />

                                                    </td>
                                                </tr>

                                            </tbody>

                                        </table>
                                        <hr style={{ width: '100%', border: '1px solid black', marginTop: '1%', marginBottom: '1%' }}></hr>

                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="table-responsive" style={{ overflow: "auto" }}>

                                                <table class="table table-bordered">
                                                    <caption style={{ captionSide: 'top', textAlign: 'center' }}>
                                                        क रा वी निगम अस्थायी पहचान पत्र

                                                            <br />ESI Corporation Temporary Identity Card</caption>
                                                    <tbody>
                                                        <tr>
                                                            <td >
                                                                नाम / Name
                                                            </td>
                                                            <td >

                                                                <input disabled="disabled"  defaultValue={this.state.name} type="text" name="" className="form-control" /><br />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td >
                                                                बीमा संख्या/Ins. No.
                                                            </td>
                                                            <td >

                                                                <input type="text" name="" className="form-control" /><br />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td >
                                                                नियुक्ति कि तिथि /Date of Appointment.
                                                            </td>
                                                            <td >

                                                                <input type="text" name="" className="form-control" /><br />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td >
                                                                शाखा कार्यालय
                                                                <br />Branch Office
                                                       <input disabled="disabled"  defaultValue={this.state.branch_name} type="text" name="" className="form-control" /><br />
                                                            </td>
                                                            <td >
                                                                औषधालय
                                                                <br />Dispensary
                                                                    <input disabled="disabled"  defaultValue={this.state.candidate_other_data.esic_name} type="text" name="" className="form-control" /><br />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td >
                                                                नियोजक का कूट संख्या व पता <br />Employer's Code No. & Address


                                                            </td>
                                                            <td >

                                                                <input type="text" name="" className="form-control" /><br />
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p>
                                                    वैधता <br />Validity :

                                                    </p>

                                            </div>



                                        </div>

                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="table-responsive" style={{ overflow: 'auto' }}>
                                                    <table class="table table-bordered">
                                                        <caption style={{ captionSide: 'top', textAlign: 'center' }}>
                                                            (नियुक्ति कि तिथि 3 मास वैध)<br />
                                                            (Valid for 3 months from the date of appointment)</caption>
                                                        <caption style={{ textAlign: 'center' }}>Father Mother & Son Photo</caption>



                                                        <tr>
                                                            <div style={{ width: '200px', height: '200px', border: '1px solid black', marginLeft: '30%' }}>

                                                            </div>
                                                        </tr>


                                                    </table>

                                                </div>
                                            </div>
                                        </div>




                                    </div>



                                    <div className="title d-flex">

                                        <p>
                                            दिनांक/Dated :{today}

                                        </p>
                                        <p style={{ marginLeft: '30%' }}>
                                            <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                            <br />
                                            बीमाकृत व्यक्ति के हस्ताक्षर/अंगूठे का निशान/Signature / T.I. of I.P.</p>


                                        <p style={{ marginLeft: '30%' }}> मोहर सहिल
 शाखा कार्यालय प्रबंधक के हस्ताक्षर /Signature of B.M. with Seal</p>
                                        {/* <img src={CompnyThum} id="sign" alt=" " className="img-fluid1" /> */}
                                    </div>








                                </div>

                            </div><br />
                        </div><br />

                    </ div><br />
                </div><br />



                <div className="border">
                    < div className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
                        <div className="col-md-12">
                            <div className="border border-dark bg-white" style={{ overflow: 'hidden' }}>
                                <div className="title p-3">
                                    मैं घोषणा करता करती हूँ कि मेरे द्वारा प्रस्तुत किया गया ब्यौरा मेरी जानकारी के अनुसार और विश्वास सही है परिवार सदस्यों में हुए परिवर्तन कि सूचना 15 दिन भीतर करने का वचन भी देता देती
               <br /> I hereby declare that the particulars given by me are correct to the best of my knowledge and belief. I undertake to intimate the Corporation any changes
in the membership of my family within 15 days of such change
                </div>
                                <div className="title d-flex p-3">

                                    <p>बीमाकृत व्यक्ति के हस्ताक्षर
                                                 <br />
                                             Counter Signature by the Employer
                                             <br />
                                          Signature with seal
                                          {/* <img src={CompnyThum} id="sign" alt=" " className="img-fluid1" />
                                        <img src={CompnySign} id="sign" alt=" " className="img-fluid1" /> */}


                                    </p>
                                    <p style={{ marginLeft: '10%' }}>For,<b> Adhaan Solution Pvt. Ltd.</b></p>

                                    <div style={{ marginLeft: '15%', float: 'right', paddingRight: '3%', overflow: 'hidden' }} className='border border-dark' >
                                        <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" style={{marginLeft:'inherit'}} />
                                        <p style={{ marginLeft: '15%', paddingRight: '3%' }}>बीमाकृत व्यक्ति के हस्ताक्षर/अंगूठे का निशान
                                  Signature/T.I. of IP</p>


                                    </div>
                                </div>
                                < div className="title d-flex p-3">

                                    <p>
                                        Dated:{today}

                                    </p>
                                    <p style={{ marginLeft: '15%' }}><b> Authorised Signature</b></p>

                                    {/* <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" /> */}
                                </div>

                                <div className="row border border-dark bg-white" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <div className=" font-weight-bold">अनुदेश/INSTRUCTION</div>
                                        </div>
                                        <ul style={{ listStyleType: 'decimal' }}>
                                            <li>फॉर्म-1 का प्रेषण क रा वी (साधारण) विनियमावली -1950  के विनियम  11 12 अंतर्गत किया जाता है /
                                            <br />Submission of Form-1 is governed by regulations 11 & 12 of ESI (General) Regulations, 1950. </li>
                                            <li>परिवार का अर्थ हैं (1) पति / पत्नी (2) बीमाकृत व्यक्ति की आय पर आश्रित वेद तो या गोद के लिए मस्क बच्चे / अविवाहित पुत्री (3) 2 वर्ष  की आयु तक बीमाकृत व्यक्ति की  पर आश्रित वैध अथवा गोद लिया हुआ वयस्क बच्चा
                                            शिक्षा प्राप्त कर  रहा हो (4) बीमाकृत व्यक्ति की आय पर  निर्भर  अशक्त बच्चा (5) आश्रित  माता -पिता क. रा. वी. अधिनियम की धारा-2  के अंतर्गत परिभाषित परिभाषित परिवारजन  चिकित्सा देख रेख के हक़दार हैं




 <br />

                                        "Family" means all or any of the following relatives of an insured person namely:<br />
                                        (i) a spouse (ii) a minor legitimate or adopted child dependant upon the I.P. (iii) a child who is wholly dependent on the earnings of the I.P. and who is
(a) receiving education, till he or she attains the age of 21 years (b) an unmarried daughter (iv) a child who is infirm by reason of any physical or mental
abnormality or injury and is wholly dependant on the earning f the I.P. so long as the infirmity continues (v) dependant parents (Please see Section 2 clause
11 of the ESI Act 1948 of details)

                                         </li>

                                            <li>पहचान-पत्र अहस्तांतरणीय  हैं
                                            <br /> Identity Card is Non-transferable.
                                              </li>
                                            <li>पहचान पत्र के ग़ुम की सूचना तुरंत नियोक्ता / शाखा प्रबंधक को दी जानी चाहिए।
                                             <br />
                                             Loss of identity card be reported to Employer/Branch Manager immediately.</li>
                                            <li>गलत जानकारी प्रस्तुत करने से ईएसआई अधिनियम की धारा 84 के तहत दंडात्मक कार्रवाई होती है। 1948।
                                             <br />
                                             Submission of false information attracts penal action under Section 84 of ESI Act. 1948.</li>
                                            <li>विधिवत भरा हुआ यह फॉर्म किसी कर्मचारी की नियुक्ति के 10 दिनों के भीतर संबंधित शाखा कार्यालय तक पहुँच जाना चाहिए। देरी नियोक्ता के खिलाफ अधिनियम के 85 के तहत दंडात्मक कार्रवाई को आकर्षित करती है।
                                             <br />
                                             This form duly filled in must reach the concerned Branch Office within 10 days of appointment of an Employee. Delay attracts penal action under 85 of the
Act, against employer.</li>
                                            <li>

                                                एक   बीमाकृत व्यक्ति के रूप में आप और आपके आश्रित परिवार के सदस्य पूर्ण चिकित्सा देखभाल के हकदार हैं। नकदी में अन्य लाभों में शामिल हैं (1) बीमारी लाभ (2) अस्थाई विकलांगता लाभ (3) स्थायी विकलांगता लाभ (4) आश्रित लाभ (5) मातृत्व लाभ (महिला कर्मचारियों के मामले में) अंशदायी शर्तों की पूर्ति के अधीन
                                             <br />
                                             As an insured Person you and your dependent family members are entitled to full medical care. The other benefits in cash include (1) Sickness Benefit
(2) Temporary Disablement benefit (3) Permanent Disablement Benefit (4) Dependents benefit (5) Maternity benefit (in case of women employees)
subject to fulfillment of contributory conditions</li>
                                            <li>अधिक जानकारी के लिए www.esic.org.in पर ईएसआईसी की वेबसाइट देखें या क्षेत्रीय कार्यालय या शाखा कार्यालय से संपर्क करें।
                                             <br />
                                             For more details please visit website of ESIC at www.esic.org.in or contact Regional Office or Branch Office.</li>

                                        </ul>
                                    </div>

                                </div>

                                <div className="row " style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                    <div className="col-md-12">
                                        <div className="text-center">
                                            <div className=" font-weight-bold">FOR BRANCH OFFICE USE ONLY</div>
                                        </div><br />
                                        <ul style={{ listStyleType: 'decimal' }}>

                                            <li>
                                                बीमा संख्या  आवंटन की तिथि / Date of Allotment of Ins. No.:
                                                <input disabled="disabled" className="form-control"></input>
                                            </li>

                                            <li>
                                                अ.प.प. के जारी करने की तिथि / Date of Issue of TIC : <input disabled="disabled"  className="form-control"></input>
                                            </li>
                                            <li>

                                                औषधालय का नाम / Name/No. of Disp.: <input disabled="disabled"  className="form-control"></input>
                                            </li>
                                            <li>
                                                क्या पारस्परिक चिकित्सा व्यवस्था शामिल है? यदि हाँ, तो कृपया सूचित करें /Whether reciprocal Medical Arrangements Involved ? If Yes, Please Indicate : 
                                                <input disabled="disabled"  className="form-control"></input>
                                            </li>
                                            <li>
                                                शाखा प्रबंधक का हस्ताक्षर/ Signature of Branch Manager: <input disabled="disabled" className="form-control"></input>
                                            </li>
                                        </ul>







                                    </div>
                                </div>
                                <hr className="striped-border" style={{ border: '1px dashed #000', width: '100%' }}></hr>




                                <div className='table-responsive' style={{ overflow: 'auto' }}>
                                    <table className="table table-bordered">
                                        <tbody>





                                            <tr>
                                                <td >क्रम संख्या
                                                           <br /> Sl. No
                                                            </td>
                                                <td >
                                                    नाम/ Name
                                                            </td>
                                                <td >
                                                    फॉर्म भरने तारिख/ आयु / Date of Birth / Age as on
                                                    date of filling form
                                                            </td>
                                                <td >

                                                    कर्मचारी के साथ संबंध
                                                    / Relationship with the
                                                    Employee
                                                            </td>
                                                <td >
                                                    क्या उनके साथ रह रहे हैं
                                                    / Whether residing with
                                                    him / her ?
                                                      <div className="text-center">
                                                        <td scope="col" >
                                                            हाँ/YES
                                                            </td>
                                                        <td scope="col">
                                                            नहीं/No
                                                            </td>
                                                    </div>
                                                </td>
                                                <td >
                                                    यदि  नहीं तो स्थान आवास दर्शाये
                                                    / If No, State place of residence
                                                       <br />

                                                    <div className="d-flex">
                                                        उप नगर/TOWN ,&nbsp;&nbsp;
                                                        राज्य/STATE
                                                                </div>
                                                </td>
                                            </tr>


                                            <tr>

                                                <td>
                                                    <input disabled="disabled" type="text" name="" className="form-control" placeholder="1" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled"  defaultValue={family.name} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }} disabled="disabled"  defaultValue={family.dob} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled"  defaultValue={family.relation} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  type="text" name="" className="form-control" />

                                                </td>
                                            </tr>

                                            <tr>

                                                <td>
                                                    <input disabled="disabled" type="text" name="" className="form-control" placeholder="2" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled"  defaultValue={family1.name} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled"  defaultValue={family1.dob} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled" defaultValue={family1.relation} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }} type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />
                                                </td>
                                                <td>
                                                    {/* <input defaultValue={this.state.c_city}type="text" name="" className="form-control" /> */}
                                                    <input type="text" name="" className="form-control" />
                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <input disabled="disabled"type="text" name="" className="form-control" placeholder="3" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled" defaultValue={family2.name} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled"  defaultValue={family2.dob} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }} disabled="disabled"  defaultValue={family2.relation} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />
                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  type="text" name="" className="form-control" />

                                                </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <input disabled="disabled" type="text" name="" className="form-control" placeholder="4" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled" defaultValue={family3.name} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }}  disabled="disabled" defaultValue={family3.dob} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{width: 'auto'}}  disabled="disabled" defaultValue={family3.relation} type="text" name="" className="form-control" />

                                                </td>
                                                <td>
                                                    <input style={{width: 'auto'}}  type="checkbox" name="" className="form-control" style={{ width: '11%', margin: 'auto' }} />

                                                </td>
                                                <td>
                                                    <input style={{ width: 'auto' }} type="text" name="" className="form-control" />

                                                </td>
                                            </tr>


                                        </tbody>

                                    </table>
                                    <br />




                                </div><br />
                            </div><br />

                        </ div><br />
                    </div><br />
















                </div><br />


                <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.savebtn}>Continue</button>
                    <label className='text-danger'>{this.state.error1}</label>
                </div>
                <br />

                {/* container close */}</div >






        );
    }
}
export default EsicdeclrationForm;