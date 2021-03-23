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
import DeclarationForm from './Declaration-Form';
import EsicdeclrationForm from './EsicdeclrationForm';
import GratitutyForm from './GratitutyForm';




const subscriptionroute = ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/employee-profile`} />
        {/* <Route path={`${match.url}/employee-profile`} component={EmployeeProfile} />
        <Route path={`${match.url}/client-profile`} component={ClientProfile} /> */}
        <Route path={`${match.url}/candidate-profile`} component={Candidate} />
        <Route path={`${match.url}/applcation-form`} component={ApplicationForm} />
        <Route path={`${match.url}/offerLetter`} component={OfferLetter} />
        <Route path={`${match.url}/declaration-form`} component={DeclarationForm} />
        <Route path={`${match.url}/Esic-declrationForm`} component={EsicdeclrationForm} />
        <Route path={`${match.url}/Gratituty-form`} component={GratitutyForm} />


    </Switch>
);

export default subscriptionroute;
