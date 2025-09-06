import React, { useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'
import DataDB from '../DB/DataBase.json'

function PaginatedItems({ setCurrentData, setPageSummary }) {
    const itemsPerPage = 12;
    
    const pageCount = Math.ceil(DataDB.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % DataDB.length;
        const endOffset = newOffset + itemsPerPage > DataDB.length ? DataDB.length : newOffset + itemsPerPage;

        setCurrentData(DataDB.slice(newOffset, endOffset))
        setPageSummary(`Showing ${newOffset+1} to ${endOffset} results out of ${DataDB.length}`)

        window.scroll(0, 0);
    };

    useEffect(() => {
        const pageBtns = document.querySelectorAll(".page-btn");
        console.log(pageBtns[1])
        handlePageClick({selected: 0})
        pageBtns[1].classList.add("active");
    }, [])

    return (
        <>
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
        </>
    );
}


export default PaginatedItems;