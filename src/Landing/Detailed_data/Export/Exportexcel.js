import React, {Component} from 'react';
import { Toast } from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
const Test =({ rows})=> {
    // console.log(rows)
    let b=[];
    let rowdata= rows.map(row=>{
        b=Object.values(row)
        // return b;
    })
    console.log(b)
    return (
        <div>
            <Toast>
            <Toast.Header>
                <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="CPU_Details"
                sheet="CPU_Details"
                buttonText="Download as XLS"/>
            </Toast.Header>
            <Toast.Body>
            <table id="table-to-xls">
                <tr>
                    <th>JOB NAME</th>
                    <th>APPLICATION ID</th>
                    <th>WORK STATION</th>
                    <th>START TIME</th>
                    <th>END TIME</th>
                    <th>DURATION (HHMMSS)</th>
                    <th>OPERATION TEXT</th>
                    <th>ERROR CODE</th>
                    <th># IMMEDIATE SUCCESSOR</th>
                </tr>
                <tr>
                {
                        rows.map(row=> (
                            <td>{(row)}</td>
                        ))
                    }
                </tr>
            </table>
            </Toast.Body>
            </Toast>
            
            

        </div>
    );

}
 
export default Test