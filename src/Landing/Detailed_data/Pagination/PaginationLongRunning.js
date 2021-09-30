import React from 'react';
import { MDBDataTable } from 'mdbreact';

const PaginationLongRunning = (props) => {
  // const columns = props.details[0].keys
  // console.log(props.details)
  // let a = props.longrunning['0'];
  // console.log(a);
  // let columns  = Object.keys(a)
  // console.log(columns)

  let rows = []
  // if(!props.loadingLong){
  //   rows= props.longrunning.map(row => {
  //     return row;
  //   })
  // }
  // else if(props.getcall && props.loadingLong){
  //   rows= props.longrunningget.map(row => {
  //     return row;
  //   }
  //   )
  // }
  if(props.display && props.getlong){
    rows= props.getlong.map(row => {
      return row;
    })
  }
  // console.log(props.longrunningget)

  // console.log(rows)

  const data = {
    // columns,
    
    columns: [
      {
        label: 'JOB NAME',
        field: 'CPOPJBN',
        sort: 'asc',
        width: 100
      },
      {
        label: 'APPLICATION NAME',
        field: 'CPOPADI',
        sort: 'asc',
        width: 200
      },
      {
        label: 'AVERAGE DURATION',
        field: 'AVGDUR',
        sort: 'asc',
        width: 150
      },
      {
        label: 'CURRENT DURATION',
        field: 'CPOPADUM',
        sort: 'asc',
        width: 270
      }           
    ],
    rows
    // // rows: props.data
    // rows: [
    //   {
    //     name: 'hey there!!',
    //     position: 'System Architect',
    //     office: 'Edinburgh',
    //     age: '61',
    //     date: '2011/04/25',
    //     salary: '$320'
    //   },
    //   {
    //     name: 'Garrett Winters',
    //     position: 'Accountant',
    //     office: 'Tokyo',
    //     age: '63',
    //     date: '2011/07/25',
    //     salary: '$170'
    //   },
    //   {
    //     name: 'Ashton Cox',
    //     position: 'Junior Technical Author',
    //     office: 'San Francisco',
    //     age: '66',
    //     date: '2009/01/12',
    //     salary: '$86'
    //   },
    //   {
    //     name: 'Donna Snider',
    //     position: 'Customer Support',
    //     office: 'New York',
    //     age: '27',
    //     date: '2011/01/25',
    //     salary: '$112'
    //   }
    // ]
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

export default PaginationLongRunning;