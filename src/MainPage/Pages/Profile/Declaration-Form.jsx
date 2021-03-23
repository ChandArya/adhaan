import React, { Component } from 'react';
import {Table} from 'react-table';
import { epfs, Sign } from '../../../Entryfile/imagepath.jsx'
var axios = require('axios');




const ref = React.createRef();
class DeclrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state
    }

    submitbtn = (e) => {
        let path = './Esic-declrationForm';
        var id = this.props.location.state.user
        // alert("iiiiid",id)
        console.log("hhhhhhhhh", id)
        this.setState({ id: id, back: true });

        this.props.history.push({
            pathname: path,
            state: this.state

        })

    }
    


    render() {
        const candidate_name = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

        const candidate_doc_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        const candidate_dob_list = [1, 2, 3, 4, 5, 6,7,8]
        const candidate_name_list = [1, 2, 3]
        const candidate_fname_list = [1, 2]
        const candidate_gender_list = [1, 2, 3]
        const candidate_mobile_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const candidate_email_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]
        const candidate_uan_no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const member_id_date = [1, 2, 3, 4, 5, 6, 7, 8]
        const passport_valid_from = [1, 2, 3, 4, 5, 6, 7, 8]
        const passport_valid_till = [1, 2, 3, 4, 5, 6, 7, 8]
        const emp_code_no = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20]
        const pin_code = [1, 2, 3, 4, 5, 6]


        try {
            console.log('wwww', this.state.candidate_doc_list)
            console.log('twinkle', this.state)

            console.log('sssss', this.state.candidate_documents_data[1].document_type);
            console.log('sssss', this.state.candidate_documents_data[0].document_type)

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
                <div className="border" ref={ref}>

                   

                    <div className="row " style={{ marginTop: '5%', marginLeft: 'none', marginRight: 'none' }}>

                        

                       
                        <div className="col-md-12">
                            {/* <div className="account-logo" style={{ float: "left", marginRight: '60px' }}>
                                <a href=""><img src={Applogo} alt="Adhaan" /></a>
                            </div> */}
                            <div style={{ float: 'right', }}>
                                <h3 className='font-weight-bold'>DECLARATION FORM</h3>
                                <p>(To be retained by the Employer for future reference</p>
                            </div>
                          
                            <div className="account-logo float-left">
                                <a href="#"><img src={epfs} alt="Adhaan" /></a>
                            </div>

                            <div className="text-center mr-3" style={{marginTop:'7%'}}>
                                <h3 className='font-weight-bold'>
                                    EMPLOYEES PROVIDENT FUND ORGANIZATION</h3>
                                <div className="  title-text-sm font-weight-bold">
                                    THE EMPLOYEES PROVIDENT FUNDS SCHEME, 1952 (PARAGRAPH-34 & 57)
                            <br />
                        &<br />
                        THE EMPLOYEES PENSION SCHEME, 1995 (PARAGRAPH-24)
                        <br /><br />

                                </div>
                                <div className="font-weight-bold">
                                    <p>
                                        <u>DECLARATION BY A PERSON TAKING UP EMPLOYMENT IN AN ESTABLISHMENT ON WHICH EMPLOYEES PROVIDENT FUND SCHEME,<br />
                            1952 AND/OR EMPLOYEES PENSION SCHEME, 1995 IS APPLICABLE.<br />
                               (PLEASE GO THROUGH THE INSTRUCTIONS)</u></p>

                                </div>
                            </div>







                            <div className="row" style={{ border: '1px solid', marginRight: '30px', marginLeft: '30px' }} >
                                <div className="col-md-12">

                                <div className="row">
                                    <div className=" mt-3 col-md-3 font-weight-bold">
                                   
                            1) &nbsp; NAME &nbsp; &nbsp; (TITLE)<br />
                                        <div className=" "  style={{ display: 'inline-flex' , marginLeft:'30%'}} >
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MR.</div>
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>Ms.</div>
                                            <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MRs.</div>
                                       <br />
                                        </div>
                                        <p  style={{ marginLeft: '30%'}}>(PLEASE TICK)</p>
                                       

                                   

                                </div>
                             <div className="col-md-9">

                                <div className="mt-3" style={{ marginLeft: '30px' }}>
                                    {/* <div style={{ display: 'inline-flex' }}>
                                                    {candidate_name.map(document => (

                                                        <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                            
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.name} key={document.key} type="text" style={{ width: '4%' }}></input>
                                           
                                        ))}


                                    </div> */}
                                                <input className="text-center" defaultValue={this.state.name} key={document.key} type="text" style={{ width: '30%' }}></input>
                                 </div>  
                                 
                             </div>
                              </div> 
                               </div>




                               


                                <div className="col-md-12">
                                    <div className="row">
                                    <div className=" col-md-3  float-left font-weight-bold" >
                                        
                            2) &nbsp; Date &nbsp; OF &nbsp; Birth<br /><br />
                                                {/* <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MR.</div> */}
                                    </div>
                                    <div className="col-md-9" >
                                        {/* <div className=" text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                        </div><br></br> */}
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {/* {candidate_dob_list.map(document => (
                                                <input defaultValue={this.state.dob} key={document.key} type="text" style={{ width: '27px' }}></input>
                                                // <li key={document.key} >

                                                // </li>
                                            ))} */}
                                               
                                                    <input defaultValue={this.state.dob} key={document.key} type="text" style={{ width: '100%' }}></input>
                                                  
                                             

                                        </div><br />


                                    </div><br />


                                </div>
                                </div>
                                <br />












                                <div className="col-md-12" style={{marginTop:'3%'}} >
                                    <div className="row">

                                    <div className=" col-md-3  float-left font-weight-bold" >
                                       
                           3) &nbsp; FATHERS /<br />
