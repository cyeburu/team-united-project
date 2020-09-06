import React from "react";

const SearchTerm = ({ search, setSearch }) => {
   
    function handleOnSearch({ currentTarget }) {
      const { value } = currentTarget;
      setSearch(value);//try event.target.value
    }
 

  return (
    
    <div>
      
     
      <input
        className="border-2 border-gray-100 bg-white h-10 px-5 pr-10 rounded-lg text-lg glyphicon glyphicon-search"
        type="search"
        onChange={handleOnSearch}
        value={search}
        placeholder="search for a term..."
    
        
      />
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  );
};
export default SearchTerm;
