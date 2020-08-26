import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useForm } from "react-hook-form";




const AddTermForm = (props) => {

  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  //console.log(props);
  /*this is updated version*/
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
  const submitHandle = (event) => {
    event.preventDefault();
    if (newTerm.name) {
      props.addTerm(newTerm);
    }
  Axios.post("https://cyf-glossary-backend.herokuapp.com/all-terms", newTerm);
      
  
    
      
      
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
      
      <form onSubmit={handleSubmit(onSubmit)} className="container">
        <label htmlFor="Terms">Term:</label>
        <input 
          type="text"
          name="name" ref={register({ required: true })} 
          defaultValue={newTerm.name}
          onChange={inputChangeHandler}
          />
         

        <label htmlFor="description">Description:</label>
        <textarea 
        type="text" 
        name="description" ref={register({ required: true })} 
        defaultValue={newTerm.description} 
        onChange={inputChangeHandler}
        />
        
        <label htmlFor="link">Link1: </label>
        <input 
        type="url" 
        name="link" ref={register({ required: true })} 
        defaultValue={newTerm.link}
        onChange={inputChangeHandler}
        />
        
        <label htmlFor="link">Link2: </label>
        <input 
        type="url" 
        name="link2" ref={register({ required: true })}  
        defaultValue={newTerm.link2}
        onChange={inputChangeHandler}
        /> 
        
       
       <input type="submit" className="bg-red-500 text-white font-bold py-1 px-1 rounded ml-4 mt-4" onClick={submitHandle}/>
      </form>
    </div>
  );
};
export default AddTermForm;

