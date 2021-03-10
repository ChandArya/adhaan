/**
 * Tables Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import EmployeeProfile from "./employeeprofile"
import ClientProfile from "./clientprofile"
import Candidate from './candidateprofile'
import ApplicationForm from './applicationform'
import OfferLetter from './OfferLetter';


const subscriptionroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/employee-profile`} />
        {/* <Route path={`${match.url}/employee-profile`} component={EmployeeProfile} />
        <Route path={`${match.url}/client-profile`} component={ClientProfile} /> */}
        <Route path={`${match.url}/candidate-profile`} component={Candidate} />
        <Route path={`${match.url}/applcation-form`} component={ApplicationForm} />
        <Route path={`${match.url}/offerLetter`} component={OfferLetter} />

    </Switch>
);

export default subscriptionroute;
