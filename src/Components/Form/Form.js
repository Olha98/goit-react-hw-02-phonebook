import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListPeople from './ListPeople/ListPeople';
import FillterForm from './FillterForm/FillterForm';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
    
}

getFilterValue = (e) => {
  this.setState({ filter: e.target.value })
}

 handleSubmit = (e) => {
  e.preventDefault();
  const {name, number} = this.state;
  this.addContact({ id: uuidv4(), name, number})
  this.setState({ name: '', number: '', filter: '' })
}

addContact=(contact)=>{
  this.setState(prevState =>({contacts:[...prevState.contacts,contact]}))
}


getInfo=()=>{
  const { contacts, filter } = this.state;

  if(filter){
    const filterArr = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    return filterArr
  }else{
   return contacts
  }

}

  render() {
    const {name, number, contacts, filter } = this.state;
    console.log("filter",filter)
    return (
        <>
            <form onSubmit={this.handleSubmit}>
              <h2>Phonebook</h2>
                <label>
                Name:
                    <input type="text" name="name" onChange={this.handleChange} value={name}/>
                </label>
                <label>
                Number:
                    <input type="text" name="number" onChange={this.handleChange} value={number}/>
                </label>
                <button type="submit">Add contacts</button>
                {/* <ListPeople getInfo={this.getInfo} addContact={this.addContact}/> */} 
                <FillterForm filter={filter} onChange={this.handleChange}/>
                {filter!==""&&<ListPeople contacts={this.getInfo()}/>} 
            </form>
       </>
    );
}
}

