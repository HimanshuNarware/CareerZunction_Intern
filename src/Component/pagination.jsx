import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css'
import DataDB from '../DB/DataBase.json'

function PaginatedItems({ setCurrentData, setPageSummary, mode, duration }) {
    const itemsPerPage = 12;
    
    const [filterData, setFilterData] = useState(DataDB)
    const pageCount = Math.ceil(filterData.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filterData.length;
        const endOffset = newOffset + itemsPerPage > filterData.length ? filterData.length : newOffset + itemsPerPage;
        console.log(duration)

        setCurrentData(filterData.slice(newOffset, endOffset))
        setPageSummary(`Showing ${newOffset+1} to ${endOffset} results out of ${filterData.length}`)
        console.log(filterData)
        window.scroll(0, 0);
    };

    useEffect(() => {
        const pageBtns = document.querySelectorAll(".page-btn");
        console.log(pageBtns[1])
        let filteredInternship
        if(mode==="All" || duration === "All"){
            filteredInternship = DataDB
        }
        // else {
        //     if(mode!== "All") filteredInternship = DataDB.filter((data)=> data.mode.toLowerCase().includes(mode.toLowerCase()))
        //     if(duration!== "All") filteredInternship = DataDB.filter((data)=> data.duration.toLowerCase().includes(duration.toLowerCase()))
        // }
        else if (mode!== "All"){
            filteredInternship = DataDB.filter((data)=> data.mode.toLowerCase().includes(mode.toLowerCase()))
            if(duration!== "All"){
                filteredInternship = filteredInternship.filter((data)=> data.duration.toLowerCase().includes(duration.toLowerCase()))
            }
        }else if (duration!== "All"){
            filteredInternship = DataDB.filter((data)=> data.duration.toLowerCase().includes(duration.toLowerCase()))
            if(mode!== "All"){
                filteredInternship = filteredInternship.filter((data)=> data.mode.toLowerCase().includes(mode.toLowerCase()))
            }
        }
        setFilterData(filteredInternship)
        setCurrentData(filteredInternship.slice(0,pageCount))
        handlePageClick({selected: 0})
        pageBtns[1]?.classList.add("active");
        console.log(duration)

    },[mode,pageCount,duration])

    console.log(filterData)



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