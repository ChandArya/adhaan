import React, { Component } from 'react';

import { Applogo,Sign } from '../../../Entryfile/imagepath.jsx'
var axios = require('axios');
class OfferLetter extends Component {
    constructor(...props) {
        super(...props)
        this.state = {
            name:"Sandeep Kumar",
            date:"2021/03/09",
            empcode:'108970',
            designation:"off Roll Team Leader",
            mobileno:"9728300263",
            add:"228 Subash Nagar Teshil",
            addloc:"Camp Panipat",
            stateofadd:"Haryana",
            pin:"132103",
            enddate:"2021/03/31",
            jobloc:"Panipathub_PPT",
            company:"Adhaan Solution Pvt. Ltd.",
            companyadd:"Times Square Arcade,Office no-712/712-A,Opp-Rambaug, Nr, Ravija Plaza,Baghban Cross Road,Thaltej-Shilaj Road,Thaltej,Ahmedabad-3",
            salary:"11500",
            sign:Sign,
            onbordingid:'2',
            client:'2',
            recruiter:'2',


        }
     }
     componentDidMount=()=>
     {

     }
    onSubmit = (e) => {
        // console.log("add salary"+JSON.stringify(data))
    // var status="";
     var add = {}

    // for (var k = 0; k < this.state.clientList.length; k++) {
    //   // console.log("called")
    //   console.log("called", this.state.clientList[k].name, this.state.clietname)
    //   if (this.state.clientList[k].name == this.state.clietname) {
        Object.assign(add, { "status": "accepted_by_candidate",  "start_date": this.state.date, "client":this.state.client, "salary":this.state.salary, "end_date": this.state.enddate, "recruiter": this.state.recruiter, "on_boarding_id": this.state.onbordingid });
        console.log("called", add)
    //   }
      // console.log("calledhhhh")
    // }
    // console.log("called", this.state.error)
    // return
    var self=this;
    var config = {
      method: 'put',
      url: 'https://aadhaan.ddns.net/api/recruiter/onboard-candidate',
      headers: {
        'Content-Type': 'application/json'
      },
      data: add
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.setState({ error: response.data.message })
        if (response.data.status == true) {
          //let path='app/profile/candidate-profile';
          alert('You have accepted terms and conditions ✅')
        //   let path = '../payroll/confirmed_payroll';
        //   self.props.history.push({
        //     pathname: path,
        //     state: self.state
        //   })
        //   localStorage.setItem("lastcount", 0);

        }

      })
      .catch(function (error) {
        console.log(error);
        self.setState({ error: "Nework issue" })
      });
    // }
       
    }
    render() {
        return (

            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>
                <div class="border">
                <div class="row " style={{marginTop:'10%', marginLeft:'none', marginRight:'none'}}>
                    <div class="col-md-12">
                    <div className="account-logo" style={{float:"right" ,marginRight:'60px'}}>
                             <a href=""><img src={Applogo} alt="Adhaan" /></a> 
                        </div> 

                        <div className="title " style={{paddingLeft:'40px'}}>
                            {this.state.date}
                    </div>
                        <div className="address">
                            <ul style={{listStyleType:'none'}}>
                                <li>Employee Name:<label> &nbsp; {this.state.name}</label></li>
                                <li><label>Emp Code:</label> &nbsp; {this.state.empcode}</li>
                                <li><label>Designation:</label> &nbsp; {this.state.designation}</li>
                                <li><label>Mobile no.:</label> &nbsp; {this.state.mobileno}</li>
                                <li><label># 228 Subash Nagar Teshil</label></li>
                                <li><label>{this.state.addloc}</label> </li>
                                <li><label>{this.state.stateofadd}</label></li>
                                <li><label>{this.state.pin}</label></li>
                            </ul>
                            <div className=" conatiner-fluid text-center">
                                <h3 >OFFER CUM APPOINTMENT LETTER</h3>
                            </div>
                        </div>

<div style={{paddingLeft:'30px',paddingRight:'30px'}} >
                        <div className="title float-left">
                            Dear {this.state.name}
                   </div>
                        <br /><br />
                                <div className="text-justify ">
                        <div className="title float-left">
                            Further to your application and subsequent discussion for employment with us, we are pleased
                    to appoint you as<b> {this.state.designation}</b> effective from <b>{this.state.date}</b> &nbsp; to &nbsp; <b>{this.state.enddate}</b> on the
                    following terms & conditions
                   </div>

                        <div className="terms and condition">
                            <h5 class="font-weight-bold">1. POSTING </h5>
                            <ul>
                                <li>
                                    We would like you to join the services on immediate basis and your initial posting willbe at <b>{this.state.jobloc}.</b>

                                </li>


                            </ul>
                            <h5 class="font-weight-bold">2. DUTIES </h5>
                            <ul>
                                <li>
                                    You shall devote your time, attention and ability towards company and shall perform
                                    such duties and exercise assigned to you from time to time by the management. You
                                    shall also comply with orders, directions, and regulations as laid by the management

                        </li>

                                <li>
                                    Your Services are liable to be transferred/ deputed part or whole time to any
                                    company, section, subsidiary or associated concern.
                           </li>
                                <li>
                                    You are required to be flexible and to undertake all duties associated with your role.
                                    You are also expected to undertake reasonable alternative duties in addition to, or
                                    instead of your normal duties. The Management decision in this regard would stand
                                    final and abiding.
                            </li>
                            </ul>
                            <h5 class="font-weight-bold">3. CONFIDENTIAL INFORMATION </h5>
                            <ul>
                                <li>
                                    Any information you obtain from time to time regarding processes, methods, client
                                    information, business practice, etc., should be treated as being of the utmost
                                    confidential.

                        </li>


                            </ul>

                            <h5 class="font-weight-bold">4. SERVICE RULES, DISCIPLINE and GRIVENCES
 </h5>
                            <ul>
                                <li>
                                    During your employment with us, you will not be associated yourself with such
                                    activities, as in the opinion of the Management will be harmful or detrimental to the
                                    interest of the company.

                        </li>

                                <li>
                                    You will be abide the rules and regulations, which are in force and also by any
                                    additions and/or the amendments that may be bought into force thereto and rule
                                    governing business conduct and secrecy as decided from time to time by the
                                    Management.

                        </li>

                            </ul>
                        </div>
                        </div>
                            </div>

                        <br />

                        <div className="title text-center font-weight-bold">
                            {this.state.company}
</div>
                        <p className='text-sm text-center'>{this.state.companyadd}</p>
                    </div>

                </div>

                <div className="text-center" style={{ backgroundColor: '#60a6f1', color: 'white' }}># RECRUITMENT # PAYROLL # EVENTS
</div>
                    </div>
                <br />
                
                
                <div class="border" >
                    <div className="account-logo" style={{ float: "right", marginRight: '60px', marginTop: '10px'}}>
                        <a href=""><img src={Applogo} alt="Adhaan" /></a>
                    </div>

                    <div className="text-justify" style={{ marginTop:'10%', paddingLeft: '30px', paddingRight: '30px' }} >

                <br></br><br />
                <ul>
                    <li>
                        It is understood that this employment is being offered to you on the basis of
                        particulars submitted by you in Application of Employment. However, if any time it
                        should emerge that the details provided by you are false/ incorrect, or if any material
                    </li>

                    <li>
                        or relevant information has been suppressed or concealed, this appointment will be
                        considered ineffective and irregular and would be liable to be terminated immediately
                        without notice after giving you an opportunity, in accordance with the disciplinary
                        action against you for the same
                    </li>
                    <li>
                        Nothing contained herein constitutes a guarantee of employment. Your performance
                        shall be subject to the appraisal by the company. Company reserve the right to
                        terminate your employment on grounds of performance not being upto expected
                        standards.
                    </li>
                    <li>
                        You will be paid pro rata daily wages only for the days that you report for work. You
                        will not be entitled to any wages for the days that you have not worked, whatsoever
                        the reason be including but not limited to Government restrictions/ civil / social
                        disturbance.
                    </li>
                    <li>
                        You will comply with all the instructions, guidelines or policies, processes or practices
                        of the client on health, safety and security which may be in force from time to time
                        during the tenure of your employment.
                        
                    </li>
                </ul>
                <h5 class="font-weight-bold">5. PERIOD OF SERVICES and NOTICE PERIOD PAY
 </h5>
                            <ul>
                                <li>
                                During the period of your engagement your services can be terminated by either
side by giving 15 days notice or 15 day pay in lieu thereof at company direction. 

                        </li>

                                <li>
                                In case of notice pay take over, the same will be recovered if you leave the
company before completion of the notice period.


                        </li>

                            </ul>

                            <div className="title">
                            You are bound to abide by and adhere to the policies, rules, and regulations enforced by the
Company from time to time including but not limited to Code of Conduct, Discipline, Business
Ethics and Contract of employment. Such policies, rules and regulations may be subjected to
alternation and amendment from time to time at the sole discretion of the Company and you
shall be covered under them.   
                            </div><br/>
                            <div className="title">
                            Please note that upon your acceptance of this offer, this appointment letter shall supersede all
prior, oral or written agreements, commitments, understanding or communications either
formally or informally, in regards to the subject matter.  
                            </div><br/>


                            <div className="title">
                            Any variations of the above terms and conditions will not be valid until expressly made in writing
by the company.  
                            </div><br/><p>
                            For &nbsp; &nbsp;
                            <b>{this.state.company}</b></p>

                            <br/>
                           <p> <b> Authorized Signatory</b></p><br/>

                           <p className="text-sm"> <b> DECLARATION</b></p>
                           <small className="">I have been explained/ read/understood/ the above terms & conditions and agree to abide by them <br></br><i>Signature</i></small>
                           <br></br>
                           <img style={{height:"30px",width:"100px"}}src={this.state.sign} id="sign" alt=" " className="img-fluid" />


<br>
</br><br/>
</div>
<div className="title text-center font-weight-bold">
                            {this.state.company}
</div>
<p className='text-sm text-center'>{this.state.companyadd}</p>
<div className="text-center" style={{ backgroundColor: '#60a6f1', color: 'white' }}># RECRUITMENT # PAYROLL # EVENTS
</div><br></br><br/>
</div>
<br/><br/>
<div  className="border">
                    <div className="account-logo" style={{ float: "right", marginRight: '60px', marginTop: '10px' }}>
                        <a href=""><img src={Applogo} alt="Adhaan" /></a>
                    </div>
<div className="address" style={{marginTop:'10%'}} >

                            <ul style={{listStyleType:'none'}}>
                                <li>Employee Name:<label> &nbsp; {this.state.name}</label></li>
                                <li><label>Emp Code:</label> &nbsp; {this.state.empcode}</li>
                                <li><label>Designation:</label> &nbsp; {this.state.designation}</li>
                                <li><label># 228 Subash Nagar Teshil</label></li>
                                <li><label>{this.state.addloc}</label> </li>
                                <li><label>{this.state.stateofadd}</label></li>
                                <li><label>{this.state.pin}</label></li>
                            </ul>










                            
                        </div>


                        <div className="title text-center font-weight-bold">Annexure</div><br></br>
                    <div class=" col-md-12" style={{ marginRight: 'none', marginLeft: 'none', paddingRight:'80px', paddingLeft:'80px'}}>
                    <div class="row " style={{border:'1px solid', marginRight:'none', marginLeft:'none'}} >
  <div class="col-md-6 font-weight-bold" style={{border:'1px solid'}}>EARNING</div>
  <div class="col-md-6" style={{border:'1px solid'}}></div>
  <div class="col-md-6" style={{border:'1px solid'}}></div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>BASIC</div>
  <div class="col-md-6" style={{border:'1px solid'}}>{this.state.salary}</div>
  <div class="col-md-6" style={{border:'1px solid'}}>CONVEYANCE</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>MEDICAL ALLOWANCE</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>SP ALLOWANCE</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6 font-weight-bold" style={{border:'1px solid'}}>GROSS EARNINGS(A)
</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>BONUS (C)</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>EMPLOYER PF CONTRIBUTION </div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>EMPLOYER ESIC CONTRIBUTION </div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>LWF</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6 font-weight-bold" style={{border:'1px solid'}}>CTC (COST TO COMPANY)</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6 font-weight-bold" style={{border:'1px solid'}}>DEDUCTION</div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp;</div>
  <div class="col-md-6" style={{border:'1px solid'}}>EMPLOYEE PF CONTRIBUTION</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>LWF</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>PROFESSIONAL TAX</div>
  <div class="col-md-6" style={{border:'1px solid'}}>0</div>
   <div class="col-md-6 font-weight-bold" style={{border:'1px solid'}}>TOTAL DEDUCTIONS(B)</div>
  <div class="col-md-6 " style={{border:'1px solid'}}>0</div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>&nbsp; </div>
  <div class="col-md-6" style={{border:'1px solid'}}>NET SALARY(A – B+C) </div>
  <div class="col-md-6" style={{border:'1px solid'}}>11500 </div>
  
</div>
                    </div>
<br/><br/><br/><br/>

<div className="title text-center font-weight-bold">
                            {this.state.company}
</div>
<p className='text-sm text-center'>{this.state.companyadd}</p>
<div className="text-center" style={{ backgroundColor: '#60a6f1', color: 'white' }}># RECRUITMENT # PAYROLL # EVENTS
</div><br></br><br/>

</div>

<br/><br/><br/>

                <div className="border">
                    <div className="account-logo" style={{ float: "right", marginRight: '60px', marginTop: '10px' }}>
                        <a href=""><img src={Applogo} alt="Adhaan" /></a>
                    </div>
<h4 className=" title text-center font-weight-bold" style={{marginTop:'10%'}}><u>COVID-19 Self-Declaration Form</u>
</h4>
<div className="title  text-center font-weight-bold"><u>(To be filled by candidates/working personnel)</u></div>
                    <div className=" col-md-12" style={{ marginRight: 'none', marginLeft: 'none', paddingRight: '80px', paddingLeft: '80px' }}>

<div className="row"style={{border:'1px solid', display:'inline-flex'}} >
<div class="col-md-6 font-weight-bold bg-color-secondary" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>Full Name of Candidate / Personnel: </div>
<div class="col-md-6 " style={{border:'1px solid',}}>{this.state.name} </div>
<div class="col-md-6 font-weight-bold" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>Phone Number: </div>
<div class="col-md-6 " style={{border:'1px solid'}}>{this.state.mobileno} </div>
<div class="col-md-6 font-weight-bold" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>Date of Self Declaration: </div>
<div class="col-md-6 " style={{border:'1px solid'}}>{this.state.date} </div>


</div>
</div>
<br/>
{/* <div class="row " style={{border:'1px solid'}}>
        <div style={{border:'1px solid'}} class="col-xs-12 col-sm-12 col-md-6">
                
        </div>
        <div  style={{border:'1px solid'}}class="col-xs-12 col-sm-12 col-md-6">
           
        </div>
    </div> */}
<div class=" col-md-12" style={{ marginRight: 'none', marginLeft: 'none', paddingRight: '80px', paddingLeft: '80px' }}>

    <div className="row">
    <div class="col-md-6 font-weight-bold" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>Question </div>
    <div class="col-md-3 font-weight-bold" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>Yes </div>
    <div class="col-md-3 font-weight-bold" style={{border:'1px solid',backgroundColor:'#d6d0d0'}}>NO</div>
    <div class="col-md-6" style={{border:'1px solid'}}>
1. Have you visited or returned from any overseas country in the last 45
days? If yes, please specify the country here:
 </div>
    <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-6" style={{border:'1px solid'}}>2. Have you visited or returned from any other District or State in the last 14
days? If yes, please specify the state here: </div>
<div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>

    <div class="col-md-6" style={{border:'1px solid'}}>3. Have you recently interacted or lived with someone who has tested positive
for COVID-19? </div>


<div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>

    
    <div class="col-md-6 " style={{border:'1px solid'}}> 4. Have you now, or in the past 72 hours, had any of the following flulike symptoms?
 </div>
 <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-6 " style={{border:'1px solid'}}>● Cough
 </div>
 <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>

    <div class="col-md-6 " style={{border:'1px solid'}}>● Fever </div>

 <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>

    <div class="col-md-6" style={{border:'1px solid'}}>● Difficulty in Breathing</div>

    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>

    <div class="col-md-6 " style={{border:'1px solid'}}>● Loss of senses of smell & taste</div>

<div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>


    <div class="col-md-6" style={{border:'1px solid'}}>● Throat pain</div>

    <div class="col-md-3" style={{border:'1px solid'}}>&nbsp; </div>
    <div class="col-md-3 " style={{border:'1px solid'}}>&nbsp; </div>


    </div>
    </div>
    <br/>

                    <div class="  title" style={{  paddingRight: '70px', paddingLeft: '70px' }}>

    <div className="title text-justify ">
    I hereby declare that I am not suppressing any relevant/ material facts and all the above-stated
information is correct to the best of my knowledge. I understand that Non-disclosure/ suppression of
information may attract penal provisions.  
    </div><br/>
    <div className="title text-justify ">
    I also declare that I have been informed about the COVID-19 safety guidelines and necessary
precautions to be taken as per the directives issued by the Ministry of Home Affairs, Govt. Of India. I
am aware that not following these guidelines is a punishable offence and will be dealt with strictly by
the appropriate authorities.
  </div>
    </div><br/>
    
   <p style={{paddingLeft:'40px'}}>Therefore, I fully understand and undertake that I will always</p> 
                    <ul style={{ paddingLeft: '60px' }}>
  1. Comply with the critical health and safety guidelines and advisory published by the
Government of India and the relevant state government.
</ul>
<div className="title text-center font-weight-bold">
                            {this.state.company}
</div>
<p className='text-sm text-center'>{this.state.companyadd}</p>
<div className="text-center" style={{ backgroundColor: '#60a6f1', color: 'white' }}># RECRUITMENT # PAYROLL # EVENTS
</div><br></br><br/>
</div>

<br/>
<div  className="border">
                    <div className="account-logo" style={{ float: "right", marginRight: '60px' , marginTop:'10px'}}>
                        <a href=""><img src={Applogo} alt="Adhaan" /></a>
                    </div>
   <div className="title" style={{marginTop:'10%'}}>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }} >
