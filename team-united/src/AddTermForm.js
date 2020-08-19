import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const AddTermForm = () => {


  const [newTerm, setNewTerm] = useState({
    term: "",
    description: "",
    link1: "",  
    link2: ""
    
  });


  const { term, description, link1, link2 } = newTerm;

  const onInputChange = e => {
    setNewTerm({ ...newTerm, [e.target.name]: e.target.value });
    console.log(setNewTerm);
  };

  const onSubmit = async e => {
    e.preventDefault();
    let postTerm = await axios.post("http://localhost:3001/TermsData", {newTerm});
    
    console.log(postTerm);
 
  };
  return (
      
    <div className="row">

  <div className="backBtn">
        <Link to={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            Back
          </button>
        </Link>
      </div>

      <div className="col-md-4 portfolio-item">
        <h2 className="text-center mb-4">Add A Term</h2>
        <form onSubmit={e => onSubmit(e)}>
     <div className="form-group">
          <div className="form-group form-buffer">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter a Term"
              name="term"
              value={term}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group form-buffer">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group form-buffer">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="URL 1"
              name="link1"
              value={link1}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group form-buffer">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="URL 2"
              name="link2"
              value={link2}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="bg-red-500 text-white font-bold py-1 px-2 rounded ml-4 mt-4">Add term</button>
          </div>

        </form>
        </div>
      
    </div>
  );
};

export default AddTermForm;