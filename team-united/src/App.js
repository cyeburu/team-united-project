import React, { useState, useEffect } from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import AddTermForm from "./AddTermForm";
import TermsData from "./TermsData.json";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import EditTermForm from "./EditTermForm";

const App = () => {
  const [newTerm, setNewTerm] = useState(TermsData);
  const [data, setData] = useState([]);
  const convertedData = Object.values(data);
  let sortData = convertedData.sort((a, b) => a.name.localeCompare(b.name));

  /* add term function */
  const addTerm = (nTerm) => {
    nTerm.id = newTerm.length + 1;
    setNewTerm({ ...newTerm, nTerm });
  };

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
            <Route
              path="/"
              exact
              render={() => (
                <GlossaryList
                  data={data}
                  convertedData={convertedData}
                  sortData={sortData}
                />
              )}
            />

            <Route path="/TermsDescription/:id/" component={TermsDescription} />
            <Route
              path="/AddTermForm"
              render={() => <AddTermForm addTerm={addTerm} data={data} />}
            />
            <Route exact path="/EditTermForm/:id" component={EditTermForm} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
