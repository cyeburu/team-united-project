import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import myText from "./forbidden.js";

const EditTermForm = (props) => {
  const { register, handleSubmit, errors, setError, clearErrors } = useForm();
  const initialFormState = {
    id: null,
    name: "",
    description: "",
    link1: "",
    link2: ""
  };

  const [newTerm, setNewTerm] = useState(initialFormState);

  let array = myText.split(",");

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setNewTerm({ ...newTerm, [name]: value });
  };

  useEffect(() => {
    loadTerm();
  }, []);

  const onSubmit = async () => {
    clearErrors();

    if (offensiveTermPrevention(newTerm.name)) {
      return setError("name", {
        type: "manual",
        message: "Where are your manners type another term"
      });
    }

    if (offensiveTermPrevention(newTerm.description)) {
      return setError("description", {
        type: "manual",
        message: "Where are your manners type another term"
      });
    }

    await axios.put(
      `https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`,
      newTerm
    );
    window.location = "/";
  };

  const loadTerm = () => {
    const result = axios
      .get(
        `https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`
      )
      .then((result) => setNewTerm(result.data));
  };

  const offensiveTermPrevention = (nTerm) => {
    const filterTerms = array.filter((badTerm) => {
      return badTerm.toLowerCase().includes(nTerm.toLowerCase());
    });

    return filterTerms.length;
  };
  return (
    <div>
      <div className="backBtn">
        <Link to={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            Back
          </button>
        </Link>
        <div className="editTerm">
          <h3 className="text-center mb-4 text-muted">Edit A Term</h3>
        </div>
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
              message: "Addterm must be longer than 3 Characters "
            }
          })}
          type="text"
          name="name"
          defaultValue={newTerm.name}
          onChange={inputChangeHandler}
          readOnly
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label htmlFor="description">Description:</label>
        <textarea
          ref={register({
            required: "DESCRIPTION REQUIRED",
            minLength: {
              value: 10,
              message: "description must be longer than 10 Characters "
            }
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
          placeholder="Url for further information"
          type="url"
          name="link1"
          defaultValue={newTerm.link1}
          onChange={inputChangeHandler}
        />
        {errors.link && <p>{errors.link.message}</p>}
        <label htmlFor="link">Link2: </label>
        <input
          type="url"
          name="link2"
          defaultValue={newTerm.link2}
          onChange={inputChangeHandler}
        />
        <button className="btn btn-warning btn-block">Update Term</button>
      </form>
    </div>
  );
};
export default EditTermForm;
