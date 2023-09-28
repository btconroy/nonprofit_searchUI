import { useState, useRef } from 'react'
import './Pagination.css'

export default function Pagination(props) {
    
    const length = typeof props.length != 'number' ? Number(props.length) : props.length ;
    const current = typeof props.current != 'number' ? Number(props.current) : props.current;

    const [pageLength, setPagelength] = useState(length);
    const [currentPage, setCurrentPage] = useState(current);
    const [pagePosition, setPagePosition] = useState({ transform: 'translateX(0px)' });
    const pageListScroller = useRef(null);

    function scrollOver(currentNum) {
      let pageItemWidth = pageListScroller.current.children[0].offsetWidth;
        setPagePosition({ transform: `translateX(-${pageItemWidth * currentNum}px)` });
    }

    function addNumbers(len, cur) {
        const pagesArr = [];
        
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

    function pageSelectHandler(bool) {
        return () => {
            if(bool) {
                setCurrentPage(currentPage + 1 > pageLength - 1 ? pageLength - 1 : currentPage + 1)
            } else {
                setCurrentPage(currentPage - 1 < 0 ? 0 : currentPage - 1);
            }
            scrollOver(currentPage)
        } 
    }

    return (
        <div id="pagination__container"> 
            <div id="pagination__inner-container">
                <span onClick={ pageSelectHandler(false) } className="arrow" role="button">&#9660;</span>
                <div id="pagination__number-container">
                    <div ref={pageListScroller} id="pagination__inner-number-container" style={ pagePosition }>
                        { pageLength > 0 ? addNumbers(pageLength, currentPage) : <span className='pg-num-current'>1</span> }
                    </div>
                </div>
                <span onClick={ pageSelectHandler(true) } className="arrow" role='button'>&#9650;</span>
            </div>
        </div>
    )
}