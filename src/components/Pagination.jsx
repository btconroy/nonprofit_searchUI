import { useState } from 'react'
import './Pagination.css'

export default function Pagination(props) {
    
    const length = typeof props.length != 'number' ? Number(props.length) : props.length ;
    const current = typeof props.current != 'number' ? Number(props.current) : props.current;

    const [pageLength, setPagelength] = useState(length);
    const [currentPage, setCurrentPage] = useState(current)

    function addNumbers(len, cur) {
        const pagesArr = []
        for(let i = 0; i < len; i++) {
        let num = i + 1;
            if(i === cur) {
                pagesArr.push(<span className='pg-num-current' data-pg={num} key={num}>{num}</span>); 
            } else {
                pagesArr.push(<span className='pg-num' data-pg={num} key={num}>{num}</span>);
            }
        }
     
        return pagesArr;
    }

    return (
        <div id="pagination__container"> 
            <div id="pagination__inner-container">
                <span className="arrow" role="button">&#9660;</span>
                <div id="pagination__number-container">
                    <div id="pagination__inner-number-container">
                        { pageLength > 0 ? addNumbers(pageLength, currentPage) : <span className='pg-num-current'>0</span> }
                    </div>
                </div>
                <span className="arrow" role='button'>&#9650;</span>
            </div>
        </div>
    )
}