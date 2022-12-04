import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ],
    }));
  };

  changeFilter = value => {
    this.setState({ filter: value });
  };

  contactsWithFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.filter} onChange={this.changeFilter} />
        {this.state.contacts.length > 0 && (
          <ContactList items={this.contactsWithFilter()} />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
