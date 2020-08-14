import React from 'react';

const ListItemPeople=({name, number, id, deliteContact})=>{
return(
  <>
  <li>{name}: {number}</li>
  <button type="button" onClick={deliteContact} name={id}>Delite</button>
  </>
)
}

export default ListItemPeople