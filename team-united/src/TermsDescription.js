import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import ReactGa from "react-ga";

const TermsDescription = (props) => {
  const [singleData, setSingleData] = useState(null);
  let location = useLocation();
  console.log(location.state.admin);
 
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
              <div>
                <h4>
                  <b>Term: </b>
                  {singleData.name}
                </h4>
              </div>
              <hr />
              <div className="jumbotron jumbotron-fluid">
               
                <div className="desc-section">
                
                </div>
               

                <div className="desc-section">
              
               <h4><b>Description:</b><br></br> {singleData.description}</h4>
              </div>
              </div>
              <div className="link-flex ">
                <h4>
                  <b>Additional Information:</b>
                </h4>
               <h5><b><a className="text-primary" href={singleData.link1}>{singleData.link1}</a></b></h5>
               <h5><b><a className="text-primary" href={singleData.link2}>{singleData.link2}</a></b></h5>
              </div>
              <div className="btn-section">
                <div>
                  {location.state.admin && (
                    <Link to={`/EditTermForm/${props.match.params.id}`}>
                      <button
                        onClick={clickHandler}
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4"
                      >
                        Edit
                      </button>
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
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsDescription;
