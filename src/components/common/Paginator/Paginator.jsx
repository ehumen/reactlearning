import React from "react"
import classes from "./Paginator.module.css"

const Paginator = ({totalItemsCount, pageSize, currentPage, onCurrentPageChange, portionSize}) => {
    let totalPagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []

    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }

    const nextItemsPage = () => {
        onCurrentPageChange((currentPage + 10));
    };
    const prevItemsPage = () => {
        if(currentPage > 5) {
            onCurrentPageChange((currentPage - 10))
        }
    };

    let curPageFirst = currentPage - 5 < 0 ? 0 : currentPage - 5
    let curPageLast = currentPage + 5
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
