import React, { Component } from 'react';
import {Table} from 'react-table';
import { Applogo, Sign } from '../../../Entryfile/imagepath.jsx'
// var axios = require('axios');
class DeclrationForm extends Component {






    render() {
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
        return (

            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>
                <div className="border">

                   

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
                                <a href="#"><img src={Applogo} alt="Adhaan" /></a>
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
                                    <div style={{ display: 'inline-flex' }}>
                                        {candidate_doc_list.map(document => (

                                            <input  key={document.key} type="text" style={{ width: '4%' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input  key={document.key} type="text" style={{ width: '4%' }}></input>
                                            
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginTop: '-7px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input  key={document.key} type="text" style={{ width: '4%' }}></input>
                                           
                                        ))}


                                    </div>
                                 </div>       </div>
                              </div>  </div>




                               


                                <div className="col-md-12">
                                    <div className="row">
                                    <div className=" col-md-3  float-left font-weight-bold" >
                                        
                            2) &nbsp; Date &nbsp; OF &nbsp; Birth<br /><br />
                                                <div className='border border-dark' style={{ width: '40px', height: '30px' }}>MR.</div>
                                    </div>
                                    <div className="col-md-9" >
                                        <div className=" text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
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
                                            {candidate_dob_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '27px' }}></input>
                                                // <li key={document.key} >

                                                // </li>
                                            ))}

                                        </div><br />


                                    </div><br />


                                </div>
                                </div>
                                <br />












                                <div className="col-md-12" style={{marginTop:'3%'}} >
                                    <div className="row">

                                    <div className=" col-md-2  float-left font-weight-bold" >
                                       
                           3) &nbsp; FATHERS /<br />
HUSBANDS NAME<br /><br />

                                    </div>

<div className="col-md-9">
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (

                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginTop: '-7px', marginLeft: '30px' }}>
                                        {candidate_doc_list.map(document => (
                                            <input key={document.key} type="text" style={{ width: '30px' }}></input>
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


                                    </div><br /><br />
                                        </div>    </div>   </div><br />






                                <div className="col-md-12"  >
                                    <div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                           4) &nbsp; RELATIONSHIP IN RESPECT<br />
OF (3) ABOVE (PLEASE TICK)<br /><br />

                                    </div>
                                    <div className="col-md-9">
                                  
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '27px' }}>FATHER</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '27px' }}>HUSBAND</div>

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {candidate_fname_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '100px' }}></input>

                                            ))}

                                        </div><br />


                                             </div><br />


                               </div> </div><br />

                                <div className="col-md-12"  >
<div className="row">
                                    <div className=" col-md-3 float-left font-weight-bold" >
                                        
                          5) &nbsp; GENDER<br /> (PLEASE TICK))<br /><br />

                                    </div>
                                    <div  className="col-md-9">
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>MALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>FEMALE</div>
                                            <div className='border border-dark' style={{ width: '120px', height: '27px' }}>TRANSGENDER</div>

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                            {candidate_gender_list.map(document => (
                                                <input key={document.key} type="text" style={{ width: '120px' }}></input>

                                            ))}

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
                                        {candidate_mobile_no.map(document => (
                                            <input key={document.key} type="text" style={{ width: '45px' }}></input>

                                        ))}

                                      


                                    </div>


                                        </div></div>
                                </div>


                                <div className="col-md-12"  >
                                    <div className="row">
                                    <div className=" col-md-2 float-left font-weight-bold" >
                                        
                            7) &nbsp; E-MAIL ID<br /> (IF ANY)<br /><br />

                                    </div>

                                        <div className="col-md-9">

                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (

                                            <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                        ))}
                                    </div><br></br>
                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}<br />


                                    </div><br></br>

                                    <div style={{ display: 'inline-flex', marginLeft: '30px' }}>
                                        {candidate_email_list.map(document => (
                                            <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                            // <li key={document.key} >

                                            // </li>
                                        ))}


                                    </div>
                             </div>  </div> </div><br/>
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
                                    {candidate_uan_no.map(document => (

                                        <input key={document.key} type="text" style={{ width: '40px' }}></input>
                                    ))}
                                    </div>   </div><br></br>

                            <div className="title text-center">OR</div><br/><br/>

                                <div className="title font-weight-bold" style={{ marginLeft: '15px', marginTop: '20px' }}>
                                    PREVIOUS PF MEMBER ID

                                           </div>

                                <div className="text-center">
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
                                        <div className="text-center font-weight-bold" style={{ display: 'inline-flex', marginLeft: '30px' }}>


                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>UNMARRIED</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>MATRIC</div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>WIDOW /WIDOWER </div>
                                            <div className='border border-dark' style={{ width: '100px', height: '50px' }}>DIVORCEE</div>
                                           

                                        </div><br></br>
                                        <div className="text-center" style={{ display: 'inline-flex', marginLeft: '30px' }}>

                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                            <input type="text" style={{ width: '100px' }}></input>
                                           


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
                        </div></div><br />
