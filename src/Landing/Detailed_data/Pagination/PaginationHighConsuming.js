import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  // const columns = props.details[0].keys
  // console.log(props.details)
  // let b = props.highConsuming['0'];
  // console.log(b);
  // let columns  = Object.keys(b)
  // console.log(columns)

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
  // console.log(props.highConsumingget)
  // if(props.getcall){
  //   rows= props.highConsumingget.map(row => {
  //     // console.log("get data")
  //     return row;
  //   })
  // }
  

  // console.log(rows)

  const data = {
    // columns,
    
    columns: [
      {
        label: 'JOBNAME',
        field: 'JOBNAME',
        sort: 'asc',
        width: 150
      },
      {
        label: 'START_TIME',
        field: 'START_TIME',
        sort: 'asc',
        width: 270
      },
      {
        label: 'END_TIME',
        field: 'END_TIME',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DURATION(HRS)',
        field: 'DURATION(HRS)',
        sort: 'asc',
        width: 100
      },
      {
        label: 'CONSUMED_CPU',
        field: 'CONSUMED_CPU',
        sort: 'asc',
        width: 150
      }
      // {
      //   label: 'EXCP',
      //   field: 'EXCP',
      //   sort: 'asc',
      //   width: 100
      // }
    ],
    rows
    
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;