import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";


const EditTermForm = (props) => {
  let history = useHistory();


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


  const onSubmit = async e => {
    e.preventDefault();
    await axios.put((`https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`), newTerm);
    history.push("/");
  };



  useEffect(() => {
    const loadTerm = async () => {
      const result = await axios.get((`https://cyf-glossary-backend.herokuapp.com/all-terms/${props.match.params.id}`));
      setNewTerm(result.data);
    };
    loadTerm();
  }, [props.match.params.id]);

  return (
    <div>
      <div className="backBtn">
        <Link to={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
            Back
          </button>
        </Link>
        <h3 className="text-center mb-4 text-muted">Edit A Term</h3>
      </div>
      <form onSubmit={e => onSubmit(e)} className="container">
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
          onChange={inputChangeHandler}
        />
        <button className="btn btn-warning btn-block">Update Term</button>
      </form>
    </div >
  );
};
export default EditTermForm;
