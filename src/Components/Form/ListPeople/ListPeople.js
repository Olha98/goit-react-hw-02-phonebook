import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItemPeople from './ListItemPeople/ListItemPeople';

const ListPeople =({contacts})=>{

  console.log("contacts", contacts)
return(
  <ul>
     {contacts.map(contact=><ListItemPeople key={uuidv4()} {...contact }/>)}
 </ul>
)
// {/* <ul>
// {contacts.map(contact=><ListItemPeople key={uuidv4()} {...contact } addContact={addContact}/>)}
// </ul> */}
// // )
}

export default ListPeople