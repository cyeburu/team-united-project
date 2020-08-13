import React from "react";
import TermsData from "./TermsData.json";

import {Link} from "react-router-dom";

const GlossaryList = () => {
  return (
    <div>
      <h1 className="title">Cyf Glossary</h1>
      <ul className="container  list-unstyled list-group list-group-striped  col-4">
        {TermsData.map((terms, index) => {
          return (
            <li className="col-12" key={index}>
              <Link to={`/TermsDescription/${index}`}>{terms.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GlossaryList;
