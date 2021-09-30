import React from 'react';
// import Exportexcel from '../Export/Exportexcel';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {
  // const columns = props.details[0].keys
  // console.log(props.details)
  // let a = props.errorjob['0'];
  // console.log(a);
  // let columns  = Object.keys(a)
  // console.log(columns)

  // let rows = props.errorjob.map(row => {
  //   return row;
  // })
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
// console.log(props.errorjobget)
  // console.log(rows)

  const data = {
    // columns,
    
    columns: [
      {
        label: 'JOB NAME',
        field: 'JOBNAME',
        sort: 'asc',
        width: 150
      },
      {
        label: 'APPLICATION ID',
        field: 'APPLID',
        sort: 'asc',
        width: 150
      },
      {
        label: 'WORK STATION',
        field: 'WORK_STATION',
        sort: 'asc',
        width: 150
      },
      {
        label: 'START TIME',
        field: 'START_TIME',
        sort: 'asc',
        width: 100
      },
      {
        label: 'END TIME',
        field: 'END_TIME',
        sort: 'asc',
        width: 200
      },
      {
        label: 'DURATION (HHMMSS)',
        field: 'DURATION_HHMMSS',
        sort: 'asc',
        width: 270
      },
      {
        label: 'OPERATION TEXT',
        field: 'OPERATION_TEXT',
        sort: 'asc',
        width: 200
      },
      {
        label: 'ERROR CODE',
        field: 'ERROR_CODE',
        sort: 'asc',
        width: 100
      },      
      {
        label: '# IMMEDIATE SUCCESSOR',
        field: 'NU_OF_IMMEDIATE_SUCC',
        sort: 'asc',
        width: 100
      }  
    ],
    rows
    
  };

  return (
    <>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    {/* <Exportexcel data={data} columns={columns} rows={rows}/> */}
    </>
  );
}

export default DatatablePage;