HUSBANDS NAME<br /><br />

                                    </div>

<div className="col-md-9">
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                                {/*  {candidate_doc_list.map(document => (

                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input defaultValue={this.state.father_name}key={document.key} type="text" style={{ width: '30px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginTop: '-7px', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}


                                    <br /><br /> */}
                                            </div>
                                            
                                                <input defaultValue={this.state.father_name} key={document.key} type="text" style={{ width: '30%' }}></input>
                                              
                                        </div>    </div>   </div><br />






                                <div className="col-md-12"  >
                                    <div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                           4) &nbsp; RELATIONSHIP IN RESPECT<br />
OF (3) ABOVE (PLEASE TICK)<br /><br />

                                    </div>
                                    <div className="col-md-9">
                                  
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            {/* <div className='border border-dark' style={{ width: '100px', height: '27px' }}>FATHER</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '27px' }}>HUSBAND</div>

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {candidate_fname_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '100px' }}></input>

                                            ))}

                                    <br /> */}

                                                <input defaultValue={family.relation} type="text" ></input>
                                        </div>


                                             </div><br />


                               </div> </div><br />

                                <div className="col-md-12"  >
<div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                          5) &nbsp; GENDER<br /> (PLEASE TICK))<br /><br />

                                    </div>
                                    <div  className="col-md-9">
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>MALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>FEMALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>TRANSGENDER</div>

                                        </div>*/}<br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {/* {candidate_gender_list.map(document => (
                                                <input defaultValue={this.state.gender} key={document.key} type="text" style={{ width: '120px' }}></input>

                                            ))} */}
                                                <input defaultValue={this.state.gender} key={document.key} type="text" style={{ width: '120px' }}></input>


                                        </div><br />


                                    </div><br />


                                    </div>      </div>




                                <div className="col-md-12"  >
<div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                         6) &nbsp; MOBILE NUMBER<br /> (IF ANY)<br /><br />

                                    </div>

<div className="col-md-9">
                                    <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {/* {candidate_mobile_no.map(document => (
                                            <input defaultValue={this.state.mobile_no} key={document.key} type="text" style={{ width: '45px' }}></input>

                                        ))} */}
                                               
                                                    <input defaultValue={this.state.mobile_no} key={document.key} type="text" style={{ width: '100%' }}></input>

                                              

                                      


                                    </div>


                                        </div></div>
                                </div>


                                <div className="col-md-12"  >
                                    <div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                            7) &nbsp; E-MAIL ID<br /> (IF ANY)<br /><br />

                                    </div>

                                        <div className="col-md-9">

                                    {/* <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (

                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}


                                    </div> */}
                                            <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                                     <input defaultValue={this.state.c_email} key={document.key} type="text" style={{ width: '100%' }}></input>
                                                   
                                         


                                            </div>

                               </div>
                               </div>
                                </div><br/>
