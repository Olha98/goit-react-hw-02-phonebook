import React from 'react';


const FillterForm=({filter, onChange})=>{
  
return(
  <>
    <h2>Contacts</h2>
      <label>
      Find contacts by name:
          <input type="text" name="filter"  value={filter} onChange={onChange}/>
      </label>
</>
)
}

export default FillterForm