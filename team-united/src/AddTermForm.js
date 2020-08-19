import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTermForm = (props) => {
  //console.log(props)

  const initialFormState = {
    id: null,
    name: "",
    description: "",
    link: "",
    link2: "",
    link3: "",
    link4: "",
  };
  const [newTerm, setNewTerm] = useState(initialFormState);
  console.log(newTerm);
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTerm({ ...newTerm, [name]: value });
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
      <form
        className="container"
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault();
          if (!newTerm.name) return props.addTerm;
          props.addTerm(newTerm);
        }}
      >
        <label htmlFor="Terms">Term:</label>
        <input
          type="text"
          name="name"
          value={newTerm.name}
          onChange={inputChangeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddTermForm;
