import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

const TermsDescription = (props) => {
   const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`
      )
      .then((res) => setSingleData(res.data));
  }, [props.match.params.id]);
   
    
    return (
    <div>
      {singleData && 
        <div>
          <div className="backBtn">
            <Link to={`/`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                Back
              </button>
            </Link>
          </div>
          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">
                  <b>Terms</b>
                </div>
                <div className="divTableCell">
                  <b>Description</b>
                </div>
                <div className="divTableCell">
                  <b>Action</b>
                </div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">
                  {singleData.name}
                </div>
                <div className="divTableCell">
                  {singleData.description}

                  <div>
                    <a href={singleData.link}>
                      {singleData.link}
                    </a>
                  </div>
                </div>
                <div className="divTableCell">
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
}
    </div>
  );
};

export default TermsDescription;
