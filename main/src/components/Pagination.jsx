import React from 'react';
import "../styles/PostItem.css"
import { ButtonsPage } from './utils/Pages';


const Pagination = ({totalPage, page, changePage}) => {

    const pagesArray = ButtonsPage(totalPage);
    return(
        <div className='pagination'>
        {pagesArray.map(p =>
          <span
            onClick={() =>changePage(p)}
            key={p}
            className={page === p ? 'page page_current' : 'page'}
          >{p}
          </span>
        )}
      </div>
    )
}

export default Pagination;