</div><br/>
<br/>

{/* 3rd page */}
                <div className="border">
                    < div className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
                        <div className="col-md-12">
                            <div className="border border-dark" style={{ marginLeft: '30px', marginRight: '30px' }}>


                                <div className="col-md-12"  >
                                     <div className="row">
                                        <div className=" col-md-2 mt-3 font-weight-bold" >
                                        
                          17 ) KYC DETAIL
                                    </div>
                                    <div className="col-md-10 mt-3">
                                       <div className="table-responsive">
                                        <table  className="table table-bordered"  >
                                            <thead style={{border:'1px solid'}}>
                                                <tr className="font-weight-bold">
                                                    <th>KYC DOCUMENT TYPE</th>
                                                    <th>NAME AS ON KYC DOCUMENT	</th>
                                                    <th>NUMBER</th>
                                                    <th>REMARKS, IF ANY</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>BANK ACCOUNT 1*</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a'}}/></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a'}} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    {/* <td><input type="text" name="" className="px-0 py-0 border-0 form-control" style={{ backgroundColor: ' #ffffff0a' }} /></td> */}

                                                </tr>
                                                <tr>
                                                    <td>NPR / AADHAAR</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>PERMANENT ACCOUNT NUMBER (PAN)</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>PASSPORT </td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>DRIVING LICENCE</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>ELECTION CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>RATION CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td>ESIC CARD</td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                    <td><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4">
                                                        <b>*  Mandatory Field  (NOTE:  BANK  ACCOUNT 	NUMBER 	(ALONG 	WITH  IFSC  CODE)  IS  MANDATORY.</b>	YOU
                                                        ARE  HOWEVER 	ADVISED 	TO  PROVIDE 	ALL  KYC  DOCUMENTS 	AVAILABLE 	WITH  YOU  IN  ADDITION 	TO
                                                        MANDATORY 	KYCS  TO  AVAIL  BETTER 	SERVICES. <b>	SELF-ATTESTED 	PHOTOCOPIES 	OF  THE  DOCUMENTS
                                                        MUST  BE  ATTACHED 	WITH  THIS  FORM.</b>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
</div>

                                        </div>


                                    </div>   </div><br />

                                <div style={{ backgroundColor: 'black', color: 'white', paddingLeft: '15px' }}> &nbsp; &nbsp;C.  UNDERTAKING :
                                                                               </div>
     <div className="col-md-12">   
     <div className="row">                                                                     
<div className="title mt-3"  >
    <ul style={{listStyleType:'none', width:'100%'}}>
        <li>
              <b>A.</b> &nbsp;  &nbsp;     ICERTIFY THAT ALL THE INFORMATION GIVEN ABOVE IS TRUE  TO  THE BEST	 OF MY KNOWLEDGE AND  BELIEF
                                             
        </li>
 <li>
           <b>B.</b> &nbsp;  &nbsp;    IN CASE, EARLIER 	A  MEMBER OF EPF SCHEME, 1952 	AND/OR EPS, 1995,


        </li>
             <li>
            <b>(I)</b> &nbsp;  &nbsp;    I HAVE ENSURED THE CORRECTNESS OF MY UAN/ PREVIOUS PF MEMBER ID
       </li>



        <li>
    <b>(II)</b> &nbsp;  &nbsp;   THIS MA Y ALSO BE 	TREATED  AS MY  REQUEST FOR  TRANSFER OF FUNDS AND SERVICE DETAILS IF  APPLICABLE FROM THE PREVIOUS ACCOUNT AS DECLARED ABOVE  TO  THE PRESENT	 P .F .  ACCOUNT.
(THE  TRANSFER WOULD BE POSSIBLE ONLY  IF  THE IDENTIFIED KYC DETAILS  APPROVED BY	 PREVIOUS  EMPLOYER HAS BEEN VERIFIED BY PRESENT EMPLOYER USING HIS DIGITAL  SIGNATURE CERTIFICATE).        </li>
 <li>
 <b>(III)</b> &nbsp;  &nbsp;   I  AM  AWARE  THAT  I CAN SUBMIT	 MY  NOMINATION FORM 	THROUGH UAN BASED MEMBER POR
  </li>
    </ul>

    <div className="title font-weight-bold float-left ml-3">
        DATE
    </div>
    <br/><br/>
    <div className="title font-weight-bold float-left ml-3">
   PLACE
    </div>
      <div className="title font-weight-bold float-right ml-3">
     SIGNATURE OF MEMBER
    </div>
                                        </div>  </div></div> <br/>


 <div  className="text-center" style={{ backgroundColor: 'black', color: 'white' ,fontSize:'large'}}>DECLARATION BY PRESENT EMPLOYER

 </div><br/>
 <div className="col-md-12">
     <div className="row">
                               <div className="tiitle">
                     
                                    <ul  classname="text-justify" style={{ listStyleType:'upper-alpha' , width:'100%'}}>
                                        <li>THE MEMBER Mr./Ms./Mrs .............................. HAS JOINED ON ........................ AND HAS BEEN
                                        ALLOTTED PF MEMBER ID  ...................................................

                                        </li>
                                        <li>
                                            IN CASE  THE  PERSON 	WAS  EARLIER 	NOT A MEMBER 	OF  EPF  SCHEME, 	1952  AND  EPS,  1995:
                                        </li>
                                        <ul >
                                            <li>
                                                (POST ALLOTMENT OF UAN) THE UNALLOWTTED FR THE MEMBER IS.................
                                            </li>
                                            <li>
                                                PLEASE TICK THE APPROPRIATE OPTION:<br/>
                                                THE KYC DETAILS OF THE ABOVE MEMBER IN THE UANDATABASE
                                            </li>
                                            <ul style={{ listStyleType:'square'}}>
                                                <li>
                                                    HAVE NOT BEEN UPLOADED
                                                </li>
                                                <li>
                                                    HAVE  BEEN UPLOADED BUT NOT APPROVED
                                                </li>
                                                <li>
                                                    HAVE NOT BEEN UPLOADED AND APPROVED WITH DSC
                                                </li>
                                               

                                            </ul>
                                        </ul>
                                        <li>
                                            IN CASE  THE  PERSON WAS  EARLIER  MEMBER OF EPF SCHEME, 	1952  AND  EPS,  1995:
                                        </li>
                                        <ul>
                                            <li>
                                                THE ABOVE MEMBER ID OF THE MEMBER AS MENTIONED IN (A) ABOVE HAS BEEN TAGGED WITH
                                                HIS/HER UANPREVIOUS MEMBER ID AS DECLRAED BY MEMBER
                                            </li>
                                            <li className="font-weight-bold">
                                                PLEASE TICK THE APPROPRIATE OPTION:
                                               
                                            </li>
                                            <ul  style={{ listStyleType: 'square' }}>
                                                <li>
                                                    THE KYC DETAILS OF THE ABOVE MEMBER IN THE UANDATABASE HAVE BEEN APPROVED WITH  DIGITAL SIGNATURE CERTIFICATE AND TRANSFER
                                                    REQUEST HAS BEEN CENTRATED ON PORTAL
                                                </li>
                                                <li>
                                                 AS THE DSC OF ESTABLISHMENT ARE NOT REGISTERED WITH EPFO, THE MEMBER HAS BEEN INFORMED TO THE PHYSICAL CLAIM (FORM-13) FOR
                                                  TRANSFER OF FUNDS FROM HIS ESTABLISHMENET
                                                </li>
                                                


                                            </ul>
                                              </ul><br/>

                                        <div className="col-md-12">
                                            <div className="title font-weight-bold float-left "> DATE</div>

                                            <div className="title font-weight-bold float-right"> SIGNATURE OF MEMBER</div>
                                        </div>
                                              </ul>


                                   
                                        </div>   </div>  </div><br/>
                          
                      </div>
                     </div>
                   </div><br/><br/>
                    </ div><br/>
                

                    {/* 4th page */}


                    <div className="border">
                        < div className="row " style={{ marginTop: '2%', marginLeft: 'none', marginRight: 'none' }}>
                            <div className="col-md-12">
                              
                            <div className="float-right">
                                <p>Employee Code :_______________________</p>
                                <p>Mobile No. :__________________________</p>
                               
                             </div></div>
                          




                            <div className="col-md-12">
                             
                         <div className="border border-dark" style={{ marginLeft: '30px', marginRight: '30px' }}>
                                       
                                    <div className=" font-weight-bold text-right mt-2 mr-2 "> (FORM - 1)</div>
                                    <div className="  mt-2 text-center font-weight-bold d-flex">
                                          
                                         <div className="account-logo  ">
                                            <a href="#"><
                                            img src={Applogo} alt="Adhaan" /></a>
                                        </div> 
                                     
                                        <h1 style={{marginLeft:'6%'}}>
                                            घोषणा पत्र / ESIC DECLARATION FORM
                                           </h1>
                                        
                                        </div>
                                    <p className="text-center" style={{marginTop:'-7%', marginLeft:'12%'}}>To be filled in by the employee after reading instructions overleaf. Two Postcard
                                        size photographs are to be attached with this form.This form if free of cost.</p><br/>



                                      
                                          <div className="row row-no-gutter" style={{boder:'1px solid'}}>
                                   
                                              <div className="col-md-6 pr-0">
                                                <div className='table-responsive'>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <td colspan="4" scope="col">(A) INSURED PERSON'S PARTICULARS
                                                            <br />(A) INSURED PERSON'S PARTICULARS</td>
                                                           
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1. Insurance No.</td>
                                                            <td colSpan="3"><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                        </tr>
                                                        <tr>
                                                            <td> 2. Name (in block letters)</td>
                                                            <td colSpan="3"><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>

                                                        </tr>
                                                        <tr>
                                                            <td> 3. Father / Husbands Name</td>
                                                            <td colSpan="3"><input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a' }} /></td>
                                                        </tr>

                                                        <tr>
                                                            <td> 4.  / Date of Birth<br/>
                                                                {candidate_dob_list.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '27px' }}></input>

                                                                ))}
                                                            </td>
                                                            <td colSpan="3">
                                                                4.   Marital Status 
                                                               <p className="text-right"> M/U/W</p>
                                                             <div className=" row border "></div>
                                                             /Sex
                                                               <p className="text-right"> /Male / Female</p>
                                                            </td>
                                                           
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="1">/Current Address
                                                                <hr/>
                                                                <input type="text" style={{ width: '100%' ,  border: ' none', backgroundColor: ' #ffffff0a'}}></input>

                                                            <hr/>
                                                                <input type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input>
                                                                <br/>
                                                                <hr/>
                                                                <div className="d-flex">
                                                                    Pin Code &nbsp; &nbsp; &nbsp; &nbsp;
                                                                     
                                                                    {pin_code.map(document => (
                                                                        <input key={document.key} type="text" style={{ width: '10%' }}></input>
                                                                       
                                                                    ))}
                                                                   
                                                                </div>
                                                                <div className="text-center">
                                                                    / E-mail Address
                                                                  </div>
                                                                <input type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input>

                                                            </td>


                                                            <td colSpan="3">/Present Address
                                                             <hr />
                                                                <input type="text" style={{ width: '100%' , border: ' none', backgroundColor: ' #ffffff0a'}}></input>
                                                                <hr/>
                                                                <input type="text" style={{ width: '100%' , border: ' none', backgroundColor: ' #ffffff0a'}}></input>
                                                                <br />
                                                                <hr />
                                                                <div className="d-flex">
                                                                    Pin Code &nbsp; &nbsp; &nbsp; &nbsp;

                                                                    {pin_code.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '10%' }}></input>

                                                                ))}
                                                                </div>
                                                                <div className="text-center">
                                                                    / E-mail Address
                                                                  </div>
                                                                <input type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input>

                                                             </td>
                                                          
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="2">
                                                                Branch Office
                                                                <input type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input>

                                                            </td>
                                                            <td colSpan="2">
                                                                Dispensary
                                                           <input type="text" style={{ width: '100%', border: ' none', backgroundColor: ' #ffffff0a' }}></input>
                                                           </td>
                                                        </tr>

                                                       
                                                    </tbody>
                                                </table>
                                                </div>
                                               
                                              </div>

                                              <div className="col-md-6 pl-0">
                                            <div className='table-responsive'>
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <td colspan="4" scope="col">(B) EMPLOYER'S PARTICULARS <br/>
                                                            (B) EMPLOYER'S PARTICULARS</td>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> 9.Employer's Code No.</td>
                                                            <td colSpan="3" >
                                                                {emp_code_no.map(document => (
                                                                    <input key={document.key} type="text" style={{ width: '5%' }}></input>

                                                                ))}</td>
                                                                
                                                        </tr>
                                                        <tr>
                                                          
                                                            <td colSpan="3"> 10.Date of Appointment</td>
                                                            <td className="text-center">
                                                                <div className="text-center " style={{ display: 'inline-flex' }}>
                                                                    <div className='border border-dark' style={{ width:'60px',hight:'20px'}}>Day <br/>Day</div>
                                                                    <div className='border border-dark' style={{ width: '60px', hight: '20px'}}>Month</div>
                                                                    <div className='border border-dark' style={{ width: '60px', hight: '20px'}}>Year</div>
                                                                </div>
                                                                <div className="" >

                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                    <input type="text" style={{width:'60px' }}></input>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="4" scope="col">11. Name & Address of the Employer<br />
                                                                <b>Adhaan Solution Pvt. Ltd</b><br /><br />
                                                                <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width:'100%'}} /><br/>
                                                                
                                                                </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="4">
                                                         12. In case of any previous employment please fill up the detail as under.
                                                            </td>

                                                               </tr>


                                                        <tr>
                                                            <td colSpan="4">
                                                                a) Previous Ins. No. 
                                                             <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                         </td>

                                                        </tr>
                                                        <tr>
                                                            <td colSpan="4">
                                                                b) Emplr's Code No.

                                                             <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                            </td>

                                                        </tr>
                                                        <tr>
                                                            <td colspan="4" scope="col">c) Name & Address of the Employer<br />
                                                                <b>Name & Address of the Employer</b><br /><br />
                                                                <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                         <br/>
                                                              <div className="text-center">
                                                              / E-mail Address

                                                             <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                                </div>
                                                            </td>
                                                           
                                                           
                                                        </tr>
                                                       

                                                         </tbody>
                                                </table>

                                            </div>
                                              </div>

                                         
                                          </div> 

                                        <div className="col-md-12 pl-0 pr-0">
                         
                                        <div className='table-responsive'>
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td colSpan="6" >(C) Details of Nominee u/s 71 of ESI Act 1948/Rile 56(2) of ESI (Central) Rules, 1950 for payment of cash benefit in the event of death.</td>

                                                    </tr>
                                               
                                               
                                                    <tr>
                                                        <td colSpan="2">
                                                            Name
                                                        <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                         
                                                        </td>
                                                        <td>
                                                            Relationship
                                                         <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td colSpan="4">
                                                            Address
                                                         <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                    </tr>

                                                    
                                                        <tr className="text-center">
                                                            <td colSpan="6" >/ (D) FAMILY PARTICULARS OF INSURED PERSON</td>

                                                       
                                                    </tr>
                                                    <tr>
                                                        <td >
                                                            Sl. No
                                                            </td>
                                                        <td >
                                                            / Name
                                                            </td>
                                                        <td >
                                                            Date of Birth / Age as on
                                                            date of filling form
                                                            </td>
                                                        <td >
                                                            Relationship with the
                                                            Employee
                                                            </td>
                                                        <td >
                                                            Whether residing with
                                                            him / her ?
                                                            </td>
                                                        <td >
                                                            If No, State place of residence
                                                            </td>
                                                    </tr>


                                                    <tr>
                                                     
                                                            <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                            </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <div className="text-center">
                                                            <td scope="col" >
                                                               YES
                                                            </td>
                                                            <td scope="col">
                                                                No
                                                            </td>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex">
                                                                /TOWN &nbsp;&nbsp;
                                                                /STATE
                                                                </div>
                                                        </td>
                                                    </tr>

                                                    <tr>

                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />
                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                        <td>
                                                            <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} />

                                                        </td>
                                                    </tr>

                                                </tbody>

                                                        </table>
                                                        <p>-----------------------------------------------------------------------------------------------------------------
                                                            -------------------------------------------------------------------------------
                                                        </p>

                                                        </div>
                                                        </div>


                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                
                                                                    <div className="table-responsive">
                                                    
                                                    <table class="table table-bordered">
                                                        <caption style={{ captionSide: 'top', textAlign: 'center' }}>ESI Corporation Temporary Identity Card</caption>
                                                        <tbody>
                                                        <tr>
                                                            <td >
                                                                    Name
                                                            </td>
                                                            <td >
                                                                
                                                             <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                            </td>

                                                        </tr>
                                                            <tr>
                                                                <td >
                                                                    /Ins. No.
                                                            </td>
                                                                <td >

                                                                    <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td >
                                                                   /Date of Appointment.
                                                            </td>
                                                                <td >

                                                                    <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td >
                                                                    Branch Office

                                                            </td>
                                                                <td >
                                                                   Dispensary
                                                                    <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                                </td>

                                                            </tr>
                                                            <tr>
                                                                <td >
                                                                    Employer's Code No. & Address


                                                            </td>
                                                                <td >
                                                                   
                                                                    <input type="text" name="" style={{ border: ' none', backgroundColor: ' #ffffff0a', width: '100%' }} /><br />
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                   <p>
                                                      Validity :
  
                                                    </p>

                                                                    </div>



                                                                </div>

                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="table-responsive">
                                                        <table class="table table-bordered">
                                                            <caption style={{ captionSide: 'top', textAlign: 'center' }}>(Valid for 3 months from the date of appointment)</caption>
                                                            <caption style={{ textAlign: 'center' }}>Father Mother & Son Photo</caption>

                                                              
                                                                   
                                                                <tr style={{height:'150px'}}>
                                                                    <td></td>
                                                                </tr>

                                                            
                                                        </table>
                                                        
                                                    </div>
                                                </div>
                                            </div>




                                                            </div>



                                        <div className="title d-flex">
                                             
                                                     <p>
                                                        Dated :
                                                         
                                                    </p>
                                            <p style={{marginLeft:'30%'}}>Signature / T.I. of I.P.</p>

                                            
                                            <p style={{ marginLeft: '30%' }}> Signature of B.M. with Seal

                                             
                                                    </p>
                                        </div>








                                                        </div>
                   
                            </div><br />
                    </div><br/>
                    
                    </ div><br />
                </div><br />







                {/* container close */}</div >
                


        );
    }
}
export default DeclrationForm;