/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class PrintPage extends Component {
    constructor(...props) {
        super(...props)


    }



    render() {

        return (


            <div className="">
                <Helmet>
                    <title>Print page</title>
                    <meta name="description" content="print page" />
                </Helmet>
                <div className="account-content">

                    <div className="container">



                        <div class="jumbotron text-center" style={{ transform: 'translate(0%,30%)' }}>
                            <h1 class="display-3">Thank You!</h1>
                            <p class="lead"><strong>For submitting all details.<br />
                            </strong>Please click on the below button to print all the  Forms</p>
                            <hr />

                            <p class="lead">
                                <a class="btn btn-primary btn-lg" href="" role="button">Print</a>
                            </p>
                        </div>






                    </div>
                </div>
            </div>


        );
    }
}

export default PrintPage;
