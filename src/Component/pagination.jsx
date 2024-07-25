import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

function PaginatedItems({ setCurrentData, setPageSummary, filteredData }) {
  const itemsPerPage = 12;
  
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    const endOffset = newOffset + itemsPerPage > filteredData.length ? filteredData.length : newOffset + itemsPerPage;

    setCurrentData(filteredData.slice(newOffset, endOffset));
    setPageSummary(`Showing ${newOffset + 1} to ${endOffset} results out of ${filteredData.length}`);

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    handlePageClick({ selected: 0 });
  }, [filteredData]);

  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        breakLabel="..."
        nextLabel="| Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="Prev |"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="page-btn"
        pageLinkClassName="page-btn-link"
        previousClassName="page-btn"
        previousLinkClassName="prev page-btn-link"
        nextClassName="page-btn"
        nextLinkClassName="next page-btn-link"
        activeClassName="active"
        breakClassName="page-btn"
        breakLinkClassName="break page-btn-link"
      />
    </div>
  );
}
export default PaginatedItems;
