import React from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={GlossaryList} />
            <Route path="/TermsDescription/:id/" component={TermsDescription} />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
};

export default App;
