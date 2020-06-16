import React, { Component } from 'react'
import { Document, Page } from 'react-pdf';
import resume from '../images/resume.pdf'
export class Resume extends Component {
    render() {
        return (
            <div>
                <Document file={resume} >
                    <Page />
                </Document>
            </div>
        )
    }
}

export default Resume
