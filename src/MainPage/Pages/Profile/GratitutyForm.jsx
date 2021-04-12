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
        this.state = {...this.props.location.state,error1:'',
        percentage:0,addnom:''}
        document.documentElement.scrollTop = 0;

    }
    setAddNominne=(e)=>
    {
        e.preventDafault();
        
        this.setState({addnom:e.target.value})

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
        // formData.append("pdf_document_4",new File([data], this.state.name+'_gra.pdf'))
        formData.append("pdf_document_4",null)
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
                      alert("you save successfully submitted all data.")
                        //  path = './PrintPage';
                        // let path = './PrintPage';
                        // self.props.history.push({
                        //     pathname: path,
                        //     state: self.state
                        // })
                })
                .catch(function (error) {
                    // console.log(error);
                    // self.setState({ error: "network issue" })
                });

    }
    
//percentage on input field
setPercentage =(e)=>
{
    const re = /^[0-9]+$/;
    const value = e.target.value;
   
                var aa=value.substring(0, value.length).replace("%","") + "%"
              
                this.setState({percentage:aa})
          
       
    
   
    // }
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

                
                      <div className="border" id='uu'style={{overflowX:'auto', background:'#fff'}}>
                        < div className="row " style={{ marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div className="col-md-12">
                            <div style={{marginLeft:'1%', marginRight:'1%'}} className="nominat">
                                <div className="title  text-center font-weight-bold">
                                    <h3 className="font-weight-bold">
                                  FORM 'F'</h3>
                                

                                   <p style={{fontWeight:'normal'}}> [See sub-rule(1) of rule 6]</p>
                                    
                                   <h3> Nomination</h3>
                                </div>

                                  <div  className="d-flex"> 
                                   <span className="mr-1" style={{lineHeight:3}}>To</span> 
                                    <input autoFocus type="text" className="form-control" placeholder="Adhaan Solution Pvt.Ltd(Times Square Arcade,Office No-712/712,
A,Opp-Rambaug,NR Ravija Plaza,
Thaltej-shila Road,
Ahmedabad-380059)" disabled="disabled"></input>
                                  </div>
                               
                               <div  className="mt-4"> 
                               [Give here name or description of the establishment with full address]</div>
                             <div > 
                             <ul  style={{listStyleType:'decimal'}} className="pl-4 mt-4">
                             <li>
                                           Shri/Shrimati/Kumari whose particulars are given in the statement below,
                                            <input disabled="disabled" className="form-control w-auto d-inline-block mx-2"  defaultValue={this.state.name}></input>
                           
hereby nominate the person(s) mentioned below to receive the gratuity payable after my death as also the gratuity standing to my credit in the event of my death before that amount has become payable, or having become payable has not been paid and direct that the said amount of gratuity shall be paid in proportion indicated against the name(s) of the nominee(s).
</li>
<li>I hearby certify that the person(s) mentioned is a/are member(s) of my family within the meaning of clause (h) of section (2) of the Payment of Gratuity Act, 1972.</li>
                                             <li>
                                              I hereby declare that I have no family within the meaning of clause (h) of section 	(2) of the said Act.
                                             </li>
                                             <li>
                                             (a)  My father/mother/parents is/are not dependent on me.<br></br>
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
                                             <h3 className=""> Nominee(s)</h3>
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
                                                        Proportion by which the gratuity will be shared

                                                            </td>
                                                       
                                                         </tr>

                                                         {isNomnieeList.map(document => ( <tr>
                                                     
                                                     <td >
                                                         
                                                     <input className="form-control" disabled="disabled" type="text" name="" value={document.name}/>

                                                     </td>
                                                 <td>
                                                     <input className="form-control" disabled="disabled" type="text" name=""value={document.relation}/>

                                                 </td>
                                                 <td>
                                                     <input className="form-control" disabled="disabled" type="text" name="" value={document.dob} />

                                                 </td>
                                                 <td>
                                                     <input className="form-control text-center"  type="text" name="%" value={this.state.percentage==0?'':this.state.percentage,"%"} maxLength="4"onChange={this.setPercentage} />

                                                 </td>
                                               
                                               
                                             </tr>
                                                         ))}
                                                   


                                                </tbody>

                                                        </table>
                                                        <br/>
                                                          </div>
                                                     
                            
                                </div>
                                <div  className="text-center font-weight-bold"> 
                                                      <h3>Statement</h3>
                                                        </div>
                                                        
                                                        <ul  style={{listStyleType:'decimal'}} className="pl-4 mt-4 stdata">
                             <li className="mb-2">
                                       Name of employee in full: &nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.name}></input></li>
                                    <li className="mb-2">Sex. &nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.gender}></input>
                                           </li>
                                             <li className="mb-2">
                                        Religion. &nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.religion}></input>
                                        
                                             </li>
                                             <li className="mb-2">
                                        Whether unmarried/married/widow/widower. &nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.marital_status}></input>
                                        
                                             </li>
                                             <li className="mb-2">
                                        Department/Branch/Section where employed.&nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.branch_name}></input>
                                       
                                             </li>
                                             <li className="mb-2">
                                             Post held with Ticket or Serial No., if any.<input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" ></input>
                                             </li>
                                             {/* <li>
                                        	Date of appointment.{today}
                                             </li> */}
                                             <li>
                                        Permanent address. &nbsp; &nbsp; <input type="text" disabled="disabled" className="m-0 form-control w-auto d-inline-block" value={this.state.p_full_address}></input>
                                       </li>
                                             </ul>
                                             
                                                 </div>
                                </div>
                                </div>
                                </div><br/>

                                {/* gratituty form page 2 */}
                                <div className="border" style={{overflowX:'auto' , background:'#fff'}}>
                        <div className="row " style={{ marginTop: '2%', marginLeft: 'auto', marginRight: 'auto' }}>
                            <div className="col-md-12">
                            <div style={{ marginLeft: '1%', marginRight: '1%' }}>
                                <div className="d-inline-block vilg" style={{marginTop:'4%'}}>
                                    <ul className="list-unstyled">
                                        <li className="float-left mr-1"><label className="mr-2">Village</label> <input disabled="disabled" type="text" className="form-control"></input></li>
                                        <li className="float-left mr-1"><label className="mr-2">Thana</label>   <input disabled="disabled" type="text" className="form-control"></input></li>
                                        <li className="float-left mr-1"><label className="mr-2">Sub-division</label>  <input disabled="disabled" type="text" className="form-control"></input></li>
                                        <li className="float-left mr-1"><label className="mr-2">Post Office</label> <input disabled="disabled" type="text" className="form-control"></input></li><br/>
                                    </ul>   
                                    </div>
                                    <div className="d-flex district">
                                           
                                    <p className="mr-4"><label className="mr-1">District</label>  &nbsp; &nbsp; <input className="form-control" disabled="disabled" typet="text" ></input></p> &nbsp; &nbsp;
                                <p><label className="mr-1">State</label>  <input className="form-control" disabled="disabled" typet="text" ></input></p>
                                </div>

                                <div className="title d-flex mt-2">
                                             
                                             <p>
                                             Place<br/>Date: {today}

                                                                                          
                                            </p>
                                    <p style={{marginLeft:'auto'}}>
                                        <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1 text-center" /><br/>
                                         Signature/Thumb impression of the employee</p>
                                   
                                        
                                  
                                 
                                 </div>
                                 <div  className="text-center "> 
                                 <i>Declaration by witnesses</i>
                                                        </div>
                                                        <div className="title">
                                                        Nomination signed/thumb impressed before me.
                                                        </div>

                               </div>
                               < div className="title d-flex mt-3 adwitn" style={{marginLeft:'1%', marginRight:'1%'}}>
                                             
                                             <p>
                                             Name in full and full <br/>address of witnesses

                                                                                          
                                            </p>
                                    <p style={{marginLeft:'auto'}}> Signature of witnesses.</p>
                                  
                                </div>
                            <div className="title d-flex" style={{ marginLeft: '1%', marginRight: '14%'}}>
                            <p>
                                1. <inpu ></inpu>
                                    <br />2. <inpu ></inpu> </p>
                                <p style={{ marginLeft: 'auto' }}>  1. <inpu ></inpu><br />2.<inpu ></inpu>


                                            </p>
                            </div>
                            < div className="title d-flex" style={{ marginLeft: '1%', marginRight: '1%' }}>
                                
                                <p>
                                    Place<br />Date: &nbsp; { today}


                                            </p>
                               


                            </div>
                            <div className="text-center ">
                                <i>Certificate by the employer</i>
                            </div><br/>
                            <div className="title" style={{ marginLeft: '1%' }}>
                                Certified that the particulars of the above nomination have been verified and recorded in this establishment.
                                
                                <div className="mt-3">
                                    Employer's Reference No., if any.

                                                        </div>
                                                        </div>
                            <div className="title d-flex mt-3 sigem" style={{ marginLeft: '1%', marginRight: '1%' }}>
                               
                                <p> Date: </p> &nbsp; &nbsp;{ today}
                                <p style={{ marginLeft: 'auto' }}>  Signature of the employer/ officer authorised<br /> <br />Designation :&nbsp; &nbsp;<label>{this.state.designation}</label>
                               <br/> <br />Name and address of establishment or rubber stamp thereof
                               {/* <img src={CompnySign} id="sign" alt=" " className="img-fluid1" />
                               <img src={CompnyThum} id="sign" alt=" " className="img-fluid1" /> */}
                                    


                                            </p>
                            </div>
                            <div className="text-center mt-3 ">
                                <i>Acknowledgement by the employee</i>
                            </div>
                            < div className="title d-flex mt-3" style={{ marginLeft: '1%', marginRight: '1%' }}>
                                             
                                             <p>
                                             Date:{today}
                                                                                          
                                            </p> 
                                <p className="ml-auto">
                                    <img src={this.state.Sign} id="sign" alt=" " className="img-fluid1" />
                                    <br/>Signature of the employee</p>
                                
                                        
                                 
                                 </div> 
                           

                                </div><br/>
                    </ div><br />
                </div><br />
                <div class="col-md-12 text-center">
                    <button class="btn btn-primary btn-lg active mr-2" role="button" aria-pressed="true" onClick={this.submitbtn} >Submit</button>
                    <label className='text-danger'>{this.state.error1}</label>
                </div>
               
<br/>




                {/* container close */}</div >



                


        );
    }
}
export default GratitutyForm;