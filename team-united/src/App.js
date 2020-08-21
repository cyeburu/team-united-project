import React, { useState,useEffect } from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import AddTermForm from "./AddTermForm";
import TermsData from "./TermsData.json";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const [newTerm, setNewTerm] = useState(TermsData);
  
  /* add term function */
  const addTerm = (nTerm) => {
    nTerm.id = newTerm.length + 1;
    setNewTerm({ ...newTerm, nTerm });
  };
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get(`https://cyf-glossary-backend.herokuapp.com/all-terms`)
      .then((Result) => setData(Result.data));
  }, []);
  
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={()=><GlossaryList  {...data}/>} />

            <Route path="/TermsDescription/:id/" render={()=><TermsDescription {...data}/>} />
            <Route
              path="/AddTermForm"
              render={() => <AddTermForm addTerm={addTerm} />}
            />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
