import React, { Component } from 'react';
import {Table} from 'react-table';
var axios = require('axios');
var baseurl = 'https://aadhaan.ddns.net';
import { CompnySign,CompnyThum } from '../../../Entryfile/imagepath.jsx'
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);

// var axios = require('axios');
class GratitutyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.location.state,error1:''}
        document.documentElement.scrollTop = 0;
    }

    generatePdf=(e)=>
    {
        document.documentElement.scrollTop = 0;
        this.setState({error1:"please wait file is uploading"})
        var pdf = new jsPDF('portrait');
        var pdfName = this.state.name+'gra.pdf';

        var options = {background:'#fff',};

        var $divs = $('#uu')    
        console.log("length",$divs.length)            //jQuery object of all the myDivClass divs
        var numRecursionsNeeded =2-1;     //the number of times we need to call addHtml (once per div)
        var currentRecursion=0;
        var self=this;
        //Found a trick for using addHtml more than once per pdf. Call addHtml in the callback function of addHtml recursively.
        function recursiveAddHtmlAndSave(currentRecursion, totalRecursions){
            //Once we have done all the divs save the pdf
            if(currentRecursion==totalRecursions){
                // pdf.save(pdfName);
                self.setState({ispdf:false});
                self.submitbtn( pdf.output('blob'));
            }else{
                currentRecursion++;
                pdf.addPage();
                window.scrollBy(0,1800);
                //$('.myDivClass')[currentRecursion] selects one of the divs out of the jquery collection as a html element
                //addHtml requires an html element. Not a string like fromHtml.
                pdf.addHTML($('#uu')[currentRecursion], 15, 20, options, function(){
                    console.log(currentRecursion);
                    recursiveAddHtmlAndSave(currentRecursion, totalRecursions)

                });
            }
        }

        pdf.addHTML($('#uu')[currentRecursion], 15, 20, options, function(){
            recursiveAddHtmlAndSave(currentRecursion, numRecursionsNeeded);
        });
        
    }


    submitbtn = (data) => {
        var self =this;
        var formData=new FormData();
        formData.append("candidate", "" + localStorage.getItem("can"))
        formData.append("pdf_document_4",new File([data], this.state.name+'_gra.pdf'))
        // var data = JSON.stringify({
        //             "candidate": localStorage.getItem("can"),
                    
        //         });
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
                      // alert("you save successfully submitted all data.")
                        //  path = './PrintPage';
                        let path = './PrintPage';
                        self.props.history.push({
                            pathname: path,
                            state: self.state
                        })
                })
                .catch(function (error) {
                    // console.log(error);
                    // self.setState({ error: "network issue" })
                });

    }
    




    render() {
        var isNomnieeList = this.state.family.filter(function(data)
        {
            return data.is_nominee
        })
        try {
           
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


        
        return (

            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>
                
                        

                       


                      
                

                {/*GratitutyForm page */}

                
                      <div className="border" id='uu'style={{overflowX:'auto'}}>
                        < div className="row " style={{ marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div className="col-md-12">
                            <div style={{marginLeft:'30px', marginRight:'30px'}}>
                                <div className="title  text-center font-weight-bold">
                                    <p>
                                  FORM 'F'</p>
                                

                                   <p style={{fontWeight:'normal'}}> [See sub-rule(1) of rule 6]</p>
                                    
                                   <p> Nomination</p>
                                </div>

                               <div  className="text-center"> 
                                    To  <span>Adhaan Solution Pvt. Ltd.</span> </div>
                               
                               <div  className="text-center"> 
                               [Give here name or description of the establishment with full address]</div>
                             <div > 
                             <ul  style={{listStyleType:'decimal'}}>
                             <li>
                                            I. Shri/Shrimati/Kumari whose particulars are given in the statement below,{this.state.name}
                             {this.state.name?' ':<sub>[Name in full here]</sub>}
here by nominate the person(s) mentioned below to receive the gratuity payable after my death as also the gratuity standing to my credit in the event of my death before that amount has become payable, or having become payable has not been paid and direct that the said amount of gratuity shall be paid in proportion indicated against the name(s) of the nominee(s).
</li>
                                             <li>
                                              I here by declare that I have no family within the meaning of clause (h) of section 	(2) of the said Act.
                                             </li>
                                             <li>
                                             (a)  My father/mother/parents is/are not dependent on me.
                                             </li>
                                             <li>
                                             (b)  my husband's father/mother/parents is/are not dependent on my husband.
                                             </li>
                                             <li>
                                              I have excluded my husband from my family by a notice dated the to the Controlling Authority in terms of the proviso to clause (h) of section 2 of the said Act.
                                             </li>
                                             <li>
                                              Nomination made herein invalidates my previous nomination.
                                             </li>
                                             </ul>
                                             </div>


                                             <div  className="text-center">
                                             <p className="font-weight-bold"> Nominee(s)</p>
                                              <div className='table-responsive'>
                                            <table className="table table-bordered">
                                                <tbody>
                                                  
                                               
                                               
                                                 
                                                    
                                                    <tr>
                                                        <td >
                                                        Name in full with full address of nominee(s)

                                                            </td>
                                                        <td >
                                                        Relationship with the employee
                                                            </td>
                                                        <td >
                                                        Age of nominee
                                                            </td>
                                                        <td >
                                                        the gratuity will be shared

                                                            </td>
                                                       
                                                         </tr>

                                                         {isNomnieeList.map(document => ( <tr>
                                                     
                                                     <td >
                                                         
                                                     <input type="text" name="" value={document.name}style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                     </td>
                                                 <td>
                                                     <input type="text" name=""value={document.relation} style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                 </td>
                                                 <td>
                                                     <input type="text" name="" value={document.dob}style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                 </td>
                                                 <td>
                                                     <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                 </td>
                                               
                                               
                                             </tr>
                                                         ))}
                                                   


                                                </tbody>

                                                        </table>
                                                        <br/>
                                                          </div>
                                                     
                            
                                </div>
                                <div  className="text-center font-weight-bold"> 
                                                      Statement
                                                        </div>
                                                        
                                                        <ul  style={{listStyleType:'decimal'}}>
                             <li>
                                        1.	Name of employee in full: &nbsp; &nbsp; <label>{this.state.name}</label></li>
                                    <li>Sex. &nbsp; &nbsp; <label>{this.state.gender} </label>       </li>
                                             <li>
                                        Religion. &nbsp; &nbsp; <label>{this.state.religion} </label>
                                             </li>
                                             <li>
                                        Whether unmarried/married/widow/widower. &nbsp; &nbsp; <label>{this.state.marital_status}</label>
                                             </li>
                                             <li>
                                        Department/Branch/Section where employed.&nbsp; &nbsp; <label>{this.state.branch_name}</label>
                                             </li>
                                             <li>
                                             Post held with Ticket or Serial No., if any.
                                             </li>
                                             <li>
                                        	Date of appointment.{today}
                                             </li>
                                             <li>
                                        Permanent address. &nbsp; &nbsp; <label>{this.state.p_full_address}</label></li>
                                             </ul>
                                             
                                                 </div>
                                </div>
                                </div>
                                </div><br/>

                                {/* gratituty form page 2 */}
                                <div className="border" style={{overflowX:'auto'}}>
                        < div className="row " style={{ marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div className="col-md-12">
                            <div style={{ marginLeft: '5%', marginRight: '5%' }}>
                                <div className="d-flex" style={{marginTop:'5%'}}>
                                
                                    <p  style={{marginLeft:'3%'}} >Village .................</p>
                                    <p style={{marginLeft:'3%'}}>Thana  .................</p>
                                    <p style={{marginLeft:'3%'}}>Sub-division .................</p>
                                    <p style={{marginLeft:'3%'}}>Post Office.................</p><br/>
                                   
                                    </div>
                                    <div className="d-flex">
                                
                              
                                    <p style={{ marginLeft: '3%' }}>District : &nbsp; &nbsp;{this.state.c_city}</p>
                                <p style={{marginLeft:'3%'}}>State : &nbsp; &nbsp;{this.state.c_state}</p>
                                </div>

                                < div className="title d-flex p-3" style={{ marginLeft: '1%', marginRight: '1%' }}>
                                             
                                             <p>
                                             Place<br/>Date {today}

                                                                                          
                                            </p>
                                    <p style={{marginLeft:'auto'}}> Signature/Thumb impression of the employee</p>
                                    <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                        
                                  
                                 
                                 </div>
                                 <div  className="text-center "> 
                                 <i>Declaration by witnesses</i>
                                                        </div>
                                                        <div className="title" style={{marginLeft:'3%'}}>
                                                        Nomination signed/thumb impressed before me.
                                                        </div>

                               </div>
                               < div className="title d-flex p-3" style={{marginLeft:'6%', marginRight:'5%'}}>
                                             
                                             <p>
                                             Name in full and full <br/>address of witnesses

                                                                                          
                                            </p>
                                    <p style={{marginLeft:'auto'}}> Signature of witnesses.</p>
                                  
                                </div>
                            <div className="title d-flex p-3" style={{ marginLeft: '11%', marginRight: '20%'}}>
                            <p>
                                1<br />2 </p>
                                <p style={{ marginLeft: 'auto' }}>  1<br />2


                                            </p>
                            </div>
                            < div className="title d-flex p-3" style={{ marginLeft: '10%', marginRight: '10%' }}>
                                
                                <p>
                                    Place<br />Date{ today}


                                            </p>
                               


                            </div>
                            <div className="text-center ">
                                <i>Certificate by the employer</i>
                            </div><br/>
                            <div className="title" style={{ marginLeft: '7%' }}>
                                Certified that the particulars of the above nomination have been verified and recorded in this establishment.
                                
                                <div className="mt-3">
                                    Employer's Reference No., if any.

                                                        </div>
                                                        </div>
                            <div className="title d-flex p-3 mt-3" style={{ marginLeft: '11%', marginRight: '10%' }}>
                                <br/>
                                <br/>
                                <p> Date </p>{ today}
                                <p style={{ marginLeft: 'auto' }}>  Signature of the employer/ officer authorised<br /> <br />Designation :&nbsp; &nbsp;<label>{this.state.designation}</label>
                               <br/> <br />Name and address of establishment or rubber stamp thereof
                               {/* <img src={CompnySign} id="sign" alt=" " className="img-fluid1" />
                               <img src={CompnyThum} id="sign" alt=" " className="img-fluid1" /> */}
                                    


                                            </p>
                            </div>
                            <div className="text-center mt-3 ">
                                <i>Acknowledgement by the employee</i>
                            </div>
                            < div className="title d-flex p-3 mt-3" style={{ marginLeft: '10%', marginRight: '10%' }}>
                                             
                                             <p>
                                             Date:{today}
                                                                                          
                                            </p> 
                                <p  style={{ marginLeft: '60%' }}>Signature of the employee</p>
                                <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                        
                                 
                                 </div> 
                           

                                </div><br/>
                    </ div><br />
                </div><br />
                <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.generatePdf} >Submit</button>
                    <label className='text-danger'>{this.state.error1}</label>
                </div>
               
<br/>




                {/* container close */}</div >



                


        );
    }
}
export default GratitutyForm;