2. Download the Aarogya Setu app on my smartphone, register myself on the app and keep
assessing my health to check for COVID-19 infection risk periodically.
</div>
    
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
3. Share my health status on the Aarogya Setu app at the entry point of my work location. I
understand that my entry to the work location will be denied in the absence of the
Aarogya Setu app on my smartphone and when I am assessed by the app as a risk to my
colleague’s and customer’s health.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
4. Promote a safe, healthy workplace and ensure that I take adequate preventive measures
for the safety of colleagues and customers during the COVID-19 pandemic.


</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
5. Follow all health and safety instructions and advisory published by myemployer.


</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
6. Attend mandatory awareness sessions including but not limited to the safety briefing,
training and any other forms of communications organized at the workplace.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
7. When interacting with customers, colleagues and others outside the facility, I will always
wear a clean and functional face mask and other personal protective equipment as
advised by my employer or client.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
8. Maintain social distancing inside and outside the facility.


</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
9. Never consume or spit tobacco, paan, gutka or similar products inside company premises
or in public places as it is a punishable offence.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
10. Not smoke cigarettes, beedi or other such products inside the office facility or other public
places as prohibited under law.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
11. Not report to work under the influence of illegal drugs or alcohol nor should consume or
poses such intoxicating substances during work hours.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
12. Cooperate with safety and security guidelines and follow safety instructions.


