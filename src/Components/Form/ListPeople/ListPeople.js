import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItemPeople from './ListItemPeople/ListItemPeople';

const ListPeople =({contacts, deliteContact})=>{

  console.log("contacts", contacts)
return(
  <ul>
     {contacts.map(contact=><ListItemPeople key={uuidv4()} {...contact } deliteContact={deliteContact}/>)}
 </ul>
)

}

export default ListPeople