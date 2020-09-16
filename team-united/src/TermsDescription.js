import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactGa from "react-ga";

const TermsDescription = (props) => {
  console.log(props);
  const [singleData, setSingleData] = useState(null);

  const clickHandler = () => {
    ReactGa.event({
      category: "Button",
      action: "Edit button was clicked"
    });
  };

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
      `https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`
    );
    alert(" The following record has been deleted");
    window.location = "/";
  };
  return (
    <div className="desPage">
      {singleData && (
        <div className="termsContent">
          <div className="backBtn">
            <Link to={`/`}>
              <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                Back
              </button>
            </Link>
          </div>
          <div className="container">
            <div className="child">
              
                <h4>
                 <u>Term:</u> {singleData.name}
                </h4>
            
              <hr />
              <div className="jumbotron jumbotron-fluid">
                <h5>
                  <div className="desc-section"><u>
                    Description:</u>
                  </div>
                </h5>
                <div className="desc-section">
                  
                
                  <div>
                  <p>{singleData.description}</p>
                  </div>
                 
                </div>
              </div>
              <div className="link-flex ">
                <h5>
                 <u>Additional Information:</u>
                </h5>
                <b><a className="text-success" href={singleData.link1}>{singleData.link1}</a></b>
              <b><a className="text-success" href={singleData.link2}>{singleData.link2}</a></b>
              </div>
              <div className="btn-section">
                <Link to={`/EditTermForm/${props.match.params.id}`}>
                  <button
                    onClick={clickHandler}
                    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4"
                  >
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
