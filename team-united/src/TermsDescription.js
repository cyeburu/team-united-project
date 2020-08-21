import React,{ useState,useEffect } from "react";

import axios from "axios"
import { Link } from "react-router-dom";

const TermsDescription = (data) => {
     
   const convertedData = Object.values(data);
   
   const[singleData,setSingleData] =useState([]);
       const extractedID = convertedData.map((ID) => ID._id)
        
   useEffect(()=>{
       axios.get(`https://cyf-glossary-backend.herokuapp.com/all-terms/${extractedID}`)
       .then(res =>setSingleData(res.data))
   },[extractedID])
      //  const convertedArrayOfObj= singleData.map(el=>{
      //   return Object.values(el)
      //  })
    console.log(singleData[0].name)
  return (
    <div>
      <div>
        <div className="backBtn">
          <Link to={`/`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
              Back
            </button>
          </Link>
        </div>
        <div className="divTable">
          <div className="divTableBody">
            <div className="divTableRow">
              <div className="divTableCell">
                <b>Terms</b>
              </div>
              <div className="divTableCell">
                <b>Description</b>
              </div>
              <div className="divTableCell">
                <b>Action</b>
              </div>
            </div>
            <div className="divTableRow">
          <div className="divTableCell">{singleData.name}</div>
              <div className="divTableCell">
                {singleData.description}

                <div>
                  <a href={singleData.link}>{singleData.link}</a>
                </div>

                {/* <div>
                  <a href={singleData.link[1]}>
                  {singleData.link[1]}
                  </a>
                </div> */}
              </div>
              <div className="divTableCell">
                <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-4 mt-4">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded ml-4 mt-4">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDescription;