</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
13. Wash and sanitize hands frequently when inside the facility and before delivering to the
customer.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
14. Be present at the deputed work location only during the duration of my designated shift.


</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
15. Maintain personal hygiene and cleanliness.

</div>
                        <div className="title text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
16. Consult the doctor and disclose any flu-like symptoms.

</div><br></br>
   &nbsp; &nbsp;<p className="float-left text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
   I hereby authorize M/s. Instakart Services Pvt Ltd and any Flipkart group company, in accordance with
government guidelines and company policies to collect, record, share and otherwise process my body
temperature reading and other personal information provided by me. This is to help promote a safe
and healthy workplace and safety of co-workers and customers during the COVID-19 pandemic.    
   </p><br/><br/>

                        <p className="float-left text-justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
   I fully understand and will strictly follow the above health and safety guidelines and any update thereof
as shared by my employer from time to time. I also agree that in case of negligence or failure to follow
these guidelines during my deputation in the client location, my employer will take necessary
disciplinary action including withdrawal or termination of service for breach of contract with immediate
effect.
   
   </p><br/><br/>
                    </div>

   <div className="title">
      
   </div>
   <ul  style={{listStyleType:'none'}}>------------------------------
                                <li>Employee Name:<label> &nbsp; {this.state.name}</label></li>
                                <li><label>Emp Code:</label> &nbsp; {this.state.empcode}</li>
                                <li><label>Date</label> &nbsp;  {this.state.date}</li>
                               
                            </ul>
                            <center> <button   onClick={this.onSubmit} className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Accept</button></center>
                            

                            <div className="title text-center font-weight-bold">
                            {this.state.company}
</div>
<p className='text-sm text-center'>{this.state.companyadd}</p>
<div className="text-center" style={{ backgroundColor: '#60a6f1', color: 'white' }}># RECRUITMENT # PAYROLL # EVENTS
</div><br/><br/>
                </div>
</div>

        );
    }
}
export default OfferLetter;