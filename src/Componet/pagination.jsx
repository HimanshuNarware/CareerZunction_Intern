import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'

function PaginatedItems({ pageCount, onPageChange }) {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        nextLabel="| Next"
        onPageChange={(event) => onPageChange(event.selected)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="Prev |"
        renderOnZeroPageCount={null}
        activeClassName="page-btn"
        activeLinkClassName='active'
        containerClassName='pagination-container'
        pageClassName='page-btn'
        pageLinkClassName='page-btn-link'
        previousClassName='page-btn'
        previousLinkClassName='prev page-btn-link'
        nextClassName='page-btn'
        nextLinkClassName='next page-btn-link'
        disabledClassName='page-btn'
        disabledLinkClassName='disabled page-btn-link'
        breakClassName='page-btn'
        breakLinkClassName='break page-btn-link'
      />
    </div>
  );
}

export default PaginatedItems;
