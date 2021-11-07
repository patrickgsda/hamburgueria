import { createContext, useContext, useState, ReactNode } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

interface AuthProps {
  children: ReactNode;
}

interface UserProps {
  email: string;
  password: string;
}

interface AuthProviderData {
  authToken: string;

  signIn: (userData: UserProps) => void;

  Logout: () => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const signIn = (userData: UserProps) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        setAuthToken(response.data.token);

        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Logout = () => {
    localStorage.clear();

    setAuthToken("");

    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authToken, Logout, signIn }}
      {...children}
    ></AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
