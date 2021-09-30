import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const ExportDeviation = (props) => {
  let rows = []
  // if(props.display){
  //   rows= props.geterror.map(row => {
  //     return row;
  //   })
  // }
    const fileName ='Delat_Variation.csv';

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

// export default ExportReactCSV;