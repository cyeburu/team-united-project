import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TermsDescription = (props) => {
  console.log(props);
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`
      )
      .then((res) => setSingleData(res.data));
  }, [props.match.params.id]);

  /*delete term functionality*/
  const deleteTerm = async (id) => {
    await axios.delete(
      `https://cyf-glossary-backend.herokuapp.com/all-terms/${id}`
    );
    alert(" The following record has been deleted");
    window.location = "/";
  };
  return (
    <div>
      {singleData && (
        <div>
          <div className="backBtn">
            <Link to={`/`}>
              <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                Back
              </button>
            </Link>
          </div>
          <div className="container">
            <div className="child">
              <div>
                <h5><b>Term: </b>{singleData.name}</h5>
              </div>
              <div>
                <h5><b>Description:</b></h5>
                <p>{singleData.description}</p>
              </div>
              <div className ='link-flex' >
                <h5><b>Additional Information</b></h5>
                <a href={singleData.link1}>{singleData.link1}</a>
                <a href={singleData.link2}>{singleData.link2}</a>
              </div>
              <div>
                <Link to={`/EditTermForm/${props.match.params.id}`}>
                  <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={(e) => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this term?"
                      )
                    )
                      deleteTerm(props.match.params.id);
                  }}
                  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded ml-4 mt-4"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsDescription;
