/**
 * TermsCondition Page
 */
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {Avatar_02,Avatar_05,Avatar_09,Avatar_10,Avatar_16 } from '../../../Entryfile/imagepath'
var axios = require('axios');
import candidate from'./candidateprofile'

export default class EmployeeProfile extends Component {
  constructor(...props){
    super(...props)
    this.state={
      error: null,
      isLoaded: false,
      items: []
      
      
    }
   
    
  }
 
  componentDidMount=()=> 
  {
      
      var config = {
        method: 'get',
        url: 'http://192.168.0.4:1111/api/candidate/full-information/32',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : ''
      };
     
      axios(config)
      .then( (response)=> {
          
        this.setState({
          isLoaded: true,
          items: JSON.stringify(response.data)
        });
        alert("datatattatat"+this.state.items);
        console.log(JSON.stringify(response.data));
       
      })
      .catch( (error)=> {
        this.setState({
          isLoaded: true,
          error
        });
        console.log(error);
      });
      
  }
  render() {
    //You may like to show loading indicator while retrieving data:
    const {items = undefined} = this.state.items;
       if(data) {
           return (
                 <candidate items={items}></candidate>
           );
       }else{
           return <candidate items='notfound'></candidate>
       }

  }
}
