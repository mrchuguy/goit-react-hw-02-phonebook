export const ContactItem = ({ item, onDelete }) => {
  return (
    <li>
      {item.name}: {item.number}
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
