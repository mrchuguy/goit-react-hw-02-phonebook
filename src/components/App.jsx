import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <GlobalStyle />
      </div>
    );
  }
}
