import { Container, FormContainer } from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../components/Validation";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";
// import Header from "../../components/Header";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const { token, registerUser } = useAuth();

  // const createUser = (data: UserData) => {
  //   const newData = {
  //     email: data.email,
  //     password: data.password,
  //     username: data.username,
  //   };

  //   api
  //     .post("/register", newData)
  //     .then((response) => {
  //       console.log(response.data.user);
  //       toast.success("Conta criada");
  //       setTimeout(() => history.push("/login"), 2000);
  //     })
  //     .catch((error) => toast.error(error.response.data));
  // };

  const onSubmitForm = (data: UserData) => {
    console.log('eae porra')
    registerUser(data);
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              placeholder="Nome de Usuário"
              name="username"
              type="text"
              maxLength={15}
              register={register}
              error={errors.username?.message}
            />
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
            <Input
              placeholder="Confirmar Senha"
              name="confirmPassword"
              type="password"
              register={register}
              error={errors.confirmPassword?.message}
            />
            <Button type="submit">Cadastrar</Button>
            <p>
              Já possui um cadastro? <Link to="/">faça seu login</Link>
            </p>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
