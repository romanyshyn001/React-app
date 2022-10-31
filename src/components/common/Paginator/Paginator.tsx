import React, { useState } from "react";
import styles from "./paginator.module.css";
import cn from "classnames"

type PropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalItemsCount: number
  pageSize: number
  portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalItemsCount,
  pageSize,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCounter = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <React.Fragment>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      <div>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span
                className={cn({ [styles.selectedPage]: currentPage === p }, styles.selectedPage)}
                onClick={(e) => {
                  onPageChanged(p);
                }}
                key={p}
              >
                {p}
              </span>
            );
          })}
        {portionCounter > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </React.Fragment>
  );
};
export default Paginator;