<div className="col-md-12" style={{marginTop:'3%'}}>
    <div className="row">
<div className="title font-weight-bold" style={{marginLeft:'15px'}}>
                            8) &nbsp; WHETHER EARLIER A MEMBER OF THE EMPLOYEES PROVIDENT FUND SCHEME, 1952?
                            
                            <div className="text-center" style={{ display: 'inline-flex', marginLeft: '23px' }}>
                                <div className='border border-dark' style={{ width: '80px', height: '27px' }}>YES</div>
                                <div className='border border-dark' style={{ width: '80px', height: '27px' }}>NO</div>
                            </div>

                        </div>

                           <div className="title font-weight-bold" style={{marginTop:'30px',marginLeft:'15px'}}>
                            9) &nbsp;  WHETHER EARLIER A MEMBER OF THE EMBPLOYEES PENSION SCHEME, 1995?
                             
                            <div className="text-center" style={{ display: 'inline-flex', marginLeft: '80px' }}>
                                <div className='border border-dark' style={{ width: '80px', height: '27px' }}>YES</div>
                                <div className='border border-dark' style={{ width: '80px', height: '27px' }}>NO</div>
                            </div>
  <div className=" title font-weight-bold text-center" style={{marginTop:'30px'}}>
                                
                                        <u>IF RESPONSE TO ANY OR BOTH OF (8) & (9) ABOVE IS YES, THEN MANDATORILY FILL UP
                                    THE PREVIOUS EMPLOYMENT DETAILS AT (10,11 & 12) :</u>
                      

                            </div>
                        </div>
                                


                                    </div>
                                </div>   </div>

 

                            {/* col-md-12 close */} </div>


                        {/* row closs */} </div><br /><br />


                    {/* border close  */} </div><br/>



{/* 2nd page */}
             <div className="border">
                    < div  className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
        <div className="col-md-12">
            <div className="border border-dark" style={{marginLeft:'30px', marginRight:'30px'}}>
                                <div style={{ backgroundColor: 'black', color: 'white', paddingLeft: '15px' }}> &nbsp; &nbsp; A.  PREVIOUS EMPLOYMENT DETAILS
</div>

<div className="title font-weight-bold" style={{marginLeft:'15px', marginTop:'20px'}}>
                                    10) &nbsp;THE DETAILS OF THE UNIVERSAL ACCOUNT NUMBER (UAN) OR PREVIOUS PF MEMBER ID:
                                     
                           
                        </div>
                                <br />  <div className="col-md-12"  >
                                <div className=" float-left font-weight-bold" style={{ marginLeft: '30px' }} >
                                        UAN
                                   </div>


                                <div className="text-center">
                                <div  style={{ display: 'inline-flex' }}>
                                    {/* {candidate_uan_no.map(document => (

                                        <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                    ))} */}
                                            <input defaultValue={otherdetails.uan} key={document.key} type="text" style={{ width: '100%' }}></input>

                                    </div>   </div><br></br>

                            <div className="title text-center">OR</div><br/><br/>

                                <div className="title font-weight-bold" style={{ marginLeft: '15px', marginTop: '20px' }}>
                                    PREVIOUS PF MEMBER ID

                                           </div>

                                {/* <div className="text-center">
                                    <div style={{ display: 'inline-flex' }}>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '23px' }}>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>REGION CODE	</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	OFFICE CODE</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	ESTABLISHMENT ID</div>
                                            <div className='title font-weight-bold border border-dark' style={{ width: '150px', height: '27px' }}>	EXTENSION</div>
                                            <div className=' title font-weight-bold  border border-dark' style={{ width: '150px', height: '27px' }}>	ACCOUNT NUMBER</div>
                                        </div>
                                       </div>
                                    <div style={{ display: 'inline-flex', marginLeft: '23px' }}>
                                       
                                        <input  type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                        <input type="text" style={{ width: '150px' }}></input>
                                    </div>
                                    
                                       </div> */}
                                    <div className="table-responsive">
                                      
                                        <table width="100%" className="table mb-0 border-dark table-bordered" cellSpacing="0">
                                            <tr>
                                                <th width="20%" className="text-uppercase text-center">REGION CODE</th>
                                                <th width="30%" className="text-uppercase text-center">	OFFICE CODE</th>
                                                <th width="15%" className="text-uppercase text-center">Date of Birth</th>
                                                <th width="20%" className="text-uppercase text-center">ESTABLISHMENT ID</th>
                                                <th width="15%" className="text-uppercase text-center small font-weight-bold">EXTENSION</th>
                                                <th width="15%" className="text-uppercase text-center small font-weight-bold">ACCOUNT NUMBER</th>
                                            </tr>
                                            <tr>
                                                <td className="text-uppercase font-weight-bold"></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                <td className="text-center"><input type="date" name="" className="px-0 py-0 text-center border-0 form-control" /></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control" /></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control"/></td>
                                                <td><input type="text" name="" className="px-0 py-0 border-0 form-control"  /></td>
                                            </tr>
                                           

                                           </table>
                                      </div>
