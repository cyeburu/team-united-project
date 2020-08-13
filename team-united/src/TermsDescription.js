import React from "react";
import TermsData from "./TermsData.json";
import{Link} from 'react-router-dom'

const TermsDescription = ({ match }) => {
  return (
    <div>
      <Link to={`/`}>Home</Link>
      <div>
        <div className="css-grid-table-header">
          <div>Term</div>
          <div>Description</div>
          <div>Action</div>
        </div>

        <div className="css-grid-table-body">
          <div>{TermsData[match.params.id].name}</div>
          <div>
            {TermsData[match.params.id].description}{" "}
            <div>
              <a href={TermsData[match.params.id].link[0]}>
                {TermsData[match.params.id].link[0]}
              </a>
            </div>
            <div>
              <a href={TermsData[match.params.id].link[1]}>
                {TermsData[match.params.id].link[1]}
              </a>
            </div>
          </div>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
        </div>
      </div>
    </div>


      

  );
};

export default TermsDescription;
