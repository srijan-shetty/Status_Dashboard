import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const ExportError = (props) => {
  let rows = []
  // if(!props.loadingError){
  //   rows= props.errorjob.map(row => {
  //     return row;
  //   })
  // }
  // if(props.getcall && props.loadingError){
  //   rows= props.errorjobget.map(row => {
  //     return row;
  //   }
  //   )
  // }
  if(props.display){
    rows= props.geterror.map(row => {
      return row;
    })
  }
    //   console.log(props.details)
    const fileName ='Error_weekend_jobs.csv';

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