</div><br/><br/>

                                <div className="col-md-12" >
                               < div className="row">
                                    <div className=" col-md-6 float-left font-weight-bold" >
                                        
                           11) DATE OF EXIT FOR PREVIOUS MEMBER ID (DD/MM/YYYY)
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {member_id_date.map(document => (
                                                <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                            ))}

                                        </div><br />


                                    </div><br />


                                </div>
                                </div><br/>
                                <div className="col-md-12"  >

                                    <div className=" float-left " >
                                        
                           12)  (A) IF SCHEME CERTIFICATE ISSUED FOR PREVIOUS EMPLOYMENT, THEN SCHEME CERTIFICATE NUMBER:______________________
                           <br/>
                           
                                    </div>
                                   <br />


                                </div>
                                <div className="col-md-12"  >

                                    <div className=" float-left " style={{marginLeft:'22px'}}>

                                        &nbsp; (B) IF PENSION PAYMENT ORDER (PPO) ISSUED FOR PREVIOUS EMPLOYMENT, THEN PPO NUMBER:______________________
                           <br />

                                    </div><br/>
                                   


                                </div><br/><br/>
                                <div style={{ backgroundColor: 'black', color: 'white',paddingLeft:'15px' }}> &nbsp; &nbsp; B.  OTHER DETAILS
                                                                               </div>



                                <div className="col-md-12" style={{marginTop:'20px'}} >
                         <div className="row">
                                    <div className=" col-md-4 float-left font-weight-bold" >
                                        
                        
                            13) &nbsp;INTERNATIONAL WORKER<br />(PLEASE TICK)
                                    </div>
                                    <div className="col-md-8">
                                   
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex' }}>


                                            <div className='border border-dark' style={{ width: '150px', height: '27px' }}>YES</div>
                                            <div className='border border-dark' style={{ width: '150px', height: '27px' }}>NO</div>
                                            

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex',  }}>
                                            <input type="text" style={{ width: '150px' }}></input>
                                            <input type="text" style={{ width: '150px' }}></input>

                                        <br />


                                    </div><br />
                                    </div><br/>

                                    </div>    </div><br/>
                                
                                
                                <div className="col-md-12" >
                                    <div className=" float-left font-weight-bold" style={{ marginLeft: '30px' }} >
                                        IF THE REPLY TO (13) ABOVE IS YES, THEN ENTER THE DETAILS IN 13( A ), 13( B ) & 13( C ):
                                   </div>
                                   
                                 <br></br>
                                </div>


                                <div className="col-md-12" >

                                    <div className=" float-left " style={{ marginLeft: '30px' }}  >
                                        
                                        13( A ) COUNTRY OF ORIGIN (Please Tick)<br /><br />
                                    </div>
                                    <div style={{ marginLeft: '30px' }}>
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>INDIA</div>
                                            <div className='border border-dark' style={{ width: '300px', height: '50px' }}>OTHER THAN INDIA (IF YES, PLEASE MENTION NAME OF THE COUNTRY)</div>
                                           

                                        </div><br></br>
                                        <div className="text-center" style={{marginLeft:'44px'}} >
                                          
                                            <input  type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '300px' }}></input>

                                      

                                        </div><br />


                                    </div><br />


                                </div><br/>


                                <div className="col-md-12"  >

                                    <div className=" float-left " style={{ marginLeft: '30px' }}  >

                                        13( B ) PASSPORT NUMBER
                                    </div>
                                   
                                        <div className="text-center" style={{ marginLeft: '30px' }}>
                                        <input type="text" style={{ width: '450px' }}></input>


                                          </div><br />
                                </div>




                                <div className="col-md-12">
                                    <div className="row">
                                    <div className=" col-md-3 float-left "   >
                                       
                                        13( C ) PASSPORT VALID FROM<br /><br />

                                    </div>

                                    <div className="col-md-4">
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                        </div>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {candidate_dob_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '27px' }}></input>
                                               
                                            ))}
                                            
                                       

                                                <h4 className="font-weight-bold" style={{ marginLeft: '50px' }}>TO</h4>
                                           
                                            </div>
                                         
                                      </div>
                                        <div className="col-md-4">
                                            <div className="text-center" style={{ display: 'inline-flex', }}>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>D</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>M</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                                <div className='border border-dark' style={{ width: '27px', height: '27px' }}>Y</div>
                                            </div><br></br>
                                            <div className="text-center" style={{ display: 'inline-flex', }}>
                                                {candidate_dob_list.map(document => (
                                                    <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                                ))}

                                                



                                            </div>
                                        </div>

                                    </div></div><br/>

                                <div className="col-md-12"  >
                                    <div className="row">

                                    <div className=" col-md-2 float-left font-weight-bold" >
                                        
                           14) EDUCATION <br /> QUALIFICATION <br />(Please Tick)
                    </div>
                                    <div className="col-md-9" >
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex',  }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>ILLITERATE</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>NON MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>SENIOR SECONDARY </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>GRADUATE</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>POST GRADUATE </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>DOCTOR</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>TECHNICAL PROFFESSIONAL</div>

                                        </div>
                                        <div className="text-center" style={{ display: 'inline-flex' }}>
                                        
                                            <input  type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>

                                            

                                        </div><br />


                                    </div><br />


                                    </div>  </div><br/>


                                <div className="col-md-12"  >
                                <div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                           15)MARITAL STATUS <br />(Please Tick)
                    </div>
                                    <div className="col-md-9">
                                        {/* <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>UNMARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>WIDOW /WIDOWER </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>DIVORCEE</div>
                                           

                                        </div><br></br> */}
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
{/* 
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input> */}
                                           
                                                <input defaultValue={this.state.marital_status} type="text" ></input>


                                        </div>


                                    </div>


                                    </div></div><br/>


                                <div className="col-md-12"  >
<div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                           16)SPECIALLY ABLED <br />(Please Tick)
                    </div>
                                    <div  className="col-md-9">
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '30px' }}>YES	</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '30px' }}>NO</div>
                                           


                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex' }}>

                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                           



                                        </div>


                                    </div>

                                </div>
</div><br/>
                               


                                <div className="col-md-12"  >
                                    <div className="row">

                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                           IF YES, TICK THE CATEGORY <br />(Please Tick)
                    </div>
                                    <div className="col-md-9 mb-3">
                                       
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>LOCOMOTIVE</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>VISUAL</div>
                                            <div className='border border-dark' style={{ width: '125px', height: '50px' }}>HEARING </div>
                                        </div>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>

                                            <input type="text" style={{ width: '125px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>
                                            <input type="text" style={{ width: '125px' }}></input>




                                        </div>


                                        </div>
                                     
                                </div>

                            </div>
                                
                            </div>
                           
                        </div>
                      
                        </div>
                        <br />
                   
</div>
                <div className="col-auto float-right mt-3 ml-auto">
                    <button className="btn add-btn" id="submit" onClick={this.submitbtn}>Save & Countinue</button>
                </div>

                

                  



           

                                





                {/* container close */}</div >



                


        );
    }
}
export default DeclrationForm;