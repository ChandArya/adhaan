import React, { Component } from 'react';
import { Applogo, Sign } from '../../../Entryfile/imagepath.jsx'

class DeclarationForm extends Component {
    render() {
        return (
            <div className="container" style={{
                marginTop: '8em', transform: 'inherit',
                position: 'inherit',
                left: 'inherit',
                top: 'inherit'
            }}>
                <div className="border">
                    <div style={{ float: 'right' }}>
                        <h3 className='font-weight-bold' style={{ marginTop: '50px' }}>DECLARATION FORM</h3>
                        <p>(To be retained by the Employer for future reference</p>
                    </div>


                    <div className="account-logo float-left">
                        <a href="#"><img src={Applogo} alt="Adhaan" /></a>
                    </div>
                    <div className="text-center">
                        <h3 className='font-weight-bold'>
                            EMPLOYEES PROVIDENT FUND ORGANIZATION
    </h3>
                        <div className="text-sm font-weight-bold">
                            THE EMPLOYEES PROVIDENT FUNDS SCHEME, 1952 (PARAGRAPH-34 & 57)
                            <br />
                        &<br />
                        THE EMPLOYEES PENSION SCHEME, 1995 (PARAGRAPH-24)
                        <br /><br />

                        </div>


                        <div className="font-weight-bold">
                            <p>
                                <u>DECLARATION BY A PERSON TAKING UP EMPLOYMENT IN AN ESTABLISHMENT ON WHICH EMPLOYEES PROVIDENT FUND SCHEME,<br />
                            1952 AND/OR EMPLOYEES PENSION SCHEME, 1995 IS APPLICABLE.<br />
                               (PLEASE GO THROUGH THE INSTRUCTIONS)</u></p>

                        </div>
                    </div>














                    {/*border close*/}
                </div>

            </div>
        );
    }
}
export default DeclarationForm;