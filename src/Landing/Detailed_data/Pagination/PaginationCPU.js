import React from 'react';

import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {

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
  var number='0';
  if(props.display){
    rows = props.getcpu.map(row => {
      number= (+number+1);
      return row;
    })
  }
// console.log(number)
  // console.log(props.detailsget)

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
        label: 'MINIMUM DURATION',
        field: 'MINDURATION',
        sort: 'asc',
        width: 100
      },
      {
        label: 'MAXIMUM DURATION',
        field: 'MAXDURATION',
        sort: 'asc',
        width: 200
      },
      {
        label: 'AVGERAGE DURATION',
        field: 'AVGDURATION',
        sort: 'asc',
        width: 270
      },
      {
        label: 'MINIMUM CPU',
        field: 'MINCPU',
        sort: 'asc',
        width: 150
      },
      {
        label: 'MAXIMUM CPU',
        field: 'MAXCPU',
        sort: 'asc',
        width: 100
      },
      {
        label: 'AVGERAGE CPU',
        field: 'AVGCPU',
        sort: 'asc',
        width: 150
      },
      {
        label: 'MINIMUM EXCP',
        field: 'MINEXCP',
        sort: 'asc',
        width: 150
      },
      {
        label: 'MAXIMUM EXCP',
        field: 'MAXEXCP',
        sort: 'asc',
        width: 100
      },
      {
        label: 'AVGERAGE EXCP',
        field: 'AVGEXCP',
        sort: 'asc',
        width: 200
      },  
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
    
    </>
  );
}

export default DatatablePage;