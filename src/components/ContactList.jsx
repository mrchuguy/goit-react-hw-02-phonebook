import { ContactItem } from './ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </List>
  );
};
