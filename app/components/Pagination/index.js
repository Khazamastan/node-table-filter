import React from 'react';
import Pagination from 'rc-pagination';
import PaginationWrapp from "./PaginationWrapper";


const PaginationContainer = props => {
    const {count, currentPage, onChangePage} = props;
    if(count < 2) return null;
    return(
      <PaginationWrapp>
          <Pagination 
              onChange={onChangePage}
              current={currentPage}
              total={count}
          />
      </PaginationWrapp>
    );
}

export default PaginationContainer;
