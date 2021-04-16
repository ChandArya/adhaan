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
        var url=localStorage.getItem('url')
        return (

            <div className="">
                <Helmet>
                    <title>Print page</title>
                    <meta name="description" content="print page" />
                </Helmet>
                <div className="account-content">
                    <div className="container">

                        <div className=" linear jumbotron text-center" style={{ transform: 'translate(0%,30%)', borderRadius: '20px' }}>
                            <i className="fa fa-check" aria-hidden="true" style={{ fontSize: '5em', color: '#1AB394', border: '3px solid', borderRadius: '50%', padding: '18px' }}></i>
                            <h1 className="display-3" style={{ textTransform: 'uppercase', marginTop: '20px' }}>Thank You!</h1>
                            <p className="lead"><strong>For submitting all details.<br /></strong></p>
                            <hr />
                            <p className="lead">
                                <a className="btn btn-primary btn-lg mt-4" href={url}role="button">Close</a>
                            </p>
                        </div>



                    </div>
                </div>
            </div>

        );
    }
}
export default PrintPage;