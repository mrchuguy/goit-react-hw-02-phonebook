import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkNameInContacts = nameValue => {
    return this.state.contacts.some(
      ({ name }) => name.toLowerCase() === nameValue.toLowerCase()
    );
  };

  doOnSubmit = event => {
    const { name, number } = event.target.elements;
    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    if (this.checkNameInContacts(name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      event.target.reset();
    }
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  contactsWithFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  contactDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.doOnSubmit} />
        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter value={this.filter} onChange={this.changeFilter} />

            <ContactList
              items={this.contactsWithFilter()}
              onDelete={this.contactDelete}
            />
          </>
        )}
        <GlobalStyle />
      </div>
    );
  }
}
