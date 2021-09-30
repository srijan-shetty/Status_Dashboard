import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const ExportLongrunning = (props) => {
    
let rows = []
  if(props.display && props.getlong){
    rows= props.getlong.map(row => {
      return row;
    })
  }
    //   console.log(props.details)
    const fileName ='Long_Running.csv';

    return (
        <>
        <label>
            <CSVLink data={rows} filename={fileName}>
                <FaArrowAltCircleDown  style={{ color: 'white'}}/>
            </CSVLink>
        </label>
        </>
    )
}