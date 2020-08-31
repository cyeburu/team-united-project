import React, { useState } from "react";//useState

const CatergoriseFilter = ({ setCategoriseFilter }) => {
   
    function handleSelect(event){
        setCategoriseFilter(event.target.value);
    }
    
    return (
        <div>
           
      <h1></h1>
     
       <select defaultValue={'DEFAULT'} className="border-2 border-gray-300 bg-white h-10 px-4 pr-8 rounded-lg text-lg" onChange={handleSelect}>
           <option value="">Sort A-Z</option>
           <option value="A">A</option>
           <option value="B">B</option>
           <option value="C">C</option>
           <option value="D">D</option>
           <option value="E">E</option>  
           <option value="F">F</option>  
           <option value="G">G</option> 
           <option value="H">H</option> 
           <option value="I">I</option> 
           <option value="J">J</option>  
           <option value="K">K</option>     
           <option value="L">L</option>  
           <option value="M">M</option>  
           <option value="N">N</option>  
           <option value="O">O</option>  
           <option value="P">P</option>  
           <option value="Q">Q</option> 
           <option value="R">R</option>
           <option value="S">S</option>     
           <option value="T">T</option> 
           <option value="U">U</option>  
           <option value="V">V</option> 
           <option value="W">W</option>
           <option value="X">X</option>   
           <option value="Y">Y</option>   
           <option value="Z">Z</option>           

       </select>
           
       </div> 
       );
}
export default CatergoriseFilter;




