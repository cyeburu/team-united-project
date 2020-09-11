import React, { useState, useEffect } from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import AddTermForm from "./AddTermForm";
import TermsData from "./TermsData.json";
import Pagination from "./Pagination";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import EditTermForm from "./EditTermForm";
import ReactGa from "react-ga";

//tidy up done
const App = () => {
  const [newTerm, setNewTerm] = useState(TermsData);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  console.log();
  /* add term function */
  const addTerm = (nTerm) => {
    nTerm.id = newTerm.length + 1;
    setNewTerm({ ...newTerm, nTerm });
  };

  useEffect(() => {
    axios
      .get(`https://cyf-glossary-backend.herokuapp.com/all-terms`)
      .then((Result) => setData(Result.data)
      .catch((error) => console.log(error)
      ))
  }, []);

  useEffect(() => {
    ReactGa.initialize("UA-177373621-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  data.sort((a, b) => a.name.localeCompare(b.name));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const convertedData = Object.values(currentPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <div>
                  <GlossaryList
                    data={currentPost}
                    convertedData={convertedData}
                    allData={data}
                  />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
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
      <footer></footer>
    </div>
  );
};

export default App;
