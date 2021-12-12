import React from "react";
import { FiLogOut } from "react-icons/fi";
import { ConatinerIcons, Container, ContainerTitle } from "./styles";
import Cart from "../Cart";
import { useCart } from "../../Providers/Cart";
import { useAuth } from "../../Providers/Auth";

const Header = () => {
  const { cart } = useCart();
  const { Logout } = useAuth();
  return (
    <Container>
      <ContainerTitle>
        <h1>Burguer</h1>
        <h3>Kenzie</h3>
      </ContainerTitle>
      <ConatinerIcons>
        <div className="cart">
          <Cart>
            <span>{cart.length}</span>
          </Cart>
        </div>
        <p>
          <FiLogOut onClick={() => Logout()} />
        </p>
      </ConatinerIcons>
    </Container>
  );
};

export default Header;
