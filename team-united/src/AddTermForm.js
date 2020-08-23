import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTermForm = (props) => {
  console.log(props);

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    link: "",
    link2: "",
  };

  const [newTerm, setNewTerm] = useState(initialFormState);
  //console.log(newTerm);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTerm({ ...newTerm, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTerm.name) {
      props.addTerm(newTerm);
    }
  };
  return (
    <div>
      <div className="backBtn">
        <Link to={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            Back
          </button>
        </Link>
      </div>
      <form className="container">
        <label htmlFor="Terms">Term:</label>
        <input
          type="text"
          name="name"
          defaultValue={newTerm.name}
          onChange={inputChangeHandler}
        />
        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description" 
        defaultValue={newTerm.description} 
        onChange={inputChangeHandler}
        />
        <label htmlFor="link">Link1: </label>
        <input 
        type="url" 
        name="link"
        defaultValue={newTerm.link}
        onChange={inputChangeHandler}
        />
        <label htmlFor="link">Link2: </label>
        <input 
        type="url" 
        name="link2" 
        defaultValue={newTerm.link2}
        onChange={initialFormState}
        />
        <button className="bg-red-500 text-white font-bold py-1 px-1 rounded ml-4 mt-4" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default AddTermForm;
