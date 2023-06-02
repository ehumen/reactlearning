import React from "react"
import classes from "./Paginator.module.css"

const Paginator = ({totalFriendsCount, pageSize, currentPage, onCurrentPageChange}) => {
    let totalPagesCount = Math.ceil(totalFriendsCount / pageSize)

    let pages = []

    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i)
    }

    let curPage = currentPage
    let curPageFirst = curPage - 3 < 0 ? 0 : curPage - 3
    let curPageLast = curPage + 3
    let slicedPages = pages.slice(curPageFirst, curPageLast)
    return (
        <div>
            <div>
                {slicedPages.map((el) => (
                    <span
                        className={currentPage === el ? classes.currentPage : ""}
                        onClick={() => {
                            onCurrentPageChange(el)
                        }}
                    >
            {el}
          </span>
                ))}
            </div>

        </div>
    )
}

export default Paginator
