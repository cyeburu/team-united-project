import React, { useState } from "react";
import SearchTerm from "./SearchTerm";
import TermsData from "./TermsData.json";
import { Link } from "react-router-dom";

const GlossaryList = () => {
  const [search, setSearch] = useState("");
  let sortData = [...TermsData].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div className="nav">
        <div className="addTerm">
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            <Link to={`/AddTermForm/`}>Add Term</Link>
          </button>
        </div>
        <SearchTerm search={search} setSearch={setSearch} />
      </div>
      <h1 className="title">Code Your Future Glossary</h1>
      <h3>
        <ul className="container  list-unstyled list-group list-group-striped col-md-10">
          {sortData
            .filter((terms) =>
              terms.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((terms, index) => {
              return (
                <li className="col-12" key={index}>
                  <Link to={`/TermsDescription/${terms.id}`}>{terms.name}</Link>
                </li>
              );
            })}
        </ul>
      </h3>
    </div>
  );
};

export default GlossaryList;
