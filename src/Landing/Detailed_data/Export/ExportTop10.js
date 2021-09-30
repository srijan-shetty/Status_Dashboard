import React from 'react'
import { CSVLink } from 'react-csv'
// import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';

export const ExportTop10 = (props) => {
    let rows = []
  // if(!props.loadinghighConsuming){
  //   // console.log("api data")
  //   rows= props.highConsuming.map(row => {
  //     return row;
  //   })
  // }
  // if(props.getcall && props.loadinghighConsuming){
  //   // console.log("get data")
  //   rows= props.highConsumingget.map(row => {
  //     return row;
  //   }
  //   )
  // }
  if(props.display){
    rows= props.gettop10.map(row => {
      return row;
    })
  }
    //   console.log(props.details)
    const fileName ='Top-10_CPU_Consuming.csv';

    return (
        <>
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