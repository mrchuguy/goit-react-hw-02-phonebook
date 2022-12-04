import { Input, Title } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </>
  );
};
