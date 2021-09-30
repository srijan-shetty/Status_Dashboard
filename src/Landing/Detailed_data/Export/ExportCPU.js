import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const ExportCPU = (props) => {
let rows = []
  // if(!props.loading){
  //   rows= props.details.map(row => {
  //     return row;
  //   })
  // }
  // if(props.getcall && props.loading){
  //   rows= props.detailsget.map(row => {
  //     return row;
  //   }
  //   )
  // }
  if(props.display){
    rows = props.getcpu.map(row => {
      return row;
    })
  }
    //   console.log(props.details)
    const fileName ='CPU_Data.csv';

    return (
        <>
        {/* <Button variant="primary">
            <CSVLink data={rows} filename={fileName}>
                <FaFileDownload  style={{backgroundColor: 'black', color: 'white'}}/>EXPORT
            </CSVLink>
        </Button> */}
         <label>
            <CSVLink data={rows} filename={fileName}>
                <FaArrowAltCircleDown  style={{ color: 'white'}}/>
            </CSVLink>
        </label>
        {/* <Button variant="warning">
        <CSVLink data={rows} filename={fileName} style={{color: 'white', fontWeight: 'bold'}}>Export</CSVLink>
        </Button> */}
        </>
    )
}

// export default ExportReactCSV;