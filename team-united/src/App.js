import React,{useState} from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import AddTermForm from "./AddTermForm";
import TermsData from "./TermsData.json";
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
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <GlossaryList TermsData={TermsData} />}
            />
            <Route path="/TermsDescription/:id/" component={TermsDescription} />
            <Route
              path="/AddTermForm"
              render={(props) => <AddTermForm addTerm={addTerm} />}
            />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
