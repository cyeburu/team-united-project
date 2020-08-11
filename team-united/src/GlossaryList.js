import React from "react";
import TermsData from "./TermsData.json";

const GlossaryList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {TermsData.map((terms, index) => {
            return (
              <tr key={index}>
                <td>{terms.name}</td>
                <td>
                  {terms.description}
                  <div className="flex-box">
                    <div>
                      <a key={index} href={terms.link[0]}>
                        {terms.link[0]}
                      </a>
                    </div>
                    <div>
                      <a key={index} href={terms.link[1]}>
                        {terms.link[1]}
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="btn-flex">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GlossaryList;
