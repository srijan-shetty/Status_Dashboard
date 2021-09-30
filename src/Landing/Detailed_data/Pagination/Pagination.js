import React from 'react';
import { Pagination} from 'react-bootstrap';
import { MDBDataTable } from 'mdbreact';

const Paginations = ({ postsPerPage, totalPosts, paginate, details }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // 1st template
    // <nav>
    //   <ul className='pagination'>
    //     {pageNumbers.map(number => (
    //       <li key={number} className='page-item'>
    //         <a onClick={() => paginate(number)} className='page-link'>
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    // 2nd template
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pageNumbers.map(number => (
        <Pagination.Item onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default Paginations;
