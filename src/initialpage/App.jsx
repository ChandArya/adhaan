import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// We will create these two pages in a moment
//Authendication
import LoginPage from './loginpage'
import RegistrationPage from './RegistrationPage'
import ForgotPassword from './forgotpassword'
import OTP from './otp'
import OTPSix from './otpsix'
import Updateno from './updateno'
import LockScreen from './lockscreen'
import Adhar from './adhar'

import ApplyJobs from './ApplyJob';

//Main App
import DefaultLayout from './Sidebar/DefaultLayout';
import Settinglayout from './Sidebar/Settinglayout';
import Tasklayout from './Sidebar/tasklayout';
import Emaillayout from './Sidebar/emaillayout';
import chatlayout from './Sidebar/chatlayout';

import uicomponents from '../MainPage/UIinterface/components';
//Error Page
import Error404 from '../MainPage/Pages/ErrorPage/error404';
import Error500 from '../MainPage/Pages/ErrorPage/error500';


// import 'Assets/css/font-awesome.min.css';

import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// import UserPage from './pages/UserPage'
/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
// const InitialPath = ({ component: Component, ...rest, authUser }) =>
//    <Route
//       {...rest}
//       render={props =>
//          authUser
//             ? <Component {...props} />
//             : <Redirect
//                to={{
//                   pathname: '/login',
//                   state: { from: props.location }
//                }}
//             />}
//    />;

export default class App extends Component {
    componentDidMount(){
        if (location.pathname.includes("login") || location.pathname.includes("register") || location.pathname.includes("forgotpassword")
        || location.pathname.includes("otp")|| location.pathname.includes("lockscreen") ) {
            $('body').addClass('account-page');
        }else if (location.pathname.includes("error-404") || location.pathname.includes("error-500") ) {
            $('body').addClass('error-page');
        }
    }
       render(){
            const { location, match, user } = this.props;
            
            
            
            if (location.pathname === '/') {
                 
                   return (<Redirect to={'/login'} />);
                
             }
            return (
                <Switch>
                    {/* <InitialPath
                        path={`${match.url}app`}
                        // authUser={user}
                        component={DefaultLayout}
                    /> */}
                    {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} /> */}
                    <Route path="/login" component={LoginPage} />
                    <Route path="/adhar" component={Adhar} />
                    {/* <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/register" component={RegistrationPage} /> */}
                    <Route path="/otp" component={OTP} />
                    <Route path="/sixotp" component={OTPSix} />
                    <Route path="/update" component={Updateno} />
                    {/* <Route path="/lockscreen" component={LockScreen} />
                    <Route path="/applyjob" component={ApplyJobs} /> */}

                    <Route path="/app" component={DefaultLayout} />
                    
                    <Route path="/ui-components" component={uicomponents} />
                    <Route path="/error-404" component={Error404} />
                    <Route path="/error-500" component={Error500} />
                </Switch>
            )
        }
         
}
