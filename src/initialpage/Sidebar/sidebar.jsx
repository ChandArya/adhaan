/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname
    
    return (
      <div></div>
      //   <div className="sidebar" id="sidebar">
      //   <div className="sidebar-inner slimscroll">
      //     <div id="sidebar-menu" className="sidebar-menu">
      //       <ul>
      //         {/* <li className="menu-title"> 
      //           <span>Main</span>
      //         </li> */}
      //         {/* new changes */}
      //         <li className="submenu">
      //           <a href="/blue/settings/companysetting"><i className="la la-cog" /> <span>Configuration</span></a>
              
                
      //         </li>
      //         <li className={pathname.includes('administrator/users') ?"active" :""}> 
      //           <a href="/blue/app/administrator/users"><i className="la la-user-plus" /> <span>User Access</span></a>
      //         </li>
      //         {/* end new changes */}
      //         <li className="submenu">
      //           <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/blue/app/main/dashboard">Admin Dashboard</a></li>
      //             {/* <li><a className={pathname.includes('main/employee-') ?"active" :""} 
      //                   href="/blue/app/main/employee-dashboard">Employee Dashboard</a></li> */}
      //           </ul>
      //         </li>
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-cube" /> <span> Apps</span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a href="/blue/conversation/chat">Chat</a></li>
      //             <li className="submenu">
      //               <a href="#"><span> Calls</span> <span className="menu-arrow" /></a>
      //               <ul style={{display: 'none'}}>
      //                 <li><a href="/blue/conversation/voice-call">Voice Call</a></li>
      //                 <li><a href="/blue/conversation/video-call">Video Call</a></li>
      //                 <li><a href="/blue/conversation/outgoing-call">Outgoing Call</a></li>
      //                 <li><a href="/blue/conversation/incoming-call">Incoming Call</a></li>
      //               </ul>
      //             </li>
      //             <li><a className={pathname.includes('apps/calendar') ?"active" :""} href="/blue/app/apps/calendar">Calendar</a></li>
      //             <li><a className={pathname.includes('contacts') ?"active" :""} href="/blue/app/apps/contacts">Contacts</a></li>
      //             <li><a href="/blue/email/inbox">Email</a></li>
      //             <li><a className={pathname.includes('file-manager') ?"active" :""} href="/blue/app/apps/file-manager">File Manager</a></li>
      //           </ul>
      //         </li> */}
      //         <li className="menu-title"> 
      //           <span>Employees</span>
      //         </li>
      //         <li className="submenu">
      //           <a href="#" className="noti-dot"><i className="la la-user" /> <span> Employees</span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('allemployees') ?"active" :pathname.includes('employees-list') ?"active" :""} 
      //                   href="/blue/app/employee/allemployees">All Employees</a></li>
      //             <li><a className={pathname.includes('holidays') ?"active" :""} href="/blue/app/employee/holidays">Holidays</a></li>
      //             <li><a className={pathname.includes('es-admin') ?"active" :""} href="/blue/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
      //             <li><a className={pathname.includes('ves-employee') ?"active" :""} href="/blue/app/employee/leaves-employee">Leaves (Employee)</a></li>
      //             <li><a className={pathname.includes('e-settings') ?"active" :""} href="/blue/app/employee/leave-settings">Leave Settings</a></li>
      //             <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/blue/app/employee/attendance-admin">Attendance (Admin)</a></li>
      //             <li><a className={pathname.includes('ce-employee') ?"active" :""} href="/blue/app/employee/attendance-employee">Attendance (Employee)</a></li>
      //             <li><a className={pathname.includes('departments') ?"active" :""} href="/blue/app/employee/departments">Departments</a></li>
      //             <li><a className={pathname.includes('designations') ?"active" :""} href="/blue/app/employee/designations">Designations</a></li>
      //             <li><a className={pathname.includes('timesheet') ?"active" :""} href="/blue/app/employee/timesheet">Timesheet</a></li>
      //             <li><a className={pathname.includes('overtime') ?"active" :""} href="/blue/app/employee/overtime">Overtime</a></li>
      //           </ul>
      //         </li>
      //         <li className={pathname.includes('clients') ?"active" :""}> 
      //           <a href="/blue/app/employees/clients"><i className="la la-users" /> <span>Clients</span></a>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-rocket" /> <span> Projects</span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('t_dashboard' ) ?"active" : pathname.includes('projects-list' ) ?
      //             "active" : pathname.includes('cts-view' ) ? "active" : ""} 
      //                 href="/blue/app/projects/project_dashboard">Projects</a></li>
      //             <li><a href="/blue/tasks/tasks">Tasks</a></li>
      //             <li><a className={pathname.includes('task-board') ?"active" :""} href="/blue/app/projects/task-board">Task Board</a></li>
      //           </ul>
      //         </li>
      //         <li className={pathname.includes('leads') ?"active" :""}> 
      //           <a href="/blue/app/employees/leads"><i className="la la-user-secret" /> <span>Leads</span></a>
      //         </li>
      //         <li className={pathname.includes('tickets') ?"active" :""}> 
      //           <a href="/blue/app/employees/tickets"><i className="la la-ticket" /> <span>Tickets</span></a>
      //         </li>
      //         <li className="menu-title"> 
      //           <span>HR</span>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-files-o" /> <span> Accounts </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('estimates') ?"active" :""} href="/blue/app/accounts/estimates">Estimates</a></li>
      //             <li><a className={pathname.includes('invoices') ?"active" :""} href="/blue/app/accounts/invoices">Invoices</a></li>
      //             <li><a className={pathname.includes('payments') ?"active" :""} href="/blue/app/accounts/payments">Payments</a></li>
      //             <li><a className={pathname.includes('expenses') ?"active" :""} href="/blue/app/accounts/expenses">Expenses</a></li>
      //             <li><a className={pathname.includes('provident-fund') ?"active" :""} href="/blue/app/accounts/provident-fund">Provident Fund</a></li>
      //             <li><a className={pathname.includes('taxes') ?"active" :""} href="/blue/app/accounts/taxes">Taxes</a></li>
      //           </ul>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-money" /> <span> Payroll </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('_salary') ?"active" :""} href="/blue/app/payroll/_salary"> Employee Salary </a></li>
      //             <li><a className={pathname.includes('y-view') ?"active" :""} href="/blue/app/payroll/salary-view"> Payslip </a></li>
      //             <li><a className={pathname.includes('payroll-items') ?"active" :""} href="/blue/app/payroll/payroll-items"> Payroll Items </a></li>
      //           </ul>
      //         </li>
      //         <li className={pathname.includes('policies') ?"active" :""}> 
      //           <a href="/blue/app/hr/policies"><i className="la la-file-pdf-o" /> <span>Policies</span></a>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-pie-chart" /> <span> Reports </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('expense-') ?"active" :""} href="/blue/app/reports/expense-reports"> Expense Report </a></li>
      //             <li><a className={pathname.includes('invoice-') ?"active" :""} href="/blue/app/reports/invoice-reports"> Invoice Report </a></li>
      //           </ul>
      //         </li>
      //         <li className="menu-title"> 
      //           <span>Performance</span>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-graduation-cap" /> <span> Performance </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('-indicator') ?"active" :""} href="/blue/app/performances/performance-indicator"> Performance Indicator </a></li>
      //             <li><a className={pathname.includes('-review') ?"active" :""} href="/blue/app/performances/performance-review"> Performance Review </a></li>
      //             <li><a className={pathname.includes('-appraisal') ?"active" :""} href="/blue/app/performances/performance-appraisal"> Performance Appraisal </a></li>
      //           </ul>
      //         </li>
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-crosshairs" /> <span> Goals </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('-tracking') ?"active" :""} href="/blue/app/goals/goal-tracking"> Goal List </a></li>
      //             <li><a className={pathname.includes('l-type') ?"active" :""} href="/blue/app/goals/goal-type"> Goal Type </a></li>
      //           </ul>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-edit" /> <span> Training </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('training-list') ?"active" :""} href="/blue/app/training/training-list"> Training List </a></li>
      //             <li><a className={pathname.includes('trainer') ?"active" :""} href="/blue/app/training/trainer"> Trainers</a></li>
      //             <li><a className={pathname.includes('training-type') ?"active" :""} href="/blue/app/training/training-type"> Training Type </a></li>
      //           </ul>
      //         </li> */}
      //         <li className={pathname.includes('promotion') ?"active" :""}><a href="/blue/app/performance/promotion"><i className="la la-bullhorn" /> <span>Promotion</span></a></li>
      //         <li className={pathname.includes('resignation') ?"active" :""}><a href="/blue/app/performance/resignation"><i className="la la-external-link-square" /> <span>Resignation</span></a></li>
      //         <li className={pathname.includes('termination') ?"active" :""}><a href="/blue/app/performance/termination"><i className="la la-times-circle" /> <span>Termination</span></a></li>
      //         <li className="menu-title"> 
      //           <span>Administration</span>
      //         </li>
      //         <li className={pathname.includes('assets') ?"active" :""}> 
      //           <a href="/blue/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></a>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('jobs') ?"active" :""} href="/blue/app/administrator/jobs"> Manage Jobs </a></li>
      //             <li><a className={pathname.includes('job-applicants') ?"active" :""} href="/blue/app/administrator/job-applicants"> Applied Candidates </a></li>
      //           </ul>
      //         </li>
      //         {/* <li className={pathname.includes('knowledgebase') ?"active" :""}> 
      //           <a href="/blue/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></a>
      //         </li> */}
      //         <li className={pathname.includes('activities') ?"active" :""}> 
      //           <a href="/blue/app/administrator/activities"><i className="la la-bell" /> <span>Activities</span></a>
      //         </li>
      //         <li className={pathname.includes('administrator/users') ?"active" :""}> 
      //           <a href="/blue/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></a>
      //         </li>
      //         <li> 
      //           <a href="/blue/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></a>
      //         </li>
      //         <li className="menu-title"> 
      //           <span>Pages</span>
      //         </li>
      //         <li className="submenu">
      //           <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('profile/employee-') ?"active" :""} href="/blue/app/profile/employee-profile"> Employee Profile </a></li>
      //             <li><a className={pathname.includes('client-') ?"active" :""} href="/blue/app/profile/client-profile"> Client Profile </a></li>
      //           </ul>
      //         </li>
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a href="/blue/login"> Login </a></li>
      //             <li><a href="/blue/register"> Register </a></li>
      //             <li><a href="/blue/forgotpassword"> Forgot Password </a></li>
      //             <li><a href="/blue/otp"> OTP </a></li>
      //             <li><a href="/blue/lockscreen"> Lock Screen </a></li>
      //           </ul>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a href="/blue/error-404">404 Error </a></li>
      //             <li><a href="/blue/error-500">500 Error </a></li>
      //           </ul>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('subscriptionadmin') ?"active" :""} href="/blue/app/subscription/subscriptionadmin"> 
      //             Subscriptions (Admin) </a></li>
      //             <li><a className={pathname.includes('subscriptioncompany') ?"active" :""} href="/blue/app/subscription/subscriptioncompany">
      //                Subscriptions (Company) </a></li>
      //             <li><a className={pathname.includes('subscribedcompanies') ?"active" :""} href="/blue/app/subscription/subscribedcompanies">
      //                Subscribed Companies</a></li>
      //           </ul>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('pages/search') ?"active" :""} href="/blue/app/pages/search"> Search </a></li>
      //             <li><a className={pathname.includes('pages/faq') ?"active" :""} href="/blue/app/pages/faq"> FAQ </a></li>
      //             <li><a className={pathname.includes('pages/terms') ?"active" :""} href="/blue/app/pages/terms"> Terms </a></li>
      //             <li><a className={pathname.includes('privacypolicy') ?"active" :""} href="/blue/app/pages/privacypolicy"> Privacy Policy </a></li>
      //             <li><a className={pathname.includes('pages/blank') ?"active" :""} href="/blue/app/pages/blank"> Blank Page </a></li>
      //           </ul>
      //         </li>
      //         <li className="menu-title"> 
      //           <span>UI Interface</span>
      //         </li>
      //         <li> 
      //           <a href="/blue/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></a>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="#"><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('basicinputs') ?"active" :""}
      //                 href="/blue/app/ui-interface/forms/basicinputs">Basic Inputs </a></li>
      //             <li><a className={pathname.includes('inputgroups') ?"active" :""} 
      //                 href="/blue/app/ui-interface/forms/inputgroups">Input Groups </a></li>
      //             <li><a className={pathname.includes('horizontalform') ?"active" :""}
      //                href="/blue/app/ui-interface/forms/horizontalform">Horizontal Form </a></li>
      //             <li><a className={pathname.includes('verticalform') ?"active" :""} 
      //               href="/blue/app/ui-interface/forms/verticalform"> Vertical Form </a></li>
      //             <li><a className={pathname.includes('formmask') ?"active" :""}
      //                 href="/blue/app/ui-interface/forms/formmask"> Form Mask </a></li>
      //             <li><a className={pathname.includes('formvalidation') ?"active" :""}
      //                 href="/blue/app/ui-interface/forms/formvalidation"> Form Validation </a></li>
      //           </ul>
      //         </li> */}
      //         {/* <li className="submenu">
      //           <a href="/blue/app/ui-interface/tables/basic"><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li><a className={pathname.includes('tables/basic') ?"active" :""} href="/blue/app/ui-interface/tables/basic">Basic Tables </a></li>
      //             <li><a className={pathname.includes('tables/data-table') ?"active" :""} href="/blue/app/ui-interface/tables/data-table">Data Table </a></li>
      //           </ul>
      //         </li> */}
      //         <li className="menu-title"> 
      //           <span>Extras</span>
      //         </li>
      //         <li> 
      //           <a href="#"><i className="la la-file-text" /> <span>Documentation</span></a>
      //         </li>
      //         {/* <li> 
      //           <a href=""><i className="la la-info" /> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.4</span></a>
      //         </li>
      //         <li className="submenu">
      //           <a href=""><i className="la la-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
      //           <ul style={{display: 'none'}}>
      //             <li className="submenu">
      //               <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
      //               <ul style={{display: 'none'}}>
      //                 <li><a href=""><span>Level 2</span></a></li>
      //                 <li className="submenu">
      //                   <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
      //                   <ul style={{display: 'none'}}>
      //                     <li><a href="">Level 3</a></li>
      //                     <li><a href="">Level 3</a></li>
      //                   </ul>
      //                 </li>
      //                 <li><a href=""> <span>Level 2</span></a></li>
      //               </ul>
      //             </li>
      //             <li>
      //               <a href=""> <span>Level 1</span></a>
      //             </li>
      //           </ul>
      //         </li> */}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
       
      );
   }
}

export default withRouter(Sidebar);
