import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  register?: any;
  name?: string;
  error?: string;
}

const Input = ({ placeholder, name, register, error, ...rest }: InputProps) => {
  return (
    <Container>
      <input
        error={error}
        {...register(name)}
        placeholder={placeholder}
        {...rest}
      />
      <span>{error}</span>
    </Container>
  );
};

export default Input;
