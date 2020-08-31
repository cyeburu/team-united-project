import React, { useState } from "react";
import SearchTerm from "./SearchTerm";
import { Link } from "react-router-dom";

import CatergoriseFilter from "./CategoriseFilter";

const GlossaryList = (props) => {
  const [search, setSearch] = useState("");
  const [categoriseFilter, setCategoriseFilter] = useState("");

  return (
    <div>
      {props.convertedData !== null ? (
        <div>
          <div className="nav">
            <div className="addTerm">
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                <Link to={`/AddTermForm/`}>Add Term</Link>
              </button>
            </div>
            <SearchTerm search={search} setSearch={setSearch} />
            <CatergoriseFilter setCategoriseFilter={setCategoriseFilter} />
          </div>
          <h1 className="title">Code Your Future Glossary</h1>
          <h3>
            <ul className="container  list-unstyled list-group list-group-striped col-md-10">
              {props.sortData
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
                        }}
                      >
                        {terms.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </h3>
        </div>
      ) : null}
    </div>
  );
};

export default GlossaryList;
