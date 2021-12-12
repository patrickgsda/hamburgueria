import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register?: any;
  name?: string;
  error?: string;
  width?: string;
  type?: string;
  inputMask?: boolean;
}

const Input = ({
  type,
  placeholder,
  name,
  register,
  error,
  width,
  inputMask,
  ...rest
}: InputProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container {...rest} style={{ width: width }}>
      <div className="input">
        <input
          type={type === "password" ? (open ? "text" : "password") : type}
          error={error}
          {...register(name)}
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" &&
          (open ? (
            <RiEyeCloseLine onClick={() => setOpen(false)} />
          ) : (
            <RiEyeFill onClick={() => setOpen(true)} />
          ))}
      </div>
      <span>{error}</span>
    </Container>
  );
};

export default Input;
