import React from 'react';

const ContactForm=({name, number, handleChange})=>{
return(
  <>
<label>
      Name:
       <input type="text" name="name" onChange={handleChange} value={name}/>
         </label>
          <label>
           Number:
           <input type="text" name="number" onChange={handleChange} value={number}/>
             </label>
         <button type="submit">Add contacts</button>
  </>
)
}

export default ContactForm