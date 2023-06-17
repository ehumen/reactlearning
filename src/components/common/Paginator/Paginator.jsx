import React from "react"
import classes from "./Paginator.module.css"

const Paginator = ({totalItemsCount, pageSize, currentPage, onCurrentPageChange, portionSize}) => {
    let halfPortion = portionSize/2;
    let totalPagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];

    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }

    const nextItemsPage = () => {
        onCurrentPageChange((currentPage + portionSize));
    };
    const prevItemsPage = () => {
        if(currentPage > portionSize) {
            onCurrentPageChange((currentPage - portionSize));
        }else if(currentPage <= portionSize){
            onCurrentPageChange(1);
        }


    };
    //                       5               5
    let curPageFirst = (currentPage - halfPortion) < 0 ? 0 : currentPage - halfPortion
    let curPageLast = currentPage - halfPortion < 0 ? portionSize : currentPage + halfPortion
    let slicedPages = pages.slice(curPageFirst, curPageLast)
    return (
        <div>
            <div>
                <button onClick={() => {
                    prevItemsPage()
                }}>⇦
                </button>
                {slicedPages.map((el) => (
                    <span
                        className={currentPage === el ? classes.currentPage : ""}
                        onClick={() => {
                            onCurrentPageChange(el)
                        }}>{el}</span>
                ))}
                <button onClick={() => {
                    nextItemsPage()
                }}>⇨
                </button>
            </div>

        </div>
    )
}

export default Paginator
