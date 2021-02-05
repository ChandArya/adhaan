/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_16 } from '../../../Entryfile/imagepath'

export default class EmployeeProfile extends Component {
  render() {
    return (
        <div className="page-wrapper">
            <Helmet>
              <title>Candidate Profile - Adhaan</title>
              <meta name="description" content="Reactify Blank Page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
              {/* Page Header */}
              {/* <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Profile</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/blue/app/main/dashboard">Dashboard</a></li>
                      <li className="breadcrumb-item active">Profile</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              {/* /Page Header */}
              <div className="card mb-0">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-view">
                        <div className="profile-img-wrap">
                          <div className="profile-img">
                            <a href="#"><img alt="" src={Avatar_02} /></a>
                          </div>
                        </div>
                        <div className="profile-basic">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="profile-info-left">
                                <h3 className="user-name m-t-0 mb-0">John Doe</h3>
                                <h6 className="text-muted">S/o John mario</h6>
                                <small className="text-muted">Delivery Boy</small>
                                <ul className="personal-info">
                                  <li>
                                    <div class="title">Location: </div>
                                    <div className="text">Delhi</div>
                                  </li>
                                  <li>
                                    <div className="title">Dept: </div>
                                    <div className="text">Nontech</div>
                                  </li>
                                  <li>
                                    <div className="title">Current Address: </div>
                                    <div className="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                                  </li>
                                  <li>
                                    <div className="title">Email: </div>
                                    <div className="text">johndoe@example.com</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <ul className="personal-info">
                                <li>
                                  <div className="title">Phone:</div>
                                  <div className="text">9876543210</div>
                                </li>
                                {/* <li>
                                  <div className="title">Email:</div>
                                  <div className="text"><a href="">johndoe@example.com</a></div>
                                </li> */}
                                <li>
                                  <div className="title">Birthday:</div>
                                  <div className="text">24th July 1980</div>
                                </li>
                                <li>
                                  <div className="title">Permanent Address:</div>
                                  <div className="text">1861 Bayonne Ave, Manchester Township, NJ, 08759</div>
                                </li>
                                 {/* <li>
                                  <div className="title">Email:</div>
                                  <div className="text">johndoe@example.com</div>
                                </li> */}
                                <li>
                                  <div className="title">Gender:</div>
                                  <div className="text">Male</div>
                                </li>
                                <li>
                                  <div className="title">Refer By:</div>
                                  <div className="text">
                                    <div className="avatar-box">
                                      <div className="avatar avatar-xs">
                                        <img src={Avatar_16} alt="" />
                                      </div>
                                    </div>
                                    <a href="#">
                                    Sk1020
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="pro-edit"><a data-target="#profile_info" data-toggle="modal" className="edit-icon" href="#"><i className="fa fa-pencil" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card tab-box">
                <div className="row user-tabs">
                  <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
                    <ul className="nav nav-tabs nav-tabs-bottom">
                      <li className="nav-item"><a href="#emp_profile" data-toggle="tab" className="nav-link active">Profile</a></li>
                      <li className="nav-item"><a href="#emp_projects" data-toggle="tab" className="nav-link">PF</a></li>
                      <li className="nav-item"><a href="#bank_statutory" data-toggle="tab" className="nav-link">ESIC</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                {/* Profile Info Tab */}
                <div id="emp_profile" className="pro-overview tab-pane fade show active">
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Personal Informations <a href="#" className="edit-icon" data-toggle="modal" data-target="#personal_info_modal"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Category.</div>
                              <div className="text">SC</div>
                            </li>
                            <li>
                              <div className="title">Blood Group</div>
                              <div className="text">B+</div>
                            </li>
                            <li>
                              <div className="title">Mother Tongue</div>
                              <div className="text">Hindi</div>
                            </li>
                            <li>
                              <div className="title">Nationality</div>
                              <div className="text">Indian</div>
                            </li>
                            <li>
                              <div className="title">Religion</div>
                              <div className="text">Christian</div>
                            </li>
                            <li>
                              <div className="title">Marital status</div>
                              <div className="text">Married</div>
                            </li>
                            <li>
                              <div className="title">Marriage Date</div>
                              <div className="text">20/01/2019</div>
                            </li>
                            {/* <li>
                              <div className="title">No. of children</div>
                              <div className="text">2</div>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">References<a href="#" className="edit-icon" data-toggle="modal" data-target="#emergency_contact_modal"><i className="fa fa-pencil" /></a></h3>
                          {/* <h5 className="section-title">Primary</h5> */}
                          <ul className="personal-info">
                            <li>
                              <div className="title">Name</div>
                              <div className="text">John Doe</div>
                            </li>
                            <li>
                              <div className="title">Relationship</div>
                              <div className="text">Father</div>
                            </li>
                            <li>
                              <div className="title">Phone </div>
                              <div className="text">9876543210</div>
                            </li>
                            <li>
                              <div className="title">Location </div>
                              <div className="text">Delhi</div>
                            </li>
                          </ul>
                          <hr />
                          {/* <h5 className="section-title">Secondary</h5> */}
                          <ul className="personal-info">
                            <li>
                              <div className="title">Name</div>
                              <div className="text">Karen Wills</div>
                            </li>
                            <li>
                              <div className="title">Relationship</div>
                              <div className="text">Brother</div>
                            </li>
                            <li>
                              <div className="title">Phone </div>
                              <div className="text">9876543210</div>
                            </li>
                            <li>
                              <div className="title">Location </div>
                              <div className="text">Delhi</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                        
                          <h3 className="card-title">Bank information <a href="#" className="edit-icon" data-toggle="modal" data-target="#bank_contact_modal"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Bank name</div>
                              <div className="text">ICICI Bank</div>
                            </li>
                            <li>
                              <div className="title">Bank account No.</div>
                              <div className="text">159843014641</div>
                            </li>
                            <li>
                              <div className="title">IFSC Code</div>
                              <div className="text">ICI24504</div>
                            </li>
                            <li>
                              <div className="title">Branch</div>
                              <div className="text">Delhi</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Family Informations <a href="#" className="edit-icon" data-toggle="modal" data-target="#family_info_modal"><i className="fa fa-pencil" /></a></h3>
                          <div className="table-responsive">
                            <table className="table table-nowrap">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Relationship</th>
                                  <th>Date of Birth</th>
                                  <th>Aadhar No</th>
                                  <th />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Leo</td>
                                  <td>Brother</td>
                                  <td>Feb 16th, 2019</td>
                                  <td>9876543210</td>
                                  <td className="text-right">
                                    <div className="dropdown dropdown-action">
                                      <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                                      <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                                        <a href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Education Informations <a href="#" className="edit-icon" data-toggle="modal" data-target="#education_info"><i className="fa fa-pencil" /></a></h3>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="/" className="name">International College of Arts and Science (UG)</a>
                                    <div>Bsc Computer Science</div>
                                    <span className="time">2000 - 2003</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="/" className="name">International College of Arts and Science (PG)</a>
                                    <div>Msc Computer Science</div>
                                    <span className="time">2000 - 2003</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Experience <a href="#" className="edit-icon" data-toggle="modal" data-target="#experience_info"><i className="fa fa-pencil" /></a></h3>
                          <div className="experience-box">
                            <ul className="experience-list">
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="/" className="name">Web Designer at Zen Corporation</a>
                                    <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="/" className="name">Web Designer at Ron-tech</a>
                                    <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="experience-user">
                                  <div className="before-circle" />
                                </div>
                                <div className="experience-content">
                                  <div className="timeline-content">
                                    <a href="/" className="name">Web Designer at Dalt Technology</a>
                                    <span className="time">Jan 2013 - Present (5 years 2 months)</span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Other Details<a href="#" className="edit-icon" data-toggle="modal" data-target="#other_details"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Name (As per Driving License)</div>
                              <div className="text">Chandan Gupta</div>
                            </li>
                            <li>
                              <div className="title">Driving License No.</div>
                              <div className="text">DL593783328</div>
                            </li>
                            <li>
                              <div className="title">Place of Issue</div>
                              <div className="text">Delhi</div>
                            </li>
                            <li>
                              <div className="title">Valid Upto (mm-dd-yyyy)</div>
                              <div className="text">02-10-2023</div>
                            </li>
                            <li>
                              <div className="title">Vehicle No.</div>
                              <div className="text">DL-1C-W-3181</div>
                            </li>
                            <li>
                              <div className="title">PAN Card Number</div>
                              <div className="text">K8959KHH4</div>
                            </li>
                            <li>
                              <div className="title">Election ID Number</div>
                              <div className="text">DL859347347</div>
                            </li>
                            <li>
                              <div className="title">Aadhar Card</div>
                              <div className="text">53535363635</div>
                            </li>
                            <li>
                              <div className="title">Old PF No.</div>
                              <div className="text">53535363635</div>
                            </li>
                            <li>
                              <div className="title">Old UAN No.</div>
                              <div className="text">53535363635</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC No.</div>
                              <div className="text">53535363635</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC Dispensory Name</div>
                              <div className="text">Green Park</div>
                            </li>
                            <li>
                              <div className="title">Old ESIC Dispensory Address</div>
                              <div className="text">7/70, Green Park</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex">
                      <div className="card profile-box flex-fill">
                        <div className="card-body">
                          <h3 className="card-title">Document Checklist<a href="#" className="edit-icon" data-toggle="modal" data-target="#document_checklist"><i className="fa fa-pencil" /></a></h3>
                          <ul className="personal-info">
                            <li>
                              <div className="title">Resume/Bio-Data</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Aadhar Card</div>
                              <div className="text"><input type="checkbox" className="" checked /></div>
                            </li>
                            <li>
                              <div className="title">Driving License</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Voter ID</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">PAN Card</div>
                              <div className="text"><input type="checkbox" className="" checked /></div>
                            </li>
                            <li>
                              <div className="title">Ration Card</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Passport Size Photos</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Rent Agreement</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Passbook / Cancelled Cheque</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Marriage Certificate</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Signature</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                            <li>
                              <div className="title">Thumb Impression</div>
                              <div className="text"><input type="checkbox" className="" /></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Profile Info Tab */}
                {/* Projects Tab */}
                <div className="tab-pane fade" id="emp_projects">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Office Management</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">1</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">9</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Project Management</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">2</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">5</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Video Calling App</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">3</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">3</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
                      <div className="card">
                        <div className="card-body">
                          <div className="dropdown profile-action">
                            <a aria-expanded="false" data-toggle="dropdown" className="action-icon dropdown-toggle" href="#"><i className="material-icons">more_vert</i></a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a data-target="#edit_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-pencil m-r-5" /> Edit</a>
                              <a data-target="#delete_project" data-toggle="modal" href="#" className="dropdown-item"><i className="fa fa-trash-o m-r-5" /> Delete</a>
                            </div>
                          </div>
                          <h4 className="project-title"><a href="/blue/app/projects/projects-view">Hospital Administration</a></h4>
                          <small className="block text-ellipsis m-b-15">
                            <span className="text-xs">12</span> <span className="text-muted">open tasks, </span>
                            <span className="text-xs">4</span> <span className="text-muted">tasks completed</span>
                          </small>
                          <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. When an unknown printer took a galley of type and
                            scrambled it...
                          </p>
                          <div className="pro-deadline m-b-15">
                            <div className="sub-title">
                              Deadline:
                            </div>
                            <div className="text-muted">
                              17 Apr 2019
                            </div>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Project Leader :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="Jeffery Lalor"><img alt="" src={Avatar_16} /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="project-members m-b-15">
                            <div>Team :</div>
                            <ul className="team-members">
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Doe"><img alt="" src={Avatar_02} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Richard Miles"><img alt="" src={Avatar_09} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="John Smith"><img alt="" src={Avatar_10} /></a>
                              </li>
                              <li>
                                <a href="#" data-toggle="tooltip" title="Mike Litorus"><img alt="" src={Avatar_05} /></a>
                              </li>
                              <li>
                                <a href="#" className="all-users">+15</a>
                              </li>
                            </ul>
                          </div>
                          <p className="m-b-5">Progress <span className="text-success float-right">40%</span></p>
                          <div className="progress progress-xs mb-0">
                            <div style={{width: '40%'}} data-toggle="tooltip" role="progressbar" className="progress-bar bg-success" data-original-title="40%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Projects Tab */}
                {/* Bank Statutory Tab */}
                <div className="tab-pane fade" id="bank_statutory">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title"> Basic Salary Information</h3>
                      <form>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Salary basis <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select salary basis type</option>
                                <option>Hourly</option>
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Salary amount <small className="text-muted">per month</small></label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" placeholder="Type your salary amount" defaultValue={0.00} />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Payment type</label>
                              <select className="select">
                                <option>Select payment type</option>
                                <option>Bank transfer</option>
                                <option>Check</option>
                                <option>Cash</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h3 className="card-title"> PF Information</h3>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">PF contribution</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">PF No. <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee PF rate</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee PF rate</label>
                              <select className="select">
                                <option>Select PF contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h3 className="card-title"> ESI Information</h3>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">ESI contribution</label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">ESI No. <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Employee ESI rate</label>
                              <select className="select">
                                <option>Select ESI contribution</option>
                                <option>Yes</option>
                                <option>No</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Additional rate <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>Select additional rate</option>
                                <option>0%</option>
                                <option>1%</option>
                                <option>2%</option>
                                <option>3%</option>
                                <option>4%</option>
                                <option>5%</option>
                                <option>6%</option>
                                <option>7%</option>
                                <option>8%</option>
                                <option>9%</option>
                                <option>10%</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label className="col-form-label">Total rate</label>
                              <input type="text" className="form-control" placeholder="N/A" defaultValue="11%" />
                            </div>
                          </div>
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn" type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Bank Statutory Tab */}
              </div>
            </div>
            {/* /Page Content */}
            {/* Profile Modal */}
            <div id="profile_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Profile Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="profile-img-wrap edit-img">
                            <img className="inline-block" src={Avatar_02} alt="user" />
                            <div className="fileupload btn">
                              <span className="btn-text">edit</span>
                              <input className="upload" type="file" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" defaultValue="John" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Father Name</label>
                                <input type="text" className="form-control" defaultValue="Doe" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Birth Date</label>
                                <div className="cal-icon">
                                  <input className="form-control datetimepicker" type="text" defaultValue="05/06/1985" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Gender</label>
                                <select className="select form-control">
                                  <option value="male selected">Male</option>
                                  <option value="female">Female</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Current Address</label>
                            <input type="text" className="form-control" defaultValue="Safdargung enclave" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" defaultValue="Delhi" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" defaultValue="India" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pin Code</label>
                            <input type="text" className="form-control" defaultValue={122003} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" defaultValue="631-889-3206" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Permanent Address</label>
                            <input type="text" className="form-control" defaultValue="Nsp delhi" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" defaultValue="Delhi" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Country</label>
                            <input type="text" className="form-control" defaultValue="India" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Pin Code</label>
                            <input type="text" className="form-control" defaultValue={122001} />
                          </div>
                        </div>





                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" defaultValue="631-889-3206" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Department <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Select Department</option>
                              <option>Web Development</option>
                              <option>IT Management</option>
                              <option>Marketing</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Designation <span className="text-danger">*</span></label>
                            <select className="select">
                              <option>Select Designation</option>
                              <option>Web Designer</option>
                              <option>Web Developer</option>
                              <option>Android Developer</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Refer By  <span className="text-danger">*</span></label>
                            <select className="select">
                              
                              <option>Wilmer Deluna</option>
                              
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Profile Modal */}
            {/* Personal Info Modal */}
            <div id="personal_info_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Personal Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label>Passport No</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div> */}
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label>Passport Expiry Date</label>
                            <div className="cal-icon">
                              <input className="form-control datetimepicker" type="text" />
                            </div>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                       
                          <div className="form-group">
                            <label>Category <span className="text-danger">*</span></label>
                            <div className='clearfix'></div>
                            <div className="row">
                              <div className="col">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1" className="ml-2">SC</label>
                              </div>
                              <div className="col">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1" className="ml-2">ST</label>
                              </div>
                              <div className="col">
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                <label for="vehicle2" className="ml-2">OBC</label>
                              </div>
                              <div className="col">
                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                <label for="vehicle3" className="ml-2">OPEN</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Nationality <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Blood group <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Mother Tongue <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Marriage Date</label>
                            <div className="cal-icon">
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Marital status <span className="text-danger">*</span></label>
                            <select className="select form-control">
                              <option>-</option>
                              <option>Single</option>
                              <option>Married</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Religion</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label>No. of children </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div> */}
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Personal Info Modal */}
            {/* Other Details Modal */}
            <div id="other_details" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Other Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                       
                          <div className="form-group">
                            <label>Name <span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Driving License No.<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Place of Issue<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Valid Upto (mm-dd-yyyy)<span className="text-danger">*</span></label>
                            <input className="form-control" type="date" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Vehicle Number</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>PAN Card Number<span className="text-danger">*</span></label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Election ID Number</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Aadhar card</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old PF No.</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old UAN No.</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC No.</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC Dispensory No.</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Old ESIC Dispensory Address</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Other Details Modal */}
            {/* Document Checklist Modal */}
            <div id="document_checklist" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Document Checklist</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Resume/Bio-Data</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Aadhar Card <span className="text-danger">*</span></label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Driving License</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Voter ID</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">PAN Card <span className="text-danger">*</span></label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Ration Card</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Passport Size Photos</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Passbook / Cancelled Cheque</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Marriage Certificate</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Signature</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col my-auto">Thumb Impression</label>
                            <input type="file" className="form-control col" />
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Document Checklist Modal */}
            {/* Family Info Modal */}
            <div id="family_info_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Family Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Family Member <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Name <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Relationship <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Date of birth <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Aadhar Number <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                  <label className="ml-2">Is Nominee</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Family Member <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Name <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Relationship <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Date of birth <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Aadhar Number <span className="text-danger">*</span></label>
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                  <label className="ml-2">Is Nominee</label>
                                </div>
                              </div>
                            </div>
                            <div className="add-more">
                              <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Family Info Modal */}
            {/* Emergency Contact Modal */}
            <div id="emergency_contact_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">References</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">1</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Relationship <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Phone <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Location</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <h3 className="card-title">2</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Relationship <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Phone <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Location</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Emergency Contact Modal */}

          {/* Bank Modal */}
          <div id="bank_contact_modal" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Bank Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="card">
                        <div className="card-body">
                          {/* <h3 className="card-title">1</h3> */}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Bank Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Account number <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Ifsc code <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Branch</label>
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Bank Modal */}



            {/* Education Modal */}
            <div id="education_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title"> Education Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Education Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="Delhi univercity" className="form-control floating" />
                                  <label className="focus-label">School/College name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="Delhi" className="form-control floating" />
                                  <label className="focus-label">Location</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input type="text" defaultValue="01/06/2002" className="form-control floating datetimepicker" />
                                  </div>
                                  <label className="focus-label">Year of passing</label>
                                </div>
                              </div>
                              {/* <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input type="text" defaultValue="31/05/2006" className="form-control floating datetimepicker" />
                                  </div>
                                  <label className="focus-label">Complete Date</label>
                                </div>
                              </div> */}
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="CBSE" className="form-control floating" />
                                  <label className="focus-label">Board/Univercity</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="10th std" className="form-control floating" />
                                  <label className="focus-label">Degree</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="90" className="form-control floating" />
                                  <label className="focus-label">% Marks/Cgpa</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Education Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="Patna University" className="form-control floating" />
                                  <label className="focus-label">School/College name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="Patna" className="form-control floating" />
                                  <label className="focus-label">Location</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input type="text" defaultValue="01/06/2002" className="form-control floating datetimepicker" />
                                  </div>
                                  <label className="focus-label">Year of passing</label>
                                </div>
                              </div>
                              {/* <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <div className="cal-icon">
                                    <input type="text" defaultValue="31/05/2006" className="form-control floating datetimepicker" />
                                  </div>
                                  <label className="focus-label">Complete Date</label>
                                </div>
                              </div> */}
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="12th std" className="form-control floating" />
                                  <label className="focus-label">Degree</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="BSEB" className="form-control floating" />
                                  <label className="focus-label">Board/Univercity</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus focused">
                                  <input type="text" defaultValue="80" className="form-control floating" />
                                  <label className="focus-label">% Marks/Cgpa</label>
                                </div>
                              </div>
                            </div>
                            <div className="add-more">
                              <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Education Modal */}
            {/* Experience Modal */}
            <div id="experience_info" className="modal custom-modal fade" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Experience Informations</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-scroll">
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Experience Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="Flipkart" />
                                  <label className="focus-label">Organisation</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="no growth" />
                                  <label className="focus-label">Reason for sepration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="Delevery boy" />
                                  <label className="focus-label">Designation</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" defaultValue="01/07/2007" />
                                  </div>
                                  <label className="focus-label">Period From</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" defaultValue="08/06/2018" />
                                  </div>
                                  <label className="focus-label">Period To</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <h3 className="card-title">Experience Informations <a href="" className="delete-icon"><i className="fa fa-trash-o" /></a></h3>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="Amazon" />
                                  <label className="focus-label">Organisation</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="some personal reason" />
                                  <label className="focus-label">Reason for sepration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <input type="text" className="form-control floating" defaultValue="Loader" />
                                  <label className="focus-label">Designation</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" defaultValue="01/07/2007" />
                                  </div>
                                  <label className="focus-label">Period From</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group form-focus">
                                  <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" defaultValue="08/06/2018" />
                                  </div>
                                  <label className="focus-label">Period To</label>
                                </div>
                              </div>
                            </div>
                            <div className="add-more">
                              <a href=""><i className="fa fa-plus-circle" /> Add More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submit-section">
                        <button className="btn btn-primary submit-btn">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Experience Modal */}
          </div>
       
    );
  }
}
