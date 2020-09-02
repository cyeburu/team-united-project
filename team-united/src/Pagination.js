import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
   const pageNumber =[];
   for(let i =1; i<Math.ceil(totalPosts/postsPerPage);i++){
     pageNumber.push(i);
   }
    return <nav>
        <ul>{pageNumber.map(number=>{
            return<li key = {number}>
                <a onClick={()=>paginate(number)} href ="!#">{number}</a>
            </li>
        })}</ul>
    </nav>;
};


export default Pagination;