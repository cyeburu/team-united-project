import React from "react";

const Pagination = (props) => {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumber.push(i);
  }

  const nextChangeHandler = () => {
    if (props.currentPage <= pageNumber.length - 1) {
      props.setCurrentPage(props.currentPage + 1);
    } else {
      props.setCurrentPage(pageNumber.length + 1);
    }
  };
  const previousChangeHandler = () => {
    if (props.currentPage > 1) {
      props.setCurrentPage(props.currentPage - 1);
    }
  };
  return (
    <div className="container flex ">
      <div className="buttonPrevnNext">

      <button
        className="page-link justify-content-center btn"
        onClick={previousChangeHandler}
      >
          Previous
          </button>
      </div>
     
      
     
      <nav aria-label="...">
        <ul className="pagination justify-content-center ">
          {pageNumber.map((number) => {
            return (
              <li
                className={props.paginate ? null : "page-item active"}
                key={number}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    props.paginate(number);
                  }}
                >
                  {number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="buttonPrevnNext">
      <button
        className="page-link justify-content-center btn"
        onClick={nextChangeHandler}
      >
        Next
      </button>
      </div>
    </div>
  );
};

export default Pagination;
