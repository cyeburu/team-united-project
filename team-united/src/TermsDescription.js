import React from "react";
import TermsData from "./TermsData.json";
import{Link} from 'react-router-dom'

const TermsDescription = ({ match }) => {
  return (
   
    <div>
    
      
      
     <div>
     <div className="backBtn">
     <Link to={`/`}>
       <button className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">Back</button>
    </Link>
    </div>
      <div className="divTable">
        <div className="divTableBody">
          <div className="divTableRow">
            <div className="divTableCell"><b>Terms</b></div>
            <div className="divTableCell"><b>Description</b></div>
            <div className="divTableCell"><b>Action</b></div>
          </div>
          <div className="divTableRow">
            <div className="divTableCell">
              {TermsData[match.params.id].name}
            </div>
            <div className="divTableCell">
              {TermsData[match.params.id].description}
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
            <div className="divTableCell">
              {" "}
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                Edit
              </button>
              <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded ml-4 mt-4">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

      

  );
};

export default TermsDescription;
