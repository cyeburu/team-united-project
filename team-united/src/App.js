import React, { useState, useEffect } from "react";
import GlossaryList from "./GlossaryList";
import TermsDescription from "./TermsDescription";
import AddTermForm from "./AddTermForm";
import TermsData from "./TermsData.json";
import Pagination from'./Pagination';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "./App.css";
import EditTermForm from "./EditTermForm";

const App = () => {
  const [newTerm, setNewTerm] = useState(TermsData);
  const [data, setData] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]= useState(20);
  


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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost,indexOfLastPost);
  const convertedData = Object.values(currentPost);
  let sortData = convertedData.sort((a, b) => a.name.localeCompare(b.name));
  //gloassaryList and Pagination component
  const paginate =(pageNumber)=>setCurrentPage(pageNumber);
  return (
    <div>
      <header>
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              render={() => (
                <div>
                <GlossaryList
                  data={currentPost}
                  convertedData={convertedData}
                  sortData={sortData}
                 />
                  <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={data.length}
                  paginate={paginate}
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
    
    

    </div>
  );
};

export default App;
