import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface User {
  email: string;
  id: number;
  username: string;
  age?: number;
}

interface AuthProviderData {
  token: string;
  user: User[];
  signIn: (data: UserData) => void;

  Logout: () => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [user, setUser] = useState<User[]>(
    () => JSON.parse(localStorage.getItem("@user:hamburgueria2.0")!) || []
  );

  const [token, setToken] = useState<string>(
    () => JSON.parse(localStorage.getItem("@token:hamburgueria2.0")!) || ""
  );

  const signIn = (data: UserData) => {
    api
      .post("/signin", data)
      .then((response) => {
        localStorage.setItem(
          "@token:hamburgueria2.0",
          JSON.stringify(response.data.accessToken)
        );
        setToken(response.data.accessToken);
        localStorage.setItem(
          "@user:hamburgueria2.0",
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);

        toast.success("Login efetuado com sucesso!");
        setTimeout(() => history.push("/"), 700);
      })
      .catch((error) => toast.error("E-mail ou senha incorretos!"));
  };

  const Logout = () => {
    localStorage.clear();
    setToken("");
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, signIn, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
