export const ContactItem = ({ item }) => {
  return (
    <li>
      {item.name}: {item.number}
    </li>
  );
};
