import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
