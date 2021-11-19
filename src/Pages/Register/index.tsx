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
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  oab: string;
  state: string;
  username: string;
}

const Register = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const { token } = useAuth();

  const createUser = (data: UserData) => {
    const newData = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      oab: data.oab,
      state: data.state,
      username: data.username,
    };

    api
      .post("/signup", newData)
      .then((response) => {
        console.log(response.data.user);
        toast.success("Conta criada");
        setTimeout(() => history.push("/login"), 2000);
      })
      .catch((error) => toast.error(error.response.data));
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      {/* <Header /> */}
      <Container>
        <FormContainer>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(createUser)}>
            <Input
              placeholder="OAB"
              name="oab"
              type="number"
              width="47%"
              register={register}
              error={errors.oab?.message}
            />
            <Input
              type="text"
              name="state"
              width="47%"
              placeholder="Estado"
              register={register}
              error={errors.state?.message}
            />
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
              placeholder="Telefone"
              name="phone"
              type="number"
              register={register}
              error={errors.phone?.message}
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
              Já possui um cadastro? <Link to="/login">faça seu login</Link>
            </p>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
