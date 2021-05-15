import { HTMLProps } from 'react';
import { StyledInput } from './styles/Input.styled';

const Input: React.FC<HTMLProps<HTMLInputElement>> = ({ onChange, value }) => {
  return <StyledInput value={value} onChange={onChange} />;
};

export default Input;
