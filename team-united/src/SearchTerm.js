import React, { useState } from "react";



const SearchTerm = ({ search, setSearch }) => {
    
    function handleChange(event)
    {
        setSearch(event.target.value);
    }


return (
    <div>
     
          <input 
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none" 
          type="text"
          onChange={handleChange} 
          value={search}
          placeholder="search for a term"
          />
       
    </div>
    );
}
export default SearchTerm;