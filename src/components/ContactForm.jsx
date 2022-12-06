import { Form, Input, InputWrap, Label } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label>Name</Label>
      </InputWrap>
      <InputWrap>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Label>Number</Label>
      </InputWrap>
      <InputWrap>
        <Input type="submit" value="Add contact" />
      </InputWrap>
    </Form>
  );
};
