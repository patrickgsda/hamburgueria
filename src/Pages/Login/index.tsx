import React from "react";
import { Redirect } from "react-router";
import { schemaLogin } from "../../components/Validation";
import { useAuth } from "../../Providers/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm } from "./styles";
import { Link } from "react-router-dom";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { token, signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schemaLogin) });

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmitForm = (data: UserData) => {
    signIn(data);
  };

  return (
    <>
      {/* <Header /> */}
      <Container>
        <ContainerForm>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              placeholder="E-mail"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message}
            />
            <Input
              placeholder="Senha"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message}
            />
            <Button>Acessar</Button>
            <p>
              Não possui um cadastro?{" "}
              <Link to="/register">faça seu cadastro</Link>
            </p>
          </form>
        </ContainerForm>
      </Container>
    </>
  );
};
export default Login;
