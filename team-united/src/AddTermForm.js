import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const AddTermForm = (props) => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  /*this is updated version*/
  const initialFormState = {
    id: null,
    name: "",
    description: "",
    link: "",
    link2: "",
  };

  const [newTerm, setNewTerm] = useState(initialFormState);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTerm({ ...newTerm, [name]: value });
    console.log(name);
  };

  const onSubmit = async () => {
    clearErrors();
    if (doesTermExist(newTerm.name)) {
      return setError("name", {
        type: "manual",
        message: "Term Already Exists in the database",
      });
    }

    if (newTerm.name) {
      props.addTerm(newTerm);
      await Axios.post(
        "https://cyf-glossary-backend.herokuapp.com/all-terms",
        newTerm
      );
      alert("Your term has been added to the Glossary list");

      window.location = "/";
    }
  };
  const doesTermExist = (nTerm) => {
    const filterData = props.data.filter((term) => {
      return term.name === nTerm;
    });

    return filterData.length;
  };
  return (
    <div>
      <div className="backBtn">
        <Link to={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            Back
          </button>
        </Link>
        <h3 className="text-center mb-4 text-muted">Add A Term</h3>
      </div>
      <div>
        <ErrorMessage errors={errors} name="singleErrorInput" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <label htmlFor="Terms">Term:</label>
        <input
          ref={register({
            required: "ADDTERM REQUIRED",
            minLength: {
              value: 3,
              message: "Addterm must be longer than 3 Characters ",
            },
          })}
          type="text"
          name="name"
          defaultValue={newTerm.name}
          onChange={inputChangeHandler}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="description">Description:</label>
        <textarea
          ref={register({
            required: "DESCRIPTION REQUIRED",
            minLength: {
              value: 10,
              message: "description must be longer than 10 Characters ",
            },
          })}
          type="text"
          name="description"
          defaultValue={newTerm.description}
          onChange={inputChangeHandler}
        />
        {errors.description && <p>{errors.description.message}</p>}
        <label htmlFor="link">Link1: </label>
        <input
          ref={register({ required: "LINK REQUIRED" })}
          type="url"
          name="link"
          defaultValue={newTerm.link}
          onChange={inputChangeHandler}
        />
        {errors.link && <p>{errors.link.message}</p>}
        <label htmlFor="link">Link2: </label>
        <input
          ref={register({ required: "LINK REQUIRED" })}
          type="url"
          name="link2"
          defaultValue={newTerm.link2}
          onChange={inputChangeHandler}
        />
        {errors.link2 && <p>{errors.link2.message}</p>}
        <button className="bg-red-500 text-white font-bold py-1 px-1 rounded ml-4 mt-4">
          Add New Term
        </button>
      </form>
    </div>
  );
};
export default withRouter(AddTermForm);
