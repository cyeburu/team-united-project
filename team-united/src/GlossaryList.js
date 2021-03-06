import React, { useState } from "react";
import SearchTerm from "./SearchTerm";
import { Link } from "react-router-dom";
import CatergoriseFilter from "./CategoriseFilter";
import Fuse from "fuse.js";
import ReactGa from "react-ga";


const GlossaryList = (props) => {
  const [search, setSearch] = useState("");
  const [categoriseFilter, setCategoriseFilter] = useState("");
  
  const [admin,setAdmin] =useState(false);
  const fuse = new Fuse(props.allData, {
    keys: ["name"],
    includeScore: true,
  });
  const searchResult = search ? props.allData : props.convertedData;
  const categorizeFilterResult = categoriseFilter
    ? props.allData
    : props.convertedData;

  const results = fuse.search(search);
  const nameResults = search
    ? results.map((item) => item.item)
    : props.convertedData;
  

  const clickHandler = () => {
    ReactGa.event({
      category: "Button",
      action: "Add button was clicked",
    });
  };
    const adminClickHandler=()=>{
       if(admin){
         setAdmin(false);
       }else{
         setAdmin(true);
       }
    }

  return (
    <>
      {props.convertedData !== null ? (
        <>
          <div className="nav">
            <div className="termAdminFlex">
              <div className="addTerm">
                <button
                  onClick={clickHandler}
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4"
                >
                  <Link
                    to={`/AddTermForm/`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Add Term
                  </Link>
                </button>
              </div>
              <div className="adminBtn">
                <button
                  onClick={() => adminClickHandler()}
                  className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4"
                >
                  {" "}
                  {admin ? "Logout " : "Login "}
                  Admin
                </button>
              </div>
            </div>
            <div className="searchSelectFlex">
              <SearchTerm
                search={search}
                setSearch={setSearch}
                setCategoriseFilter={setCategoriseFilter}
              />
              <CatergoriseFilter
                setCategoriseFilter={setCategoriseFilter}
                setSearch={setSearch}
              />
            </div>
          </div>
          <h1 className="title">Code Your Future Glossary</h1>
          <h3>
            <ul className="container  list-unstyled list-group list-group-striped col-md-10">
              {search
                ? searchResult &&
                  searchResult &&
                  nameResults
                    .filter((categoryFilter) =>
                      categoryFilter.name[0]
                        .toLowerCase()
                        .includes(categoriseFilter.toLowerCase())
                    )
                    .filter((terms) =>
                      terms.name
                        .toLowerCase()
                        .indexOf(search.toLowerCase().includes(search))
                    )

                    .map((terms, index) => {
                      return (
                        <li className="col-12" key={index}>
                          <Link
                            to={{
                              pathname: `/TermsDescription/${terms._id}`,
                              state: { admin },
                            }}
                          >
                            {terms.name}
                          </Link>
                        </li>
                      );
                    })
                : categorizeFilterResult &&
                  categorizeFilterResult

                    .filter((categoryFilter) =>
                      categoryFilter.name[0]
                        .toLowerCase()
                        .includes(categoriseFilter.toLowerCase())
                    )
                    .filter((terms) =>
                      terms.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((terms, index) => {
                      return (
                        <li className="col-12" key={index}>
                          <Link
                            to={{
                              pathname: `/TermsDescription/${terms._id}`,
                              state: { admin },
                            }}
                          >
                            {terms.name}
                          </Link>
                        </li>
                      );
                    })}
            </ul>
          </h3>
        </>
      ) : null}
    </>
  );
};

export default GlossaryList;
