/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  headerlogo, lnEnglish, lnFrench, lnHindi, Avatar_02, Avatar_03, Avatar_05,
  Avatar_06, Avatar_08, Avatar_09, Avatar_13, Avatar_17, Avatar_21
} from '../../Entryfile/imagepath'

class Header extends Component {
  constructor(...props) {
    super(...props)
    this.state = { img: URL.createObjectURL("" + localStorage.getItem("candidateImg")) }

  }

  submitProfile = (e) => {
    alert("click")

  }

  render() {
    const { location } = this.props
    let pathname = location.pathname
    console.log("########### this.state")
    console.log(this.state)
    return (
      <div className="header" style={{ right: "0px" }}>
        {/* Logo */}
        <div className="header-left">
          <a href="#" className="logo">
            <img src={headerlogo} width={60} height={60} alt="" />
          </a>
        </div>
        {/* /Logo */}
        {/* <a id="toggle_btn" href="" style={{display: pathname.includes('tasks') ?"none" :pathname.includes('compose') ? "none" :""}}>
          <span className="bar-icon"><span />
            <span />
            <span />
          </span>
        </a> */}
        {/* Header Title */}
        <div className="page-title-box">
          <h3>Adhaan pvt ltd.</h3>
        </div>

        {/* Header Menu */}
        <ul className="nav user-menu">

          {/* Flag */}
          <li className="nav-item dropdown has-arrow flag-nav">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button">
              <img src={lnEnglish} alt="" height={20} /> <span>English</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="" className="dropdown-item">
                <img src={lnEnglish} alt="" height={16} /> English
                  </a>
              <a href="" className="dropdown-item">
                <img src={lnHindi} alt="" height={16} /> Hindi
                  </a>
              {/* <a href="" className="dropdown-item">
                    <img src={lnSpanish} alt="" height={16} /> Spanish
                  </a>
                  <a href="" className="dropdown-item">
                    <img src={lnGerman} alt="" height={16} /> German
                  </a> */}
            </div>
          </li>
          {/* /Flag */}
          {/* Notifications */}
          {/* <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/blue/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_02} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                          <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li> */}
          {/* <li className="notification-message">
                    <a href="/blue/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_03} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                          <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_06} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                          <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_17} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                          <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/app/administrator/activities">
                      <div className="media">
                        <span className="avatar">
                          <img alt="" src={Avatar_13} />
                        </span>
                        <div className="media-body">
                          <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                          <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/blue/app/administrator/activities">View all Notifications</a>
              </div>
            </div>
          </li> */}
          {/* /Notifications */}
          {/* Message Notifications */}
          {/* <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <i className="fa fa-comment-o" /> <span className="badge badge-pill">8</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Messages</span>
                <a href="" className="clear-noti"> Clear All </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="/blue/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_09} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_02} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">6 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_03} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Tarah Shropshire </span>
                          <span className="message-time">5 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_05} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">3 Mar</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="/blue/conversation/chat">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">
                            <img alt="" src={Avatar_08} />
                          </span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Catherine Manseau </span>
                          <span className="message-time">27 Feb</span>
                          <div className="clearfix" />
                          <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="/blue/conversation/chat">View all Messages</a>
              </div>
            </div>
          </li> */}
          {/* /Message Notifications */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
              <span className="user-img"><img src={this.state.img} alt="" />
                <span className="status online" /></span>
              <span>&nbsp;{localStorage.getItem("candidateName")}</span>

            </a>
            <div className="dropdown-menu">
              {/* <a className="dropdown-item" href="/blue/app/profile/employee-profile">My Profile</a>
              <a className="dropdown-item" href="/blue/settings/companysetting">Settings</a> */}
              <a className="dropdown-item" href="/blue/login">Logout</a>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" /></a>
          <div className="dropdown-menu dropdown-menu-right">
            {/* <a className="dropdown-item" href="/blue/app/profile/employee-profile">My Profile</a>
            <a className="dropdown-item" href="/blue/settings/companysetting">Settings</a> */}
            <a className="dropdown-item" href="/blue/login">Logout</a>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>

    );
  }
}

export default withRouter(Header);